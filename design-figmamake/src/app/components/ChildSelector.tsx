import { useState } from "react";

interface Child {
  id: string;
  name: string;
  grade: string;
  avatar: string;
}

// Mock data untuk contoh
const mockChildren: Child[] = [
  {
    id: "1",
    name: "Liam A.",
    grade: "English Academy - Dasher",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop"
  },
  {
    id: "2", 
    name: "Dora A.",
    grade: "Champions Wonderlab",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: "3",
    name: "Ryan K.",
    grade: "Math Academy - SMA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

interface ChildSelectorProps {
  onClose: () => void;
  onSelectChild: (child: Child) => void;
  currentChild?: Child;
}

export default function ChildSelector({ onClose, onSelectChild, currentChild }: ChildSelectorProps) {
  const [selectedChild, setSelectedChild] = useState<Child | undefined>(currentChild);

  const handleSelect = (child: Child) => {
    setSelectedChild(child);
    onSelectChild(child);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[200] flex items-end justify-center animate-fadeIn">
      <div className="bg-white rounded-t-3xl w-full max-w-[450px] animate-slideUp shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-900">Pilih Anak</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-500">Monitoring kegiatan belajar anak Anda</p>
        </div>

        {/* Children List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {mockChildren.map((child) => (
            <button
              key={child.id}
              onClick={() => handleSelect(child)}
              className={`w-full p-4 mb-3 rounded-xl border-2 transition-all ${
                selectedChild?.id === child.id
                  ? "border-[#20A4B0] bg-[#20A4B0]/5"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={child.avatar}
                    alt={child.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {selectedChild?.id === child.id && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#20A4B0] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900">{child.name}</p>
                  <p className="text-sm text-gray-500">{child.grade}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Add Child Button */}
        <div className="p-4 border-t border-gray-100">
          <button className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-gray-300 text-gray-600 hover:border-[#20A4B0] hover:text-[#20A4B0] hover:bg-[#20A4B0]/5 transition-all flex items-center justify-center gap-2 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tambah Anak Baru
          </button>
        </div>
      </div>
    </div>
  );
}

// Export mock data dan types untuk digunakan di komponen lain
export { mockChildren, type Child };
