// Placeholder em base64 para carregamento rápido (1x1 pixel azul escuro)
export const heroPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23334155;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23475569;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23334155;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)' /%3E%3C/svg%3E";

// Função para gerar placeholder blur em CSS
export const generateBlurPlaceholder = (width: number = 1200, height: number = 800) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='5'/%3E%3C/filter%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23334155;stop-opacity:0.9' /%3E%3Cstop offset='25%25' style='stop-color:%23475569;stop-opacity:0.7' /%3E%3Cstop offset='75%25' style='stop-color:%23334155;stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%232563eb;stop-opacity:0.6' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)' filter='url(%23blur)' /%3E%3C/svg%3E`;
};

// URLs para diferentes formatos de imagem otimizados
export const heroImageSources = {
  avif: './src/assets/images/backgrounds/hero-bg.avif',
  webp: './src/assets/images/backgrounds/hero-bg.webp', 
  jpg: './src/assets/images/backgrounds/hero-bg.jpg',
  svg: './src/assets/images/backgrounds/hero-bg.svg', // SVG temporário
  fallback: './src/assets/images/backgrounds/hero-bg.svg' // Usando SVG como fallback
};
