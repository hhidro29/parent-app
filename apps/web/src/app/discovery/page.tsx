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
        description: "Program Belajar and Stimulasi Anak Usia Dini Terinspirasi dari Kurikulum Singapura",
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
        description: "Kursus bahasa Inggris yang menyenangkan sebagai bekal masa depan anak since dini",
        image: "/assets/images/page-specialbuatkamu/thumbnail-englishacademycenter.png",
        cta: "Lihat Lokasi",
        color: "bg-[#e6f4e6]", // Light green
        isNew: true,
    },
];

export default function DiscoveryPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="bg-white flex flex-col min-h-full w-full pb-[80px]">
            {/* Header Section with Background Style */}
            <div className="relative w-full h-[210px] bg-[#1FB0C3] overflow-hidden shrink-0 rounded-bl-[40px]">
                {/* Pattern Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/page-specialbuatkamu/background-header-specialuntukkamu.png"
                        alt="Background Header"
                        fill
                        className="object-cover object-top opacity-90"
                        priority
                    />
                </div>

                {/* Header Title & Back Button */}
                <div className="relative z-10 flex items-center gap-[12px] px-[16px] pt-[40px]">
                    <Link href="/" className="shrink-0 text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12L5 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <h1 className="font-['Inter'] font-bold text-[22px] text-white tracking-tight">Spesial Buat Kamu</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full -mt-[95px] relative z-20">

                {/* Banner Section */}
                <div className="w-full px-[12px] flex flex-col items-center">
                    <div className="w-full aspect-[336/133] relative rounded-[12px] overflow-hidden shadow-md">
                        <Image
                            src="/assets/images/page-specialbuatkamu/banner-promo-specialbuatkamu.png"
                            alt="Festival Semester Baru"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Pagination & Lihat Semua */}
                    <div className="w-full flex justify-between items-center mt-[10px] px-[4px]">
                        <div className="flex gap-[6px]">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#20A4B0]"></div>
                            <div className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9]"></div>
                            <div className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9]"></div>
                        </div>
                        <button className="text-[#20A4B0] font-['Inter'] font-bold text-[14px]">Lihat Semua</button>
                    </div>
                </div>

                {/* Populer Section */}
                <div className="w-full px-[12px] mt-[28px]">
                    <div className="flex items-center justify-between mb-[16px]">
                        <h2 className="font-['Inter'] font-bold text-[20px] text-[#2C313A]">Populer untuk Anak</h2>
                        <button className="border border-[#E2E8F0] rounded-[10px] px-[12px] py-[6px] bg-white text-[14px] font-bold text-[#2C313A] flex items-center gap-[8px]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#2C313A" strokeWidth="2" />
                                <rect x="8" y="8" width="8" height="8" stroke="#2C313A" strokeWidth="2" />
                            </svg>
                            PAUD
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="#2C313A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex gap-[8px] overflow-x-auto pb-[18px] scrollbar-hide -mx-[12px] px-[12px]">
                        {FILTER_CHIPS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-[20px] py-[8px] rounded-full text-[14px] font-bold shrink-0 transition-all ${activeFilter === filter
                                    ? "bg-[#20A4B0] text-white"
                                    : "bg-[#F1F5F9] text-[#2C313A]"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Program List */}
                    <div className="flex flex-col gap-[16px]">
                        {PROGRAMS.map(program => (
                            <div key={program.id} className={`${program.color} rounded-[16px] p-0 relative overflow-hidden flex flex-row h-[146px] cursor-pointer shadow-sm`}>
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
                                <div className="relative z-10 w-[65%] flex flex-col justify-center pl-[20px] pr-[10px] py-[16px]">
                                    <h3 className="font-['Inter'] font-bold text-[17px] text-[#2C313A] leading-[1.2] mb-[6px]">{program.title}</h3>
                                    <p className="font-['Inter'] font-medium text-[11px] text-[#475569] leading-[1.4] mb-[12px] line-clamp-3 opacity-90">{program.description}</p>
                                    <div>
                                        <button className="bg-[#F26D0F] text-white text-[12px] font-bold px-[18px] py-[8px] rounded-full">
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
