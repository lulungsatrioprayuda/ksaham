import { Search, Calendar, FileUp, Info } from 'lucide-react';

export type TabType = 'stocks' | 'ipo' | 'upload' | 'info';

interface BottomNavProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

export const BottomNav = ({ activeTab, onChangeTab }: BottomNavProps) => {
  const tabs = [
    { id: 'stocks' as TabType, label: 'Saham', icon: Search },
    { id: 'ipo' as TabType, label: 'IPO', icon: Calendar },
    { id: 'upload' as TabType, label: 'Upload PDF', icon: FileUp },
    { id: 'info' as TabType, label: 'Tentang', icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-xl border-t border-gray-800/90 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-md mx-auto grid grid-cols-4 px-2 py-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-blue-400 font-semibold scale-105'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-500/15 text-blue-400' : 'text-gray-400'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
