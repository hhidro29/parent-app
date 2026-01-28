"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
};

export default function PaymentPage() {
    const router = useRouter();

    const invoices = [
        { id: 1, program: "English Academy - Dasher", child: "Liam A.", amount: "Rp 2.500.000", dueDate: "31 Jan 2026", status: "pending" },
        { id: 2, program: "Champions Wonderlab", child: "Dora D.", amount: "Rp 1.800.000", dueDate: "15 Feb 2026", status: "pending" },
        { id: 3, program: "English Academy - Dasher", child: "Liam A.", amount: "Rp 2.500.000", dueDate: "31 Dec 2025", status: "paid" },
    ];

    return (
        <div className="flex flex-col min-h-full w-full bg-[#f7f9fd]">
            {/* Header */}
            <div
                className="relative overflow-hidden rounded-bl-[28px] w-full"
                style={{
                    backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.996deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)",
                }}
            >
                <div className="bg-[#1fb0c3] h-[24px] w-full" />
                <div className="flex items-center p-[12px] w-full">
                    <button
                        onClick={() => router.back()}
                        className="bg-white flex items-center justify-center p-[4px] rounded-full shrink-0 w-[34px] shadow-[0px_0px_0px_1px_#cfd3db_inset]"
                    >
                        <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                            <path d={svgPaths.back} fill="#2C313A" />
                        </svg>
                    </button>
                    <p className="flex-1 font-['Inter'] font-bold text-[16px] leading-[20px] text-center text-white">
                        Payment
                    </p>
                    <div className="w-[34px]" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[16px] p-[12px]">
                {/* Pending Section */}
                <div className="flex flex-col gap-[12px]">
                    <p className="font-['Inter'] font-bold text-[16px] text-[#2c313a]">Tagihan Belum Dibayar</p>
                    {invoices.filter(i => i.status === 'pending').map((invoice) => (
                        <div key={invoice.id} className="bg-white rounded-[12px] p-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
                            <div className="flex justify-between items-start mb-[8px]">
                                <div>
                                    <p className="font-['Inter'] font-semibold text-[14px] text-[#2c313a]">{invoice.program}</p>
                                    <p className="font-['Inter'] font-normal text-[12px] text-[#5e677b]">{invoice.child}</p>
                                </div>
                                <div className="bg-[#fff4e6] px-[8px] py-[2px] rounded-full">
                                    <p className="font-['Inter'] font-bold text-[10px] text-[#d97706]">Pending</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-['Inter'] font-bold text-[18px] text-[#2c313a]">{invoice.amount}</p>
                                    <p className="font-['Inter'] font-normal text-[11px] text-[#5e677b]">Jatuh tempo: {invoice.dueDate}</p>
                                </div>
                                <button className="bg-[#f26d0f] px-[16px] py-[8px] rounded-full">
                                    <p className="font-['Inter'] font-bold text-[12px] text-white">Bayar</p>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Paid Section */}
                <div className="flex flex-col gap-[12px]">
                    <p className="font-['Inter'] font-bold text-[16px] text-[#2c313a]">Riwayat Pembayaran</p>
                    {invoices.filter(i => i.status === 'paid').map((invoice) => (
                        <div key={invoice.id} className="bg-white rounded-[12px] p-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] opacity-70">
                            <div className="flex justify-between items-start mb-[8px]">
                                <div>
                                    <p className="font-['Inter'] font-semibold text-[14px] text-[#2c313a]">{invoice.program}</p>
                                    <p className="font-['Inter'] font-normal text-[12px] text-[#5e677b]">{invoice.child}</p>
                                </div>
                                <div className="bg-[#dbf5e8] px-[8px] py-[2px] rounded-full">
                                    <p className="font-['Inter'] font-bold text-[10px] text-[#2a7650]">Lunas</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-['Inter'] font-bold text-[16px] text-[#2c313a]">{invoice.amount}</p>
                                <p className="font-['Inter'] font-normal text-[11px] text-[#5e677b]">Dibayar: {invoice.dueDate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
