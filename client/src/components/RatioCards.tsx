import React from 'react';
import type { StockValuation, StockProfitability } from '../types';
import { Scale, TrendingUp } from 'lucide-react';

interface RatioCardsProps {
  valuation: StockValuation;
  profitability: StockProfitability;
}

export const RatioCards: React.FC<RatioCardsProps> = ({ valuation, profitability }) => {
  const formatVal = (val?: number | null, suffix = '') => {
    if (val === null || val === undefined) return 'N/A';
    return `${val.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}${suffix}`;
  };

  return (
    <div className="space-y-3">
      {/* Valuation Ratios */}
      <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-1.5 mb-3">
          <Scale className="w-4 h-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-gray-100">Rasio Valuasi Pasar</h3>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3">
            <div className="flex items-center justify-between text-[11px] text-gray-400">
              <span>P/E Ratio</span>
              <span className="text-[10px] bg-gray-700 px-1 rounded text-gray-300">Laba</span>
            </div>
            <div className="text-base font-bold text-gray-100 font-mono mt-1">
              {formatVal(valuation.per, 'x')}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">Harga dibanding laba per saham</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3">
            <div className="flex items-center justify-between text-[11px] text-gray-400">
              <span>PBV</span>
              <span className="text-[10px] bg-gray-700 px-1 rounded text-gray-300">Nilai Buku</span>
            </div>
            <div className="text-base font-bold text-gray-100 font-mono mt-1">
              {formatVal(valuation.pbv, 'x')}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">Harga dibanding ekuitas bersih</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3">
            <div className="flex items-center justify-between text-[11px] text-gray-400">
              <span>Dividend Yield</span>
              <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-1 rounded">Bagi Hasil</span>
            </div>
            <div className="text-base font-bold text-emerald-400 font-mono mt-1">
              {formatVal(valuation.dividendYield, '%')}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">Imbal hasil dividen tahunan</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3">
            <div className="flex items-center justify-between text-[11px] text-gray-400">
              <span>EV/EBITDA</span>
              <span className="text-[10px] bg-gray-700 px-1 rounded text-gray-300">Operasional</span>
            </div>
            <div className="text-base font-bold text-gray-100 font-mono mt-1">
              {formatVal(valuation.evEbitda, 'x')}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">Nilai perusahaan vs EBITDA</p>
          </div>
        </div>
      </div>

      {/* Profitability & Solvency */}
      <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-1.5 mb-3">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-gray-100">Profitabilitas & Solvabilitas</h3>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3">
            <div className="flex items-center justify-between text-[11px] text-gray-400">
              <span>ROE</span>
              <span className="text-[10px] bg-blue-900/50 text-blue-300 px-1 rounded">Modal</span>
            </div>
            <div className="text-base font-bold text-blue-400 font-mono mt-1">
              {formatVal(profitability.roe, '%')}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">Laba atas modal ekuitas</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3">
            <div className="flex items-center justify-between text-[11px] text-gray-400">
              <span>ROA</span>
              <span className="text-[10px] bg-gray-700 px-1 rounded text-gray-300">Aset</span>
            </div>
            <div className="text-base font-bold text-gray-100 font-mono mt-1">
              {formatVal(profitability.roa, '%')}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">Efisiensi penggunaan aset</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3">
            <div className="flex items-center justify-between text-[11px] text-gray-400">
              <span>Net Profit Margin</span>
              <span className="text-[10px] bg-emerald-900/50 text-emerald-300 px-1 rounded">Marjin</span>
            </div>
            <div className="text-base font-bold text-emerald-400 font-mono mt-1">
              {formatVal(profitability.npm, '%')}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">Persentase laba dari omzet</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3">
            <div className="flex items-center justify-between text-[11px] text-gray-400">
              <span>DER (Utang)</span>
              <span className="text-[10px] bg-amber-900/50 text-amber-300 px-1 rounded">Solvabilitas</span>
            </div>
            <div className="text-base font-bold text-amber-400 font-mono mt-1">
              {formatVal(profitability.der, 'x')}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">Rasio total utang vs modal</p>
          </div>
        </div>
      </div>
    </div>
  );
};
