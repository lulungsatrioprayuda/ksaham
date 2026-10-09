import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import type { TickerItem } from '../types';
import { searchTickers } from '../services/mockData';

interface SearchBarProps {
  onSelectTicker: (ticker: string) => void;
  selectedTicker: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSelectTicker, selectedTicker }) => {
  const [query, setQuery] = useState('');
  const [filterExchange, setFilterExchange] = useState<'ALL' | 'IDX' | 'US'>('ALL');
  const [isFocused, setIsFocused] = useState(false);

  const searchResults = useMemo(() => {
    const raw = searchTickers(query);
    if (filterExchange === 'ALL') return raw;
    if (filterExchange === 'IDX') return raw.filter((r) => r.exchange === 'IDX');
    return raw.filter((r) => r.exchange === 'NASDAQ' || r.exchange === 'NYSE');
  }, [query, filterExchange]);

  const popularTickers = ['BBCA.JK', 'BBRI.JK', 'TLKM.JK', 'AAPL', 'NVDA', 'GOTO.JK'];

  const handleSelect = (ticker: string) => {
    onSelectTicker(ticker);
    setQuery('');
    setIsFocused(false);
  };

  return (
    <div className="relative w-full">
      {/* Search Input Box */}
      <div
        className={`flex items-center gap-2.5 bg-gray-900/90 border rounded-2xl px-3.5 py-2.5 transition-all shadow-sm ${
          isFocused ? 'border-blue-500/80 ring-2 ring-blue-500/20' : 'border-gray-800'
        }`}
      >
        <Search className="w-4 h-4 text-gray-400 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Cari kode saham atau nama PT (BBCA, AAPL)..."
          className="bg-transparent border-none outline-none text-sm text-gray-100 placeholder-gray-500 w-full"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="p-1 rounded-full text-gray-400 hover:text-gray-200 hover:bg-gray-800"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Exchange Filters & Quick Chips */}
      <div className="flex items-center justify-between gap-1 mt-2.5 text-xs">
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setFilterExchange('ALL')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
              filterExchange === 'ALL'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800/80 text-gray-400 hover:text-gray-200'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilterExchange('IDX')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
              filterExchange === 'IDX'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800/80 text-gray-400 hover:text-gray-200'
            }`}
          >
            🇮🇩 IDX (.JK)
          </button>
          <button
            onClick={() => setFilterExchange('US')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
              filterExchange === 'US'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800/80 text-gray-400 hover:text-gray-200'
            }`}
          >
            🇺🇸 US (Wall St)
          </button>
        </div>
      </div>

      {/* Popular Chips */}
      {!query && (
        <div className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[11px] text-gray-400 whitespace-nowrap mr-0.5">Populer:</span>
          {popularTickers.map((t) => (
            <button
              key={t}
              onClick={() => handleSelect(t)}
              className={`text-[11px] px-2 py-0.5 rounded-md border transition-all whitespace-nowrap ${
                selectedTicker === t
                  ? 'bg-blue-500/20 text-blue-300 border-blue-500/40 font-semibold'
                  : 'bg-gray-800/60 text-gray-300 border-gray-700/60 hover:bg-gray-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Autocomplete Dropdown List */}
      {(query.length > 0 || isFocused) && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-[#111827] border border-gray-700/90 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-72 overflow-y-auto">
          <div className="p-2 border-b border-gray-800/80 flex justify-between items-center bg-gray-900/60">
            <span className="text-[11px] font-medium text-gray-400">
              Hasil Pencarian ({searchResults.length})
            </span>
            <button
              onClick={() => setIsFocused(false)}
              className="text-[11px] text-gray-500 hover:text-gray-300"
            >
              Tutup
            </button>
          </div>
          {searchResults.length === 0 ? (
            <div className="p-4 text-center text-xs text-gray-400">
              Ticker tidak ditemukan di daftar statis.
            </div>
          ) : (
            <div className="divide-y divide-gray-800/50">
              {searchResults.map((item: TickerItem) => (
                <button
                  key={item.ticker}
                  onClick={() => handleSelect(item.ticker)}
                  className="w-full text-left px-3.5 py-2.5 flex items-center justify-between hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        item.exchange === 'IDX'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}
                    >
                      {item.exchange === 'IDX' ? 'ID' : 'US'}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-sm text-gray-100">{item.ticker}</span>
                        <span className="text-[10px] text-gray-400 bg-gray-800 px-1 rounded">
                          {item.exchange}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1">{item.name}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-500">{item.sector}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
