import fs from "fs";
import path from "path";
import { PortalSettings, NormalUser, KirvanoSubscription, OrchestratedPromptDB } from "./src/types";

interface DBData {
  settings: PortalSettings;
  adminCredentials: {
    username: string;
    passwordText: string;
  };
  users: NormalUser[];
  subscriptions: KirvanoSubscription[];
  orchestratedPrompts: OrchestratedPromptDB[];
}

const DB_FILE = path.join(process.cwd(), "database.json");
const DB_TEMP_FILE = path.join(process.cwd(), "database.tmp.json");

const DEFAULT_DB: DBData = {
  settings: {
    logoText: "Bancada Prompt",
    primaryColor: "#701A28",
    buttonColor: "#851d1d",
    googleAdsense: "<script async src='https://pagead2.googlesyndication.com/...'> </script>",
    facebookPixel: "<!-- Código do Pixel do Facebook -->",
    robotsTxt: "# robots.txt Simplificado - Tudo na Principal\nUser-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api",
    price: "R$ 49",
    checkoutUrl: "https://pay.kfy.com.br/",
    salesTitle: "Orquestre Prompts de Cibersegurança de Nível Corporativo",
    salesSubtitle: "Transforme testes de intrusão, regras de DevSecOps, SRE e auditorias de vulnerabilidade em prompts de altíssima fidelidade, blindados e prontos para uso in LLMs.",
    copyrightFooter: "Bancada Prompt • Todos os direitos reservados.",
    guaranteeTitle: "Garantia Incondicional de 7 Dias",
    guaranteeSubtitle: "Reembolso Completo Assegurado pela Kiwify",
    billingModel: "Assinatura mensal recorrente (cancele quando quiser)"
  },
  adminCredentials: {
    username: "admin",
    passwordText: "admin"
  },
  users: [
    {
      id: "demo-user-1",
      email: "cliente@deepmind.com",
      passwordText: "cliente123",
      createdAt: "2026-05-24T00:00:00.000Z"
    }
  ],
  subscriptions: [
    {
      id: "sub-demo-1",
      userId: "demo-user-1",
      userEmail: "cliente@deepmind.com",
      status: "active",
      gatewayId: "gate-123",
      planType: "Pro",
      expiresAt: "2030-12-31T23:59:59.000Z",
      amount: 49
    }
  ],
  orchestratedPrompts: []
};

// Ensure database.json exists or create it with atomic protection
export function loadDB(): DBData {
  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, "utf-8");
      if (!content.trim()) {
        console.warn("banco database.json foi encontrado vazio, recuperando padrões de contingência.");
        return DEFAULT_DB;
      }
      const parsed = JSON.parse(content);
      // Merge defaults in case properties or tables are missing
      return {
        settings: { ...DEFAULT_DB.settings, ...(parsed.settings || {}) },
        adminCredentials: { ...DEFAULT_DB.adminCredentials, ...(parsed.adminCredentials || {}) },
        users: parsed.users || [],
        subscriptions: parsed.subscriptions || [],
        orchestratedPrompts: parsed.orchestratedPrompts || []
      };
    } else {
      // Create initial DB atomic way with randomized temp files to guarantee no race conditions
      const initTemp = `${DB_FILE}.tmp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      fs.writeFileSync(initTemp, JSON.stringify(DEFAULT_DB, null, 2), "utf-8");
      fs.renameSync(initTemp, DB_FILE);
      return DEFAULT_DB;
    }
  } catch (error) {
    console.error("Erro ao ler ou criar o JSON database:", error);
    return DEFAULT_DB;
  }
}

export function saveDB(data: DBData): void {
  // Use unique randomized temp paths for concurrent requests
  const uniqueTemp = `${DB_FILE}.tmp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  try {
    fs.writeFileSync(uniqueTemp, JSON.stringify(data, null, 2), "utf-8");
    fs.renameSync(uniqueTemp, DB_FILE);
  } catch (error) {
    console.error("Erro ao gravar no JSON database de forma atômica:", error);
    try {
      // Retry simpler file write back if atomic fails (permissions, container overlay fs, etc.)
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
    } catch (innerError) {
      console.error("Falha irrecuperável de persistência no banco de dados JSON:", innerError);
    }
  } finally {
    try {
      if (fs.existsSync(uniqueTemp)) {
        fs.unlinkSync(uniqueTemp);
      }
    } catch (_) {}
  }
}

