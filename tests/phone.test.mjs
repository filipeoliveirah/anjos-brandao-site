import test from 'node:test'
import assert from 'node:assert/strict'
import { build } from 'esbuild'

const compiled = await build({
  stdin: { contents: "export { formatBRPhone, validatePhone } from './src/components/ui/LeadForm/LeadForm.tsx'", resolveDir: process.cwd(), loader: 'tsx' },
  bundle: true, platform: 'node', format: 'esm', write: false, outdir: 'test-build', jsx: 'automatic',
  loader: { '.css': 'empty' }, logLevel: 'silent',
})
const { formatBRPhone, validatePhone } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString('base64')}`)

test('Brazilian mobile and fixed numbers retain all digits, with and without country code', () => {
  for (const number of ['71996150067', '7132345678', '1162345678', '55996150067', '5532345678']) {
    for (const input of [number, formatBRPhone(number), `+55${number}`, `+55 ${formatBRPhone(number)}`, `55${number}`]) {
      const formatted = formatBRPhone(input)
      assert.equal(validatePhone(formatted), null, input)
      assert.equal(formatted.replace(/\D/g, ''), input.replace(/\D/g, ''), input)
      assert.equal(formatBRPhone(formatted), formatted, 'formatting is stable')
    }
  }
})

test('typing and deleting an international or national phone never drops a digit', () => {
  for (const input of ['71996150067', '+5571996150067', '5571996150067', '+557132345678', '55996150067']) {
    let value = ''
    let typed = ''
    for (const character of input) {
      typed += character
      value = formatBRPhone(value + character)
      assert.equal(value.replace(/\D/g, ''), typed.replace(/\D/g, ''))
    }
    assert.equal(validatePhone(value), null)
    for (let attempts = 0; value && attempts < 50; attempts++) {
      const edited = value.slice(0, -1)
      value = formatBRPhone(edited)
      assert.equal(value.replace(/\D/g, ''), edited.replace(/\D/g, ''))
    }
    assert.equal(value, '')
  }
})

test('invalid, foreign, short and overlong input is rejected without silently losing digits', () => {
  for (const input of ['', '+', '+5', '+55', '7199615006', '+557199615006', '713234567',
    '71896150067', '0132345678', '+1 71996150067', '+44 71996150067', '719961500678',
    '+55719961500678', '557199615006789', '71996150067 ramal 2', '71+996150067', '++5571996150067']) {
    const formatted = formatBRPhone(input)
    assert.notEqual(validatePhone(formatted), null, input)
    assert.equal(formatted.replace(/\D/g, ''), input.replace(/\D/g, ''), input)
  }
})
