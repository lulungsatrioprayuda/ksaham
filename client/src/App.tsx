import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import type { TabType } from './components/BottomNav';
import { SearchBar } from './components/SearchBar';
import { StockDetailView } from './components/StockDetailView';
import { IpoListView } from './components/IpoListView';
import { PdfUploadModal } from './components/PdfUploadModal';
import { DisclaimerBanner, AboutView } from './components/DisclaimerBanner';
import { getStockDetail } from './services/mockData';
import type { AiSummaryData } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('stocks');
  const [selectedTicker, setSelectedTicker] = useState<string>('BBCA.JK');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadTickerTarget, setUploadTickerTarget] = useState('BBCA.JK');

  // Custom summaries storage for session
  const [customSummaries, setCustomSummaries] = useState<Record<string, AiSummaryData>>({});

  const currentStock = getStockDetail(selectedTicker);

  // If user uploaded a PDF report in this session, inject that summary
  const enrichedStock = currentStock
    ? {
        ...currentStock,
        aiSummary: customSummaries[selectedTicker] || currentStock.aiSummary,
        hasUploadedFinancialReport:
          !!customSummaries[selectedTicker] || currentStock.hasUploadedFinancialReport,
      }
    : null;

  const handleOpenUpload = (targetTicker?: string) => {
    setUploadTickerTarget(targetTicker || selectedTicker);
    setIsUploadModalOpen(true);
  };

  const handleSummaryGenerated = (ticker: string, summary: AiSummaryData) => {
    setCustomSummaries((prev) => ({
      ...prev,
      [ticker]: summary,
    }));
    setSelectedTicker(ticker);
    setActiveTab('stocks');
    setIsUploadModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Mobile App Container */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-3.5">
        {/* Tab 1: Stocks (Search & Details) */}
        {activeTab === 'stocks' && (
          <div className="space-y-4">
            <SearchBar
              onSelectTicker={(t) => setSelectedTicker(t)}
              selectedTicker={selectedTicker}
            />

            {enrichedStock ? (
              <StockDetailView
                stock={enrichedStock}
                onOpenUpload={() => handleOpenUpload(selectedTicker)}
              />
            ) : (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center text-xs text-gray-400">
                Ticker tidak ditemukan atau data belum tersedia.
              </div>
            )}
          </div>
        )}

        {/* Tab 2: IPO Calendar */}
        {activeTab === 'ipo' && (
          <div className="space-y-3">
            <div className="mb-2">
              <h2 className="text-lg font-bold text-white tracking-tight">Kalender Saham IPO</h2>
              <p className="text-xs text-gray-400">
                Ringkasan prospektus emiten baru di Bursa Efek Indonesia (IDX)
              </p>
            </div>
            <IpoListView onOpenUpload={(t) => handleOpenUpload(t)} />
          </div>
        )}

        {/* Tab 3: Upload PDF */}
        {activeTab === 'upload' && (
          <div className="space-y-4 pb-20">
            <div className="mb-1">
              <h2 className="text-lg font-bold text-white tracking-tight">Unggah Laporan PDF</h2>
              <p className="text-xs text-gray-400">
                Analisis laporan keuangan kuartalan atau prospektus secara otomatis
              </p>
            </div>
            <PdfUploadModal
              initialTicker={selectedTicker}
              onSummaryGenerated={handleSummaryGenerated}
            />
          </div>
        )}

        {/* Tab 4: About & Disclaimer */}
        {activeTab === 'info' && (
          <div className="space-y-3">
            <div className="mb-2">
              <h2 className="text-lg font-bold text-white tracking-tight">Informasi & Regulasi</h2>
              <p className="text-xs text-gray-400">Ketentuan penggunaan, sumber data, dan privasi</p>
            </div>
            <AboutView />
          </div>
        )}
      </main>

      {/* Persistent Disclaimer on Stock & IPO tabs */}
      {(activeTab === 'stocks' || activeTab === 'ipo') && (
        <div className="w-full max-w-md mx-auto px-4 pb-24">
          <DisclaimerBanner />
        </div>
      )}

      {/* Floating Upload Modal when triggered from cards */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <PdfUploadModal
              initialTicker={uploadTickerTarget}
              onClose={() => setIsUploadModalOpen(false)}
              onSummaryGenerated={handleSummaryGenerated}
            />
          </div>
        </div>
      )}

      {/* Bottom Sticky Navigation */}
      <BottomNav activeTab={activeTab} onChangeTab={(tab) => setActiveTab(tab)} />
    </div>
  );
}

export default App;
