import React from 'react';
import { AlertTriangle, ShieldCheck, Database, Cpu } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  return (
    <div className="bg-gray-900/90 border border-gray-800/90 rounded-2xl p-3 flex items-start gap-2.5 text-xs text-gray-400">
      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
      <p className="leading-relaxed text-[11px]">
        <strong className="text-gray-300">Penafian Risiko (Disclaimer):</strong> Informasi di aplikasi ini bersifat edukatif dan analisis fundamental awal, bukan rekomendasi jual/beli saham. Selalu lakukan riset mandiri (*Do Your Own Research*) sebelum berinvestasi.
      </p>
    </div>
  );
};

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-4 pb-20 text-xs">
      <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Tentang KSaham</h3>
            <p className="text-[11px] text-gray-400">Platform Ringkasan Fundamental Saham</p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed">
          KSaham dirancang untuk membantu investor pemula dan menengah memahami kesehatan keuangan perusahaan terdaftar (IDX dan US Stocks) dalam satu tampilan terstruktur tanpa kerumitan teknis.
        </p>
      </div>

      <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-4 space-y-3">
        <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider flex items-center gap-1.5">
          <Database className="w-4 h-4 text-emerald-400" />
          Sumber Data Pasar
        </h4>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">•</span>
            <div>
              <strong className="text-white">Bursa Efek Indonesia (IDX):</strong> Data harga dan rasio tertunda (delayed) melalui pustaka terbuka Yahoo Finance.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">•</span>
            <div>
              <strong className="text-white">Bursa AS (NYSE / NASDAQ):</strong> Data laporan keuangan berkala via SEC EDGAR (<code className="text-blue-400">data.sec.gov</code>).
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">•</span>
            <div>
              <strong className="text-white">Kalender IPO:</strong> Ringkasan prospektus awal dan pengumuman penawaran umum perdana.
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-4 space-y-3">
        <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider flex items-center gap-1.5">
          <Cpu className="w-4 h-4 text-indigo-400" />
          Prinsip Privasi & AI
        </h4>
        <p className="text-gray-300 leading-relaxed">
          Aplikasi ini beroperasi tanpa database persisten (*zero-database architecture*). File PDF yang Anda unggah hanya diproses sementara dalam memori RAM untuk diekstrak teksnya dan segera dihapus setelah rangkuman selesai dibuat oleh Claude API.
        </p>
      </div>

      <DisclaimerBanner />
    </div>
  );
};
