import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const blogPath = path.resolve(__dirname, '../src/data/blog.ts')
const content = fs.readFileSync(blogPath, 'utf8')

// Parse INITIAL_POSTS array by evaluating or regex
const postBlocks = content.split(/_id:\s*['"]post-/).slice(1)

for (let i = 0; i < postBlocks.length; i++) {
  const block = postBlocks[i]
  const titleMatch = block.match(/title:\s*['"](.*?)['"]/)
  const title = titleMatch ? titleMatch[1] : `Post ${i + 1}`
  
  const excerptMatch = block.match(/excerpt:\s*['"](.*?)['"]/)
  const excerpt = excerptMatch ? excerptMatch[1] : ''

  const metaTitleMatch = block.match(/metaTitle:\s*['"](.*?)['"]/)
  const metaDescMatch = block.match(/metaDescription:\s*['"](.*?)['"]/)

  const textMatches = block.match(/text:\s*['"]([\s\S]*?)['"]/g) || []
  const texts = textMatches.map(t => {
    return t.replace(/^text:\s*['"]/, '').replace(/['"]$/, '')
  })
  
  const allText = texts.join(' ')
  const words = allText.split(/\s+/).filter(Boolean).length
  
  console.log(`\n========================================`)
  console.log(`📌 Artigo ${i + 1}: "${title}"`)
  console.log(`- Contagem de palavras no corpo: ${words} palavras`)
  console.log(`- Meta Title: "${metaTitleMatch ? metaTitleMatch[1] : 'N/A'}" (${metaTitleMatch ? metaTitleMatch[1].length : 0} caracteres)`)
  console.log(`- Meta Description: "${metaDescMatch ? metaDescMatch[1] : 'N/A'}" (${metaDescMatch ? metaDescMatch[1].length : 0} caracteres)`)
}
