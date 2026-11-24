# Blog: publicação e descoberta

O build gera HTML completo e metadados próprios para artigos, categorias, autora e paginação; gera também `/sitemap.xml` e `/rss.xml`. A aplicação interativa recebe o mesmo conteúdo inicial. Não há tratamento diferente para robôs.

## Publicação

1. Revisar fontes primárias, autoria e data original antes de publicar no Sanity. A presença de Patrícia no cadastro de autora não comprova que escreveu ou revisou cada texto.
2. Manter `VITE_SANITY_PROJECT_ID` e `VITE_SANITY_DATASET` iguais aos usados pelo site. Com CMS configurado, falha de leitura interrompe o build, evitando substituir conteúdo atual por uma cópia local antiga. Sem configuração, usam-se os dados locais.
3. Executar novo deploy após publicar ou atualizar conteúdo no Sanity. HTML, RSS e sitemap são fotografias do momento do build. O responsável pelo ambiente deve configurar um webhook de publicação do Sanity para o deploy, se ainda não existir; essa integração não foi criada por esta alteração.
4. `publishedAt` é a data original. Usar `modifiedAt` apenas para alteração editorial relevante; a atualização passa a aparecer na página e nos dados estruturados. Datas de modificação desconhecidas são omitidas do sitemap, sem usar a data do deploy.

## Validação antes de produção

```sh
npm ci
npm test
npm run check:api
npm run test:blog:output
```

O último comando compila e verifica conteúdo sem execução de JavaScript, canonical, Open Graph, dados estruturados, CSS, links internos, paginação e XML. Para validar o CMS, disponibilizar as mesmas variáveis públicas do ambiente de produção.

No preview Vercel, conferir `/blog`, `/blog/pagina/2`, uma categoria, a autora, um artigo, `/rss.xml` e `/sitemap.xml`. Verificar que `cleanUrls` entrega os arquivos HTML antes do fallback da aplicação e que os quatro endereços antigos redirecionam. Conferir também início, páginas de serviços e API; a mudança de URL limpa precisa dessa validação no provedor. Fazer inspeção visual em desktop e celular. Este documento não afirma que essa validação ou o deploy já ocorreu.

## Google e distribuição

- Search Console: verificar propriedade/acesso, enviar o sitemap e inspecionar artigos recentes. Conferir canonical selecionado pelo Google, HTML renderizado, indexação e métricas. HTML gerado não garante indexação ou posição.
- Google Notícias: a consideração é automática segundo as políticas do Google; não existe envio de RSS pelo Publisher Center para obter inclusão. Não transformar todos os guias em `NewsArticle`. Um sitemap específico de notícias deve incluir somente notícias reais com publicação original nas últimas 48 horas; não foi criado nesta alteração porque a classificação editorial ainda precisa ser validada.
- Discover: preservar imagens grandes e relevantes e `max-image-preview:large`, já existente. Sem promessa de distribuição.
- RSS: feed público de títulos, resumos, links e datas originais, destinado a leitores e integrações. Não equivale a inscrição em um veículo ou aprovação do Google.

Referências: [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [Google Notícias](https://support.google.com/news/publisher-center/answer/15898024?hl=pt-BR), [Discover](https://developers.google.com/search/docs/appearance/google-discover), [datas no sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [sitemap de notícias](https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap).
