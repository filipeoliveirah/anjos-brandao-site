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

// Autora de todos os artigos do blog (página em /blog/autores/patricia-brandao)
const DEFAULT_AUTHOR = {
  name: 'Patrícia Brandão',
  slug: 'patricia-brandao',
  role: 'Diretora Técnica · CRBio 122.212/08-D',
  bio: 'Patrícia Brandão é bióloga, gestora ambiental e pós-graduada em Ecologia e Biodiversidade. Na Anjos Brandão Soluções Ambientais, coordena o planejamento e o acompanhamento de projetos ambientais, unindo conhecimento técnico e orientação prática para ajudar empresas a organizar suas demandas e atender às exigências ambientais.',
  linkedin: 'https://www.linkedin.com/in/j%C3%A1rdina-brand%C3%A3o',
  avatarUrl: '/images/autores/patricia-brandao.webp',
}

export { p, h2, h3, bullet, callout, pLink, DEFAULT_AUTHOR }
