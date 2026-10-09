export interface TickerItem {
  ticker: string;
  name: string;
  exchange: 'IDX' | 'NASDAQ' | 'NYSE';
  sector: string;
  industry: string;
}

export interface StockProfile {
  name: string;
  ticker: string;
  exchange: 'IDX' | 'NASDAQ' | 'NYSE';
  sector: string;
  industry: string;
  description: string;
  employees?: number;
  website?: string;
  country: string;
}

export interface StockPriceSummary {
  lastPrice: number;
  currency: 'IDR' | 'USD';
  change: number;
  changePercent: number;
  marketCap: number;
  avgVolume: number;
  high52Week: number;
  low52Week: number;
  lastUpdated: string;
  dataSource: string;
}

export interface StockValuation {
  per?: number | null; // Price to Earnings
  pbv?: number | null; // Price to Book Value
  evEbitda?: number | null;
  dividendYield?: number | null; // in %
}

export interface StockProfitability {
  roe?: number | null; // Return on Equity (%)
  roa?: number | null; // Return on Assets (%)
  npm?: number | null; // Net Profit Margin (%)
  der?: number | null; // Debt to Equity Ratio
  currentRatio?: number | null;
}

export interface YearlyFinancial {
  year: string;
  revenue: number; // in Billions IDR or Millions USD
  netIncome: number;
  operatingCashFlow: number;
}

export interface AiSummaryData {
  summary: string;
  profileBrief: string;
  performanceTrend: string;
  keyRatiosAnalysis: string;
  primaryRisks: string[];
  keyTakeaways: string[];
  generatedAt: string;
  sources: string[];
}

export interface StockDetail {
  profile: StockProfile;
  price: StockPriceSummary;
  valuation: StockValuation;
  profitability: StockProfitability;
  trends: YearlyFinancial[];
  aiSummary?: AiSummaryData | null;
  hasUploadedFinancialReport: boolean;
  notes?: string;
}

export interface IpoItem {
  id: string;
  name: string;
  ticker: string;
  offeringPriceRange: string;
  sharesOffered: string;
  publicPercentage: string;
  offeringPeriod: string;
  listingDate: string;
  underwriter: string;
  status: 'offering' | 'upcoming' | 'listed';
  updatedAt: string;
  useOfFunds: string[];
  lockUpPeriod: string;
  keyRisks: string[];
  prospectusUploaded?: boolean;
}
