export interface PromptHistoryItem {
  id: string;
  timestamp: string;
  category: string;
  originalInput: string;
  orchestratedPrompt: string;
  technicalJustification: string[];
  observabilityAdditions?: string;
  ethicalMitigations?: string;
  ethicsEnabled: boolean;
  robustnessEnabled: boolean;
  adminSystemEnabled?: boolean;
  visualPriorityEnabled?: boolean;
  isFallback?: boolean;
}

export interface OrchestrationRequest {
  prompt: string;
  category: string;
  ethicsEnabled: boolean;
  robustnessEnabled: boolean;
  adminSystemEnabled?: boolean;
  visualPriorityEnabled?: boolean;
}

export interface OrchestrationResponse {
  orchestratedPrompt: string;
  technicalJustification: string[];
  observabilityAdditions?: string;
  ethicalMitigations?: string;
  isFallback?: boolean;
}

export interface PortalSettings {
  logoText: string;
  primaryColor: string;
  buttonColor: string;
  googleAdsense: string;
  facebookPixel: string;
  robotsTxt: string;
  price: string;
  checkoutUrl: string;
  salesTitle: string;
  salesSubtitle: string;
  copyrightFooter: string;
  guaranteeTitle: string;
  guaranteeSubtitle: string;
  billingModel: string;
}

export interface NormalUser {
  id: string;
  email: string;
  passwordText: string;
  createdAt: string;
}

export interface KirvanoSubscription {
  id: string;
  userId: string;
  userEmail: string;
  status: "pending" | "active" | "canceled" | "unpaid";
  gatewayId: string;
  planType: string;
  expiresAt: string;
  amount: number;
}

export interface OrchestratedPromptDB {
  id: string;
  userId: string;
  userEmail: string;
  originalPrompt: string;
  category: string;
  finalPrompt: string;
  securityLevel: string;
  executedAt: string;
}

