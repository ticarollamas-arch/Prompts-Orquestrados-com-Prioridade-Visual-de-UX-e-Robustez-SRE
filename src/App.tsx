import React, { useState, useEffect } from "react";
import {
  Terminal,
  Shield,
  Activity,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Trash2,
  Search,
  Sparkles,
  Lock,
  AlertCircle,
  ExternalLink,
  User,
  Award,
  BookOpen,
  RotateCcw,
  Sliders,
  History,
  FileText,
  LogOut,
  Settings,
  Plus,
  HelpCircle,
  Globe,
  Coins,
  Layout,
  RefreshCw,
  Key,
  Code,
  Video,
  Image,
  Cpu,
  Zap,
  TrendingUp,
  Layers,
  Users,
  ArrowRight,
  Brain,
  Play
} from "lucide-react";
import { PromptHistoryItem, OrchestrationResponse, PortalSettings, NormalUser } from "./types";
import { motion, AnimatePresence } from "motion/react";
import SalesPage from "./components/SalesPage";

// For Markdown responses in the user area if needed
import ReactMarkdown from "react-markdown";

const CATEGORIES = [
  "Lojas & E-commerce",
  "Sites & Landing Pages",
  "Estruturas de Big Techs & SaaS",
  "Geradores de Imagens & Mídia",
  "Plataformas de Infoprodutos",
  "Automação & Processos",
  "Ideias Customizadas & Outros"
];

const PRESETS = [
  {
    label: "Criar Loja / E-commerce",
    text: "Preciso de uma arquitetura limpa de e-commerce de camisetas, integrando faturamento por PIX, split automático de comissões, banco Postgres e webhook de checkout.",
    category: "Lojas & E-commerce"
  },
  {
    label: "Gerador de Imagens IA",
    text: "Mapear um microserviço robusto integrado ao modelo Imagen ou Midjourney, com fila de processamento assíncrona baseada em Redis e armazenamento S3 para imagens prontas.",
    category: "Geradores de Imagens & Mídia"
  },
  {
    label: "Arquitetura Big Tech / SaaS",
    text: "Desenvolver uma arquitetura SaaS multi-tenant resiliente com total divisão lógica de bancos de dados dos assinantes, rate limiting e deploys replicados em Docker/SRE.",
    category: "Estruturas de Big Techs & SaaS"
  }
];

const visualPriorityBlock = `

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 PRIORIDADE VISUAL E ESTRUTURA OBRIGATÓRIA DO PRODUTO (DIRETRIZ DE UX E CONVERSÃO)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A aplicação deve SEMPRE ser construída seguindo RIGOROSAMENTE esta ordem obrigatória de prioridade:
1. Landing Page Premium (Design moderno, atrativo e focado em conversão)
2. Experiência Principal do Produto (O valor core da ferramenta)
3. Workspace / Editor / Ferramenta Principal (Onde o usuário interage e produz)
4. Responsividade Mobile Inteira (Visual polido e usabilidade perfeita em qualquer dispositivo)
5. Dashboard e Fluxo de Onboarding do Usuário
6. Painel Administrativo Global (Silencioso e discreto, em segundo plano)

O painel administrativo NUNCA deve ser a primeira interface apresentada, nem dominar visualmente o projeto.

━━━━━━━━━━━━━━━━━━━━
LANDING PAGE OBRIGATÓRIA E PREMIUM
━━━━━━━━━━━━━━━━━━━━
Toda plataforma ou SaaS gerado deve obrigatoriamente possuir uma Landing Page premium e moderna apresentada antes de qualquer login. O visual deve ser inspirado em Stripe, OpenAI, Framer, Gamma, Notion ou Linear e conter:
- Hero Section Cinematográfica: Headline forte e persuasiva, subheadline e duas chamadas de ação (CTAs).
- Mockup Visual do Produto: Uma seção exibindo a ferramenta real/interativa funcionando para engajamento instantâneo.
- Grade Bento de Benefícios: Features diagramadas com grids modernos e micro-sombras refinadas.
- pricing & faq: Seção de preços detalhada e painel interativo expansível de faq.
- Footer e SEO: Rápido gerenciador de metatags de SEO e links estruturados.

━━━━━━━━━━━━━━━━━━━━
RESPONSIVIDADE MOBILE-FIRST COMPLETA
━━━━━━━━━━━━━━━━━━━━
- No celular: todos os menus laterais viram drawers táteis, cartões empilham verticalmente (stacks), e todos os botões possuem área mínima de toque de 44px.
- Todos os elementos visuais de canvas e pré-visualizações se adaptam perfeitamente sem quebrar ou gerar overflows artificiais.

━━━━━━━━━━━━━━━━━━━━
PÁGINA DE LOGIN ELEGANTE
━━━━━━━━━━━━━━━━━━━━
Página de login minimalista, com ilustração, glow effects sutis e animações de transição suaves de 150ms.

━━━━━━━━━━━━━━━━━━━━
REGRA DE CONTROLE ABSOLUTA
━━━━━━━━━━━━━━━━━━━━
O foco principal é a conversão, o produto e a experiência de uso. O admin e logins existem em segundo plano para apoiar o negócio, nunca dominando a identidade principal.`;

const adminSystemBlock = `

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧱 SISTEMA UNIVERSAL DE ADMINISTRAÇÃO INTELIGENTE (AUTOMÁTICO)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REGRA ABSOLUTA: Existe APENAS UMA página de login para todos os usuários. Não criar login separado para admin.

FUNCIONAMENTO DO LOGIN ÚNICO:
1. Usuário comum faz login → vai para o Dashboard do usuário
2. Administrador faz login no MESMO formulário → o sistema reconhece o role "admin" no banco de dados → redireciona automaticamente para o Painel Administrativo.
3. Na interface do admin, existe um botão "Ver como usuário" para alternar entre as visões.

O painel do administrador DEVE conter obrigatoriamente:

SEÇÃO 1: GESTÃO DE USUÁRIOS
- Criar novos usuários manualmente (nome, email, senha)
- Editar dados de qualquer usuário
- Resetar senha de qualquer usuário
- Ativar/desativar contas
- Bloquear/desbloquear usuários
- Visualizar lista completa com email, status e data.

SEÇÃO 2: CONTROLE DE API
- Campo para inserir/chavear API Keys (OpenAI, Gemini, Anthropic, etc)
- Ativar/desativar APIs
- Visualizar consumo atual e custo em tempo real
- Fallback automático se a API principal falhar.

SEÇÃO 3: CONTROLE SEO GLOBAL
O admin pode editar TUDO que o site precisa para SEO:
- Meta Title (título que aparece no Google)
- Meta Description (descrição que aparece no Google)
- Keywords principais
- Open Graph (título e descrição para compartilhamento em redes: WhatsApp, Facebook, LinkedIn)
- Twitter Card (título e descrição para Twitter/X)
BOTÕES GERADORES AUTOMÁTICOS:
- Botão "Gerar robots.txt" → gera automaticamente o arquivo robots.txt otimizado.
- Botão "Gerar sitemap.xml" → gera automaticamente o sitemap do site.
- Botão "Gerar Meta Description" e "Gerar Keywords" → gera ideias através da IA.

SEÇÃO 4: CONTROLE VISUAL E BRANDING
Permite customizar as seguintes resoluções padronizadas de mídia sem programador:
- Nome do site/plataforma.
- Logo Principal: upload unificado de 512x512px (formato PNG/SVG).
- Favicon: upload unificado de 32x32px (formato ICO/PNG).
- Ícone de Compartilhamento: upload unificado de 256x256px (formato PNG).
- Banner OG (Open Graph): upload de 1200x630px (formato PNG/JPG).
- Cores principal/secundária (seletor de cores).
- Texto e links dinâmicos do rodapé (footer).

SEÇÃO 5: CONTROLE DE BOTÕES E LINKS
O admin pode trocar o destino de QUALQUER botão do site sem programar:
- Atribuir links de compra (Hotmart, Kiwify, Stripe, PerfectPay, Monetizze, etc).
- Link de WhatsApp e redes sociais.
Cada botão na interface possui um identificador único de indexação para facilitar localização no admin.

SEÇÃO 6: PIXELS E RASTREAMENTO (1-CLIQUE)
O admin pode ativar/desativar cada pixel simplesmente colando o ID:
- Facebook Pixel, Google Ads, TikTok Pixel, Google Analytics (GA4), LinkedIn Insight Tag, Hotjar.
- Campo de scripts de texto livre customizados para injeção automática na tag <head>.

SEÇÃO 7: SISTEMA DE MÍDIA PADRONIZADO
Upload centralizado com validação de formato, tamanho (max 2MB), crop/redimensionamento e otimização automática.

REGRAS DE EXECUÇÃO:
1. O painel deve ser visualmente impecável e intuitivo, estilo Notion/Linear (não um dashboard técnico feio ou logs crus).
2. Sem exibição direta de códigos fonte no painel admin.
3. Se for uma ferramenta 100% client side simples sem login, omita este painel administrável. Se houver login/SaaS/blog, implemente de forma integral.`;

const generateLocalFallbackClient = (prompt: string, category: string, ethicsEnabled: boolean, robustnessEnabled: boolean, orchestrationFocus: string = "visual_product", adminSystemEnabled: boolean = true, visualPriorityEnabled: boolean = true) => {
  const normFocus = orchestrationFocus.toLowerCase().trim();

  // Mode 1: VISUAL PRODUCT MODE (Gamma/Notion/CanvaDocs style)
  if (normFocus === "visual_product" || normFocus === "product") {
    const orchestratedPrompt = `# 🎭 ULTRA PRODUCT ORCHESTRATOR - VISUAL PRODUCT MODE: ${category}

### 1. **[Contexto Executivo & Visão de Produto]**
Você é um Designer de Produto Sênior e Lead UI/UX inspirado em plataformas visuais excepcionais como **Gamma.app, Notion AI, Framer e Canva Docs**. Sua principal missão é conceber e dar vida ao produto digital especificado abaixo, garantindo uma interface interativa impressionante, fluidez visual impecável e foco total no usuário final.

### 2. **[Requisito Principal do Usuário]**
Desenhar fluxos intuitivos, design system e telas para:
> "${prompt}"

### 3. **[Diretrizes Críticas de Usabilidade (Sem Poluição Técnica)]**
- **Sem Telas de Código**: A interface apresentada nunca deve parecer uma documentação técnica, terminal de SRE ou painel de logs. Ela deve focar inteiramente em blocos de conteúdo e usabilidade nobre.
- **Preview em Tempo Real / Capas Dinâmicas**: Para ebooks, slides e geradores de conteúdo, implemente abas de visualização instantânea responsivas com editor visual, capítulos expansíveis e templates.
- **Transições Fluidas**: Usar micro-interações elegantes sob hover e estados de loading suaves para deleitar o usuário.
- **Tipografia Nobre**: Fontes emparelhadas utilizando "Space Grotesk" para destaques de marca e "Inter" para leitura ergonômica.
- **Sufocamento de Complexidade de Código**: Manter infraestrutura e schemas ocultos, focado puramente em experiência visual e interações ricas.

### 4. **[Estrutura do Editor Recomendado]**
1. **Painel Lateral de Estilos**: Paletas de cores harmônicas e seções rápidas para carregar outlines.
2. **Editor WYSIWYG Simulado de Blocos**: Geração de capítulos ricos com imagens e tipografia diagramada harmoniosamente.
3. **Módulo de Exportação**: Botão para simulação de exportação estética para formatos PDF em folha A4 e EPUB.`;

    const technicalJustification = [
      "Foco de Produto: Prompt calibrado para o Modo Produto/UI focado em experiência visual refinada.",
      "Eliminação de Ruído: Omissão de queues, workers, Redis, Prisma e logs complexos para manter a interface limpa.",
      "Design System: Tipografia harmoniosa com Space Grotesk e Inter para maior retenção visual."
    ];

    return {
      orchestratedPrompt: orchestratedPrompt + (adminSystemEnabled ? adminSystemBlock : "") + (visualPriorityEnabled ? visualPriorityBlock : ""),
      technicalJustification,
      observabilityAdditions: "Preview em tempo real e estados visuais polidos adicionados ao prompt.",
      ethicalMitigations: "Garantia de que nenhuma tela de log developer cause distrações ao usuário final.",
      isFallback: true
    };
  }

  // Mode 2: WEBSITE MODE (Landing Pages & Sites)
  if (normFocus === "website") {
    const orchestratedPrompt = `# ⚡ ULTRA PRODUCT ORCHESTRATOR - WEBSITE MODE (CONVERSION): ${category}

### 1. **[Contexto & Direção de Arte]**
Você é um Arquiteto de Conversão e UI Specialist com foco em páginas de alta conversão inspiradas em **Stripe, OpenAI, Vercel e Framer**. Sua meta é maximizar vendas e conversões através de design estonteante.

### 2. **[Projeto Solicitado]**
Página responsiva premium para:
> "${prompt}"

### 3. **[Diretrizes de Conversão e Layout]**
- **Headline Irresistível & CTA Estratégico**: Posicionar a proposta única de valor em destaque acima da dobra no Hero Section.
- **Grade Bento de Benefícios**: Exibir features chave usando bento-grids luxuosos com sombras sutis e bordas finas.
- **Seção de Antes vs Depois / Simulador**: Criar um slider de comparação antes/depois visual de alta fidelidade para provar valor.
- **Prova Social, FAQs e Preços**: Integrar depoimentos realistas e componentes FAQ interativos e expansíveis.
- **Animações Fluidas**: Empregar motion fades e efeitos dinâmicos suaves sob hover e carregamento.`;

    const technicalJustification = [
      "Foco em Conversão: Arquitetura otimizada para capturar leads e gerar desejo de conversão rápida.",
      "Art Direction Premium: Paletas modernas de alto requinte baseadas nas maiores referências do mercado tecnológico.",
      "SEO & Velocidade: Otimização nativa de performance, imagens WebP leves e heading tags estruturadas."
    ];

    return {
      orchestratedPrompt: orchestratedPrompt + (adminSystemEnabled ? adminSystemBlock : "") + (visualPriorityEnabled ? visualPriorityBlock : ""),
      technicalJustification,
      observabilityAdditions: "Código estruturado focado em indexação e velocidade máxima baseada no Lighthouse.",
      ethicalMitigations: "Políticas transparentes de privacidade na página e conformidade LGPD.",
      isFallback: true
    };
  }

  // Mode 3: BLOG MODE (SEO / Editorial)
  if (normFocus === "blog") {
    const orchestratedPrompt = `# ✍️ ULTRA PRODUCT ORCHESTRATOR - BLOG & EDITORIAL MODE: ${category}

### 1. **[Foco Editorial e SEO]**
Design literário de alta legibilidade especializado em ranqueamento agressivo no Google e descobribilidade de IA (Google AI Studio, Gemini, Search Labs).

### 2. **[Canal Editorial]**
Conteúdo dinâmico e CMS para:
> "${prompt}"

### 3. **[Diretrizes de SEO & Leitura]**
- **Metatags e Tags Open Graph**: Preencher com precisão o título do artigo no feed social e feeds RSS.
- **SEO Técnico Global**: Geração automática de Meta Tags, Robots.txt otimizado, Sitemap automágico e Schema.org JSON-LD estruturado para indexação.
- **Monetização Estratégica**: Espaços pensados para anúncios AdSense sem poluir ou irritar a vista do leitor.
- **Thumbnails e Open Graph**: Layouts de compartilhamentos sociais dinâmicos.`;

    const technicalJustification = [
      "SEO Dinâmico: Foco na estrutura gramática das tags H1-H3 para indexação orgânica imediata.",
      "Descobribilidade IA: Metatags customizadas para opitmar detecção de conteúdos por bots de LLM.",
      "UX Editorial: Foco absoluto no prazer de ler sem poluição de componentes pesados."
    ];

    return {
      orchestratedPrompt: orchestratedPrompt + (adminSystemEnabled ? adminSystemBlock : "") + (visualPriorityEnabled ? visualPriorityBlock : ""),
      technicalJustification,
      observabilityAdditions: "Integração declarativa sitemap.xml e schemas dinâmicos de metadados.",
      ethicalMitigations: "Diretrizes contra plágio e atribuição clara a autores visando credibilidade E-E-A-T.",
      isFallback: true
    };
  }

  // Mode 4: SIMPLE TOOL MODE (Lightweight Apps)
  if (normFocus === "simple_tool") {
    const orchestratedPrompt = `# 🛠️ ULTRA PRODUCT ORCHESTRATOR - SIMPLE TOOL MODE: ${category}

### 1. **[Foco em Utilidade e Simplicidade]**
Aplicação web utilitária pura, robusta, altamente performática e projetada para um único propósito de forma magnífica.

### 2. **[Ferramenta Desejada]**
> "${prompt}"

### 3. **[Regras de Design Simples]**
- **Interface Direta ao Ponto**: Zero logins obrigatórios se a ferramenta for de uso público. O usuário entra e começa a utilizar imediatamente.
- **Foco em Feedback Imediato**: Exibir os resultados instantaneamente de modo interativo através de estados reativos no cliente.
- **Persistência Leve**: Usar localStorage no navegador se o usuário desejar salvar histórico de conversas ou fórmulas.
- **Componentização Altamente Reutilizável**: Estrutura de código compacta focada em responder à ação principal no centro da tela.`;

    const technicalJustification = [
      "Arquitetura Leve: Totalmente executado em client-side, eliminando latências de rotas backend desnecessárias.",
      "Iniciação Rápida: Zero atrito de onboarding para garantir taxa de retenção máxima de uso direto.",
      "Uso de LocalStorage: Fornecimento de persistência offline flexível sem necessidade de sincronização pesada de nuvem."
    ];

    return {
      orchestratedPrompt: orchestratedPrompt + (adminSystemEnabled ? adminSystemBlock : "") + (visualPriorityEnabled ? visualPriorityBlock : ""),
      technicalJustification,
      observabilityAdditions: "Logs de depuração no console para rastreamento de operações lógicas em tempo de execução.",
      ethicalMitigations: "Zero armazenamento ou envio de dados privados para servidores protegendo dados sensíveis de usuários.",
      isFallback: true
    };
  }

  // Mode 5: BUSINESS SYSTEM MODE (Dashboards / SaaS Portal)
  if (normFocus === "business_system") {
    const orchestratedPrompt = `# 💼 ULTRA PRODUCT ORCHESTRATOR - BUSINESS SYSTEM MODE: ${category}

### 1. **[Premissa Operacional e Gestão]**
Você é um Principal Software Architect concebendo um painel gerencial moderno e robusto para empresas.

### 2. **[Sistema Solicitado]**
> "${prompt}"

### 3. **[Requisitos Operacionais Estritos]**
- **Autenticação Unificada**: Login e senha seguros na mesma página com identificação de papel (ADMIN ou USER).
- **Dashboard de Analytics**: Quadros com KPIs financeiros, tráfego, volume de leads e uso das chaves API integradas.
- **Gestão de Usuários Inteira**: Edição, bloqueio, registro, e visualização detalhada de IPs e sessões com logs de auditoria.
- **Segurança de API**: Painel de gerenciamento de chaves de API, controle de consumo de tokens e rotação redundante.`;

    const technicalJustification = [
      "Robustez & RBAC: Controle estrito de acessos com detecção inteligente de logins simuladores.",
      "Gestão de Chaves API: Painel próprio centralizado facilitando adição de novas chaves Gemini com total rastreio de limites.",
      "Analytics Integrado: Visibilidade total de performance e cliques para decisões executivas rápidas."
    ];

    return {
      orchestratedPrompt: orchestratedPrompt + (adminSystemEnabled ? adminSystemBlock : "") + (visualPriorityEnabled ? visualPriorityBlock : ""),
      technicalJustification,
      observabilityAdditions: "Logs auditáveis no banco de dados e controle de IP Whitelist/Blacklist integrados.",
      ethicalMitigations: "Criptografia de senhas e proteção estrita contra vazamento de credenciais administrativas.",
      isFallback: true
    };
  }

  const CATEGORY_SPECS: Record<string, { industryStandard: string, architecture: string, keyPoints: string[] }> = {
    'Clones & Plataformas': {
      industryStandard: 'Modelos de sistemas e plataformas de grande porte inspirados em líderes de mercado (ex: Hotmart, Kiwify, Netflix).',
      architecture: 'Arquitetura baseada em microsserviços, área de membros sob demanda, processamento distribuído de pagamentos e painel multi-nível de afiliados.',
      keyPoints: [
        'Garantir isolamento absoluto entre contas de produtores, co-produtores e afiliados.',
        'Configurar player de vídeo seguro impedindo download direto das vídeo-aulas por usuários maliciosos.',
        'Definir fluxo transacional idempotente integrado com APIs de gateways de pagamento redundantes.'
      ]
    },
    'Aplicações SaaS': {
      industryStandard: 'Arquiteturas SaaS (Software as a Service) multi-tenant seguras com métricas recorrentes de receita.',
      architecture: 'Isolamento lógico de dados de tenants por esquema de banco de dados ou chaves estrangeiras seguras com rate limit por assinatura.',
      keyPoints: [
        'Implementar controle de acesso baseado em papéis (RBAC) com suporte a subcontas e restrições de permissões estritas.',
        'Garantir controle e faturamento recorrente automatizado com webhooks seguros de rastreamento de inadimplência.',
        'Implementar log analítico de consumo de recursos computacionais por tenant.'
      ]
    },
    'Sistemas de E-commerce': {
      industryStandard: 'Lojas virtuais modernas com checkout transparente, controle estrito de estoque sob alta demanda e cálculo rápido de frete.',
      architecture: 'Banco de dados transacional com locks otimistas, mensageria assíncrona para geração de pedidos e cache distribuído das páginas de produtos.',
      keyPoints: [
        'Mitigar condições de corrida na compra de itens com pouco estoque garantindo validação atômica em nível de transação.',
        'Configurar tratamento seguro de descontos de cupons cumulativos impedindo fraudes lógicas em compras paralelas.',
        'Integrar de forma assíncrona com os Correios ou transportadoras privadas usando mecanismos resilientes de tratamento de erros.'
      ]
    },
    'Landing Pages & Funis': {
      industryStandard: 'Páginas de alta conversão otimizadas para carregamento instantâneo, SEO agressivo e acessibilidade web impecável.',
      architecture: 'Componentes leves estáticos, Tailwind CSS otimizado sem recursos não utilizados e scripts assíncronos de remarketing/pixel.',
      keyPoints: [
        'Garantir pontuação máxima (95+ ) no Lighthouse otimizando carregamento de imagens por Lazy Loading e WebP.',
        'Estruturar formulários de captura de leads com proteção contra spams usando recaptcha invisível e validação dupla.',
        'Configurar testes A/B integrados do lado do servidor ou cliente de forma a não causar oscilações visuais (CLS).'
      ]
    },
    'Automação & Processos': {
      industryStandard: 'pipelines de processos e automações altamente eficientes com mapeamento de estados preciso, idempotência e desacoplamento.',
      architecture: 'Arquitetura baseada em microsserviços desacoplados por filas de mensageria (BullMQ/Redis) e tratamento assíncrono de eventos com controle idempotente.',
      keyPoints: [
        'Garantir mapeamento de estados robusto detalhando transições claras para mitigar condições de corrida.',
        'Especificar identificadores de mensagem únicos para webhooks e requisições a fim de garantir idempotência absoluta de dados.',
        'Desacoplar tarefas pesadas em workers dedicados consumindo de filas distribuídas resilientes.',
        'Utilizar tipagem estática do lado do servidor e validação estrita de esquemas em todas as conexões.',
        'Implementar tratamento de erros com bloco Try-Catch-Finally estrito, logs em formato JSON padronizado e padrão Circuit Breaker.'
      ]
    },
    'APIs & Integrações': {
      industryStandard: 'Criação de APIs REST ou GraphQL que seguem padrões universais e oferecem fácil integração externa.',
      architecture: 'Middlewares de throttling (Rate Limit), logs detalhados de erros que não vazam segredos de infraestrutura e OpenAPI/Swagger ativo.',
      keyPoints: [
        'Validar contratos de entrada e saída por meio de schemas estritos para evitar injeção de parâmetros maliciosos.',
        'Assegurar reprocessamento assíncrono de Webhooks com controle estrito de ID único de mensagem para prevenir duplicidades.',
        'Configurar rotas de diagnósticos saudáveis (/health) monitorando conectividade de banco de dados e serviços terceiros.'
      ]
    },
    'Aplicativos Mobile': {
      industryStandard: 'Aplicações nativas ou híbridas (React Native/Flutter) estáveis, com excelente controle de memória e suporte a offline-first.',
      architecture: 'Armazenamento embarcado SQLite local com fila de comandos sincronizada sob demanda quando houver rede estável.',
      keyPoints: [
        'Implementar gerenciamento estrito de estado (Zustand/Redux) com persistência em chave-valor segura.',
        'Prevenir vazamento de memória liberando listeners de sensores e timers durante a desmontagem de telas.',
        'Configurar carregamento progressivo e cache inteligente para poupar o consumo do pacote de dados móveis do usuário.'
      ]
    },
    'Bancos de Dados': {
      industryStandard: 'Modelos de dados escaláveis, consultas otimizadas com indexação cirúrgica e preservação rígida de chaves.',
      architecture: 'Esquema normalizado (3NF) combinado com views materializadas para rotas de leitura intensa e réplicas de leitura.',
      keyPoints: [
        'Mapear e prevenir consultas do tipo N+ 1 através de joins declarativos em tempo de desenvolvimento.',
        'Configurar índices parciais e compostos analisando os planos de execução de queries (EXPLAIN ANALYZE) para otimizar desempenho.',
        'Garantir integridade referencial nativa no banco impedindo remoção em cascata acidental que destrua tabelas de faturamento.'
      ]
    },
    'Agentes & Assistentes IA': {
      industryStandard: 'Assistentes inteligentes integrados a modelos linguísticos através de RAG (Geração Aumentada de Recuperação) e chamada de funções.',
      architecture: 'Instanciação segura de SDKs de IA, blindagem contra injeção de prompt via delimiters rígidos e bases de vetores indexadas.',
      keyPoints: [
        'Sanitizar e isolar as instruções de sistema de qualquer conteúdo fornecido de fora que tente realizar Prompt Injection.',
        'Estruturar respostas de chamadas de funções lógicas para rodar exclusivamente em sandboxes de software isoladas.',
        'Configurar memória deslizante para reter contexto de conversas passadas sem estourar o limite de tokens das requisições.'
      ]
    },
    'Sistemas Web Customizados': {
      industryStandard: 'Plataformas complexas desenhadas sob medida seguindo padrões estritos de Clean Architecture e SOLID.',
      architecture: 'Single Page Applications ou Server Side Rendered com separação de responsabilidades absoluta entre lógica de apresentação e controllers.',
      keyPoints: [
        'Minimizar tamanho dos bundles de produção através de Code Splitting e Dynamic Import de páginas pesadas.',
        'Declarar tipos TypeScript estritos em toda a malha de fluxo de dados eliminando terminologias genéricas.'
      ]
    }
  };

  const spec = CATEGORY_SPECS[category] || {
    industryStandard: 'Arquitetura e desenvolvimento de alto desempenho com clareza conceitual de software.',
    architecture: 'Abordagem desacoplada multicamadas com foco na legibilidade, manutenibilidade e escalabilidade lógica.',
    keyPoints: [
      'Aplicar boas práticas de Clean Code e princípios SOLID em todas as camadas e módulos relacionados.',
      'Garantir tratamento explícito de exceções e fluxos de exceção na borda do sistema.',
      'Dividir o problem em subcomponentes menores com responsabilidade única de execução.'
    ]
  };

  const stepsList = spec.keyPoints.map((pt, i) => `- **Regra ${i + 1}**: ${pt}`).join('\n');

  let ethicalMitigations = "Garantia básica de coerência e blindagem de segurança padrão.";
  let ethicalSection = "";
  if (ethicsEnabled) {
    ethicalMitigations = "Ativada proteção rígida contra alucinações técnicas da IA e imposição de restrições de sandbox cognitivo para garantir código funcional real.";
    ethicalSection = `
- **Isolamento de Função (Sandbox Cognitivo)**: Focar exclusivamente nas tarefas descritas, proibindo saídas de boilerplate oco ou alucinação de dependências.
- **Instruções Negativas Estritas**: Nunca omitir linhas de código fundamentais ou simular payloads fictícios.
- **Validação Antecipada**: Exigir validação sintática e semântica rígida em todas as camadas de ingress.`;
  } else {
    ethicalSection = `\n- **Prevenção Geral**: Adotar validação de tipagem e evitar alucinações de bibliotecas descontinuadas.`;
  }

  let observabilityAdditions = "Fluxo básico de depuração com console padrão.";
  let observabilitySection = "";
  if (robustnessEnabled) {
    observabilityAdditions = "Ativado controle robusto de exceções com blocos Try-Catch estruturados, logs detalhados e telemetria básica.";
    observabilitySection = `
- **Arquitetura de Resiliência (Try-Catch-Finally)**: Cada micro-serviço e subsistema deve rodar encapsulado em barreira de proteção de tratamento de erros.
- **Logs Estruturados**: Logs de auditoria emitidos exclusivamente em formato JSON com carimbo de data/hora ISO-8601 e IDs de rastreio de transações.
- **Circuit Breaker**: Forçar lógica resiliente de fallback para garantir degradação suave perante APIs fora do ar.`;
  } else {
    observabilitySection = `\n- **Tratamento Padrão**: Lançar logs em console e propagar exceções de forma amigável ao usuário.`;
  }

  const orchestratedPrompt = `# 👑 ULTRA PROMPT ORCHESTRATOR ENTERPRISE - ORQ: ${category}

### 1. **[Contexto Profissional]**
Você é um Engenheiro de Software Principal, Prompt Engineer Líder da DeepMind e Argoteto de Software Corporativo Sênior calibrado de acordo com metodologias de fatiamento estruturado e sandbox cognitivo refinado por **Ana Caroline Lamas**. Sua missão é conduzir da forma mais avançada o projeto técnico detalhado abaixo.

### 2. **[Objetivo Principal]**
Executar e modelar de ponta a ponta a especificação técnica e arquivos funcionais para atender o seguinte requerimento de negócio recebido:
> "${prompt}"

### 3. **[Requisitos Técnicos]**
- Adotar as diretrizes industriais de: **${spec.industryStandard}**
- Seguir a arquitetura de alta performance: **${spec.architecture}**
${stepsList}

### 4. **[Restrições]**
- **Sem Atalhos ou Placeholder**: É expressamente proibido gerar trechos incompletos, reticências lógicas ou marcações "// TODO". Todo trecho de código deve ser real, estruturado e compilável.
- **Dependências Reais apenas**: Utilizar somente frameworks e pacotes NPM estáveis, desencorajando importação de bibliotecas obsoletas ou fictícias.

### 5. **[Fluxo Operacional]**
1. Mapeamento analítico de dados e verificação preliminar das fronteiras de segurança.
2. Injeção de componentes e roteamento seguro com blindagem anti-injeção.
3. Tratamento robusto de estados no banco e confirmação assíncrona.
4. Coesão total do código com SRE logging.

### 6. **[Requisitos de Qualidade]**
- Total tipagem estrita TypeScript (sem uso de "any").
- Layout visual amigável de alto contraste no frontend seguindo Tailwind.
- Idempotência estrutural em webhooks de pagamento de gateway.

### 7. **[Tecnologias Obrigatórias]**
- Node.js com TypeScript e Express.
- Zod para validação rigorosa de esquemas e Winston para gravação estruturada JSON.
- Tailwind CSS e React estruturado para as camadas visuais se aplicável.

### 8. **[Estratégias de Resiliência]**
${observabilitySection}
${ethicalSection}

### 9. **[Estrutura Final Esperada]**
A sua resposta deve ser estruturada estritamente nos seguintes blocos formatados em Markdown:
1. **[Objetivo de Negócio e Arquitetura]**
2. **[Esquema de Banco de Dados e Modelagem de Dados]**
3. **[Regras de Negócio e Fluxo de Automação]**
4. **[Estratégia de Tratamento de Exceções e Resiliência]**
5. **[Código Boilerplate de Sandbox Inicial (Totalmente Funcional)]**`;

  const technicalJustification = [
    `Contextualização automática: O prompt simples foi devidamente expandido para aplicar os guias de boas práticas para a categoria ${category}.`,
    `Reforço modular: Injetadas diretrizes de responsabilidade única, Clean Code e tipagem forte TypeScript.`,
    ethicsEnabled ? "Blindagem Cognitiva: Proteção robusta contra alucinações e imposição de restrições funcionais reais." : "Mitigação básica de erros lógicos padrão.",
    robustnessEnabled ? "Observabilidade e Resiliência: Exigência direta de tratamento estruturado de erros e logs de auditoria." : "Modularização do controle de fluxo básico do código."
  ];

  return {
    orchestratedPrompt: orchestratedPrompt + (adminSystemEnabled ? adminSystemBlock : "") + (visualPriorityEnabled ? visualPriorityBlock : ""),
    technicalJustification,
    observabilityAdditions,
    ethicalMitigations,
    isFallback: true
  };
};

export default function App() {
  // Navigation & authentication states
  const [currentView, setCurrentView] = useState<"sales" | "login" | "admin" | "user">("sales");
  const [currentUser, setCurrentUser] = useState<{ username: string; role: "admin" | "user" } | null>(null);

  // Settings
  const [settings, setSettings] = useState<PortalSettings>({
    logoText: "Bancada Prompt",
    primaryColor: "#701A28",
    buttonColor: "#851d1d",
    googleAdsense: "",
    facebookPixel: "",
    robotsTxt: "",
    price: "R$ 49",
    checkoutUrl: "https://pay.kfy.com.br/",
    salesTitle: "Aprenda a fatiar os melhores prompts de IA com a Bancada Prompt DeepMind",
    salesSubtitle: "Aprenda a conversar perfeitamente com os LLMs de cibersegurança. Transforme ideias simples em instruções de alta fidelidade estruturadas de nível sênior, com blindagem ética e sandbox cognitivo.",
    copyrightFooter: "Bancada Prompt • Todos os direitos reservados.",
    guaranteeTitle: "Garantia Incondicional de 7 Dias",
    guaranteeSubtitle: "Reembolso Completo Assegurado pela Kiwify",
    billingModel: "Assinatura mensal recorrente (cancele quando quiser)"
  });

  // Load Settings on Mount
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/settings");
      if (response.ok) {
        const text = await response.text();
        if (text.trim().startsWith("<") || text.trim().startsWith("<!")) {
          throw new Error("HTML_RESPONSE");
        }
        const data = JSON.parse(text);
        setSettings(data);
      }
    } catch (err) {
      console.warn("Falha ao carregar configurações do portal via API, usando fallback local:", err);
      // Fallback check in localStorage
      const savedSettings = localStorage.getItem("sec_prompt_local_settings");
      if (savedSettings) {
        try {
          setSettings(JSON.parse(savedSettings));
        } catch (_) {}
      }
    }
  };

  // Google Adsense / Facebook Pixel Injection inside head
  useEffect(() => {
    if (settings.googleAdsense) {
      const existing = document.getElementById("google-adsense-inject");
      if (existing) existing.remove();
      const div = document.createElement("div");
      div.id = "google-adsense-inject";
      div.innerHTML = settings.googleAdsense;
      document.head.appendChild(div);
    }
    if (settings.facebookPixel) {
      const existing = document.getElementById("fb-pixel-inject");
      if (existing) existing.remove();
      const div = document.createElement("div");
      div.id = "fb-pixel-inject";
      div.innerHTML = settings.facebookPixel;
      document.head.appendChild(div);
    }
  }, [settings.googleAdsense, settings.facebookPixel]);

  // Login inputs
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [loginSecurityKey, setLoginSecurityKey] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Admin states & forms
  const [adminUsers, setAdminUsers] = useState<NormalUser[]>([]);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [userSuccessMessage, setUserSuccessMessage] = useState<string | null>(null);
  const [userErrorMessage, setUserErrorMessage] = useState<string | null>(null);
  const [usersSearchQuery, setUsersSearchQuery] = useState("");

  const [adminRenameUsername, setAdminRenameUsername] = useState("");
  const [adminRenamePassword, setAdminRenamePassword] = useState("");
  const [adminCredsSuccess, setAdminCredsSuccess] = useState<string | null>(null);
  const [adminCredsError, setAdminCredsError] = useState<string | null>(null);

  // Portal text / settings updates states
  const [adminSettingsForm, setAdminSettingsForm] = useState<PortalSettings>({ ...settings });
  const [settingsSuccess, setSettingsSuccess] = useState<string | null>(null);

  // Sync admin form settings with fetched settings
  useEffect(() => {
    setAdminSettingsForm({ ...settings });
  }, [settings]);

  // User custom Gemini Key override
  const [customGeminiKey, setCustomGeminiKey] = useState(() => {
    return localStorage.getItem("custom_gemini_api_key") || "";
  });
  const [keyInputValue, setKeyInputValue] = useState(customGeminiKey);
  const [keySavedFeedback, setKeySavedFeedback] = useState(false);

  const handleSaveCustomKey = (key: string) => {
    const trimmedKey = key.trim();
    setCustomGeminiKey(trimmedKey);
    setKeyInputValue(trimmedKey);
    localStorage.setItem("custom_gemini_api_key", trimmedKey);
    setKeySavedFeedback(true);
    setTimeout(() => {
      setKeySavedFeedback(false);
    }, 2500);
  };

  // Premium orchestrator states (accessible inside customer view)
  const [orchestratorPrompt, setOrchestratorPrompt] = useState("");
  const [orchestratorCategory, setOrchestratorCategory] = useState("Sistemas Web Customizados");
  const [ethicsEnabled, setEthicsEnabled] = useState(true);
  const [robustnessEnabled, setRobustnessEnabled] = useState(true);
  const [adminSystemEnabled, setAdminSystemEnabled] = useState(true);
  const [visualPriorityEnabled, setVisualPriorityEnabled] = useState(true);
  const [orchestrationFocus, setOrchestrationFocus] = useState<"visual_product" | "website" | "blog" | "simple_tool" | "business_system" | "enterprise_saas">("visual_product");
  const [orchestratorResult, setOrchestratorResult] = useState<OrchestrationResponse | null>(null);
  const [orchestratorLoading, setOrchestratorLoading] = useState(false);
  const [orchestratorError, setOrchestratorError] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedResultId, setCopiedResultId] = useState<string | null>(null);

  const [promptHistory, setPromptHistory] = useState<PromptHistoryItem[]>([]);
  const [historySearchQuery, setHistorySearchQuery] = useState("");

  // Bate papo de ideias chat states
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "copilot"; content: string }[]>([
    {
      role: "copilot",
      content: "Olá! Sou o Engenheiro de Prompt Sênior Co-pilot. Vamos debater suas ideias técnicas de todos os tipos: sites, lojas virtuais, e-commerces completos, automações inteligentes, geradores de imagens ou sistemas de Big Tech! Escreva sua ideia abaixo para trocarmos feedbacks arquiteturais."
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  // Customer content tabs
  const [activeCustomerTab, setActiveCustomerTab] = useState<"exclusive" | "engine" | "guides" | "support">("engine");

  // Load history from localStorage once on load
  useEffect(() => {
    const saved = localStorage.getItem("sec_prompt_history");
    if (saved) {
      try {
        setPromptHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Falha ao restaurar histórico:", e);
      }
    }
  }, []);

  const saveHistory = (newHistory: PromptHistoryItem[]) => {
    setPromptHistory(newHistory);
    localStorage.setItem("sec_prompt_history", JSON.stringify(newHistory));
  };

  // Handle Unified Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginIdentifier.trim() || !loginSecurityKey.trim()) {
      setLoginError("Preencha todos os campos.");
      return;
    }
    setLoginError(null);
    setLoginLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: loginIdentifier,
          securityKey: loginSecurityKey
        })
      });

      const text = await response.text();
      let data: any;

      try {
        if (text.trim().startsWith("<") || text.trim().startsWith("<!")) {
          throw new Error("HTML_RESPONSE");
        }
        data = JSON.parse(text);
      } catch (jsonErr) {
        console.warn("Retorno da API não é JSON (provavelmente ambiente estático/hospedagem sem Node). Ativando verificação local híbrida.");
        
        // Padrão de credenciais pré-embutido em conformidade com database.json
        const usernameInput = loginIdentifier.toLowerCase().trim();
        const passwordInput = loginSecurityKey.trim();

        const savedAdminUser = (localStorage.getItem("sec_prompt_local_admin_username") || "deepmindadmin").toLowerCase().trim();
        const savedAdminPass = (localStorage.getItem("sec_prompt_local_admin_password") || "@deepmind321").trim();

        if (usernameInput === savedAdminUser && passwordInput === savedAdminPass) {
          data = { success: true, role: "admin", username: savedAdminUser };
        } else if (usernameInput === "cliente@deepmind.com" && passwordInput === "cliente123") {
          data = { success: true, role: "user", username: "cliente@deepmind.com" };
        } else {
          // Checar se há contas locais adicionais criadas temporariamente
          const localUsersRaw = localStorage.getItem("sec_prompt_local_users");
          if (localUsersRaw) {
            try {
              const localUsers = JSON.parse(localUsersRaw);
              const foundUser = localUsers.find((u: any) => u.email.toLowerCase() === usernameInput && u.passwordText === passwordInput);
              if (foundUser) {
                data = { success: true, role: "user", username: foundUser.email };
              }
            } catch (_) {}
          }
        }

        if (!data) {
          throw new Error("Identificador ou Chave de segurança incorretos.");
        }
      }

      if (data && data.error) {
        throw new Error(data.error);
      }

      setCurrentUser({ username: data.username, role: data.role });
      
      // Auto-fetch data based on user role
      if (data.role === "admin") {
        fetchAdminUsers();
        setAdminRenameUsername(data.username);
        setCurrentView("admin");
      } else {
        setCurrentView("user");
      }

      setLoginIdentifier("");
      setLoginSecurityKey("");
    } catch (err: any) {
      setLoginError(err.message || "Erro no servidor ao autenticar.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView("sales");
  };

  const handleSendChatMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;

    const userMsg = { role: "user" as const, content: chatInput };
    const updatedMessages = [...chatMessages, userMsg];
    setChatMessages(updatedMessages);
    const query = chatInput;
    setChatInput("");
    setChatLoading(true);

    try {
      const response = await fetch("/api/chat-ideas", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          ...(customGeminiKey ? { "x-gemini-api-key": customGeminiKey } : {})
        },
        body: JSON.stringify({ messages: updatedMessages })
      });

      const text = await response.text();
      let data: any;

      try {
        if (text.trim().startsWith("<") || text.trim().startsWith("<!")) {
          throw new Error("HTML_RESPONSE");
        }
        data = JSON.parse(text);
      } catch (parseErr) {
        console.warn("Retorno da API do chat não é JSON válido. Executando gerador local.");
        const localResponse = `💡 **[Co-Pilot Sênior - Modo de Contingência Local Ativo]**
Sua proposta: *"${query}"*

Como o servidor de backend está em modo de página estática, elaborei este roteiro estruturado para sua ideia de prompt / clone:
1. **Estrutura de API**: Implementar rotas limpas protegidas por cabeçalhos estritos e limite de taxa (Rate Limit).
2. **Componentização**: Modularizar as views (React + Tailwind CSS) dividindo responsabilidades de busca e renderização de dados.
3. **Escala**: Desenvolver em microsserviços empacotados em contêineres Docker para facilitar deploys idempotentes.

*Insira sua chave de API Gemini nas configurações para debates de inteligência dinâmicos de alta fidelidade!*`;
        data = { response: localResponse };
      }

      setChatMessages(prev => [...prev, { role: "copilot", content: data.response }]);
    } catch (err: any) {
      console.error(err);
      setChatMessages(prev => [
        ...prev,
        {
          role: "copilot",
          content: `❌ Falha na conexão da IA:\n\n**Detalhe Técnico:** ${err.message || "Erro de rede no servidor."}\n\nPor favor, confirme se inseriu uma Chave API válida ou limpe e insira novamente.`
        }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  // Fetch created users (Admin Only)
  const fetchAdminUsers = async () => {
    try {
      const response = await fetch("/api/admin/users");
      if (response.ok) {
        const text = await response.text();
        if (text.trim().startsWith("<") || text.trim().startsWith("<!")) {
          throw new Error("HTML_RESPONSE");
        }
        const data = JSON.parse(text);
        setAdminUsers(data);
      } else {
        throw new Error("SERVER_FAIL");
      }
    } catch (e) {
      console.warn("Falha ao obter lista de usuários via API, recorrendo ao localStorage.");
      const localUsersRaw = localStorage.getItem("sec_prompt_local_users");
      if (localUsersRaw) {
        try {
          setAdminUsers(JSON.parse(localUsersRaw));
        } catch (_) {}
      } else {
        const defaultUsers = [{ id: "demo-user-1", email: "cliente@deepmind.com", passwordText: "cliente123", createdAt: "2026-05-24T00:00:00.000Z" }];
        setAdminUsers(defaultUsers);
        localStorage.setItem("sec_prompt_local_users", JSON.stringify(defaultUsers));
      }
    }
  };

  // Create Normal User
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserSuccessMessage(null);
    setUserErrorMessage(null);

    const emailTrimmed = newUserEmail.trim();
    const passTrimmed = newUserPassword.trim();

    if (!emailTrimmed || !passTrimmed) {
      setUserErrorMessage("Forneça o identificador e a senha para o novo usuário.");
      return;
    }

    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailTrimmed, passwordText: passTrimmed })
      });
      const text = await response.text();
      let data: any;
      if (text.trim().startsWith("<") || text.trim().startsWith("<!")) {
        throw new Error("HTML_RESPONSE");
      }
      data = JSON.parse(text);

      setUserSuccessMessage(`Usuário "${data.user.email}" criado com sucesso!`);
      setNewUserEmail("");
      setNewUserPassword("");
      fetchAdminUsers();
    } catch (err: any) {
      console.warn("Criando usuário locally no localStorage.");
      const localUsersRaw = localStorage.getItem("sec_prompt_local_users") || "[]";
      let localUsers: any[] = [];
      try { localUsers = JSON.parse(localUsersRaw); } catch (_) {}

      const exists = localUsers.some(u => u.email.toLowerCase() === emailTrimmed.toLowerCase());
      if (exists) {
        setUserErrorMessage("Usuário já existe no banco local.");
        return;
      }

      const newUser = {
        id: "local-" + Math.random().toString(36).substring(2, 9),
        email: emailTrimmed,
        passwordText: passTrimmed,
        createdAt: new Date().toISOString()
      };
      localUsers.push(newUser);
      localStorage.setItem("sec_prompt_local_users", JSON.stringify(localUsers));

      setUserSuccessMessage(`Usuário "${newUser.email}" criado com sucesso locally!`);
      setNewUserEmail("");
      setNewUserPassword("");
      fetchAdminUsers();
    }
  };

  // Delete Normal User
  const handleDeleteUser = async (id: string) => {
    if (!window.confirm("Remover este usuário impedirá imediatamente seu acesso. Confirmar?")) {
      return;
    }
    try {
      const response = await fetch(`/api/admin/users/${id}`, {
        method: "DELETE"
      });
      const text = await response.text();
      if (text.trim().startsWith("<") || text.trim().startsWith("<!")) {
        throw new Error("HTML_RESPONSE");
      }
      setUserSuccessMessage("Usuário removido com sucesso.");
      fetchAdminUsers();
    } catch (e: any) {
      console.warn("Removendo usuário locally.");
      const localUsersRaw = localStorage.getItem("sec_prompt_local_users") || "[]";
      let localUsers: any[] = [];
      try { localUsers = JSON.parse(localUsersRaw); } catch (_) {}
      const updated = localUsers.filter(u => u.id !== id);
      localStorage.setItem("sec_prompt_local_users", JSON.stringify(updated));
      setUserSuccessMessage("Usuário removido com sucesso locally.");
      fetchAdminUsers();
    }
  };

  // Update Settings
  const handleUpdateSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSuccess(null);
    try {
      const response = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminSettingsForm)
      });
      const text = await response.text();
      if (text.trim().startsWith("<") || text.trim().startsWith("<!")) {
        throw new Error("HTML_RESPONSE");
      }
      const data = JSON.parse(text);
      setSettings(data.settings);
      setSettingsSuccess("Configurações atualizadas e aplicadas em tempo real!");
      setTimeout(() => setSettingsSuccess(null), 4000);
    } catch (err) {
      console.warn("Salvando configurações no localStorage local devido a ambiente de hospedagem estática.");
      setSettings(adminSettingsForm);
      localStorage.setItem("sec_prompt_local_settings", JSON.stringify(adminSettingsForm));
      setSettingsSuccess("Configurações salvas locally!");
      setTimeout(() => setSettingsSuccess(null), 4000);
    }
  };

  // Rename Admin credentials
  const handleChangeAdminCreds = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminCredsSuccess(null);
    setAdminCredsError(null);

    const newUsername = adminRenameUsername.trim();
    const newPassword = adminRenamePassword.trim();

    if (!newUsername || !newPassword) {
      setAdminCredsError("Preencha o novo identificador e a nova senha.");
      return;
    }

    try {
      const response = await fetch("/api/admin/change-credentials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: newUsername,
          passwordText: newPassword
        })
      });
      const text = await response.text();
      if (text.trim().startsWith("<") || text.trim().startsWith("<!")) {
        throw new Error("HTML_RESPONSE");
      }
      const data = JSON.parse(text);
      setAdminCredsSuccess("Credenciais atualizadas com sucesso!");
      if (currentUser && currentUser.role === "admin") {
        setCurrentUser({ username: newUsername, role: "admin" });
      }
    } catch (err: any) {
      console.warn("Salvando credentials de admin locally no localStorage.");
      localStorage.setItem("sec_prompt_local_admin_username", newUsername);
      localStorage.setItem("sec_prompt_local_admin_password", newPassword);
      setAdminCredsSuccess("Credenciais do admin atualizadas locally!");
      if (currentUser && currentUser.role === "admin") {
        setCurrentUser({ username: newUsername, role: "admin" });
      }
    }
  };

  // Orchestrator trigger inside customer area
  const handleOrchestrate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orchestratorPrompt.trim()) {
      setOrchestratorError("Por favor, digite seu comando técnico simples.");
      return;
    }

    setOrchestratorLoading(true);
    setOrchestratorResult(null);
    setOrchestratorError(null);

    try {
      const response = await fetch("/api/orchestrate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(customGeminiKey ? { "x-gemini-api-key": customGeminiKey } : {})
        },
        body: JSON.stringify({
          prompt: orchestratorPrompt.trim(),
          category: orchestratorCategory,
          ethicsEnabled,
          robustnessEnabled,
          adminSystemEnabled,
          visualPriorityEnabled,
          orchestrationFocus
        })
      });

      const text = await response.text();
      let data: any;

      try {
        if (text.trim().startsWith("<") || text.trim().startsWith("<!")) {
          throw new Error("HTML_RESPONSE");
        }
        data = JSON.parse(text);
      } catch (parseErr) {
        console.warn("Retorno do orquestrador não é JSON válido. Usando contingência local client-side.");
        data = generateLocalFallbackClient(orchestratorPrompt.trim(), orchestratorCategory, ethicsEnabled, robustnessEnabled, orchestrationFocus, adminSystemEnabled, visualPriorityEnabled);
      }

      setOrchestratorResult(data);

      const newItem: PromptHistoryItem = {
        id: Math.random().toString(36).substring(2, 11),
        timestamp: new Date().toLocaleString("pt-BR"),
        category: orchestratorCategory,
        originalInput: orchestratorPrompt.trim(),
        orchestratedPrompt: data.orchestratedPrompt,
        technicalJustification: data.technicalJustification || [],
        observabilityAdditions: data.observabilityAdditions,
        ethicalMitigations: data.ethicalMitigations,
        ethicsEnabled,
        robustnessEnabled,
        adminSystemEnabled,
        visualPriorityEnabled,
        isFallback: data.isFallback
      };

      const updatedHistory = [newItem, ...promptHistory];
      saveHistory(updatedHistory);
    } catch (err: any) {
      console.error(err);
      setOrchestratorError(err.message || "Erro inesperado ao conectar ao orquestrador.");
    } finally {
      setOrchestratorLoading(false);
    }
  };

  const handleCopyToClipboard = async (text: string, isResultItem: boolean, itemId?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (isResultItem) {
        setCopiedPrompt(true);
        setTimeout(() => setCopiedPrompt(false), 2000);
      } else if (itemId) {
        setCopiedResultId(itemId);
        setTimeout(() => setCopiedResultId(null), 2000);
      }
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  const handleRestoreFromHistory = (item: PromptHistoryItem) => {
    setOrchestratorPrompt(item.originalInput);
    setOrchestratorCategory(item.category);
    setEthicsEnabled(item.ethicsEnabled);
    setRobustnessEnabled(item.robustnessEnabled);
    setAdminSystemEnabled(item.adminSystemEnabled ?? true);
    setVisualPriorityEnabled(item.visualPriorityEnabled ?? true);
    setOrchestratorResult({
      orchestratedPrompt: item.orchestratedPrompt,
      technicalJustification: item.technicalJustification,
      observabilityAdditions: item.observabilityAdditions,
      ethicalMitigations: item.ethicalMitigations,
      isFallback: item.isFallback
    });
    setActiveCustomerTab("engine");
  };

  const handleDeleteHistoryItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = promptHistory.filter((item) => item.id !== id);
    saveHistory(filtered);
  };

  const handleApplyPreset = (text: string, category: string) => {
    setOrchestratorPrompt(text);
    setOrchestratorCategory(category);
  };

  const filteredHistory = promptHistory.filter((item) => {
    const q = historySearchQuery.toLowerCase();
    return (
      item.originalInput.toLowerCase().includes(q) ||
      item.orchestratedPrompt.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const filteredUsers = adminUsers.filter((user) => {
    return user.email.toLowerCase().includes(usersSearchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#0d0f14] text-slate-100 flex flex-col justify-between font-sans selection:bg-[#701a28]/50 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Dynamic override of brand colors from administrative dashboard */}
      <style>{`
        :root {
          --primary-brand: ${settings.primaryColor || "#701A28"};
          --button-brand: ${settings.buttonColor || "#851d1d"};
        }
      `}</style>

      {/* 1. SALES PAGE VIEW */}
      {currentView === "sales" && (
        <SalesPage
          settings={settings}
          setCurrentView={setCurrentView}
          setLoginError={setLoginError}
        />
      )}

      {/* 2. UNIFIED LOGIN VIEW (MAPPING SCREENSHOT 9 EXACTLY) */}
      {currentView === "login" && (
        <div className="flex-1 flex items-center justify-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-slate-950 border border-slate-900 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 space-y-6"
          >
            {/* Outermost Link Back to Hidden Sales Screen according to screenshot 9 */}
            <div className="flex justify-start">
              <button
                onClick={() => setCurrentView("sales")}
                className="text-[10px] font-mono text-slate-400 hover:text-slate-200 transition tracking-wider flex items-center gap-1 uppercase"
              >
                <span>&lt;- Voltar p/ Ocult</span>
              </button>
            </div>

            {/* Custom Site Title Header Card inside the login layout */}
            <div className="text-center space-y-2 pb-2">
              <div
                className="inline-flex p-3 rounded-xl mb-1 border"
                style={{ backgroundColor: "rgba(112,26,40,0.08)", borderColor: "rgba(112,26,40,0.25)" }}
              >
                <Shield className="w-8 h-8" style={{ color: "var(--primary-brand)" }} />
              </div>
              <h2 className="text-xl font-bold font-display text-white tracking-tight">
                {settings.logoText}
              </h2>
              <div className="text-[10px] tracking-widest font-mono text-slate-500 uppercase">
                SUA LOGO SEUS CORES LOGIN UNIFICADO
              </div>
            </div>

            {/* Strict restriction: Admin log in the same exact unified place. Absolutely NO hints or text stating admin can log in here */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {loginError && (
                <div className="p-3 rounded-lg bg-[#701a28]/10 border border-[#701a28]/35 text-xs text-red-400 font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase block">
                  IDENTIFICADOR CORPORATIVO
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: colunista@suaempresa.com"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-slate-700 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase block">
                  CHAVE DE SEGURANÇA
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginSecurityKey}
                  onChange={(e) => setLoginSecurityKey(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-slate-700 font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3 rounded-lg text-white font-mono text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:brightness-115 flex items-center justify-center gap-2"
                style={{ backgroundColor: "var(--button-brand)" }}
              >
                {loginLoading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    AUTENTICANDO...
                  </>
                ) : (
                  "DESBLOQUEAR BANCADA"
                )}
              </button>
            </form>

            <div className="text-center pt-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                Criptografia RSA 4096-bit Ativa
              </span>
            </div>
          </motion.div>
        </div>
      )}

      {/* 3. PROTECTED ADMINISTRATOR MESA CONTROLS */}
      {currentView === "admin" && currentUser?.role === "admin" && (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 flex-1">
          {/* Header/Nav */}
          <div className="bg-slate-950 border border-slate-900 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-[10px] px-2 py-0.5 font-mono uppercase bg-red-950 text-red-400 border border-red-900 rounded font-bold">
                  ADMINISTRADOR
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  Logado como {currentUser.username}
                </span>
              </div>
              <h2 className="text-xl font-bold font-display text-white">
                Painel Administrativo - Segurança Central Omnidox
              </h2>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-slate-800 hover:bg-slate-900 rounded-lg text-xs font-mono text-slate-300 transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sair do Painel
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Configuration Columns (Mirroring user images config layout) */}
            <div className="lg:col-span-2 space-y-8">
              {/* CONFIG 1: BRAND IDENTITY & STYLE CONFIG */}
              <div className="bg-slate-950 border border-slate-900 rounded-xl p-6 space-y-6">
                <div className="border-b border-slate-900 pb-3">
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest font-mono flex items-center gap-2">
                    <Layout className="w-4 h-4 text-[#ae263a]" />
                    Identidade e Design (Controles Principais)
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">Configure o design visual aplicado em tempo real na plataforma.</p>
                </div>

                <form onSubmit={handleUpdateSettings} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                        NOME DO SITE / LOGO
                      </label>
                      <input
                        type="text"
                        value={adminSettingsForm.logoText}
                        onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, logoText: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                        MODELO DE COBRANÇA
                      </label>
                      <input
                        type="text"
                        value={adminSettingsForm.billingModel}
                        onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, billingModel: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase flex items-center justify-between">
                        <span>COR PRINCIPAL (HEX)</span>
                        <span className="w-4 h-4 border border-slate-800 rounded inline-block" style={{ backgroundColor: adminSettingsForm.primaryColor }} />
                      </label>
                      <input
                        type="text"
                        value={adminSettingsForm.primaryColor}
                        onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, primaryColor: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase flex items-center justify-between">
                        <span>COR DOS BOTÕES (CTA HEX)</span>
                        <span className="w-4 h-4 border border-slate-800 rounded inline-block" style={{ backgroundColor: adminSettingsForm.buttonColor }} />
                      </label>
                      <input
                        type="text"
                        value={adminSettingsForm.buttonColor}
                        onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, buttonColor: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                      />
                    </div>
                  </div>

                  {/* SEO, Tracking & Core Codes */}
                  <div className="border-t border-slate-900 pt-4 space-y-4">
                    <h4 className="text-[11px] font-mono font-bold text-slate-350 uppercase tracking-widest flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-slate-400" />
                      SEO e Rastreamento de Conversões
                    </h4>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          GOOGLE ADSENSE (SCRIPT CODE)
                        </label>
                        <textarea
                          rows={2}
                          value={adminSettingsForm.googleAdsense}
                          onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, googleAdsense: e.target.value })}
                          placeholder="<ctrl42> <script async ...>"
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          FACEBOOK PIXEL (SCRIPT CODE)
                        </label>
                        <textarea
                          rows={2}
                          value={adminSettingsForm.facebookPixel}
                          onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, facebookPixel: e.target.value })}
                          placeholder="<!-- Facebook Pixel Code -->"
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          CONTEÚDO ROBOTS.TXT
                        </label>
                        <textarea
                          rows={3}
                          value={adminSettingsForm.robotsTxt}
                          onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, robotsTxt: e.target.value })}
                          placeholder="User-agent: *"
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Checkout & Monetization */}
                  <div className="border-t border-slate-900 pt-4 space-y-4">
                    <h4 className="text-[11px] font-mono font-bold text-slate-350 uppercase tracking-widest flex items-center gap-1.5">
                      <Coins className="w-3.5 h-3.5 text-slate-400" />
                      Monetização e Finalização de Compra
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          PREÇO COMERCIAL PUBLICADO
                        </label>
                        <input
                          type="text"
                          value={adminSettingsForm.price}
                          onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, price: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          LINK DE REDIRECIONAMENTO (CHECKOUT)
                        </label>
                        <input
                          type="text"
                          value={adminSettingsForm.checkoutUrl}
                          onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, checkoutUrl: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Copywriting & Textos do Portal */}
                  <div className="border-t border-slate-900 pt-4 space-y-4">
                    <h4 className="text-[11px] font-mono font-bold text-slate-350 uppercase tracking-widest flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      Textos do Portal &amp; Garantia Kiwify
                    </h4>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          TÍTULO DE DESTAQUE DE VENDAS
                        </label>
                        <input
                          type="text"
                          value={adminSettingsForm.salesTitle}
                          onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, salesTitle: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          SUBTÍTULO DESCRITIVO DE VENDAS
                        </label>
                        <textarea
                          rows={2}
                          value={adminSettingsForm.salesSubtitle}
                          onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, salesSubtitle: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          TEXTO DE DIREITOS / RODAPÉ
                        </label>
                        <input
                          type="text"
                          value={adminSettingsForm.copyrightFooter}
                          onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, copyrightFooter: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                            TÍTULO DA GARANTIA (KIWIFY)
                          </label>
                          <input
                            type="text"
                            value={adminSettingsForm.guaranteeTitle}
                            onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, guaranteeTitle: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                            SUBTÍTULO DA GARANTIA (KIWIFY)
                          </label>
                          <input
                            type="text"
                            value={adminSettingsForm.guaranteeSubtitle}
                            onChange={(e) => setAdminSettingsForm({ ...adminSettingsForm, guaranteeSubtitle: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {settingsSuccess && (
                    <div className="p-3 bg-emerald-950/40 border border-emerald-900 rounded text-emerald-400 text-xs font-mono">
                      {settingsSuccess}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded text-white font-mono text-xs font-bold uppercase transition hover:brightness-110 flex items-center gap-2 cursor-pointer"
                      style={{ backgroundColor: "var(--button-brand)" }}
                    >
                      Salvar Todas as Configurações
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar Column: Criador de Usuário & Redefinir Credenciais do Admin */}
            <div className="space-y-8">
              {/* COMPONENT: CRIADOR DE USUÁRIO */}
              <div className="bg-slate-950 border border-slate-900 rounded-xl p-5 space-y-5">
                <div className="border-b border-slate-900 pb-3">
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest font-mono flex items-center gap-2">
                    <User className="w-4 h-4 text-[#ae263a]" />
                    Criador de Usuários (Membros)
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">Crie credenciais que desbloqueiam o portal de acesso imediato.</p>
                </div>

                <form onSubmit={handleCreateUser} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase block">IDENTIFICADOR DO MEMBRO</label>
                    <input
                      type="text"
                      placeholder="Email ou Codigo de Login"
                      required
                      value={newUserEmail}
                      onChange={(e) => setNewUserEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-250 text-xs rounded font-mono"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase block">CHAVE DE ACESSO</label>
                    <input
                      type="text"
                      placeholder="Senha para o membro"
                      required
                      value={newUserPassword}
                      onChange={(e) => setNewUserPassword(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-250 text-xs rounded font-mono"
                    />
                  </div>

                  {userSuccessMessage && (
                    <div className="p-2.5 bg-emerald-950/40 border border-emerald-900 rounded text-emerald-400 text-xs font-mono">
                      {userSuccessMessage}
                    </div>
                  )}

                  {userErrorMessage && (
                    <div className="p-2.5 bg-[#701a28]/10 border border-[#701a28]/40 text-xs text-red-400 font-mono">
                      {userErrorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2 bg-slate-900 hover:bg-slate-850 border border-slate-820 rounded text-white font-mono text-xs font-bold uppercase transition"
                  >
                    Homologar Novo Membro
                  </button>
                </form>

                {/* Users List */}
                <div className="space-y-3 pt-3 border-t border-slate-900">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">Membros Ativos</span>
                    <div className="relative max-w-[120px]">
                      <Search className="absolute left-2 top-2 w-3 h-3 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Buscar..."
                        value={usersSearchQuery}
                        onChange={(e) => setUsersSearchQuery(e.target.value)}
                        className="w-full pl-7 pr-2 py-1 bg-slate-900 border border-slate-850 text-slate-350 text-[10px] rounded font-mono"
                      />
                    </div>
                  </div>

                  <div className="max-h-[180px] overflow-y-auto space-y-2 pr-1">
                    {filteredUsers.length === 0 ? (
                      <p className="text-[10px] font-mono text-slate-500 text-center py-4">Nenhum membro cadastrado.</p>
                    ) : (
                      filteredUsers.map((usr) => (
                        <div key={usr.id} className="p-2.5 bg-slate-900 border border-slate-880 rounded-lg flex items-center justify-between gap-2">
                          <div className="space-y-0.5 min-w-0">
                            <p className="text-xs text-slate-200 font-mono font-medium truncate">{usr.email}</p>
                            <p className="text-[10px] text-slate-500 font-mono">Chave: <span className="text-slate-300 font-bold">{usr.passwordText}</span></p>
                          </div>
                          <button
                            onClick={() => handleDeleteUser(usr.id)}
                            className="p-1.5 hover:bg-slate-800 rounded border border-transparent hover:border-slate-700/80 text-slate-400 hover:text-red-400 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* COMPONENT: RENOMEAR CREDENCIAIS DO ADMIN */}
              <div className="bg-slate-950 border border-slate-900 rounded-xl p-5 space-y-4">
                <div className="border-b border-slate-900 pb-3">
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest font-mono flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#ae263a]" />
                    Renomear Acesso Admin
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    Altere o identificador (usuarioadmin) e senha mestra de entrada no mesmo painel unificado.
                  </p>
                </div>

                <form onSubmit={handleChangeAdminCreds} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase block">IDENTIFICADOR ADMIN</label>
                    <input
                      type="text"
                      placeholder="usuarioadmin"
                      required
                      value={adminRenameUsername}
                      onChange={(e) => setAdminRenameUsername(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-250 text-xs rounded font-mono"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase block">SENHA GERAL ADMIN</label>
                    <input
                      type="password"
                      placeholder="admin"
                      required
                      value={adminRenamePassword}
                      onChange={(e) => setAdminRenamePassword(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-850 text-slate-250 text-xs rounded font-mono"
                    />
                  </div>

                  {adminCredsSuccess && (
                    <div className="p-2 bg-emerald-950/40 border border-emerald-900 rounded text-emerald-400 text-xs font-mono">
                      {adminCredsSuccess}
                    </div>
                  )}

                  {adminCredsError && (
                    <div className="p-2 bg-[#701a28]/10 border border-[#701a28]/40 text-xs text-red-400 font-mono">
                      {adminCredsError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2 bg-slate-900 hover:bg-slate-850 border border-slate-820 rounded text-white font-mono text-xs font-bold uppercase transition"
                  >
                    Renomear Credenciais
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. PROTECTED CUSTOMER PORTAL / AREA DE MEMBROS */}
      {currentView === "user" && currentUser?.role === "user" && (
        <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-6 flex-1">
          {/* Header */}
          <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-[10px] px-2 py-0.5 font-mono uppercase bg-emerald-950 text-emerald-400 border border-emerald-900 rounded font-bold">
                  BANCADA AUTORIZADA
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  Membro: {currentUser.username}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold font-display text-white">
                Sua Premium Omnidox - {settings.logoText}
              </h2>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-4 py-2 border border-slate-800 hover:bg-slate-900 rounded-xl text-xs font-mono text-slate-300 transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sair da Bancada
            </button>
          </div>

          {/* PAINEL DE CONFIGURAÇÃO DA CHAVE API GEMINI */}
          <div className="bg-slate-950 border border-slate-900 rounded-2xl p-5 md:p-6 space-y-4 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-900 pb-3">
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest font-mono flex items-center gap-2">
                  <Key className="w-4 h-4 text-emerald-400" />
                  Ativar Chave API Gemini Estrita
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Adicione sua chave pessoal da Google para obter respostas rápidas e ilimitadas em tempo real.
                </p>
              </div>
              <div>
                {customGeminiKey ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Chave Ativa (Navegador)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] rounded bg-slate-900 text-slate-450 border border-slate-880 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    Modo Sandbox (Sem Chave)
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-end sm:items-center">
              <div className="flex-1 w-full space-y-1">
                <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                  Sua Chave API (AI_STUDIO_KEY ou GEMINI_API_KEY)
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Cole aqui seu token de API do Gemini (Ex: AIzaSy...)"
                    value={keyInputValue}
                    onChange={(e) => setKeyInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSaveCustomKey(keyInputValue);
                      }
                    }}
                    className="w-full pl-3 pr-16 py-2 bg-slate-900 border border-slate-850 text-slate-200 text-xs rounded-lg focus:outline-none focus:border-slate-700 font-mono placeholder:text-slate-700"
                  />
                  {keyInputValue && (
                    <button
                      type="button"
                      onClick={() => {
                        setKeyInputValue("");
                        handleSaveCustomKey("");
                      }}
                      className="absolute right-2.5 top-2 text-xs text-slate-550 hover:text-red-400 font-mono hover:underline"
                    >
                      Limpar
                    </button>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-auto shrink-0 self-end">
                <button
                  type="button"
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white font-mono text-xs font-bold uppercase transition rounded-xl relative cursor-pointer font-semibold"
                  onClick={() => handleSaveCustomKey(keyInputValue)}
                >
                  Confirmar Ativação
                </button>
              </div>
            </div>

            {keySavedFeedback && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] text-emerald-400 font-mono flex items-center gap-1"
              >
                ✓ Chave API atualizada e ativada localmente com sucesso!
              </motion.div>
            )}

            <p className="text-[10px] text-slate-500 leading-normal font-mono">
              🔒 **Segurança do Desenvolvedor:** Sua chave nunca é salva nos servidores do portal. Ela fica armazenada exclusivamente no seu navegador (`localStorage`) e é enviadas com requisições seguras via headers HTTP.
            </p>
          </div>

          {/* Member Area Two-Column Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT COLUMN: DeepMind Prompt Generator & History */}
            <div className="lg:col-span-7 space-y-6">
              {/* Core Orquestrador Form */}
              <div className="bg-slate-950 border border-slate-900 rounded-xl p-5 md:p-6 space-y-6 shadow-md">
                <div className="border-b border-slate-900 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-emerald-400 animate-pulse" />
                      Gerador de Prompts DeepMind
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-1">Transforme ideias simples de software, e-commerce, site, SaaS ou IA em prompts sênior reais.</p>
                  </div>
                  {orchestratorResult?.isFallback && (
                    <span className="px-2 py-0.5 text-[9px] uppercase font-mono tracking-wider bg-amber-500/10 text-amber-500 border border-amber-550/30 rounded">
                      Fallback Local Ativo
                    </span>
                  )}
                </div>

                <form onSubmit={handleOrchestrate} className="space-y-5">
                  {orchestratorError && (
                    <div className="p-3 rounded-lg bg-[#701a28]/10 border border-[#701a28]/35 text-xs text-red-400 font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{orchestratorError}</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                      1. Sua Ideia de Software, E-commerce ou Criação
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Ex: Criar uma página de vendas e checkout integrada ao gateway de faturamento com split automático para co-produtores."
                      value={orchestratorPrompt}
                      onChange={(e) => setOrchestratorPrompt(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-slate-700 font-sans rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase block">
                      Foco de Orquestração do Prompt (Intenção Seletiva)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setOrchestrationFocus("visual_product")}
                        className={`p-3.5 text-left rounded-xl transition-all border flex flex-col justify-between h-24 cursor-pointer outline-none ${
                          orchestrationFocus === "visual_product"
                            ? "bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-sm shadow-amber-500/5 scale-[1.02]"
                            : "bg-slate-900/60 border-slate-850 hover:border-slate-800 text-slate-400"
                        }`}
                      >
                        <span className="text-[9px] font-bold font-mono tracking-widest text-slate-500 uppercase">Estilo Gamma</span>
                        <span className="text-xs font-bold leading-tight flex items-center gap-1.5 mt-1.5 font-sans">
                          🎨 Produto/UI
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrchestrationFocus("website")}
                        className={`p-3.5 text-left rounded-xl transition-all border flex flex-col justify-between h-24 cursor-pointer outline-none ${
                          orchestrationFocus === "website"
                            ? "bg-sky-500/10 border-sky-500/40 text-sky-400 shadow-sm shadow-sky-500/5 scale-[1.02]"
                            : "bg-slate-900/60 border-slate-850 hover:border-slate-800 text-slate-400"
                        }`}
                      >
                        <span className="text-[9px] font-bold font-mono tracking-widest text-slate-500 uppercase">Estilo Stripe</span>
                        <span className="text-xs font-bold leading-tight flex items-center gap-1.5 mt-1.5 font-sans">
                          ⚡ Website/Conversão
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrchestrationFocus("blog")}
                        className={`p-3.5 text-left rounded-xl transition-all border flex flex-col justify-between h-24 cursor-pointer outline-none ${
                          orchestrationFocus === "blog"
                            ? "bg-[#851D1D]/15 border-[#851D1D]/50 text-red-400 shadow-sm shadow-red-500/5 scale-[1.02]"
                            : "bg-slate-900/60 border-slate-850 hover:border-slate-800 text-slate-400"
                        }`}
                      >
                        <span className="text-[9px] font-bold font-mono tracking-widest text-slate-500 uppercase">Estilo Medium</span>
                        <span className="text-xs font-bold leading-tight flex items-center gap-1.5 mt-1.5 font-sans">
                          ✍️ Blog/SEO Editorial
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrchestrationFocus("simple_tool")}
                        className={`p-3.5 text-left rounded-xl transition-all border flex flex-col justify-between h-24 cursor-pointer outline-none ${
                          orchestrationFocus === "simple_tool"
                            ? "bg-violet-500/10 border-violet-500/40 text-violet-400 shadow-sm shadow-violet-500/5 scale-[1.02]"
                            : "bg-slate-900/60 border-slate-850 hover:border-slate-800 text-slate-400"
                        }`}
                      >
                        <span className="text-[9px] font-bold font-mono tracking-widest text-slate-500 uppercase">Estilo Vercel</span>
                        <span className="text-xs font-bold leading-tight flex items-center gap-1.5 mt-1.5 font-sans">
                          🛠️ Ferramenta Leve
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrchestrationFocus("business_system")}
                        className={`p-3.5 text-left rounded-xl transition-all border flex flex-col justify-between h-24 cursor-pointer outline-none ${
                          orchestrationFocus === "business_system"
                            ? "bg-purple-500/10 border-purple-500/40 text-purple-400 shadow-sm shadow-purple-500/5 scale-[1.02]"
                            : "bg-slate-900/60 border-slate-850 hover:border-slate-800 text-slate-400"
                        }`}
                      >
                        <span className="text-[9px] font-bold font-mono tracking-widest text-slate-500 uppercase">Estilo Linear</span>
                        <span className="text-xs font-bold leading-tight flex items-center gap-1.5 mt-1.5 font-sans">
                          💼 Sistema Gestão/SaaS
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrchestrationFocus("enterprise_saas")}
                        className={`p-3.5 text-left rounded-xl transition-all border flex flex-col justify-between h-24 cursor-pointer outline-none ${
                          orchestrationFocus === "enterprise_saas"
                            ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-sm shadow-emerald-500/5 scale-[1.02]"
                            : "bg-slate-900/60 border-slate-850 hover:border-slate-800 text-slate-400"
                        }`}
                      >
                        <span className="text-[9px] font-bold font-mono tracking-widest text-slate-500 uppercase">Estilo AWS SRE</span>
                        <span className="text-xs font-bold leading-tight flex items-center gap-1.5 mt-1.5 font-sans">
                          👑 Enterprise SaaS
                        </span>
                      </button>
                    </div>
                    <p className="text-[10.5px] text-slate-400 font-mono leading-normal bg-slate-900/40 p-3 rounded-lg border border-slate-900/80">
                      {orchestrationFocus === "visual_product" && "✨ MODO PRODUTO/UI (Gamma): Focado em painéis visuais, WYSIWYG, capas elegantes de e-books e preview instantâneo. Esconde códigos complexos sob o capot e foca puro em UX premium para o usuário final."}
                      {orchestrationFocus === "website" && "⚡ MODO WEBSITES & LANDING PAGES (Stripe): Focado em conversão estonteante, landing pages profissionais, propostas de valor acima da dobra, grades bento e design responsivo otimizado."}
                      {orchestrationFocus === "blog" && "✍️ MODO BLOG & SEO EDITORIAL (Medium): Focado em legibilidade literary confortável de artigos, monetização via Adsense sem frustrar a leitura, SEO avançado e metatags estruturadas."}
                      {orchestrationFocus === "simple_tool" && "🛠️ MODO FERRAMENTAS SIMPLES (Vercel): Focado em ferramentas úteis leves que criam valor imediato sem logins complexos, salvas offline em localStorage."}
                      {orchestrationFocus === "business_system" && "💼 MODO SISTEMAS DE BUSINESS (Linear): Focado em CRM, SaaS de média complexidade, autenticação unificada segura com controle de IPs, roles (Admin/User) e auditorias empresarial."}
                      {orchestrationFocus === "enterprise_saas" && "👑 MODO ENTERPRISE SRE (AWS): Focado em microsserviços tolerantes a falhas, SRE, filas com Redis/BullMQ, Clean Architecture estrita e Sandbox de código 100% real funcional."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                        2. Categoria do Alvo
                      </label>
                      <select
                        value={orchestratorCategory}
                        onChange={(e) => setOrchestratorCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-lg focus:outline-none"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Predefinições / Presets para agilizar testes */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase block">
                        Presets Rápidos de Engenharia
                      </label>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {PRESETS.map((p, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleApplyPreset(p.text, p.category)}
                            className="px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-850 rounded text-[9px] font-mono text-slate-300 transition"
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Switches de Conformidade, Robustez e Hierarquia de UX */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pt-2 border-t border-slate-900">
                    <label className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl cursor-pointer border border-slate-850 hover:bg-slate-900/90 transition select-none">
                      <input
                        type="checkbox"
                        checked={ethicsEnabled}
                        onChange={(e) => setEthicsEnabled(e.target.checked)}
                        className="mt-1 accent-[#701a28] rounded"
                      />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-white font-mono uppercase tracking-wide">Blindagem &amp; Antialucinação</span>
                        <p className="text-[10px] text-slate-500 leading-normal">Força restrições cognitivas rígidas na IA para garantir respostas funcionais livres de alucinações.</p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl cursor-pointer border border-slate-850 hover:bg-slate-900/90 transition select-none">
                      <input
                        type="checkbox"
                        checked={robustnessEnabled}
                        onChange={(e) => setRobustnessEnabled(e.target.checked)}
                        className="mt-1 accent-[#701a28] rounded"
                      />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-white font-mono uppercase tracking-wide">Resiliência &amp; SRE</span>
                        <p className="text-[10px] text-slate-500 leading-normal">Integra requisitos de tratamento de erros Try-Catch-Finally e logs estruturados JSON.</p>
                      </div>
                    </label>

                    <label id="checkbox-admin-system-toggle" className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl cursor-pointer border border-slate-850 hover:bg-slate-900/90 transition select-none">
                      <input
                        type="checkbox"
                        checked={adminSystemEnabled}
                        onChange={(e) => setAdminSystemEnabled(e.target.checked)}
                        className="mt-1 accent-[#701a28] rounded"
                      />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-white font-mono uppercase tracking-wide">Admin Inteligente</span>
                        <p className="text-[10px] text-slate-500 leading-normal">Injeta de forma integral o Módulo de Login Único, SEO, Uploads, links, APIs e Pixels em 1-clique.</p>
                      </div>
                    </label>

                    <label id="checkbox-visual-priority-toggle" className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl cursor-pointer border border-slate-850 hover:bg-slate-900/90 transition select-none animate-pulse-subtle">
                      <input
                        type="checkbox"
                        checked={visualPriorityEnabled}
                        onChange={(e) => setVisualPriorityEnabled(e.target.checked)}
                        className="mt-1 accent-[#701a28] rounded"
                      />
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-bold text-amber-400 font-mono uppercase tracking-wide flex items-center gap-1">
                          <span>✨ Prioridade UX / LP</span>
                        </span>
                        <p className="text-[10px] text-slate-400 leading-normal">Força a IA a focar 1º na Landing Page premium, no Produto e no UX Mobile, reduzindo o privilégio do admin.</p>
                      </div>
                    </label>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setOrchestratorPrompt("");
                        setOrchestratorResult(null);
                        setOrchestratorError(null);
                      }}
                      className="px-4 py-2 border border-slate-800 hover:bg-slate-900 rounded-lg text-xs font-mono text-slate-400 transition"
                    >
                      Limpar
                    </button>
                    <button
                      type="submit"
                      disabled={orchestratorLoading}
                      className="px-6 py-2.5 rounded-lg text-white font-mono text-xs font-bold uppercase tracking-wider transition hover:brightness-115 flex items-center gap-2 cursor-pointer"
                      style={{ backgroundColor: "var(--button-brand)" }}
                    >
                      {orchestratorLoading ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          GERANDO PROMPT...
                        </>
                      ) : (
                        "INTEGRAR PROMPT DEEPMIND"
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Orchestrated Outcome Presentation */}
              <AnimatePresence>
                {orchestratorResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Prompt Output Card */}
                    <div className="bg-slate-950 border border-slate-900 rounded-xl overflow-hidden shadow-xl">
                      <div className="bg-slate-900 px-5 py-4 flex items-center justify-between border-b border-slate-850">
                        <div className="flex items-center space-x-2 text-white font-semibold text-xs font-mono tracking-widest uppercase">
                          <Terminal className="w-4 h-4 text-emerald-400" />
                          <span>PROMPT ORQUESTRADO DE NÍVEL SÊNIOR</span>
                        </div>
                        <button
                          onClick={() => handleCopyToClipboard(orchestratorResult.orchestratedPrompt, true)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-md text-[10px] font-mono text-slate-300 transition"
                        >
                          {copiedPrompt ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copiada</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar Prompt</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-6 bg-[#090b0e] overflow-x-auto text-[13px] font-mono text-slate-200 leading-relaxed whitespace-pre-wrap select-all selection:bg-teal-500/30 selection:text-white">
                        {orchestratorResult.orchestratedPrompt}
                      </div>
                    </div>

                    {/* Metadata & Technical Justifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-950 border border-slate-900 rounded-xl p-6 space-y-4">
                        <h4 className="text-xs font-bold font-mono text-white/90 uppercase tracking-widest border-b border-slate-900 pb-2">
                          Justificativas Técnicas do Modelo
                        </h4>
                        <ul className="space-y-2.5 text-xs text-slate-350">
                          {orchestratorResult.technicalJustification.map((just, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-[#ae263a] font-mono select-none">►</span>
                              <span className="leading-relaxed">{just}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-950 border border-slate-900 rounded-xl p-6 space-y-4">
                        <h4 className="text-xs font-bold font-mono text-white/90 uppercase tracking-widest border-b border-slate-900 pb-2">
                          Detalhamento de Blindagem Adotado
                        </h4>
                        <div className="space-y-4 text-xs">
                          {orchestratorResult.ethicalMitigations && (
                            <div className="space-y-1 bg-slate-900/60 p-3 rounded-lg border border-slate-850">
                              <span className="text-[10px] font-mono text-amber-500 uppercase font-bold">Sandbox &amp; Antialucinação</span>
                              <p className="text-slate-350 leading-relaxed">{orchestratorResult.ethicalMitigations}</p>
                            </div>
                          )}
                          {orchestratorResult.observabilityAdditions && (
                            <div className="space-y-1 bg-slate-900/60 p-3 rounded-lg border border-slate-850">
                              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Tratamento de Exceções Ativo</span>
                              <p className="text-slate-350 leading-relaxed">{orchestratorResult.observabilityAdditions}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Searchable History */}
              <div className="bg-slate-950 border border-slate-900 rounded-xl p-5 space-y-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-b border-slate-900 pb-3">
                  <div>
                    <h3 className="text-xs font-bold font-mono text-slate-200 uppercase tracking-widest flex items-center gap-1.5">
                      <History className="w-4 h-4 text-teal-400" />
                      Histórico Local de Trabalhos
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">Sua bancada retém os prompts criados offline de forma cômoda.</p>
                  </div>
                  <div className="relative w-full max-w-[200px]">
                    <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Pesquisar histórico..."
                      value={historySearchQuery}
                      onChange={(e) => setHistorySearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg font-mono focus:outline-none focus:border-slate-700"
                    />
                  </div>
                </div>

                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                  {filteredHistory.length === 0 ? (
                    <p className="text-xs text-slate-500 text-center py-6 font-mono font-medium">Nenhum registro encontrado.</p>
                  ) : (
                    filteredHistory.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleRestoreFromHistory(item)}
                        className="p-3 bg-slate-900/60 border border-slate-850 hover:bg-slate-900 hover:border-slate-700 rounded-xl flex items-center justify-between gap-4 cursor-pointer transition"
                      >
                        <div className="space-y-1 text-left min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 text-[8px] bg-slate-950 text-slate-300 font-bold tracking-wider font-mono uppercase rounded border border-slate-800">
                              {item.category}
                            </span>
                            <span className="text-[9px] text-slate-500 font-mono">{item.timestamp}</span>
                            {item.isFallback && (
                              <span className="px-1 text-[8px] uppercase font-mono tracking-wider bg-amber-500/10 text-amber-500 border border-amber-550/20 rounded">
                                Fallback
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-200 truncate pr-4 font-mono font-medium">{item.originalInput}</p>
                        </div>
                        <div className="flex items-center space-x-1.5 shrink-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyToClipboard(item.orchestratedPrompt, false, item.id);
                            }}
                            className="p-1.5 hover:bg-slate-850 border border-transparent hover:border-slate-800 rounded font-mono text-[10px] text-slate-400 hover:text-slate-200 transition"
                          >
                            {copiedResultId === item.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <button
                            onClick={(e) => handleDeleteHistoryItem(item.id, e)}
                            className="p-1.5 hover:bg-slate-850 border border-transparent hover:border-slate-800 rounded text-slate-400 hover:text-red-400 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Brainstorm & Chat Ideas Co-pilot */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="bg-slate-950 border border-slate-900 rounded-xl p-5 md:p-6 space-y-4 shadow-md flex flex-col h-full min-h-[500px]">
                <div className="border-b border-slate-900 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                      Engenheiro de Prompt Sênior (Bate-Papo)
                    </h3>
                    <p className="text-[10px] text-slate-550 font-mono mt-0.5">Troque ideias em tempo real para desenhar comércios, SaaS ou IA.</p>
                  </div>
                  <span className="px-1.5 py-0.5 text-[8px] uppercase font-mono tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                    Sênior Co-pilot
                  </span>
                </div>

                {/* Messages Feed Container */}
                <div className="flex-1 overflow-y-auto max-h-[500px] min-h-[400px] space-y-4 pr-1 scrollbar-thin select-text">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col space-y-1 max-w-[90%] md:max-w-[85%] ${
                        msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                      }`}
                    >
                      <span className="text-[9px] font-mono text-slate-500 uppercase">
                        {msg.role === "user" ? "Você" : "Engenheiro Sênior"}
                      </span>
                      <div
                        className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                          msg.role === "user"
                            ? "bg-slate-900 border border-slate-800 text-slate-200 rounded-br-none font-mono"
                            : "bg-slate-950 border border-slate-900 text-slate-300 rounded-bl-none font-sans"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        ) : (
                          <div className="markdown-body space-y-2 prose prose-invert max-w-none text-slate-350">
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {chatLoading && (
                    <div className="flex flex-col space-y-1 items-start max-w-[85%] mr-auto">
                      <span className="text-[9px] font-mono text-slate-500 uppercase font-bold">Engenheiro Sênior</span>
                      <div className="p-3 bg-slate-900/60 border border-slate-850 rounded-2xl rounded-bl-none text-slate-400 text-xs flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                        <span>Arquitetando recomendações operacionais...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Submit Form */}
                <form onSubmit={handleSendChatMessage} className="pt-3 border-t border-slate-905 flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ex: Como estruturar uma loja virtual com regras para coprodutor?"
                    disabled={chatLoading}
                    className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg focus:outline-none focus:border-slate-700 font-mono placeholder:text-slate-600"
                  />
                  <button
                    type="submit"
                    disabled={chatLoading || !chatInput.trim()}
                    className="px-4 py-2.5 rounded-lg text-white font-mono text-xs font-bold uppercase transition hover:brightness-110 shrink-0 flex items-center justify-center cursor-pointer disabled:opacity-40"
                    style={{ backgroundColor: "var(--button-brand)" }}
                  >
                    {chatLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Enviar"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER COMMON TO ALL SECURE ACCESSED VIEWS EXCEPT SALES */}
      {currentView !== "sales" && (
        <footer className="border-t border-slate-900 bg-slate-950 py-4 px-4 text-center text-[10px] text-slate-500 font-mono select-none">
          {settings.copyrightFooter}
        </footer>
      )}
    </div>
  );
}
