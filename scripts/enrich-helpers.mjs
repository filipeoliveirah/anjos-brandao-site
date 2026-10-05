import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('🚀 Iniciando expansão e aprofundamento textual de alta densidade técnica (Posts 8 a 20)...')

// Helper functions for block construction
function p(text) {
  return {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text }],
  }
}

function h2(text) {
  return {
    _type: 'block',
    style: 'h2',
    children: [{ _type: 'span', text }],
  }
}

function h3(text) {
  return {
    _type: 'block',
    style: 'h3',
    children: [{ _type: 'span', text }],
  }
}

function bullet(text) {
  return {
    _type: 'block',
    style: 'bullet',
    children: [{ _type: 'span', text }],
  }
}

function callout(type, title, text) {
  return {
    _type: 'callout',
    type,
    title,
    text,
  }
}

function pLink(segments) {
  const markDefs = []
  const children = []
  let linkIdx = 0

  for (const seg of segments) {
    const marks = []
    if (seg.strong) marks.push('strong')
    if (seg.link) {
      const key = `link_${linkIdx++}`
      markDefs.push({ _key: key, _type: 'link', href: seg.link })
      marks.push(key)
    }
    children.push({
      _type: 'span',
      text: seg.text,
      ...(marks.length > 0 ? { marks } : {}),
    })
  }

  return {
    _type: 'block',
    style: 'normal',
    ...(markDefs.length > 0 ? { markDefs } : {}),
    children,
  }
}

const DEFAULT_AUTHOR = {
  name: 'Coordenação Técnica Anjos Brandão',
  role: 'Equipe de Engenharia e Consultoria Ambiental',
  bio: 'Especialistas em coordenação ambiental integrada para construção civil, infraestrutura e indústria em toda a Bahia.',
  linkedin: 'https://www.linkedin.com/company/anjos-brandao-solucoes-ambientais',
}

export { p, h2, h3, bullet, callout, pLink, DEFAULT_AUTHOR }
