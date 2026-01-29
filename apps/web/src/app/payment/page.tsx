"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
};

interface Invoice {
    id: number;
    program: string;
    child: string;
    amount: string;
    dueDate: string;
    status: 'pending' | 'paid';
    installment?: string; // e.g., "Cicilan 2 dari 3"
    providerIcon?: string;
    statusLabel?: string; // e.g., "Transaksi Selesai"
    date?: string; // e.g., "HSBC • 24 Jan 2026"
}

// Dummy Data
const ACTIVE_PACKAGES = [
    {
        id: "p1",
        name: "[Nama Paket]",
        expiry: "26 Jun 2026",
        owner: "Liam A.",
        avatar: "/assets/images/profile-liam.png"
    },
    {
        id: "p2",
        name: "[Nama Paket]",
        expiry: "26 Jun 2026",
        owner: "Dora A.", // Using Dora A. as per design, though previously Dora D.
        avatar: "/assets/images/profile-dora.png" // Updated to use Dora's avatar
    }
];

const UNPAID_BILLS: Invoice[] = [
    {
        id: 101,
        program: "Paket 1 Tahun Kelas 10-11",
        child: "Liam A.",
        amount: "Rp250.000",
        dueDate: "15 November 2022",
        status: "pending",
        installment: "Cicilan 2 dari 3",
        providerIcon: "/assets/images/iconlogo-ruangelajar.png" // Placeholder or reuse existing
    }
];

const HISTORY: Invoice[] = [
    {
        id: 201,
        program: "Brain Academy Center",
        child: "Liam A.",
        amount: "INV-1A2B3C4D5E", // Invoice ID as amount/title in history view
        dueDate: "24 Jan 2026",
        status: "paid",
        statusLabel: "Transaksi Selesai",
        date: "Jakarta Selatan - Pasar Minggu Regular\nSMA 1 Tahun 2022/2023",
        providerIcon: "/assets/images/iconlogo-brainacademy.png"
    }
];

function StatusPaketView() {
    return (
        <div className="flex flex-col gap-[16px]">
            {/* Active Packages List */}
            {ACTIVE_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-[16px] p-[16px] shadow-sm border border-[#E2E8F0] flex flex-col gap-[12px]">
                    <div className="flex gap-[12px]">
                        {/* Icon Placeholder - replacing specific icons with generic or one from assets if available. Using a generic colored circle/imitation of the design. */}
                        <div className="size-[48px] rounded-full bg-[#FFDcb3] flex items-center justify-center shrink-0 border-2 border-white shadow-sm overflow-hidden">
                            {/* Design shows a shop icon maybe? Using active package icon */}
                            <div className="w-[32px] h-[32px] bg-[#009688] rounded-[4px]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-['Inter'] font-normal text-[12px] text-[#5E677B]">ID Paket</span>
                            <span className="font-['Inter'] font-bold text-[14px] text-[#2C313A]">{pkg.name}</span>
                        </div>
                    </div>

                    <p className="font-['Inter'] font-normal text-[14px] text-[#2C313A]">
                        Paket aktif sampai {pkg.expiry}
                    </p>

                    <div className="bg-[#F1F5F9] rounded-[8px] p-[12px] flex items-center justify-between">
                        <span className="font-['Inter'] font-normal text-[14px] text-[#2C313A]">Owner Paket</span>
                        <div className="flex items-center gap-[8px]">
                            <div className="relative size-[24px] rounded-full overflow-hidden">
                                <Image src={pkg.avatar} alt={pkg.owner} fill className="object-cover" />
                            </div>
                            <span className="font-['Inter'] font-normal text-[14px] text-[#2C313A]">{pkg.owner}</span>
                        </div>
                    </div>
                </div>
            ))}

            {/* Unpaid Section */}
            <div className="flex flex-col gap-[12px] mt-[8px]">
                <h3 className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">Harus segera dibayarkan</h3>
                {UNPAID_BILLS.map((bill) => (
                    <div key={bill.id} className="bg-white rounded-[16px] p-[16px] shadow-sm border border-[#E2E8F0] flex flex-col gap-[12px]">
                        <div className="flex flex-col gap-[4px]">
                            <span className="font-['Inter'] font-bold text-[12px] text-[#20A4B0]">ruangbelajar - {bill.installment}</span>
                            <span className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">{bill.program}</span>
                        </div>

                        {/* Info Box */}
                        <div className="bg-[#E3F2FD] rounded-[8px] p-[12px] flex gap-[8px] items-start">
                            <div className="shrink-0 size-[16px] rounded-full bg-[#29B6F6] text-white flex items-center justify-center text-[10px] font-bold mt-[2px]">i</div>
                            <p className="font-['Inter'] font-normal text-[12px] text-[#2C313A] leading-[18px]">
                                Dapatkan manfaat maksimal dari langganan belajar kamu
                            </p>
                        </div>

                        <p className="font-['Inter'] font-normal text-[12px] text-[#2C313A]">
                            Paling lambat  {bill.dueDate}
                        </p>

                        <div className="flex items-center justify-between mt-[4px]">
                            <div className="flex flex-col">
                                <span className="font-['Inter'] font-normal text-[12px] text-[#5E677B]">Total pembayaran</span>
                                <span className="font-['Inter'] font-bold text-[16px] text-[#F32876]">{bill.amount}</span>
                            </div>
                            <button className="bg-[#F26D0F] hover:bg-[#d96010] text-white font-['Inter'] font-bold text-[14px] px-[20px] py-[10px] rounded-full transition-colors">
                                Bayar Sekarang
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function RiwayatView() {
    return (
        <div className="flex flex-col gap-[12px]">
            {HISTORY.map((item) => (
                <div key={item.id} className="bg-white rounded-[16px] p-[16px] shadow-sm border border-[#E2E8F0] flex flex-col gap-[12px]">
                    {/* Status Badge */}
                    <div className="bg-[#dbf5e8] px-[12px] py-[6px] rounded-[4px] self-start w-full text-center">
                        <span className="font-['Inter'] font-normal text-[12px] text-[#2a7650]">{item.statusLabel}</span>
                    </div>

                    <div className="flex gap-[12px] items-start">
                        <div className="size-[48px] rounded-full bg-[#FFDcb3] flex items-center justify-center shrink-0 border-2 border-white shadow-sm overflow-hidden">
                            {/* Placeholder Icon */}
                            <div className="w-[32px] h-[32px] bg-[#F26D0F] rounded-[4px]" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <span className="font-['Inter'] font-bold text-[14px] text-[#20A4B0]">{item.amount}</span>
                            {/* Using amount field for Invoice ID as per my schema mapping, visually it matches INV-XXX */}

                            <div className="flex items-center gap-[4px]">
                                <div className="size-[14px] rounded-full bg-[#4CAF50] flex items-center justify-center">
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="font-['Inter'] font-bold text-[12px] text-[#2C313A]">{item.program}</span>
                            </div>

                            <p className="font-['Inter'] font-normal text-[12px] text-[#5E677B] leading-[18px]">
                                {item.date}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function PaymentPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'status' | 'riwayat'>('status');

    return (
        <div className="flex flex-col min-h-full w-full bg-[#f7f9fd]">
            {/* Header */}
            <div className="bg-[#34CE9E] pt-[16px] pb-[24px] rounded-bl-[28px] shadow-sm relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "linear-gradient(161.996deg, #7BD7FB 0%, #34CE9E 100%)"
                    }}
                />

                <div className="relative z-10 flex items-center p-[12px] w-full">
                    <button
                        onClick={() => router.back()}
                        className="bg-white flex items-center justify-center p-[4px] rounded-full shrink-0 w-[34px] shadow-sm active:bg-gray-50"
                    >
                        <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                            <path d={svgPaths.back} fill="#2C313A" />
                        </svg>
                    </button>
                    <p className="flex-1 font-['Inter'] font-bold text-[20px] leading-[20px] text-center text-white">
                        Payment
                    </p>
                    <div className="w-[34px]" />
                </div>

                {/* Tabs */}
                <div className="relative z-10 px-[24px] mt-[16px]">
                    <div className="bg-white rounded-full p-[4px] flex relative shadow-sm">
                        <div
                            className={`absolute top-[4px] bottom-[4px] rounded-full bg-[#20A4B0] transition-all duration-300 ease-in-out ${activeTab === 'status' ? 'left-[4px] w-[calc(50%-4px)]' : 'left-[50%] w-[calc(50%-4px)]'}`}
                        />
                        <button
                            onClick={() => setActiveTab('status')}
                            className={`flex-1 py-[8px] rounded-full text-[14px] font-bold z-10 transition-colors ${activeTab === 'status' ? 'text-white' : 'text-[#5E677B]'}`}
                        >
                            Status Paket
                        </button>
                        <button
                            onClick={() => setActiveTab('riwayat')}
                            className={`flex-1 py-[8px] rounded-full text-[14px] font-bold z-10 transition-colors ${activeTab === 'riwayat' ? 'text-white' : 'text-[#5E677B]'}`}
                        >
                            Riwayat
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-[20px] pb-[100px]">
                {activeTab === 'status' ? <StatusPaketView /> : <RiwayatView />}
            </div>
        </div>
    );
}
