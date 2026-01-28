"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FILTER_CHIPS = [
    "All",
    "Les Bahasa Inggris",
    "Les Privat",
    "Les Coding",
];

const PROGRAMS = [
    {
        id: "wonderlab",
        title: "Champions Wonderlab",
        description: "Program Belajar dan Stimulasi Anak Usia Dini Terinspirasi dari Kurikulum Singapura",
        image: "/assets/images/page-specialbuatkamu/thumbnail-championswonderlab.png",
        cta: "Lihat Lokasi",
        color: "bg-[#e8f8f7]", // Light teal
    },
    {
        id: "ea-online",
        title: "English Academy Online",
        description: "Kursus bahasa Inggris yang menyenangkan sebagai bekal masa depan anak sejak dini",
        image: "/assets/images/page-specialbuatkamu/thumbnail-englishacademyonline.png",
        cta: "Lihat Lokasi",
        color: "bg-[#e6f4e6]", // Light green
        isNew: true,
    },
    {
        id: "ea-center",
        title: "English Academy Center",
        description: "Kursus bahasa Inggris yang menyenangkan sebagai bekal masa depan anak sejak dini",
        image: "/assets/images/page-specialbuatkamu/thumbnail-englishacademycenter.png",
        cta: "Lihat Lokasi",
        color: "bg-[#e6f4e6]", // Light green
        isNew: true,
    },
];

export default function DiscoveryPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="bg-[#f8fafc] flex flex-col min-h-full w-full pb-[80px]">
            {/* Header Section with Background Image */}
            <div className="relative w-full h-[180px] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/page-specialbuatkamu/background-header-specialuntukkamu.png"
                        alt="Background Header"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>

                {/* Header Title & Back Button */}
                <div className="relative z-10 flex items-center gap-[16px] px-[20px] pt-[40px] pb-[16px]">
                    <Link href="/" className="shrink-0 text-white drop-shadow-sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12L5 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <h1 className="font-['Inter'] font-extrabold text-[24px] text-white drop-shadow-sm uppercase tracking-tight">Spesial Buat Kamu</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full -mt-[60px] relative z-20">

                {/* Banner Section */}
                <div className="w-full px-[16px] mb-[20px]">
                    <div className="w-full h-[190px] relative rounded-[16px] overflow-hidden shadow-[0px_12px_24px_rgba(0,0,0,0.12)] border border-white/20">
                        <Image
                            src="/assets/images/page-specialbuatkamu/banner-promo-specialbuatkamu.png"
                            alt="Festival Semester Baru"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Pagination & Lihat Semua */}
                    <div className="flex justify-between items-center mt-[12px] px-[8px]">
                        <div className="flex gap-[6px]">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#20A4B0] border-[2px] border-white shadow-sm"></div>
                            <div className="w-[10px] h-[10px] rounded-full bg-[#CBD5E1]"></div>
                            <div className="w-[10px] h-[10px] rounded-full bg-[#CBD5E1]"></div>
                        </div>
                        <button className="text-[#20A4B0] font-['Inter'] font-bold text-[15px] hover:opacity-80 transition-opacity">Lihat Semua</button>
                    </div>
                </div>

                {/* Populer Section */}
                <div className="w-full px-[16px] mt-[8px]">
                    <div className="flex items-center justify-between mb-[16px]">
                        <h2 className="font-['Inter'] font-extrabold text-[20px] text-[#1E293B]">Populer untuk Anak</h2>
                        <button className="border border-[#E2E8F0] rounded-[10px] px-[14px] py-[8px] bg-white text-[14px] font-bold text-[#1E293B] flex items-center gap-[10px] shadow-sm active:scale-95 transition-transform">
                            <div className="w-[18px] h-[18px] border-[2px] border-[#64748B] rounded-[4px] relative flex items-center justify-center">
                                <div className="w-[8px] h-[8px] border-[1.5px] border-[#64748B] rounded-[1px]"></div>
                            </div>
                            PAUD
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex gap-[10px] overflow-x-auto pb-[20px] scrollbar-hide -mx-[16px] px-[16px]">
                        {FILTER_CHIPS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-[22px] py-[10px] rounded-full text-[14px] font-extrabold shrink-0 transition-all ${activeFilter === filter
                                    ? "bg-[#20A4B0] text-white shadow-[0_4px_12px_rgba(32,164,176,0.3)]"
                                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#20A4B0]"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Program List */}
                    <div className="flex flex-col gap-[18px]">
                        {PROGRAMS.map(program => (
                            <div key={program.id} className={`${program.color} rounded-[16px] p-0 relative overflow-hidden flex flex-row h-[154px] cursor-pointer shadow-sm hover:shadow-md transition-shadow active:scale-[0.98] transform transition-transform`}>
                                {/* Background Image - full card cover */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover object-right"
                                    />
                                </div>

                                {/* Content Overlay */}
                                <div className="relative z-10 w-[65%] flex flex-col justify-center pl-[24px] pr-[12px] py-[16px]">
                                    <h3 className="font-['Inter'] font-extrabold text-[18px] text-[#1E293B] leading-[1.2] mb-[6px]">{program.title}</h3>
                                    <p className="font-['Inter'] font-medium text-[12px] text-[#475569] leading-[1.5] mb-[12px] line-clamp-2">{program.description}</p>
                                    <div>
                                        <button className="bg-[#F26D0F] text-white text-[13px] font-extrabold px-[20px] py-[9px] rounded-full shadow-[0_4px_10px_rgba(242,109,15,0.3)] hover:brightness-110 active:scale-95 transition-all">
                                            {program.cta}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
