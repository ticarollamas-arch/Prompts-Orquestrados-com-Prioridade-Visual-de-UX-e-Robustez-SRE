<p align="center">
  <svg width="640" height="200" viewBox="0 0 640 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      .title {
        font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
        font-weight: 800;
        font-size: 42px;
        fill: #ffffff;
        letter-spacing: 2px;
      }
      .subtitle {
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 14px;
        fill: #94a3b8;
        letter-spacing: 1px;
      }
      .author {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 13px;
        fill: #f43f5e;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
      .status {
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        fill: #10b981;
        font-weight: bold;
      }
      .glow-red {
        filter: drop-shadow(0px 0px 12px rgba(244, 63, 94, 0.8));
      }
      .glow-green {
        filter: drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.7));
      }
      @keyframes pulse {
        0% { opacity: 0.4; }
        50% { opacity: 1; }
        100% { opacity: 0.4; }
      }
      @keyframes slideIn {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .pulse-anim {
        animation: pulse 2.5s infinite ease-in-out;
      }
      .slide-anim {
        animation: slideIn 1s ease-out;
      }
      .rotate-anim {
        animation: rotate 20s infinite linear;
        transform-origin: 540px 100px;
      }
    </style>
    
    <!-- Deep Cosmic Dark Background -->
    <rect width="640" height="200" rx="16" fill="#0b0f19" stroke="#1e293b" stroke-width="2"/>
    
    <!-- Animated Grid Pattern -->
    <g opacity="0.15">
      <path d="M0 25H640M0 50H640M0 75H640M0 100H640M0 125H640M0 150H640M0 175H640" stroke="#475569" stroke-width="1"/>
      <path d="M50 0V200M100 0V200M150 0V200M200 0V200M250 0V200M300 0V200M350 0V200M400 0V200M450 0V200M500 0V200M550 0V200M600 0V200" stroke="#475569" stroke-width="1"/>
    </g>

    <!-- Glowing Tech Circles -->
    <circle cx="540" cy="100" r="45" fill="#701A28" fill-opacity="0.15" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6 4" class="rotate-anim" />
    <circle cx="540" cy="100" r="25" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="2" class="glow-red pulse-anim" />
    <polygon points="540,90 549,106 531,106" fill="#ffffff" />

    <!-- Text content -->
    <g class="slide-anim">
      <!-- Title -->
      <text x="50" y="80" class="title glow-red pulse-anim">BANCADA PROMPT</text>
      <!-- Subtitle -->
      <text x="50" y="115" class="subtitle">Enterprise Prompt Architecture &amp; Sandbox Engine</text>
      <!-- Author -->
      <text x="50" y="145" class="author">Lead Architect: Ana Caroline Lamas</text>
    </g>

    <!-- Live Status -->
    <g class="pulse-anim">
      <circle cx="55" cy="170" r="4" fill="#10b981" class="glow-green"/>
      <text x="66" y="174" class="status">SRE ENGINE: ONLINE</text>
    </g>
  </svg>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Zod-3068b7?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
</p>

---

# 👑 Bancada Prompt: Orquestrador de Engenharia e Blindagem de Instruções Sênior

A **Bancada Prompt** é um motor de orquestração técnica e governança cognitiva desenvolvido com foco na robustez, alta fidelidade e cibersegurança de instruções destinadas a grandes modelos de linguagem (LLMs). O sistema substitui fluxos informais de escrita de prompts por sandboxes estruturados, blindagem contra ataques de injeção e isolamento funcional rigoroso.

Concebido do zero sob arquitetura resiliente, o software fornece uma suite completa de tradução de regras de negócio em payloads padronizados, servindo perfeitamente para times de SRE, DevSecOps, auditorias de infraestrutura e engenharia de software corporativo.

---

## 🧱 Arquitetura e Fluxo do Sistema

O motor opera através de um pipeline desacoplado que valida esquemas de entrada, envolve a instrução original em camadas determinísticas de sandbox cognitivo e gerencia contingências em tempo real via **Circuit Breaker**.

```
                                 [REQUISIÇÃO DO CLIENTE]
                                            │
                                            ▼
                                   [UNIFIED AUTH / RBAC]
                                            │
                                            ▼
                           [ORCHESTRATOR COGNITIVE SANDBOX]
                                            │
                  ┌─────────────────────────┴─────────────────────────┐
                  ▼                                                   ▼
       [ATIVADO: HIGH FIDELITY]                            [ATIVADO: ETHICAL SANDBOX]
                  │                                                   │
                  ▼                                                   ▼
      [CIRCUIT BREAKER CONTROL]                           [BLINDAGEM CONTRA INJEÇÃO]
                  │                                                   │
                  └─────────────────────────┬─────────────────────────┘
                                            ▼
                                  [WINSTON SRE LOGS]
                                            │
                                            ▼
                                  [LOCAL SQL/JSON DB]
```

### Componentes Fundamentais

1. **Sandbox Cognitivo**: Restringe a execução do modelo às diretrizes do negócio, proibindo alucinações e isolando o escopo funcional da requisição.
2. **Circuit Breaker Automático**: Classe de contingência embutida que monitora falhas de conexões a provedores de linguagem externos. Ao atingir o limite estrito de latência ou erros, chaveia imediatamente para o contingenciador local.
3. **Idempotência de Webhooks**: Integração nativa para gateways transacionais (Kirvano/Kiwify) mapeando estados, controlando duplicidade de transações e provisionando credenciais e acessos automaticamente sem colisões de concorrência.
4. **Log de Observabilidade (SRE)**: Monitoramento completo via Winston que gera payloads em formato estruturado JSON com carimbo de data/hora ISO-8601 e ID único de transação.

---

## 🛠️ Stack Tecnológica

* **Runtime & Linguagem**: Node.js, TypeScript estruturado.
* **Backend Framework**: Express com tratamento de exceções atômico.
* **Validação de Contrato**: Zod (para sanitização rigorosa de payloads).
* **Observabilidade**: Winston (SRE JSON structured logging).
* **Frontend UX/UI**: React 19, Motion (Motion/React) e Tailwind CSS v4 para interfaces de alto contraste e performance otimizada para o usuário final.

---

## 🚀 Configuração e Inicialização

### Pré-requisitos
Certifique-se de possuir o Node.js v18+ instalado em sua máquina.

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/ana-caroline-lamas/bancada-prompt.git
cd bancada-prompt
```

2. Instale as dependências de engenharia:
```bash
npm install
```

3. Configure o ambiente definindo as variáveis em `.env`:
```bash
cp .env.example .env
```
Preencha a chave de provedor (`GEMINI_API_KEY`) e a URL do sistema (`APP_URL`).

### Executando em Desenvolvimento

Inicie o servidor de desenvolvimento assistido TypeScript via `tsx`:
```bash
npm run dev
```
O servidor estará disponível e respondendo na porta **3000** (`http://localhost:3000`).

### Compilação e Produção

1. Realize o build otimizado que empacota o backend de forma unificada utilizando o bundler `esbuild` em formato CommonJS (`.cjs`):
```bash
npm run build
```

2. Inicie em modo de produção:
```bash
npm run start
```

---

## 📂 Organização do Código Fonte

```
├── database.json        # Persistência local atômica e redundante de dados
├── server.ts            # Entry point do servidor Express com roteamento e middlewares
├── server_db.ts         # Camada atômica de leitura, escrita e contingência do banco
├── src/
│   ├── App.tsx          # Aplicação SPA principal com controle de visão unificado
│   ├── index.css        # Importação Tailwind CSS e fontes do ecossistema visual
│   ├── main.tsx         # Arquivo de bootstrap do React
│   ├── types.ts         # Declarações e interfaces TypeScript estritas
│   └── components/
│       └── SalesPage.tsx # Landing Page Premium focada em conversão de usuários
```

---

## 🛡️ Governança e Cibersegurança

O projeto foi meticulosamente arquitetado para mitigar ameaças modernas associadas ao processamento de dados e instruções:
* **Mitigação de Prompt Injection**: Delimitadores rígidos e sandboxes semânticos garantem que qualquer conteúdo de entrada do usuário final jamais altere as instruções estruturais do sistema.
* **Políticas de Erro Blindadas**: O servidor nunca vaza dados internos da infraestrutura, caminhos de arquivo físicos do container ou segredos de API em suas saídas de erro para requisições de clientes.
* **Sanitização Dupla**: Validação rigorosa em nível de tipo na borda da API através do Zod e interfaces tipadas no cliente para eliminar dados malformados.

---

## 👩‍💻 Autoria e Engenharia de Software

O ecossistema **Bancada Prompt** foi planejado, arquitetado e implementado sob a liderança técnica e autoria de:

**Ana Caroline Lamas** — *Lead Software Architect & Principal Prompt Engineer*

---
<p align="center"><i>Bancada Prompt • Engenharia de instrução levada a sério.</i></p>
