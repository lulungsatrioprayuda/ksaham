import React from 'react';
import type { AiSummaryData } from '../types';
import { Sparkles, AlertTriangle, CheckCircle2, FileText, Upload } from 'lucide-react';

interface AiSummaryCardProps {
  aiSummary?: AiSummaryData | null;
  hasUploadedReport: boolean;
  isIndonesianStock: boolean;
  onOpenUpload: () => void;
}

export const AiSummaryCard: React.FC<AiSummaryCardProps> = ({
  aiSummary,
  hasUploadedReport,
  isIndonesianStock,
  onOpenUpload,
}) => {
  return (
    <div className="bg-gradient-to-b from-indigo-950/40 via-gray-900/90 to-gray-900/90 border border-indigo-500/30 rounded-2xl p-4 shadow-lg shadow-indigo-950/20">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-indigo-900/50">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-100 flex items-center gap-1.5">
              Rangkuman Fundamental AI
              <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-500/30 font-semibold">
                Claude Synthesized
              </span>
            </h3>
            {aiSummary && (
              <p className="text-[10px] text-gray-400">
                Diperbarui: {aiSummary.generatedAt}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Upload notice for Indonesian stock without report */}
      {isIndonesianStock && !hasUploadedReport && (
        <div className="my-3 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-start justify-between gap-3">
          <div className="text-xs text-amber-200/90 space-y-1">
            <p className="font-semibold flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Laporan Keuangan Belum Diunggah
            </p>
            <p className="text-[11px] text-gray-300">
              Unggah laporan keuangan resmi (PDF) untuk melihat analisis catatan kaki & telaah risiko yang lebih komprehensif.
            </p>
          </div>
          <button
            onClick={onOpenUpload}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-950 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
          >
            <Upload className="w-3 h-3" />
            Unggah
          </button>
        </div>
      )}

      {aiSummary ? (
        <div className="space-y-3.5 mt-3 text-xs leading-relaxed text-gray-300">
          {/* Main takeaway */}
          <div className="bg-gray-800/60 p-3 rounded-xl border border-gray-700/60 text-gray-200">
            <p className="font-medium">{aiSummary.summary}</p>
          </div>

          {/* Tren Kinerja */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
              Tren Kinerja & Operasional
            </h4>
            <p className="text-gray-300">{aiSummary.performanceTrend}</p>
          </div>

          {/* Analisis Rasio */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
              Evaluasi Rasio Utama
            </h4>
            <p className="text-gray-300">{aiSummary.keyRatiosAnalysis}</p>
          </div>

          {/* Primary Risks */}
          {aiSummary.primaryRisks?.length > 0 && (
            <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-3">
              <h4 className="text-[11px] font-bold text-rose-300 flex items-center gap-1 mb-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                Risiko Utama yang Perlu Diperhatikan
              </h4>
              <ul className="space-y-1 text-gray-300 text-[11px]">
                {aiSummary.primaryRisks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Takeaways */}
          {aiSummary.keyTakeaways?.length > 0 && (
            <div className="bg-blue-950/20 border border-blue-900/40 rounded-xl p-3">
              <h4 className="text-[11px] font-bold text-blue-300 flex items-center gap-1 mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Catatan Penting untuk Investor
              </h4>
              <ul className="space-y-1 text-gray-300 text-[11px]">
                {aiSummary.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Data Sources Attribution */}
          <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[10px] text-gray-400">
            <span>Sumber: {aiSummary.sources?.join(', ') || 'Publikasi Resmi'}</span>
            <span className="text-gray-400 italic">Bukan rekomendasi investasi</span>
          </div>
        </div>
      ) : (
        <div className="py-6 text-center text-xs text-gray-400">
          Rangkuman AI belum digenerate untuk emiten ini.
        </div>
      )}
    </div>
  );
};
