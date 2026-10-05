import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('🔄 Montando generate-rich-blog-posts.mjs com todos os 20 artigos de alta densidade...')

const currentFilePath = path.resolve(__dirname, './generate-rich-blog-posts.mjs')
const currentContent = fs.readFileSync(currentFilePath, 'utf-8')

// Extrair o cabeçalho e os artigos 1 a 7 (até antes de // ==========================================\n  // ARTIGO 8)
const markerArtigo8 = "  // ==========================================\n  // ARTIGO 8:"
const headerAndPosts1To7 = currentContent.substring(0, currentContent.indexOf(markerArtigo8)).trimEnd()

// Extrair o bloco de ordenação alternada (a partir de // ==========================================\n// ORDENAÇÃO ALTERNADA)
const markerAlternating = "// ==========================================\n// ORDENAÇÃO ALTERNADA:"
const alternatingBlock = currentContent.substring(currentContent.indexOf(markerAlternating))

// Novo cabeçalho com imports dos módulos 8-20
const importsBlock = `import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { POST_8, POST_9, POST_10 } from './posts-8-to-10.mjs'
import { POST_11, POST_12, POST_13, POST_14 } from './posts-11-to-14.mjs'
import { POST_15, POST_16, POST_17 } from './posts-15-to-17.mjs'
import { POST_18, POST_19, POST_20 } from './posts-18-to-20.mjs'
`

// Substituir os primeiros imports do headerAndPosts1To7
const codeWithoutOldImports = headerAndPosts1To7.replace(
  /^import fs from 'fs'[\s\S]*?const __dirname = path\.dirname\(__filename\)\n/m,
  ''
)

const newHeaderAndPosts1To7 = `${importsBlock}
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
${codeWithoutOldImports}`

const assembledContent = `${newHeaderAndPosts1To7}

  // ==========================================
  // ARTIGOS 8 a 20: 100% CLAUDE-SEO E ALTA DENSIDADE (≥ 1.000 PALAVRAS CADA)
  // ==========================================
  POST_8,
  POST_9,
  POST_10,
  POST_11,
  POST_12,
  POST_13,
  POST_14,
  POST_15,
  POST_16,
  POST_17,
  POST_18,
  POST_19,
  POST_20,
]

${alternatingBlock}
`

fs.writeFileSync(currentFilePath, assembledContent, 'utf-8')
console.log('✅ generate-rich-blog-posts.mjs montado com sucesso!')
