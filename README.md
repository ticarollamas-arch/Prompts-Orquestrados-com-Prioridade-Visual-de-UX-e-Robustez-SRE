
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
