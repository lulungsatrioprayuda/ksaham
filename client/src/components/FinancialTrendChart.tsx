import React, { useState } from 'react';
import type { YearlyFinancial } from '../types';
import { BarChart3, Table as TableIcon } from 'lucide-react';

interface FinancialTrendChartProps {
  trends: YearlyFinancial[];
  currency: 'IDR' | 'USD';
}

export const FinancialTrendChart: React.FC<FinancialTrendChartProps> = ({ trends, currency }) => {
  const [viewMode, setViewMode] = useState<'chart' | 'table'>('chart');

  if (!trends || trends.length === 0) {
    return (
      <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 text-center text-xs text-gray-500">
        Data tren keuangan tahunan belum tersedia.
      </div>
    );
  }

  const maxRevenue = Math.max(...trends.map((t) => Math.max(t.revenue, t.netIncome, 1)));
  const unitLabel = currency === 'IDR' ? 'Miliar Rp' : 'Juta USD';

  return (
    <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3.5">
        <div>
          <h3 className="text-sm font-bold text-gray-100 flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            Tren Kinerja Tahunan
          </h3>
          <p className="text-[11px] text-gray-400 mt-0.5">Satuan: {unitLabel}</p>
        </div>

        {/* View mode toggle */}
        <div className="flex bg-gray-800/80 p-0.5 rounded-lg border border-gray-700/60">
          <button
            onClick={() => setViewMode('chart')}
            className={`p-1.5 rounded-md text-xs transition-colors ${
              viewMode === 'chart' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'
            }`}
            title="Tampilan Grafik"
          >
            <BarChart3 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-1.5 rounded-md text-xs transition-colors ${
              viewMode === 'table' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'
            }`}
            title="Tampilan Tabel"
          >
            <TableIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {viewMode === 'chart' ? (
        <div>
          {/* Legend */}
          <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-500"></span>
              <span>Pendapatan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></span>
              <span>Laba Bersih</span>
            </div>
          </div>

          {/* Bar groups */}
          <div className="grid grid-cols-4 gap-2 pt-2 pb-1 border-b border-gray-800">
            {trends.map((item) => {
              const revHeight = Math.max(8, Math.round((item.revenue / maxRevenue) * 110));
              const incHeight = Math.max(4, Math.round((Math.max(0, item.netIncome) / maxRevenue) * 110));

              return (
                <div key={item.year} className="flex flex-col items-center">
                  <div className="h-32 flex items-end justify-center gap-1 w-full px-1">
                    {/* Revenue bar */}
                    <div
                      style={{ height: `${revHeight}px` }}
                      className="w-1/2 bg-gradient-to-t from-blue-700 to-blue-500 rounded-t-sm transition-all hover:brightness-110 relative group"
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 text-[10px] text-gray-200 px-1 py-0.5 rounded shadow whitespace-nowrap z-10 pointer-events-none">
                        {item.revenue.toLocaleString('id-ID')}
                      </div>
                    </div>

                    {/* Net Income bar */}
                    <div
                      style={{ height: `${incHeight}px` }}
                      className="w-1/2 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-t-sm transition-all hover:brightness-110 relative group"
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 text-[10px] text-gray-200 px-1 py-0.5 rounded shadow whitespace-nowrap z-10 pointer-events-none">
                        {item.netIncome.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-medium text-gray-400 mt-2">{item.year}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Table View */
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-800 text-[11px] text-gray-400">
                <th className="pb-2 font-medium">Tahun</th>
                <th className="pb-2 font-medium text-right">Pendapatan</th>
                <th className="pb-2 font-medium text-right">Laba Bersih</th>
                <th className="pb-2 font-medium text-right">Arus Kas Ops</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {trends.map((t) => (
                <tr key={t.year} className="hover:bg-gray-800/30">
                  <td className="py-2 font-semibold text-gray-300">{t.year}</td>
                  <td className="py-2 text-right text-blue-400 font-mono">
                    {t.revenue.toLocaleString('id-ID')}
                  </td>
                  <td className="py-2 text-right text-emerald-400 font-mono">
                    {t.netIncome.toLocaleString('id-ID')}
                  </td>
                  <td className="py-2 text-right text-gray-300 font-mono">
                    {t.operatingCashFlow.toLocaleString('id-ID')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
