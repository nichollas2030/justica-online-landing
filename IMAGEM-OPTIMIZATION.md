# Guia de Otimização de Imagens - Hero Background

## 📁 Estrutura de Arquivos

Para adicionar a imagem de fundo hero-bg, coloque os arquivos na seguinte estrutura:

```
src/assets/images/backgrounds/
├── hero-bg.jpg     # Imagem original (fallback)
├── hero-bg.webp    # Formato WebP (recomendado)
├── hero-bg.avif    # Formato AVIF (mais moderno)
└── hero-bg.svg     # SVG temporário (atual)
```

## 🔧 Formatos Recomendados

### 1. **AVIF** (Primeira Prioridade)
- **Compressão**: Até 50% menor que JPEG
- **Qualidade**: Superior ao WebP
- **Comando**: `npx @squoosh/cli --avif '{"cqLevel":25,"speed":6}' hero-bg.jpg`

### 2. **WebP** (Segunda Prioridade)
- **Compressão**: 25-30% menor que JPEG
- **Suporte**: Amplo (>95% dos browsers)
- **Comando**: `npx @squoosh/cli --webp '{"quality":80,"target_size":0,"target_PSNR":0,"method":4,"sns_strength":50,"filter_strength":60,"filter_sharpness":0,"filter_type":1,"partitions":0,"segments":4,"pass":1,"show_compressed":0,"preprocessing":0,"autofilter":0,"partition_limit":0,"alpha_compression":1,"alpha_filtering":1,"alpha_quality":100,"lossless":0,"exact":0,"image_hint":0,"emulate_jpeg_size":0,"thread_level":0,"low_memory":0,"near_lossless":100,"use_delta_palette":0,"use_sharp_yuv":0}' hero-bg.jpg`

### 3. **JPEG** (Fallback)
- **Otimização**: `npx @squoosh/cli --mozjpeg '{"quality":85,"baseline":false,"arithmetic":false,"progressive":true,"optimize_coding":true,"smoothing":0,"color_space":3,"quant_table":3,"trellis_multipass":false,"trellis_opt_zero":false,"trellis_opt_table":false,"trellis_loops":1,"auto_subsample":true,"chroma_subsample":2,"separate_chroma_quality":false,"chroma_quality":75}' hero-bg.jpg`

## ⚡ Scripts de Otimização

### Instalação das ferramentas:
```bash
npm install -g @squoosh/cli
# ou
npm install -D @squoosh/cli
```

### Script completo de otimização:
```bash
# 1. Otimizar para AVIF
npx @squoosh/cli --avif '{"cqLevel":25,"speed":6}' src/assets/images/backgrounds/hero-bg.jpg

# 2. Otimizar para WebP
npx @squoosh/cli --webp '{"quality":80}' src/assets/images/backgrounds/hero-bg.jpg

# 3. Otimizar JPEG original
npx @squoosh/cli --mozjpeg '{"quality":85,"progressive":true}' src/assets/images/backgrounds/hero-bg.jpg
```

## 📱 Especificações Técnicas

### Dimensões Recomendadas:
- **Desktop**: 1920x1080px ou 2560x1440px
- **Mobile**: 1080x1920px (versão portrait opcional)
- **Aspect Ratio**: 16:9 para melhor compatibilidade

### Tamanhos de Arquivo Alvo:
- **AVIF**: <150KB
- **WebP**: <200KB  
- **JPEG**: <300KB

### Qualidade Recomendada:
- **AVIF**: CQ Level 25-30
- **WebP**: Quality 75-85
- **JPEG**: Quality 80-90

## 🎨 Características da Imagem Ideal

### Composição:
- ✅ Escritório moderno e profissional
- ✅ Ambiente corporativo limpo
- ✅ Boa iluminação natural
- ✅ Espaço para sobreposição de texto

### Cores:
- ✅ Tons azuis/cinza que harmonizem com a paleta do site
- ✅ Contraste adequado para legibilidade do texto branco
- ✅ Evitar cores muito saturadas ou contrastantes

### Detalhes Técnicos:
- ✅ Alta resolução (mínimo 1920px de largura)
- ✅ Baixo ruído/grão
- ✅ Boa compressão sem perda significativa de qualidade
- ✅ Elementos visuais que não competem com o texto

## 🔄 Como Substituir

1. **Adicionar os arquivos** na pasta `src/assets/images/backgrounds/`
2. **Atualizar as referências** em `src/assets/images/placeholders.ts`
3. **Testar a performance** com DevTools
4. **Verificar a responsividade** em diferentes dispositivos

O sistema irá automaticamente:
- 🔍 Detectar o melhor formato suportado pelo browser
- ⚡ Carregar com lazy loading otimizado
- 🎯 Aplicar o fallback em caso de erro
- 📱 Adaptar para dispositivos móveis

## 📊 Monitoramento

Use as ferramentas do DevTools para verificar:
- **Network**: Tamanho e tempo de carregamento
- **Performance**: Impact no LCP (Largest Contentful Paint)
- **Lighthouse**: Score de performance
- **Console**: Verificar se há erros de carregamento
