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
        <div className="bg-white flex flex-col min-h-[100dvh] w-full pb-[80px] relative">

            {/* Header Background - extends behind title + half of banner for overlap effect */}
            <div className="absolute top-0 left-0 w-full h-[122px] overflow-hidden z-0">
                <Image
                    src="/assets/images/background-specialuntukanakanda.png"
                    alt="Background Header"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col w-full">

                {/* Title Section - No back arrow, just the title */}
                <div className="flex items-center px-[12px] pt-[18px] pb-[18px]">
                    <h1 className="font-['Inter'] font-bold text-[20px] text-white tracking-tight">Spesial Buat Anak Anda</h1>
                </div>

                {/* Banner Section - Full width with 12px padding, 133px height */}
                <div className="flex flex-col w-full px-[12px]">
                    <div className="w-full h-[133px] relative rounded-[12px] overflow-hidden shadow-md">
                        <Image
                            src="/assets/images/page-specialbuatkamu/banner-promo-specialbuatkamu.png"
                            alt="Festival Semester Baru"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Pagination & Lihat Semua - 12px spacing from banner */}
                    <div className="w-full flex justify-between items-center mt-[12px]">
                        <div className="flex gap-[6px]">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#20A4B0]"></div>
                            <div className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9]"></div>
                            <div className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9]"></div>
                        </div>
                        <button className="text-[#20A4B0] font-['Inter'] font-bold text-[14px]">Lihat Semua</button>
                    </div>
                </div>

                {/* Populer Section & Filters */}
                <div className="w-full mt-[12px] px-[12px]">
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

                                {/* Content Overlay - Adjusted width to 72% to fit text better */}
                                <div className="relative z-10 w-[72%] flex flex-col justify-center pl-[20px] pr-[5px] py-[16px]">
                                    <h3 className="font-['Inter'] font-bold text-[17px] text-[#2C313A] leading-[1.2] mb-[6px]">{program.title}</h3>
                                    <p className="font-['Inter'] font-medium text-[11px] text-[#475569] leading-[1.4] mb-[12px] line-clamp-3 opacity-90 tracking-tight">{program.description}</p>
                                    <div>
                                        <button className="bg-[#F26D0F] text-white text-[12px] font-bold px-[18px] py-[8px] rounded-full shadow-sm">
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
