# 🏛️ Justiça Online - Landing Page

Landing page moderna e responsiva para escritório de advocacia, desenvolvida com React, TypeScript e Tailwind CSS.

![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## 📋 Descrição

Site institucional completo para escritório de advocacia, oferecendo uma experiência moderna e profissional para clientes em busca de serviços jurídicos especializados. O projeto combina design elegante com funcionalidades práticas para conversão de leads.

## ✨ Funcionalidades

### 🎯 **Seções Principais**
- **Hero Section** - Apresentação impactante com imagem de fundo personalizada
- **Serviços** - Catálogo completo de especialidades jurídicas
- **Sobre** - Histórico e credenciais do escritório
- **Depoimentos** - Feedback de clientes satisfeitos
- **Contato** - Formulário integrado e informações de contato

### 🚀 **Recursos Interativos**
- **WhatsApp Flutuante** - Botão animado com link direto (ícone oficial)
- **Formulário de Contato** - Validação em tempo real
- **Navegação Suave** - Scroll animado entre seções
- **Back to Top** - Botão de retorno ao topo
- **Animações CSS** - Transições e efeitos visuais

### 📱 **Experiência do Usuário**
- **Design Responsivo** - Otimizado para mobile, tablet e desktop
- **Performance** - Carregamento rápido e otimizado
- **Acessibilidade** - Compatível com leitores de tela
- **SEO Ready** - Estrutura otimizada para motores de busca

## 🛠️ Arquitetura Técnica

### **Stack Principal**
```bash
├── React 18.x           # Framework principal
├── TypeScript 5.x       # Tipagem estática
├── Vite 5.x            # Build tool e dev server
├── Tailwind CSS 3.x    # Framework CSS utility-first
└── Shadcn/ui           # Biblioteca de componentes
```

### **Estrutura de Componentes**
```
src/
├── components/
│   ├── Header.tsx              # Navegação principal
│   ├── HeroSection.tsx         # Seção hero com background
│   ├── ServicesSection.tsx     # Catálogo de serviços
│   ├── AboutSection.tsx        # Informações do escritório
│   ├── TestimonialsSection.tsx # Depoimentos de clientes
│   ├── ContactSection.tsx      # Formulário de contato
│   ├── Footer.tsx              # Rodapé institucional
│   ├── WhatsAppButton.tsx      # Botão flutuante do WhatsApp
│   ├── BackToTopButton.tsx     # Botão de retorno ao topo
│   └── ui/                     # Componentes base (Shadcn/ui)
├── hooks/                      # Hooks customizados
├── lib/                        # Utilitários e configurações
├── pages/                      # Páginas da aplicação
└── assets/                     # Recursos estáticos
    └── images/
        └── backgrounds/        # Imagens de fundo
```

### **Configuração de Estilos**
```css
/* Paleta de Cores */
--primary: 210 100% 35%         /* Azul institucional */
--secondary: 210 40% 96.1%      /* Azul claro */
--background: 0 0% 100%         /* Branco */
--foreground: 222.2 84% 4.9%    /* Texto escuro */
```

## 🎨 Design System

### **Componentes UI**
- **Botões** - Variações primary, secondary, outline
- **Cards** - Layout para serviços e depoimentos
- **Formulários** - Inputs, selects e textareas estilizados
- **Navegação** - Header responsivo com menu mobile
- **Overlays** - Gradientes harmoniosos com a paleta

### **Animações**
```css
/* Animações implementadas */
.animate-fade-in        # Entrada suave dos elementos
.hover-scale           # Efeito hover nos botões
.whatsapp-pulse        # Pulsação do botão WhatsApp
.whatsapp-float        # Flutuação sutil do WhatsApp
```

## 🚀 Como Executar

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/nichollas2030/justica-online-landing.git

# Entre no diretório
cd justica-online-landing

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### **Build para Produção**
```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura de Assets

### **Imagens de Fundo**
```
src/assets/images/backgrounds/
├── hero-bg.jpg                 # Imagem principal da hero section
├── placeholder-hero-background.svg # Placeholder para testes
└── README.md                   # Instruções de uso
```

### **Configuração de Imagens**
```typescript
// Import automático via Vite
import heroBackground from "@/assets/images/backgrounds/hero-bg.jpg";

// Suporte a formatos: .jpg, .png, .webp, .svg
```

## 🔧 Configuração do WhatsApp

### **Personalização**
```typescript
// src/components/WhatsAppButton.tsx
const whatsappNumber = "5511987654321";  // Seu número
const message = "Olá! Gostaria de agendar uma consulta jurídica...";
```

### **Recursos do Botão**
- ✅ Ícone oficial do WhatsApp (SVG)
- ✅ Animações de pulsação e flutuação
- ✅ Tooltip informativo
- ✅ Cores oficiais do WhatsApp
- ✅ Link direto para conversa

## 📊 Performance

### **Otimizações Implementadas**
- **Code Splitting** - Carregamento sob demanda
- **Lazy Loading** - Imagens carregadas progressivamente
- **Minificação** - CSS e JS otimizados
- **Tree Shaking** - Remoção de código não utilizado
- **Asset Optimization** - Compressão de imagens

### **Métricas Alvo**
- Lighthouse Score: 90+
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Cumulative Layout Shift: < 0.1

## 🌐 Deploy

### **Opções de Deploy**
1. **Vercel** (Recomendado)
2. **Netlify** 
3. **GitHub Pages**
4. **Firebase Hosting**

### **Deploy Automático**
```bash
# Vercel CLI
npx vercel

# Ou conecte o repositório diretamente no painel
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🏢 Sobre o Projeto

Desenvolvido para escritórios de advocacia que buscam uma presença digital moderna e eficaz. O projeto combina as melhores práticas de desenvolvimento web com um design focado em conversão de leads.

### **Processo de Desenvolvimento**
O projeto foi desenvolvido seguindo metodologias ágeis e melhores práticas de engenharia de software:

1. **Análise de Requisitos** - Estudo do público-alvo e necessidades do negócio
2. **Design System** - Criação da identidade visual e componentes reutilizáveis
3. **Desenvolvimento Iterativo** - Implementação por módulos com testes contínuos
4. **Otimização** - Foco em performance e experiência do usuário
5. **Deploy e Monitoramento** - Publicação com métricas de qualidade

### **Contato do Desenvolvimento**
- **Repositório**: [justica-online-landing](https://github.com/nichollas2030/justica-online-landing)
- **Branch**: `develop`
- **Tecnologias**: React • TypeScript • Tailwind CSS • Vite
- **Desenvolvido**: 2024/2025

### **Metodologia de Desenvolvimento**
- ✅ Desenvolvimento componentizado e modular
- ✅ Padrões de código TypeScript rigorosos
- ✅ Design System consistente com Tailwind CSS
- ✅ Arquitetura escalável e manutenível
- ✅ Testes de qualidade e performance

---

⚖️ **Justiça Online** - Defendendo direitos com excelência digital
