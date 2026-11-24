import test from 'node:test'
import assert from 'node:assert/strict'
import { JSDOM } from 'jsdom'
import { build } from 'esbuild'
import fs from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

test('blog URL navigation, reload state, categories and browser history remain consistent', async (t) => {
  const dom = new JSDOM('<head><link rel="canonical" href="https://www.anjosbrandao.eco.br/"></head><body><div id="root"></div></body>', { url: 'https://www.anjosbrandao.eco.br/blog/pagina/2' })
  Object.assign(globalThis, { window: dom.window, document: dom.window.document, HTMLElement: dom.window.HTMLElement, MutationObserver: dom.window.MutationObserver, IS_REACT_ACT_ENVIRONMENT: true })
  Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true })
  globalThis.IntersectionObserver = class { observe() {} disconnect() {} }
  window.scrollTo = () => {}
  const channels = []
  const Channel = globalThis.MessageChannel
  globalThis.MessageChannel = class extends Channel { constructor() { super(); channels.push(this) } }
  const compiled = await build({
    stdin: { contents: "export {default as App} from './src/App.tsx'; export {INITIAL_POSTS, INITIAL_CATEGORIES} from './src/data/blog.ts'; export {createRoot} from 'react-dom/client'; export {createElement, act} from 'react';", resolveDir: process.cwd(), loader: 'tsx' },
    bundle: true, packages: 'external', platform: 'node', format: 'esm', write: false, outdir: 'test-build', jsx: 'automatic',
    define: { 'import.meta.env': '{}' }, loader: { '.css': 'empty', '.module.css': 'empty' }, logLevel: 'silent',
  })
  await fs.mkdir('node_modules/.cache', { recursive: true })
  const testBundle = 'node_modules/.cache/blog-navigation.mjs'
  await fs.writeFile(testBundle, compiled.outputFiles[0].text)
  const { App, INITIAL_POSTS, INITIAL_CATEGORIES, createRoot, createElement, act } = await import(pathToFileURL(`${process.cwd()}/${testBundle}`).href)
  const root = createRoot(document.getElementById('root'))
  t.after(async () => {
    await act(() => root.unmount())
    await fs.unlink(testBundle)
    dom.window.close()
    for (const channel of channels) { channel.port1.close(); channel.port2.close() }
  })
  await act(() => root.render(createElement(App, { initialData: { pathname: '/blog/pagina/2', posts: INITIAL_POSTS, categories: INITIAL_CATEGORIES, post: null } })))
  const click = async (selector) => {
    const link = document.querySelector(selector)
    assert.ok(link, selector)
    await act(() => link.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true, button: 0 })))
  }
  assert.match(document.title, /Página 2/)
  assert.equal(document.querySelector('[aria-current="page"][aria-label="Ir para a página 2"]').tagName, 'A')
  await click('a[aria-label="Próxima página"]')
  assert.equal(window.location.pathname, '/blog/pagina/3')
  assert.match(document.title, /Página 3/)
  assert.equal(document.querySelector('link[rel=canonical]').href, 'https://www.anjosbrandao.eco.br/blog/pagina/3')
  await click('a[href="/blog/categoria/licenciamento-ambiental"]')
  assert.equal(document.querySelector('h1').textContent, 'Licenciamento Ambiental')
  assert.equal(document.querySelector('[aria-current="page"][aria-label="Ir para a página 1"]').textContent, '1')
  await act(() => { window.history.pushState({}, '', '/blog/pagina/2'); window.dispatchEvent(new window.PopStateEvent('popstate')) })
  assert.match(document.title, /Página 2/)
  assert.equal(document.querySelectorAll('a[aria-label^="Ler artigo:"]').length, 6)
})
