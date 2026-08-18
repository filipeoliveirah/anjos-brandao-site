# Sanity Studio — Anjos Brandão Soluções Ambientais

Este diretório contém a estrutura de schemas e configurações do **Sanity Studio** para gerenciamento de conteúdo do Blog da Anjos Brandão.

## 🚀 Como Iniciar / Fazer Deploy do Sanity Studio

### 1. Criar ou Vincular um Projeto Sanity
Se você ainda não criou o projeto no Sanity:
```bash
# Faça login na CLI do Sanity (se necessário)
npx sanity login

# Inicialize ou vincule o projeto
npx sanity init
```

### 2. Configurar Variáveis de Ambiente
No front-end Vite (`.env.local` na raiz do site):
```env
VITE_SANITY_PROJECT_ID=seu_project_id_aqui
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-03-01
```

### 3. Rodar o Studio Localmente
```bash
cd studio
npx sanity dev
```
O painel ficará disponível em `http://localhost:3333`.

### 4. Fazer Deploy do Studio (Hospedagem Gratuita na Sanity)
```bash
cd studio
npx sanity deploy
```
Você escolherá um subdomínio como `anjosbrandao.sanity.studio`.
A equipe de marketing e especialistas técnicos poderão publicar e gerenciar artigos de qualquer lugar através desse link!

---

## 🗂️ Schemas Disponíveis
- **`post`**: Artigos técnicos completos com imagem de capa, categorias, autor, tempo de leitura, portable text rico e campos dedicados de SEO.
- **`author`**: Especialistas e consultores com biografia, foto e LinkedIn.
- **`category`**: Temas como Licenciamento, PGRS, ASV, Fauna e Flora, ESG, etc.
- **`blockContent`**: Editor rico com suporte a cabeçalhos H2/H3/H4, citações, imagens internas com legenda, listas e callouts informativos/legais.
- **`seo`**: Campos de meta title, meta description, share image (Open Graph) e tags.
