import { useState } from "react";
import svgPaths from "@/imports/svg-mxzyg840mm";
import imgIconBa01 from "figma:asset/d01c06cec3309ec5c98a31ddbcb9f9fe6b4f1359.png";
import imgImage19 from "figma:asset/e7b24dc6e85fb42d79e6ace8ab9126f7d742557c.png";
import imgImage20 from "figma:asset/a897f204df85b5389f32ff0bf8b0596f67a77d91.png";

interface PaymentPageProps {
  onBack: () => void;
}

export default function PaymentPage({ onBack }: PaymentPageProps) {
  const [activeTab, setActiveTab] = useState<"status" | "history">("status");

  return (
    <div className="bg-[#f7f9fd] flex flex-col min-h-full w-full">
      {/* Gradient Background - Fixed */}
      <div className="absolute h-[118px] left-0 rounded-bl-[28px] top-0 w-full pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.852deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)" }} />
      
      {/* Content */}
      <div className="relative flex flex-col w-full z-10">
        {/* Teal bar */}
        <div className="bg-[#1fb0c3] h-[24px] w-full" />
        
        {/* Header */}
        <div className="relative w-full">
          <div className="flex items-center p-[12px] w-full">
            <button onClick={onBack} className="bg-white flex items-center justify-center p-[4px] rounded-full shrink-0 w-[34.286px]">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p3169b700} fill="#2C313A" fillRule="evenodd" />
                </svg>
              </div>
            </button>
            <p className="flex-1 font-['Inter'] font-bold h-[20px] leading-[20px] text-[16px] text-center text-white">Payment</p>
            <div className="opacity-0 w-[34.286px]" />
          </div>
        </div>
        
        {/* Tabs */}
        <div className="relative w-full">
          <div className="flex flex-col items-start p-[12px] w-full">
            <div className="bg-white h-[52px] relative rounded-full shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] w-full">
              <div className="flex items-center justify-center size-full">
                <div className="flex items-center justify-center px-[4px] py-[2px] size-full">
                  <button 
                    onClick={() => setActiveTab("status")}
                    className={`flex-1 h-[44px] rounded-full ${activeTab === "status" ? "bg-[#20a4b0] shadow-[0px_8px_16px_0px_rgba(129,134,142,0.08)]" : ""}`}
                  >
                    <div className="flex items-center justify-center size-full">
                      <div className="flex items-center justify-center px-[16px] py-[12px] size-full">
                        <p className={`font-['Inter'] font-semibold leading-[22px] text-[14px] text-center ${activeTab === "status" ? "text-white" : "text-[#2c313a]"}`}>
                          Status Paket
                        </p>
                      </div>
                    </div>
                  </button>
                  <button 
                    onClick={() => setActiveTab("history")}
                    className={`flex-1 h-[44px] rounded-full ${activeTab === "history" ? "bg-[#20a4b0] shadow-[0px_8px_16px_0px_rgba(129,134,142,0.08)]" : ""}`}
                  >
                    <div className="flex items-center justify-center size-full">
                      <div className="flex items-center justify-center px-[16px] py-[12px] size-full">
                        <p className={`font-['Inter'] font-semibold leading-[22px] text-[14px] text-center ${activeTab === "history" ? "text-white" : "text-[#2c313a]"}`}>
                          Riwayat
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative w-full">
          {activeTab === "status" && <StatusPaketContent />}
          {activeTab === "history" && <RiwayatContent />}
        </div>
      </div>
    </div>
  );
}

function StatusPaketContent() {
  return (
    <div className="flex flex-col gap-[12px] items-start p-[12px] w-full">
      {/* Card 1 - Urgent Payment */}
      <div className="bg-white relative rounded-[12px] w-full">
        <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col gap-[12px] items-start p-[12px] w-full">
          {/* Header */}
          <div className="flex gap-[12px] items-center w-full">
            <div className="relative shrink-0 size-[48px]">
              <img alt="Brain Academy" className="size-full object-cover" src={imgIconBa01} />
            </div>
            <div className="flex flex-1 flex-col gap-[4px] items-start">
              <div className="flex gap-[4px] items-start w-full">
                <p className="flex-1 font-['Inter'] font-normal leading-[normal] text-[12px] text-black">ID Paket</p>
              </div>
              <p className="font-['Inter'] font-bold leading-[22px] text-[14px] text-black w-full">[Nama Paket]</p>
            </div>
          </div>
          
          <p className="font-['Inter'] font-normal leading-[22px] text-[#2c313a] text-[14px] w-full">Paket aktif sampai 26 Jun 2026</p>
          
          {/* Owner */}
          <div className="bg-[#eff8f7] rounded-[4px] w-full">
            <div className="flex gap-[4px] items-start px-[12px] py-[8px] w-full">
              <p className="flex-1 font-['Inter'] font-normal leading-[22px] text-[#2c313a] text-[14px]">Owner Paket</p>
              <div className="flex gap-[8px] items-center">
                <div className="relative shrink-0 size-[22px]">
                  <img alt="Liam" className="size-full object-cover" src={imgImage19} />
                </div>
                <p className="font-['Inter'] font-normal leading-[22px] text-[#2c313a] text-[14px]">Liam A.</p>
              </div>
            </div>
          </div>
          
          <p className="font-['Inter'] font-bold leading-[20px] text-[#434856] text-[16px]">Harus segera dibayarkan</p>
          
          {/* Installment Card */}
          <div className="bg-white rounded-[8px] w-full">
            <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_20px_0px_rgba(113,130,164,0.08)]" />
            <div className="flex flex-col gap-[10px] items-start p-[12px] w-full shadow-[0px_6px_20px_0px_rgba(113,130,164,0.08)]">
              <div className="flex flex-col gap-[4px] items-start w-full">
                <p className="font-['Inter'] font-semibold h-[20px] leading-[22px] text-[#2eb5c0] text-[14px] w-full">ruangbelajar - Cicilan 2 dari 3</p>
                <p className="font-['Inter'] font-bold h-[20px] leading-[20px] text-[#434856] text-[16px] w-full">Paket 1 Tahun Kelas 10-11</p>
              </div>
              
              {/* Info banner */}
              <div className="bg-[#e3f7ff] rounded-[4px] w-full p-[10px] flex items-center gap-[8px]">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <ellipse cx="8" cy="8" fill="#3CC4E5" rx="8" ry="8" />
                    <ellipse cx="8" cy="5" fill="white" rx="1" ry="1" />
                    <rect fill="white" height="5" rx="1" width="2" x="7" y="7" />
                  </svg>
                </div>
                <p className="font-['Inter'] font-normal leading-[18px] text-[#434856] text-[12px]">Dapatkan manfaat maksimal dari langganan belajar kamu</p>
              </div>
              
              <p className="font-['Inter'] font-normal leading-[18px] text-[12px] text-black w-full">Paling lambat  15 November 2022</p>
              
              {/* Payment CTA */}
              <div className="flex gap-[10px] items-center w-full">
                <div className="flex-1 flex flex-col gap-[4px] items-start">
                  <p className="font-['Inter'] font-normal leading-[18px] text-[#60697f] text-[12px]">Total pembayaran</p>
                  <p className="font-['Inter'] font-bold leading-[20px] text-[#ed2643] text-[16px]">Rp250.000</p>
                </div>
                <button className="bg-[#f26d0f] flex items-center justify-center h-[36px] px-[16px] rounded-full">
                  <p className="font-['Inter'] font-bold leading-[22px] text-[14px] text-center text-white">Bayar Sekarang</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 - No Payment Due */}
      <div className="bg-white relative rounded-[12px] w-full">
        <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col gap-[12px] items-start p-[12px] w-full">
          {/* Header */}
          <div className="flex gap-[12px] items-center w-full">
            <div className="relative shrink-0 size-[48px]">
              <img alt="Brain Academy" className="size-full object-cover" src={imgIconBa01} />
            </div>
            <div className="flex flex-1 flex-col gap-[4px] items-start">
              <div className="flex gap-[4px] items-start w-full">
                <p className="flex-1 font-['Inter'] font-normal leading-[normal] text-[12px] text-black">ID Paket</p>
              </div>
              <p className="font-['Inter'] font-bold leading-[22px] text-[14px] text-black w-full">[Nama Paket]</p>
            </div>
          </div>
          
          <p className="font-['Inter'] font-normal leading-[22px] text-[#2c313a] text-[14px] w-full">Paket aktif sampai 26 Jun 2026</p>
          
          {/* Owner */}
          <div className="bg-[#eff8f7] rounded-[4px] w-full">
            <div className="flex gap-[4px] items-start px-[12px] py-[8px] w-full">
              <p className="flex-1 font-['Inter'] font-normal leading-[22px] text-[#2c313a] text-[14px]">Owner Paket</p>
              <div className="flex gap-[8px] items-center">
                <div className="relative rounded-[40px] shrink-0 size-[22px]">
                  <img alt="Dora" className="rounded-[40px] size-full object-cover" src={imgImage20} />
                </div>
                <p className="font-['Inter'] font-normal leading-[22px] text-[#2c313a] text-[14px]">Dora A.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiwayatContent() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
      {/* Transaction Card */}
      <div className="bg-white flex flex-col gap-[12px] items-start p-[12px] rounded-[12px] shadow-[0px_8px_16px_0px_rgba(129,134,142,0.08)] w-full">
        
        {/* Status Badge */}
        <div className="bg-[#d3f1d4] rounded-[6px] w-full">
          <div className="flex items-center justify-center px-[63px] py-[4px] w-full">
            <p className="font-['Inter'] font-normal leading-[16px] text-[#2c313a] text-[11px] text-center">Transaksi Selesai</p>
          </div>
        </div>
        
        {/* Transaction Details */}
        <div className="flex gap-[12px] items-start w-full">
          <div className="relative shrink-0 size-[48px]">
            <img alt="Brain Academy" className="size-full object-cover" src={imgIconBa01} />
          </div>
          <div className="flex flex-1 flex-col gap-[4px] items-start">
            <p className="font-['Inter'] font-bold leading-[22px] text-[#2eb5c0] text-[14px]">INV-1A2B3C4D5E</p>
            <div className="flex gap-[4px] h-[19px] items-center w-full">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" fill="#4CAF50" r="8" />
                  <path d="M11.3333 5.5L6.75 10.0833L4.66667 8" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="font-['Inter'] font-bold leading-[18px] text-[#434856] text-[12px]">Brain Academy Center</p>
            </div>
            <p className="font-['Inter'] font-normal leading-[18px] text-[#434856] text-[12px] w-full">Jakarta Selatan - Pasar Minggu Regular SMA 1 Tahun 2022/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}