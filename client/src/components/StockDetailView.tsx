import React, { useState } from 'react';
import type { StockDetail } from '../types';
import { RatioCards } from './RatioCards';
import { FinancialTrendChart } from './FinancialTrendChart';
import { AiSummaryCard } from './AiSummaryCard';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

interface StockDetailViewProps {
  stock: StockDetail;
  onOpenUpload: () => void;
}

export const StockDetailView: React.FC<StockDetailViewProps> = ({ stock, onOpenUpload }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const { profile, price, valuation, profitability, trends, aiSummary, hasUploadedFinancialReport } = stock;

  const isPositive = price.change >= 0;
  const isIndonesian = profile.exchange === 'IDX';

  const formatPrice = (p: number, curr: 'IDR' | 'USD') => {
    if (curr === 'IDR') return `Rp ${p.toLocaleString('id-ID')}`;
    return `$${p.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatMarketCap = (cap: number, curr: 'IDR' | 'USD') => {
    if (curr === 'IDR') {
      const triliun = cap / 1e12;
      return `Rp ${triliun.toFixed(1)} Triliun`;
    }
    const billion = cap / 1e9;
    if (billion >= 1000) {
      return `$${(billion / 1000).toFixed(2)} Trillion`;
    }
    return `$${billion.toFixed(1)} Billion`;
  };

  return (
    <div className="space-y-4 pb-20">
      {/* 1. Price & Main Profile Header */}
      <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-white tracking-tight">{profile.ticker}</h2>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                  profile.exchange === 'IDX'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                }`}
              >
                {profile.exchange}
              </span>
            </div>
            <p className="text-xs text-gray-300 font-medium mt-0.5">{profile.name}</p>
            <p className="text-[11px] text-gray-500">{profile.sector} • {profile.industry}</p>
          </div>

          {/* Price display */}
          <div className="text-right">
            <div className="text-xl font-bold font-mono text-white">
              {formatPrice(price.lastPrice, price.currency)}
            </div>
            <div
              className={`flex items-center justify-end gap-1 text-xs font-semibold mt-0.5 ${
                isPositive ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
              <span>
                {isPositive ? '+' : ''}
                {price.change.toLocaleString('id-ID')} ({isPositive ? '+' : ''}
                {price.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>

        {/* Quick Market Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-gray-800/80 text-xs">
          <div>
            <span className="text-[11px] text-gray-500 block">Kapitalisasi Pasar</span>
            <span className="font-semibold text-gray-200">
              {formatMarketCap(price.marketCap, price.currency)}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-gray-500 block">Rentang 52 Minggu</span>
            <span className="font-semibold text-gray-200 font-mono text-[11px]">
              {price.low52Week.toLocaleString()} - {price.high52Week.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Company Description with Read More */}
        <div className="mt-3 pt-3 border-t border-gray-800/60 text-xs text-gray-400">
          <p className={showFullDesc ? '' : 'line-clamp-2'}>
            {profile.description}
          </p>
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="text-[11px] text-blue-400 hover:text-blue-300 font-medium mt-1 inline-block"
          >
            {showFullDesc ? 'Sembunyikan' : 'Baca selengkapnya profil...'}
          </button>
        </div>
      </div>

      {/* 2. AI Summary Card (PRD F2.6) */}
      <AiSummaryCard
        aiSummary={aiSummary}
        hasUploadedReport={hasUploadedFinancialReport}
        isIndonesianStock={isIndonesian}
        onOpenUpload={onOpenUpload}
      />

      {/* 3. Valuation & Profitability Ratio Cards (PRD F2.3, F2.4) */}
      <RatioCards valuation={valuation} profitability={profitability} />

      {/* 4. Financial Trends (PRD F2.5) */}
      <FinancialTrendChart trends={trends} currency={price.currency} />

      {/* 5. Attribution & Timestamp info (PRD F2.7) */}
      <div className="bg-gray-900/50 border border-gray-800/60 rounded-xl p-3 flex items-center justify-between text-[11px] text-gray-400">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-gray-400" />
          <span>Update terakhir: {price.lastUpdated}</span>
        </div>
        <span className="text-gray-400">Sumber: {price.dataSource}</span>
      </div>
    </div>
  );
};
