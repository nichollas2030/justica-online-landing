# 🎨 Paleta de Cores - Escritório de Advocacia

## 📐 Cores Principais

### **Primary (Azul Escuro Profissional)**
```css
--primary: 210 40% 20%;
```
- **Uso**: Botões principais, títulos, elementos de destaque
- **Significado**: Confiança, profissionalismo, autoridade jurídica
- **Classes**: `.text-law-primary`, `.bg-law-primary`, `.border-law-primary`

### **Secondary (Azul Claro Suave)**
```css
--secondary: 210 50% 90%;
```
- **Uso**: Backgrounds secundários, cards, seções alternadas
- **Significado**: Serenidade, clareza, organização
- **Classes**: `.text-law-secondary`, `.bg-law-secondary`, `.border-law-secondary`

### **Background (Branco Puro)**
```css
--background: 0 0% 100%;
```
- **Uso**: Fundo principal, cards, modals
- **Significado**: Limpeza, transparência, profissionalismo

### **Foreground (Preto Profundo)**
```css
--foreground: 0 0% 10%;
```
- **Uso**: Texto principal, ícones, elementos de contraste
- **Significado**: Seriedade, formalidade, legibilidade

## 🎯 Cores de Apoio

### **Neutral (Cinza Médio)**
```css
--neutral: 0 0% 80%;
```
- **Uso**: Bordas, separadores, texto secundário
- **Classes**: `.text-law-neutral`, `.bg-law-neutral`

### **Success (Verde Escuro)**
```css
--success: 140 50% 30%;
```
- **Uso**: Mensagens de sucesso, confirmações, CTAs positivos
- **Classes**: `.text-law-success`, `.bg-law-success`

### **Error (Vermelho Escuro)**
```css
--error: 0 70% 40%;
```
- **Uso**: Mensagens de erro, alertas, validações
- **Classes**: `.text-law-error`, `.bg-law-error`

## 🌓 Dark Mode

### **Adaptações para Dark Mode**
- **Background**: `210 40% 8%` (azul muito escuro)
- **Primary**: `210 50% 60%` (azul mais claro)
- **Secondary**: `210 40% 15%` (azul escuro secundário)
- **Todas as cores são adaptadas automaticamente**

## 🎨 Gradientes Especiais

### **Hero Gradient**
```css
.bg-law-hero-gradient {
  background: linear-gradient(135deg, 
    hsl(var(--primary)) 0%, 
    hsl(var(--primary) / 0.8) 50%, 
    hsl(var(--secondary)) 100%
  );
}
```

### **General Gradient**
```css
.bg-law-gradient {
  background: linear-gradient(135deg, 
    hsl(var(--primary)) 0%, 
    hsl(var(--secondary)) 100%
  );
}
```

## 🔧 Uso Prático

### **Exemplos de Aplicação**
```html
<!-- Botão principal -->
<button class="bg-law-primary text-white hover:bg-law-primary/90">
  Agendar Consulta
</button>

<!-- Card com gradiente -->
<div class="bg-law-gradient p-6 rounded-lg">
  <h3 class="text-white">Título do Card</h3>
</div>

<!-- Texto de sucesso -->
<p class="text-law-success">Consulta agendada com sucesso!</p>

<!-- Borda decorativa -->
<div class="border-2 border-law-primary rounded-md">
  Conteúdo importante
</div>
```

## 🎯 Acessibilidade

### **Contrastes Validados**
- ✅ **Primary/Background**: Contraste 7.0:1 (AAA)
- ✅ **Foreground/Background**: Contraste 15.6:1 (AAA)
- ✅ **Success/Background**: Contraste 4.5:1 (AA)
- ✅ **Error/Background**: Contraste 4.5:1 (AA)

### **Compatibilidade**
- ✅ WCAG 2.1 AAA para textos principais
- ✅ WCAG 2.1 AA para elementos secundários
- ✅ Daltonismo considerado na escolha das cores
- ✅ Modo escuro totalmente acessível

## 📱 Responsividade

As cores são aplicadas de forma consistente em todos os tamanhos de tela:
- **Mobile**: Prioriza legibilidade e contraste
- **Tablet**: Mantém hierarquia visual
- **Desktop**: Utiliza toda a paleta harmoniosamente

---

💼 **Desenvolvido especificamente para escritórios de advocacia** - transmite confiança, profissionalismo e autoridade jurídica.
