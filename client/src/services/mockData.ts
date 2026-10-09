import type { TickerItem, StockDetail, IpoItem } from '../types';

export const INITIAL_TICKERS: TickerItem[] = [
  {
    ticker: "BBCA.JK",
    name: "Bank Central Asia Tbk",
    exchange: "IDX",
    sector: "Financials",
    industry: "Banks"
  },
  {
    ticker: "BBRI.JK",
    name: "Bank Rakyat Indonesia (Persero) Tbk",
    exchange: "IDX",
    sector: "Financials",
    industry: "Banks"
  },
  {
    ticker: "BMRI.JK",
    name: "Bank Mandiri (Persero) Tbk",
    exchange: "IDX",
    sector: "Financials",
    industry: "Banks"
  },
  {
    ticker: "TLKM.JK",
    name: "Telkom Indonesia (Persero) Tbk",
    exchange: "IDX",
    sector: "Communication Services",
    industry: "Telecom Services"
  },
  {
    ticker: "ASII.JK",
    name: "Astra International Tbk",
    exchange: "IDX",
    sector: "Consumer Discretionary",
    industry: "Automotive & Conglomerate"
  },
  {
    ticker: "ICBP.JK",
    name: "Indofood CBP Sukses Makmur Tbk",
    exchange: "IDX",
    sector: "Consumer Staples",
    industry: "Packaged Foods"
  },
  {
    ticker: "GOTO.JK",
    name: "GoTo Gojek Tokopedia Tbk",
    exchange: "IDX",
    sector: "Technology",
    industry: "Internet & E-Commerce"
  },
  {
    ticker: "BREN.JK",
    name: "Barito Renewables Energy Tbk",
    exchange: "IDX",
    sector: "Utilities",
    industry: "Renewable Electricity"
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    exchange: "NASDAQ",
    sector: "Technology",
    industry: "Consumer Electronics"
  },
  {
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    exchange: "NASDAQ",
    sector: "Technology",
    industry: "Semiconductors"
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    exchange: "NASDAQ",
    sector: "Technology",
    industry: "Software"
  }
];

export const MOCK_STOCKS: Record<string, StockDetail> = {
  "BBCA.JK": {
    profile: {
      ticker: "BBCA.JK",
      name: "Bank Central Asia Tbk",
      exchange: "IDX",
      sector: "Financials",
      industry: "Perbankan Swasta Terbesar",
      description: "PT Bank Central Asia Tbk menyediakan berbagai solusi perbankan komersial dan personal di Indonesia dengan keunggulan kuat pada dana murah (CASA) dan infrastruktur pembayaran transaksi.",
      employees: 27500,
      website: "https://www.bca.co.id",
      country: "Indonesia"
    },
    price: {
      lastPrice: 10450,
      currency: "IDR",
      change: 125,
      changePercent: 1.21,
      marketCap: 1288000000000000,
      avgVolume: 56400000,
      high52Week: 10900,
      low52Week: 8750,
      lastUpdated: "9 Okt 2026, 16:00 WIB",
      dataSource: "yahoo-finance2 (IDX Delayed)"
    },
    valuation: {
      per: 23.4,
      pbv: 4.8,
      evEbitda: null,
      dividendYield: 2.85
    },
    profitability: {
      roe: 22.1,
      roa: 3.8,
      npm: 48.5,
      der: 4.7,
      currentRatio: null
    },
    trends: [
      { year: "2022", revenue: 87400, netIncome: 40700, operatingCashFlow: 38200 },
      { year: "2023", revenue: 99300, netIncome: 48600, operatingCashFlow: 45100 },
      { year: "2024", revenue: 108500, netIncome: 53200, operatingCashFlow: 51000 },
      { year: "2025", revenue: 119200, netIncome: 58400, operatingCashFlow: 56300 }
    ],
    hasUploadedFinancialReport: false,
    aiSummary: {
      summary: "BBCA mempertahankan efisiensi operasional terdepan di industri dengan rasio CASA di atas 80%. Pertumbuhan laba stabil ditopang oleh pertumbuhan kredit berkualitas dan pendapatan komisi transaksi digital yang tinggi.",
      profileBrief: "Bank swasta dengan basis nasabah ritel dan korporasi terkuat di Indonesia, memiliki keunggulan likuiditas dana murah.",
      performanceTrend: "Laba bersih konsisten bertumbuh dua digit (CAGR ~12% selama 4 tahun terakhir) dengan rasio kredit bermasalah (NPL) sangat terjaga di kisaran 1.8%.",
      keyRatiosAnalysis: "ROE stabil tinggi di level 22.1% mencerminkan efisiensi modal optimal. PBV berada di 4.8x yang merupakan valuasi premium di sektor perbankan regional.",
      primaryRisks: [
        "Normalisasi suku bunga acuan BI yang dapat menekan margin bunga bersih (NIM).",
        "Kompetisi agresif layanan perbankan digital dan payment gateway pihak ketiga.",
        "Valuasi PBV relatif tinggi dibanding rata-rata perbankan nasional."
      ],
      keyTakeaways: [
        "Fundamental sangat defensif dengan neraca keuangan yang sangat kokoh.",
        "Cocok untuk horizon investasi jangka panjang berorientasi dividen dan stabilitas nilai."
      ],
      generatedAt: "9 Okt 2026, 15:30 WIB",
      sources: ["yahoo-finance2", "Laporan Tahunan Publikasi 2025"]
    }
  },
  "AAPL": {
    profile: {
      ticker: "AAPL",
      name: "Apple Inc.",
      exchange: "NASDAQ",
      sector: "Technology",
      industry: "Consumer Electronics",
      description: "Apple Inc. merancang, memproduksi, dan memasarkan ponsel pintar, komputer pribadi, tablet, perangkat sandang, serta menjual berbagai layanan berlangganan digital.",
      employees: 161000,
      website: "https://www.apple.com",
      country: "United States"
    },
    price: {
      lastPrice: 228.50,
      currency: "USD",
      change: -1.75,
      changePercent: -0.76,
      marketCap: 3480000000000,
      avgVolume: 48900000,
      high52Week: 237.23,
      low52Week: 164.08,
      lastUpdated: "8 Okt 2026, 16:00 EDT",
      dataSource: "SEC EDGAR / yahoo-finance2"
    },
    valuation: {
      per: 33.8,
      pbv: 49.2,
      evEbitda: 25.4,
      dividendYield: 0.44
    },
    profitability: {
      roe: 147.2,
      roa: 28.5,
      npm: 24.3,
      der: 1.45,
      currentRatio: 1.05
    },
    trends: [
      { year: "2022", revenue: 394328, netIncome: 99803, operatingCashFlow: 122151 },
      { year: "2023", revenue: 383285, netIncome: 96995, operatingCashFlow: 110543 },
      { year: "2024", revenue: 391035, netIncome: 93736, operatingCashFlow: 118254 },
      { year: "2025", revenue: 412500, netIncome: 102400, operatingCashFlow: 125800 }
    ],
    hasUploadedFinancialReport: true,
    aiSummary: {
      summary: "Apple mengandalkan ekspansi segmen Services dengan margin tinggi di tengah siklus penggantian iPhone berbasis Apple Intelligence. Arus kas operasional tetap masif untuk mendukung buyback saham agresif.",
      profileBrief: "Raksasa teknologi global dengan ekosistem perangkat keras dan layanan terintegrasi dengan basis pengguna aktif lebih dari 2.2 miliar perangkat.",
      performanceTrend: "Pertumbuhan pendapatan didorong oleh rekor pendapatan Services, mengimbangi volatilitas siklus penjualan iPhone di pasar Tiongkok.",
      keyRatiosAnalysis: "PER di level 33.8x mencerminkan ekspektasi premium pasar terhadap pertumbuhan ekosistem AI. Arus kas bebas luar biasa kuat.",
      primaryRisks: [
        "Tekanan regulasi antimonopoli global (DOJ US & Digital Markets Act Uni Eropa).",
        "Ketergantungan rantai pasok manufaktur dan persaingan penjualan di kawasan Asia Timur.",
        "Valuasi rasio PER berada di persentil historis atas."
      ],
      keyTakeaways: [
        "Ekosistem yang sangat lengket (high switching cost) bagi pengguna setia.",
        "Program pengembalian modal ke pemegang saham (buyback & dividen) terbesar di dunia."
      ],
      generatedAt: "8 Okt 2026, 20:00 EDT",
      sources: ["SEC EDGAR 10-K", "yahoo-finance2"]
    }
  }
};

export const MOCK_IPOS: IpoItem[] = [
  {
    id: "ipo-1",
    name: "PT Sumber Energi Nusantara Tbk",
    ticker: "SENA.JK",
    offeringPriceRange: "Rp 250 - Rp 320",
    sharesOffered: "1.250.000.000 lembar",
    publicPercentage: "20.0%",
    offeringPeriod: "12 - 16 Oktober 2026",
    listingDate: "20 Oktober 2026",
    underwriter: "PT Mandiri Sekuritas, PT Indo Premier Sekuritas",
    status: "offering",
    updatedAt: "2026-10-09",
    useOfFunds: [
      "60% untuk ekspansi kapasitas pembangkit tenaga surya di Jawa Barat.",
      "25% untuk pelunasan sebagian pokok pinjaman bank komersial.",
      "15% untuk modal kerja operasional perusahaan."
    ],
    lockUpPeriod: "Pemegang saham pengendali berkomitmen lock-up selama 8 bulan sejak tanggal pencatatan.",
    keyRisks: [
      "Fluktuasi harga komponen panel surya global.",
      "Ketergantungan pada kontrak perjanjian jual beli listrik (PPA) dengan PLN.",
      "Risiko regulasi terkait tarif insentif energi baru terbarukan."
    ]
  },
  {
    id: "ipo-2",
    name: "PT Logistik Kilat Indonesia Tbk",
    ticker: "KILAT.JK",
    offeringPriceRange: "Rp 180 - Rp 220",
    sharesOffered: "800.000.000 lembar",
    publicPercentage: "18.5%",
    offeringPeriod: "22 - 27 Oktober 2026",
    listingDate: "3 November 2026",
    underwriter: "PT BCA Sekuritas",
    status: "upcoming",
    updatedAt: "2026-10-08",
    useOfFunds: [
      "70% pengadaan armada truk listrik ramah lingkungan dan otomatisasi gudang.",
      "30% untuk modal kerja dan pengembangan sistem pelacakan AI."
    ],
    lockUpPeriod: "8 bulan lock-up untuk seluruh pemegang saham pra-IPO.",
    keyRisks: [
      "Persaingan ketat tarif jasa kurir dan logistik last-mile.",
      "Kenaikan biaya bahan bakar dan suku cadang armada operasional."
    ]
  },
  {
    id: "ipo-3",
    name: "PT Diagnostika Biotek Medika Tbk",
    ticker: "DBIO.JK",
    offeringPriceRange: "Rp 450 (Final)",
    sharesOffered: "500.000.000 lembar",
    publicPercentage: "15.0%",
    offeringPeriod: "25 - 29 September 2026",
    listingDate: "2 Oktober 2026",
    underwriter: "PT Mirae Asset Sekuritas Indonesia",
    status: "listed",
    updatedAt: "2026-10-02",
    useOfFunds: [
      "80% pembangunan laboratorium genomik klinis modern di Surabaya.",
      "20% modal kerja reagen dan lisensi teknologi tes diagnostik."
    ],
    lockUpPeriod: "Pemegang saham pendiri lock-up 12 bulan.",
    keyRisks: [
      "Kepatuhan regulasi alat kesehatan dan sertifikasi Kemenkes.",
      "Ketergantungan pada tim riset kunci dan ahli genetika medis."
    ]
  }
];

export function searchTickers(query: string): TickerItem[] {
  if (!query || query.trim() === '') return INITIAL_TICKERS.slice(0, 6);
  const q = query.toLowerCase().trim();
  return INITIAL_TICKERS.filter(item => 
    item.ticker.toLowerCase().includes(q) || 
    item.name.toLowerCase().includes(q) ||
    item.sector.toLowerCase().includes(q)
  );
}

export function getStockDetail(ticker: string): StockDetail | null {
  const normalized = ticker.toUpperCase();
  if (MOCK_STOCKS[normalized]) {
    return MOCK_STOCKS[normalized];
  }
  const found = INITIAL_TICKERS.find(t => t.ticker === normalized);
  if (!found) return null;

  const isId = found.exchange === 'IDX';
  return {
    profile: {
      ticker: found.ticker,
      name: found.name,
      exchange: found.exchange,
      sector: found.sector,
      industry: found.industry,
      description: `${found.name} adalah perusahaan terdaftar di bursa ${found.exchange} yang beroperasi dalam sektor ${found.sector}. Data rasio dan laporan keuangan diambil dari publikasi berkala bursa.`,
      country: isId ? "Indonesia" : "United States"
    },
    price: {
      lastPrice: isId ? 3850 : 185.20,
      currency: isId ? "IDR" : "USD",
      change: isId ? 40 : 1.25,
      changePercent: isId ? 1.05 : 0.68,
      marketCap: isId ? 95000000000000 : 250000000000,
      avgVolume: 12500000,
      high52Week: isId ? 4200 : 205.00,
      low52Week: isId ? 3100 : 145.50,
      lastUpdated: "9 Okt 2026, 16:00 WIB",
      dataSource: "yahoo-finance2 (Delayed)"
    },
    valuation: {
      per: 15.6,
      pbv: 2.1,
      evEbitda: 9.8,
      dividendYield: 3.4
    },
    profitability: {
      roe: 14.8,
      roa: 8.2,
      npm: 12.5,
      der: 0.85,
      currentRatio: 1.65
    },
    trends: [
      { year: "2022", revenue: 45000, netIncome: 5200, operatingCashFlow: 6100 },
      { year: "2023", revenue: 49500, netIncome: 5800, operatingCashFlow: 6700 },
      { year: "2024", revenue: 53200, netIncome: 6300, operatingCashFlow: 7200 },
      { year: "2025", revenue: 58900, netIncome: 7100, operatingCashFlow: 8000 }
    ],
    hasUploadedFinancialReport: false,
    aiSummary: {
      summary: `Pertumbuhan pendapatan ${found.name} terjaga positif dengan marjin laba bersih stabil di kisaran 12-14%. Kondisi neraca relatif sehat dengan rasio utang terkendali.`,
      profileBrief: `Emiten ${found.name} berfokus pada industri ${found.industry} dengan posisi pangsa pasar yang mapan.`,
      performanceTrend: "Laba bersih membukukan pertumbuhan tahunan rata-rata 10% dengan arus kas operasional positif.",
      keyRatiosAnalysis: "PER di kisaran 15.6x masih berada dalam batas wajar industri sejenis. DER 0.85x menunjukkan solvabilitas rendah risiko.",
      primaryRisks: [
        "Fluktuasi biaya operasional dan bahan baku.",
        "Ketidakpastian siklus makroekonomi regional."
      ],
      keyTakeaways: [
        "Kinerja historis solid dan arus kas operasional terjaga.",
        "Unggah laporan keuangan PDF terbaru untuk telaah catatan kaki dan risiko lebih detail."
      ],
      generatedAt: "9 Okt 2026, 15:45 WIB",
      sources: ["yahoo-finance2"]
    }
  };
}
