import React, { useState } from 'react';
import type { IpoItem } from '../types';
import { MOCK_IPOS } from '../services/mockData';
import { Tag, ShieldAlert, ChevronDown, ChevronUp, AlertCircle, FileText } from 'lucide-react';

interface IpoListViewProps {
  onOpenUpload: (ticker?: string) => void;
}

export const IpoListView: React.FC<IpoListViewProps> = ({ onOpenUpload }) => {
  const [filterTab, setFilterTab] = useState<'active' | 'listed'>('active');
  const [expandedId, setExpandedId] = useState<string | null>('ipo-1');

  const filteredList = MOCK_IPOS.filter((item) => {
    if (filterTab === 'active') return item.status === 'offering' || item.status === 'upcoming';
    return item.status === 'listed';
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4 pb-20">
      {/* IPO Disclaimer Alert */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3 flex items-start gap-2.5 text-xs text-amber-200/90">
        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-amber-300">Pemberitahuan Data IPO</p>
          <p className="text-[11px] text-gray-300 mt-0.5">
            Data bersumber dari prospektus awal & publikasi e-IPO. Informasi harga dan jadwal dapat berubah sebelum tanggal pencatatan efektif.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-900 border border-gray-800 p-1 rounded-xl">
        <button
          onClick={() => setFilterTab('active')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
            filterTab === 'active'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          Sedang / Akan Berjalan
        </button>
        <button
          onClick={() => setFilterTab('listed')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
            filterTab === 'listed'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          Sudah Listing
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {filteredList.map((ipo: IpoItem) => {
          const isExpanded = expandedId === ipo.id;
          const statusBadge =
            ipo.status === 'offering'
              ? { text: 'Masa Penawaran', bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' }
              : ipo.status === 'upcoming'
              ? { text: 'Mendatang', bg: 'bg-blue-500/20 text-blue-300 border-blue-500/30' }
              : { text: 'Tercatat (Listed)', bg: 'bg-gray-800 text-gray-300 border-gray-700' };

          return (
            <div
              key={ipo.id}
              className="bg-gray-900/90 border border-gray-800 rounded-2xl p-4 transition-all shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-white">{ipo.ticker}</span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${statusBadge.bg}`}
                    >
                      {statusBadge.text}
                    </span>
                  </div>
                  <h3 className="text-xs text-gray-300 font-medium mt-0.5">{ipo.name}</h3>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-gray-500 block">Harga Penawaran</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">
                    {ipo.offeringPriceRange}
                  </span>
                </div>
              </div>

              {/* Quick Details Grid */}
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-800/80 text-[11px]">
                <div>
                  <span className="text-gray-500 block">Masa Penawaran:</span>
                  <span className="font-medium text-gray-300">{ipo.offeringPeriod}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Tanggal Listing:</span>
                  <span className="font-medium text-gray-300">{ipo.listingDate}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Porsi Publik:</span>
                  <span className="font-semibold text-blue-400">{ipo.publicPercentage}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Underwriter:</span>
                  <span className="font-medium text-gray-300 line-clamp-1">{ipo.underwriter}</span>
                </div>
              </div>

              {/* Expand Toggle */}
              <button
                onClick={() => toggleExpand(ipo.id)}
                className="w-full mt-3 pt-2 border-t border-gray-800 flex items-center justify-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>{isExpanded ? 'Tutup Rincian Prospektus' : 'Lihat Rincian Prospektus IPO'}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {/* Expanded Prospectus Details */}
              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-gray-800 space-y-3 text-xs">
                  {/* Rencana Penggunaan Dana */}
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-300 mb-1.5 flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-blue-400" />
                      Rencana Penggunaan Dana IPO:
                    </h4>
                    <ul className="space-y-1 text-gray-400 text-[11px] pl-2">
                      {ipo.useOfFunds.map((u, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-400">•</span>
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lock Up */}
                  <div className="bg-gray-800/40 p-2.5 rounded-xl border border-gray-700/50">
                    <span className="text-[11px] font-bold text-gray-300 block mb-0.5">
                      Ketentuan Lock-Up Saham Pendiri:
                    </span>
                    <p className="text-[11px] text-gray-400">{ipo.lockUpPeriod}</p>
                  </div>

                  {/* Risiko Utama */}
                  <div className="bg-rose-950/20 border border-rose-900/40 p-2.5 rounded-xl">
                    <span className="text-[11px] font-bold text-rose-300 flex items-center gap-1 mb-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                      Faktor Risiko Utama (Prospektus):
                    </span>
                    <ul className="space-y-1 text-[11px] text-gray-300 pl-2">
                      {ipo.keyRisks.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-400">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action button to upload prospectus PDF */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500">
                      Pembaruan data: {ipo.updatedAt}
                    </span>
                    <button
                      onClick={() => onOpenUpload(ipo.ticker)}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-[11px] font-semibold flex items-center gap-1 transition-all"
                    >
                      <FileText className="w-3 h-3" />
                      Unggah Prospektus Lengkap
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
