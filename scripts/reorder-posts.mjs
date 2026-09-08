import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { RICH_POSTS } from './generate-rich-blog-posts.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 1. Cenário: post-10 (ESG Monumental)
// 2. Pessoa: post-1 (Engenheiros Licenciamento)
// 3. Cenário: post-8 (Viaduto Verde Fauna)
// 4. Pessoa: post-2 (PGRS Triagem)
// 5. Cenário: post-11 (Energia Renovável Subestação)
// 6. Pessoa: post-3 (Inventário Florestal Dendrometria)
// 7. Cenário: post-9 (Viveiro e Pavilhões Flora)
// 8. Pessoa: post-4 (Auditoria LO Reunião)
// 9. Cenário: post-12 (Passarela Pesquisa Florestal)
// 10. Pessoa: post-5 (Biólogos Resgate Fauna)
// 11. Cenário: post-13 (Complexo Reciclagem Concreto)
// 12. Pessoa: post-7 (Due Diligence Amostragem Solo)
// 13. Cenário: post-14 (Corredores Ecológicos Urbanos)
// 14. Pessoa: post-6 (MTR Resíduos Abrigo Técnico)

const desiredOrder = [
  'post-10', // Cenário (ESG)
  'post-1',  // Pessoa (Licenciamento)
  'post-8',  // Cenário (Fauna Viaduto)
  'post-2',  // Pessoa (PGRS)
  'post-11', // Cenário (Solar / Eólica)
  'post-3',  // Pessoa (Inventário Florestal)
  'post-9',  // Cenário (Flora Viveiro)
  'post-4',  // Pessoa (Renovação LO)
  'post-12', // Cenário (Manejo Passarela)
  'post-5',  // Pessoa (Resgate Fauna)
  'post-13', // Cenário (Economia Circular)
  'post-7',  // Pessoa (Due Diligence)
  'post-14', // Cenário (Corredores Urbanos)
  'post-6',  // Pessoa (MTR Resíduos)
]

// Distribuir datas decrescentes (do mais recente ao mais antigo) para refletir a ordem tanto no Sanity quanto no fallback
const baseDate = new Date('2026-09-08T12:00:00Z')

const postMap = new Map()
RICH_POSTS.forEach(p => postMap.set(p._id, p))

const reordered = desiredOrder.map((id, index) => {
  const post = postMap.get(id)
  if (!post) throw new Error(`Post ${id} não encontrado!`)
  
  // Subtrai dias para ordenação descrescente perfeita
  const postDate = new Date(baseDate.getTime() - index * 86400000 * 2)
  post.publishedAt = postDate.toISOString()
  if (index === 0) {
    post.featured = true
  } else {
    post.featured = false
  }
  return post
})

console.log('✨ Nova ordem alternada (Cenário / Paisagem ↔ Pessoas em Campo):')
reordered.forEach((p, i) => {
  const type = i % 2 === 0 ? '🏞️ CENÁRIO / PAISAGEM' : '👷 PESSOAS EM CAMPO'
  console.log(`${(i+1).toString().padStart(2, ' ')}. [${type}] ${p._id} - ${p.title.slice(0, 55)}... (${p.publishedAt.slice(0, 10)})`)
})

