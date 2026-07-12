import React, { useState } from "react";
import {
  Shield,
  Sparkles,
  Lock,
  Terminal,
  Cpu,
  Layers,
  Zap,
  Play,
  Check,
  ChevronDown,
  Activity,
  Code,
  Image,
  Video,
  ArrowRight,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortalSettings } from "../types";

interface SalesPageProps {
  settings: PortalSettings;
  setCurrentView: (view: "sales" | "login" | "admin" | "user") => void;
  setLoginError: (err: string | null) => void;
}

export default function SalesPage({ settings, setCurrentView, setLoginError }: SalesPageProps) {
  // Interactive Simulator State
  const [simulatorInput, setSimulatorInput] = useState("Criar SaaS de Delivery de comida local com painel e pagamentos");
  const [simulatorStep, setSimulatorStep] = useState<"idle" | "orchestrating" | "ready">("idle");
  const [activeEngineTab, setActiveEngineTab] = useState<"ux" | "admin" | "ethics" | "sre">("ux");
  
  // Before & After visual tab state
  const [comparisonTab, setComparisonTab] = useState<"lazy" | "prioritized">("prioritized");

  // FAQ state
  const [openedFaq, setOpenedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "O que é o Módulo de Prioridade Visual de UX?",
      a: "É nossa inteligência proprietária de estruturação de prompts. Ela instrui rigorosamente a IA a focar primeiro na Landing Page premium, na Experiência Central do Produto e em layouts Mobile-First de alta fidelidade antes de gerar telas vazias de Admin ou de Login, evitando que o projeto se resuma a tabelas genéricas."
    },
    {
      q: "Como funciona o Módulo Admin Inteligente?",
      a: "Este módulo injeta regras de backend complexas (como roteadores, logins, SEO otimizado, pixels de conversão e checkouts integrados) de forma silenciosa e polida em segundo plano. Ele apoia o negócio sem roubar o protagonismo visual da sua interface do usuário."
    },
    {
      q: "A plataforma é compatível com quais modelos de IA?",
      a: "Nossos prompts orquestrados extraem o desempenho máximo absoluto das IAs líderes, como Gemini Pro, ChatGPT (GPT-4o), Claude 3.5 Sonnet, DeepSeek R1 e modelos locais como LLaMA 3."
    },
    {
      q: "Como a resiliência e tratamento de erros do SRE são formados?",
      a: "Nossos prompts obrigam a IA a envelopar todas as requisições, faturamentos, rotas e formulários críticos com tratamentos de erros Try-Catch-Finally, logs em formato JSON auditáveis e preventivos, extinguindo o terrível hábito de IAs deixarem comentários '// TODO' no meio do código."
    }
  ];

  const handleRunSimulation = () => {
    if (!simulatorInput.trim()) return;
    setSimulatorStep("orchestrating");
    setTimeout(() => {
      setSimulatorStep("ready");
    }, 1500);
  };

  // Pre-configured dynamic code response based on active test tab to visually delight the buyer
  const getOrchestrationResponseExample = () => {
    switch (activeEngineTab) {
      case "ux":
        return `# ─── ORDEM OBRIGATÓRIA DE CONSTRUÇÃO DE INTERFACE ───
1. LANDING PAGE PREMIUM (Hero cinematográfica, painel do produto interativo, tabelas de preço e FAQ expansível)
2. PRODUTO PRINCIPAL (A rota core de usabilidade da ferramenta de delivery)
3. WORKSPACE / EDICÃO (Visualização de pedidos rápidos em tempo real com estado visual polido)
4. RESPONSIVIDADE MOBILE-FIRST (Drawer elegante tátil para menu de navegação, stack compacto vertical, área de toque com mínimo de 44px)
5. DASHBOARD DO CLIENTE & SISTEMA DE LOGIN MINIMALISTA
6. PAINEL ADMIN GLOBAL (Silencioso em segundo plano, sem dominar a UX core!)`;
      case "admin":
        return `# ─── ESPECIFICAÇÃO DE RETROCOMPATIBILIDADE ADMIN INTELIGENTE ───
- Injetar no backend rotas REST estritas para login modularizado e autenticação sem vazamento de chaves lógicas.
- Acoplar metatags declarativas para SEO sitemap dinâmico, metadados OpenGraph e scripts de pixel comercial unificados.
- Integrar endpoint de webhook idempotente compatível com gateways modernos (como Kirvano e Stripe) salvando as assinaturas ativas em repositórios de dados seguros.`;
      case "ethics":
        return `# ─── DIRETRIZ CONTRA HALLUCINACTIONS & COGNITIVE SECURITY ───
- Proibido o uso de dependências fictícias, links inexistentes de CDN ou documentações desatualizadas.
- Sandbox lógica ativa: A IA deve retornar apenas códigos robustos e compiláveis do zero, ignorando palpites rasos e placeholders.`;
      case "sre":
        return `# ─── PADRÕES DE CODIFICACÃO SRE & CONTINGÊNCIA ───
- Envelopar todas as transações com blocos 'try { ... } catch (error) { ... } finally { ... }' detalhados.
- Outputs com Winston logger formatados exclusivamente em JSON estruturado para rápido parsing de logs e auditoria DevOps.`;
    }
  };

  return (
    <div className="w-full bg-[#07090e] text-slate-300 selection:bg-rose-500/30 selection:text-white overflow-hidden pb-16 relative">
      
      {/* Cinematic Ambient Glow Sources */}
      <div className="absolute top-[8%] left-[-15%] w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-15%] w-[700px] h-[700px] bg-purple-950/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-indigo-950/10 rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER */}
      <header className="border-b border-slate-900 bg-slate-950/85 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-600 to-red-900 p-[1px] shadow-lg shadow-rose-950/10">
              <div className="w-full h-full bg-[#07090e] rounded-xl flex items-center justify-center">
                <Shield className="w-4.5 h-4.5 text-rose-500" />
              </div>
            </div>
            <span className="text-lg md:text-xl font-bold font-sans tracking-tight text-white flex items-center gap-2">
              {settings.logoText}
              <span className="text-[9px] bg-rose-500/15 text-rose-400 font-mono border border-rose-500/25 px-1.5 py-0.5 rounded uppercase font-bold">
                V4.0 PRO
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500 hidden md:inline-block font-mono bg-slate-900 px-2 py-1 rounded border border-slate-850">
              ⚡ 4 Motores de Alta Conversão Ativos
            </span>
            <button
              onClick={() => {
                setLoginError(null);
                setCurrentView("login");
              }}
              className="group flex items-center gap-1.5 px-3.5 py-2 border border-slate-800 rounded-lg text-xs font-mono tracking-wider hover:bg-slate-900 hover:border-slate-700 hover:text-white transition-all bg-slate-950"
              id="header-login-btn"
            >
              <Lock className="w-3.5 h-3.5 text-rose-500 group-hover:scale-110 transition-transform" />
              Bancada de Trabalho
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 border-b border-slate-950 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800/80 px-4 py-2 rounded-full text-xs font-mono tracking-wide text-slate-300 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 font-bold">
              Método Inédito de Engenharia de Prompt de Ana Caroline Lamas
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] font-sans max-w-4xl mx-auto">
            Prompts Orquestrados com{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-500 to-purple-500">
              Prioridade Visual de UX
            </span>{" "}
            e Robustez SRE
          </h1>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Sua IA vive criando apenas páginas de login vazias com dashboards que nem funcionam? Nosso orquestrador estrutural força o modelo a desenhar primeiro a <strong>Landing Page Premium de Conversão</strong>, depois a experiência real do produto e as resiliências técnicas de infraestrutura.
          </p>

          {/* Core Interactive CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={settings.checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4.5 rounded-xl text-white font-bold text-sm transition-all shadow-2xl hover:brightness-110 flex items-center justify-center gap-2.5 hover:translate-y-[-2px]"
              style={{ backgroundColor: "var(--button-brand)", backgroundImage: "linear-gradient(to right, rgb(159, 18, 57), rgb(112, 26, 40))" }}
              id="cta-sales-hero-primary"
            >
              <Zap className="w-4 h-4 fill-current text-amber-300" />
              Garantir Minha Licença Vitalícia • {settings.price}
            </a>
            <a
              href="#sandbox-simulator-section"
              className="w-full sm:w-auto px-8 py-4.5 border border-slate-800 rounded-xl bg-slate-950/70 text-slate-300 font-bold text-sm hover:bg-slate-900 transition-all flex items-center justify-center gap-2 hover:border-slate-700"
              id="cta-sales-hero-secondary"
            >
              <Play className="w-3.5 h-3.5 text-slate-400" />
              Testar Simulador Interativo
            </a>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            🏷️ {settings.billingModel} • Assinatura 100% Protegida com 7 Dias de Garantia Estrita
          </p>

          {/* Official Commercial Clarification Notice */}
          <div className="pt-4 max-w-xl mx-auto bg-slate-950/70 border border-rose-950/40 rounded-2xl p-4 text-left shadow-2xl">
            <p className="text-xs text-slate-400 flex gap-3 leading-relaxed">
              <Shield className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>Nota Comercial Mandatória:</strong> Este é um software avançado de computação cognitiva voltado à automação e geração de prompts estruturados para desenvolvedores. Não geramos e-books, infoprodutos prontos ou layouts estáticos simplificados. Focamos em entregar a excelência máxima e robustez técnica para suas IAs.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKSPACE SIMULATOR */}
      <section id="sandbox-simulator-section" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-b border-slate-900 scroll-mt-20">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] font-mono text-rose-500 font-bold uppercase tracking-widest block">
            LABORATÓRIO COGNITIVO INTERATIVO
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Assista à Orquestração em Tempo Real
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Digite sua ideia de aplicativo abaixo e acione o simulador para ver como nossos 4 motores acoplam diretrizes técnicas implacáveis.
          </p>
        </div>

        <div className="bg-slate-950 rounded-2xl border border-slate-850 shadow-2xl p-5 md:p-7 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-600 to-transparent animate-pulse" />
          
          <div className="flex flex-wrap items-center justify-between border-b border-slate-900 pb-4 mb-6 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-rose-600 animate-ping absolute" />
              <div className="w-3.5 h-3.5 rounded-full bg-rose-600 relative" />
              <span className="text-xs font-mono text-white font-bold uppercase tracking-wide">Analizador de Motores Cognitivos v4.0</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              SRE Mode Active
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Input Side */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest block">
                  Sua Solicitação Rápida em Linguagem Natural:
                </label>
                <textarea
                  value={simulatorInput}
                  onChange={(e) => setSimulatorInput(e.target.value)}
                  placeholder="Ex: criar um app de finanças..."
                  className="w-full text-xs font-mono p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-rose-950 transition focus:ring-1 focus:ring-rose-950 min-h-[120px] resize-none leading-relaxed"
                />
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleRunSimulation}
                  disabled={simulatorStep === "orchestrating"}
                  className="w-full py-4.5 bg-gradient-to-r from-red-950 to-rose-700 hover:brightness-110 text-white font-mono font-bold uppercase text-xs rounded-xl border border-rose-500/30 transition shadow-lg flex items-center justify-center gap-2"
                >
                  {simulatorStep === "orchestrating" ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      ALINHANDO MOTORES DE UX E SRE...
                    </>
                  ) : (
                    <>
                      <Cpu className="w-4 h-4 text-rose-400" />
                      ORQUESTRAR COM 4 MOTORES
                    </>
                  )}
                </button>
                <p className="text-[10px] text-slate-500 leading-normal text-center">
                  💡 Injeta de forma automática os blocos técnicos de prioridade visual, resiliência exata, admin invisível e sandbox.
                </p>
              </div>
            </div>

            {/* Output Panel Side */}
            <div className="lg:col-span-7 bg-[#0c0e12] rounded-xl border border-slate-900 p-4 md:p-5 flex flex-col justify-between min-h-[300px] relative">
              {simulatorStep === "idle" && (
                <div className="my-auto text-center space-y-3">
                  <Terminal className="w-10 h-10 text-slate-700 mx-auto" />
                  <span className="text-xs font-mono text-slate-500 block">Escreva o comando e clique no botão para obter o prompt blindado...</span>
                </div>
              )}

              {simulatorStep === "orchestrating" && (
                <div className="my-auto text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-12 h-12 rounded-full border-2 border-t-rose-500 border-slate-900 animate-spin mx-auto" />
                    <Sparkles className="w-5 h-5 text-amber-400 absolute top-3.5 left-3.5 animate-bounce" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-emerald-400 font-bold block animate-pulse">Orquestrando Sandbox de Ana Caroline Lamas...</span>
                    <span className="text-[9px] font-mono text-slate-600 block">Processando barreira Try-Catch & Hierarquia Visual de LP</span>
                  </div>
                </div>
              )}

              {simulatorStep === "ready" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4 h-full flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between border-b border-slate-900/40 pb-2.5">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/40 px-2 py-0.5 rounded font-bold uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Pronto para Fornos de IA (v4.0)
                    </span>
                    <span className="text-[9px] font-mono text-slate-500">Escopo Rigoroso Ativo</span>
                  </div>

                  {/* Engine tab selector */}
                  <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950 rounded-lg border border-slate-900">
                    {[
                      { id: "ux", label: "1. Prioridade UX" },
                      { id: "admin", label: "2. Admin Inteligente" },
                      { id: "ethics", label: "3. Blindagem" },
                      { id: "sre", label: "4. Resiliência SRE" }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveEngineTab(tab.id as any)}
                        className={`text-[9px] font-mono py-1 rounded transition-all text-center block ${activeEngineTab === tab.id ? "bg-rose-950/45 text-rose-400 font-bold border border-rose-900/35" : "text-slate-555 hover:text-slate-350"}`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Code block output display */}
                  <div className="bg-slate-950 rounded-lg p-3.5 border border-slate-900 max-h-[140px] overflow-y-auto text-[10px] font-mono text-slate-300">
                    <pre className="whitespace-pre-wrap leading-normal">{getOrchestrationResponseExample()}</pre>
                  </div>

                  <div className="pt-3 border-t border-slate-900/50 flex justify-between items-center text-[9px] font-mono text-slate-500">
                    <span>🛡️ Atributos cognitivos injetados de forma mandatória</span>
                    <span className="text-amber-400 flex items-center gap-1">★ 100% Compilável</span>
                  </div>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* BENCHMARK COMPARISON SECTIONS - ANTES VS DEPOIS */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-b border-slate-900">
        <div className="text-center space-y-3 mb-10">
          <span className="text-[11px] font-mono text-rose-500 font-bold uppercase tracking-widest block">
            ANÁLISE DE IMPACTO COMERCIAL
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Adeus ao Gênio do Admin Vazio
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Compare o comportamento comum de geração de aplicativos versus a nossa orquestração com hierarquia orientada a conversão.
          </p>
        </div>

        {/* Tab triggers */}
        <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-900 max-w-md mx-auto mb-8">
          <button
            onClick={() => setComparisonTab("lazy")}
            className={`w-1/2 font-mono text-xs py-3 rounded-lg transition-all ${comparisonTab === "lazy" ? "bg-red-950/40 text-red-400 font-bold border border-red-900/30" : "text-slate-400 hover:text-slate-200"}`}
          >
            ❌ Geração Convencional (IA Sem Leme)
          </button>
          <button
            onClick={() => setComparisonTab("prioritized")}
            className={`w-1/2 font-mono text-xs py-3 rounded-lg transition-all ${comparisonTab === "prioritized" ? "bg-emerald-950/40 text-emerald-400 font-bold border border-emerald-900/30" : "text-slate-400 hover:text-slate-200"}`}
          >
            🔥 Nossa Geração Priorizada de Alta Conversão
          </button>
        </div>

        {/* Comparison Displays */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 shadow-2xl">
          <AnimatePresence mode="wait">
            {comparisonTab === "lazy" ? (
              <motion.div
                key="lazy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-red-500 font-bold font-mono text-xs uppercase">
                    <AlertCircle className="w-4.5 h-4.5" />
                    O Sintoma de IA Convencional
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    O temível loop de construir apenas Login, Admin & Logins sem tela nenhuma comercial.
                  </h3>
                  <p className="text-xs text-slate-450 leading-relaxed">
                    Sem instruções explícitas de hierarquia, a IA sempre assume que o núcleo do produto é o sistema administrativo. Ela gasta 100% de seus tokens criando formulários crus de login, tabelas vazias e esquemas PHP/Bootstrap ultrapassados, enquanto o seu site comercial permanece inexistente.
                  </p>
                  <ul className="text-xs text-red-400/80 font-mono space-y-2">
                    <li className="flex items-center gap-2">✗ 70% do código gasto em logins e menus gigantes</li>
                    <li className="flex items-center gap-2">✗ Zero páginas de vendas de autoconversão</li>
                    <li className="flex items-center gap-2">✗ Nenhum roteiro de usuário ou onboarding</li>
                    <li className="flex items-center gap-2">✗ Comentários preguiçosos de '// TODO' na cobrança</li>
                  </ul>
                </div>
                <div className="bg-[#0b0d11] p-4 rounded-xl border border-slate-900 flex flex-col justify-between text-left">
                  <div className="text-[10px] font-mono text-red-400 bg-red-950/20 border border-red-950/30 px-2 py-0.5 rounded font-bold uppercase w-fit">
                    Estrutura de Resultados Fracassados
                  </div>
                  <div className="space-y-2 py-6">
                    <div className="h-2.5 bg-slate-900 rounded w-11/12" />
                    <div className="h-2.5 bg-slate-900 rounded w-10/12" />
                    <div className="h-5 bg-red-950/10 border border-red-900/20 rounded flex items-center px-2">
                      <span className="text-[9px] font-mono text-red-400">// TODO: Implementar o SaaS de verdade aqui</span>
                    </div>
                    <div className="h-2.5 bg-slate-900 rounded w-4/12" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">UX Quebrada, Sem Mobile nem Visual.</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="prioritized"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-xs uppercase">
                    <Check className="w-4.5 h-4.5" />
                    A Ordem de Prioridade Revolucionária
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Primeiro a Landing Page Premium Stripe-like. Só depois o resto.
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Nossos prompts orquestrados forçam de forma imutável a IA a focar nas seguintes etapas ordenadamente. O painel admin existe de forma silenciosa e no backend apenas para amparar, sem ofuscar o seu valor estético comercial.
                  </p>
                  <ul className="text-xs text-emerald-400 font-mono space-y-2">
                    <li className="flex items-center gap-2">✓ Landing page premium e hero cinematográfica</li>
                    <li className="flex items-center gap-2">✓ Mockups interativos do produto e FAQ expansível</li>
                    <li className="flex items-center gap-2">✓ Responsividade mobile-first (Drewers,stacks, touchtargets)</li>
                    <li className="flex items-center gap-2">✓ Resiliência de erros real (Try-Catch integrados)</li>
                  </ul>
                </div>
                <div className="bg-[#0b0d11] p-4.5 rounded-xl border border-slate-900 flex flex-col justify-between text-left">
                  <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/35 px-2 py-0.5 rounded font-bold uppercase w-fit animate-pulse">
                    Motor Ativo - Ordem de Geração
                  </div>
                  <div className="space-y-2.5 py-4 font-mono text-[10px] text-slate-400">
                    <div className="bg-slate-900/50 p-2 rounded border border-slate-850">
                      <span className="text-emerald-400">1. Landing Page Cinema:</span> Hero, Bento grids &pricing FAQ.
                    </div>
                    <div className="bg-slate-900/30 p-2 rounded border border-slate-850">
                      <span className="text-amber-400">2. Produto Central:</span> O core da utilidade real.
                    </div>
                    <div className="bg-slate-900/10 p-2 rounded border border-slate-850 text-slate-500">
                      <span className="text-rose-400/50">3. Admin Silencioso:</span> Logins e checkouts discretos.
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-500 font-bold">100% Responsivo, Conversor & Completo.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* THE 4 PILLARS BENTO GRID */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-950">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[11px] font-mono text-rose-500 font-bold uppercase tracking-widest block">
            RECURSOS DE ÚLTIMA FRONTEIRA
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Os 4 Motores de Geração Acoplados
          </h2>
          <p className="text-slate-455 text-sm max-w-xl mx-auto">
            Por que as soluções geradas por nossa bancada parecem softwares de alto nível desenvolvidos por agências e não prompts ordinários de fórum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Visual Priority */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-900 hover:border-rose-950/40 transition duration-300 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-950 text-orange-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-sans">Prioridade Visual de UX</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Obrigabilidade tática de construir seções comerciais, benefícios e layouts mobile com alta legibilidade antes de estruturar áreas técnicas vazias.
            </p>
          </div>

          {/* Card 2: Admin Inteligente */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-900 hover:border-rose-950/40 transition duration-300 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-950 text-purple-400 flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-sans">Admin Silencioso</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lógica por baixo do capô. Sistemas de logins elegantes, webhooks Kirvano idempotentes, metatags avançadas para SEO e pixels de eventos acoplados discretamente.
            </p>
          </div>

          {/* Card 3: Anti-alucinação */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-900 hover:border-rose-950/40 transition duration-300 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-950 text-rose-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-sans">Sandbox Cognitivo</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Impõe barreiras comportamentais duras à IA de linguagem, extinguindo placeholdes rasos e prevenindo o modelo de 'fugir' do escopo instruído.
            </p>
          </div>

          {/* Card 4: Resiliência SRE */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-900 hover:border-rose-950/40 transition duration-300 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-950 text-blue-400 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-sans">Resiliência SRE Embutida</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tratamento Try-Catch estrito, formatação JSON legível para auditoria e estratégias tolerantes a falhas em APIs para assegurar deploy robusto de produção.
            </p>
          </div>

        </div>
      </section>

      {/* PRICING PLANS COMPACT & TRANSPARENT */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-b border-slate-900">
        <div className="text-center space-y-3 mb-14">
          <span className="text-[11px] font-mono text-rose-500 font-bold uppercase tracking-widest block">
            LICENCIAMENTO INDIVIDUAL OU CORPORATIVO
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Nossos Planos de Acesso Pro
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Disponibilize imediatamente o principal orquestrador cognitivo para impulsionar seus desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* Plan 1: Free Trial */}
          <div className="bg-slate-950 p-6.5 rounded-2xl border border-slate-900 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-slate-500 uppercase font-black block">Basic Trial</span>
              <h3 className="text-xl font-bold text-white">Mesa Experimental</h3>
              <div className="text-2xl font-black font-mono text-slate-400">R$ 0</div>
              <p className="text-xs text-slate-500 leading-relaxed">Indicado para quem está dando os passos fundamentais de prompts sem sandbox.</p>
              <div className="h-[1px] bg-slate-900" />
              <ul className="text-xs text-slate-400 font-mono space-y-2.5">
                <li className="flex items-center gap-2">✓ Orquestrador básico local</li>
                <li className="flex items-center gap-2">✓ Limite: 3 requisições / dia</li>
                <li className="flex items-center gap-2 text-slate-600">✗ Módulos de Prioridade de UX</li>
                <li className="flex items-center gap-2 text-slate-600">✗ Proteção SRE e Sandbox Sênior</li>
              </ul>
            </div>
            <button
              onClick={() => setCurrentView("login")}
              className="w-full py-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs text-slate-400 hover:bg-slate-800 transition uppercase font-bold"
            >
              Testar Versão Livre
            </button>
          </div>

          {/* Plan 2: Enterpise Pro Premium */}
          <div className="bg-slate-900/60 p-7 rounded-2xl border-2 border-rose-600 relative flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-red-600 to-rose-600 border border-rose-500/40 text-white font-mono text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-bold animate-pulse">
              👑 RECOMENDADO INFOPRODUTORES & DEVS
            </div>
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-rose-400 uppercase font-black block">Licenciamento Enterprise</span>
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                Bancada Pro Completa
                <span className="text-[9px] bg-rose-500/10 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded font-mono font-bold uppercase">LIFETIME</span>
              </h3>
              <div className="text-3xl font-black font-mono text-white flex items-baseline gap-1">
                {settings.price}
                <span className="text-xs text-slate-500 font-sans font-normal"> / {settings.billingModel}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Acesso irrestrito e vitalício aos 4 motores avançados de engenharia de prompt estruturado e contingência.
              </p>
              <div className="h-[1px] bg-slate-850" />
              <ul className="text-xs text-slate-300 font-mono space-y-2.5">
                <li className="flex items-center gap-2 text-emerald-400 font-bold">✓ 4 Motores Completos Ativos</li>
                <li className="flex items-center gap-2">✓ Módulo de Prioridade de UX de LP</li>
                <li className="flex items-center gap-2">✓ Admin Silencioso (SEO, links, webhooks)</li>
                <li className="flex items-center gap-2">✓ Sandbox de anti-alucinação profunda</li>
                <li className="flex items-center gap-2 text-emerald-400 font-bold">✓ 7 Dias de Garantia Incondicional</li>
              </ul>
            </div>
            <a
              href={settings.checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-gradient-to-r from-red-700 to-rose-600 hover:brightness-110 text-white rounded-xl font-mono text-center block text-xs font-bold uppercase transition shadow-lg tracking-wider"
              id="plans-sales-featured-btn"
            >
              LIBERAR MEU ACESSO PREMIUM AGORA
            </a>
          </div>

        </div>
      </section>

      {/* DISCRETELY INTEGRATED WEBHOOKS / PAYMENT SAFETY BRAND LOGO */}
      <section className="py-10 max-w-sm mx-auto text-center opacity-65 font-mono text-[10px] space-y-2">
        <span className="flex items-center justify-center gap-1.5 text-slate-500">
          <Shield className="w-3.5 h-3.5 text-emerald-500" />
          Faturamento assegurado via Webhook Kirvano Certificado
        </span>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-b border-slate-900">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[11px] font-mono text-rose-500 font-bold uppercase tracking-widest block">
            CENTRAL DE ORIENTACAO TÉCNICA
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Perguntas & Respostas
          </h2>
          <p className="text-slate-455 text-sm max-w-xl mx-auto">
            Dúvidas frequentes sobre as diretrizes estruturadas de fatiamento cognitivo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isFaqOpen = openedFaq === index;
            return (
              <div
                key={index}
                className="bg-slate-950 border border-slate-900 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenedFaq(isFaqOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-0"
                >
                  <span className="text-sm font-semibold text-slate-200 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${isFaqOpen ? "rotate-180 text-rose-450" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isFaqOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 text-xs text-slate-450 leading-relaxed border-t border-slate-900/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL HIGH CONVERTING CALL TO ACTION */}
      <section className="py-24 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[11px] font-mono text-rose-500 font-bold uppercase tracking-widest block animate-pulse">
            O TIMER ESTÁ CORRENDO • LICENÇA VITALÍCIA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Faça Suas IAs Agirem Como Engenheiros Sênior
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Pare de jogar dólares fora com prompts imprecisos e respostas recortadas. Garanta o orquestrador que prioriza o UX comercial do seu projeto.
          </p>
          <div className="pt-4 flex flex-col items-center justify-center gap-3">
            <a
              href={settings.checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-12 py-5 rounded-xl text-white font-bold text-base transition-all shadow-2xl flex items-center justify-center gap-2.5 hover:brightness-115"
              style={{ backgroundColor: "var(--button-brand)", backgroundImage: "linear-gradient(to right, rgb(225, 29, 72), rgb(159, 18, 57))" }}
              id="cta-sales-footer-final-btn"
            >
              <Zap className="w-5 h-5 fill-current text-amber-300 animate-bounce" />
              GARANTIR MINHA LICENÇA VITALÍCIA AGORA
            </a>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
              🔒 Pagamento auditado com segurança SSL | Acesso imediato à Bancada
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/40 pt-14 pb-8 px-4 sm:px-6 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <span className="text-sm font-bold text-white flex items-center gap-2">
              <Shield className="w-4.5 h-4.5 text-rose-500" />
              {settings.logoText}
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
              O mais resiliente orquestrador de cognição sintética empresarial do cenário nacional, fatiado sequencialmente sob as metodologias de Ana Caroline Lamas.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">Arquitetura</h4>
            <ul className="space-y-2 text-[11px] text-slate-600 font-mono">
              <li>- Sandbox Cognitiva</li>
              <li>- UX Priority Framework (v4)</li>
              <li>- SRE Structured Logs</li>
              <li>- Circuit Breaker Lógico</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">Privacidade</h4>
            <ul className="space-y-2 text-[11px] text-slate-600 font-mono">
              <li>- Termos de Uso</li>
              <li>- Diretrizes de Segurança</li>
              <li>- Suporte: suporte@deepmind.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest mb-4">Selo de Auditoria SaaS</h4>
            <p className="text-[11px] text-slate-600 leading-normal font-mono">
              ✓ Ativação de faturamento instantâneo com integridade em banco de dados isolado criptográfico.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900/60 pt-8 text-center space-y-2 font-mono">
          <p>{settings.copyrightFooter || "Bancada Prompt • Todos os direitos reservados."}</p>
          <p className="text-[9px] text-slate-600">
            Faturamento processado de forma segura. Copyright 2026.
          </p>
        </div>
      </footer>

    </div>
  );
}
