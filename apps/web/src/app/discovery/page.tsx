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
        color: "bg-[#e8f8f7]", // Light teal bg
    },
    {
        id: "ea-online",
        title: "English Academy Online",
        description: "Kursus bahasa Inggris yang menyenangkan sebagai bekal masa depan anak sejak dini",
        image: "/assets/images/page-specialbuatkamu/thumbnail-englishacademyonline.png",
        cta: "Lihat Lokasi",
        color: "bg-[#e6f4e6]", // Light green bg
        isNew: true, // For sticker
    },
    {
        id: "ea-center",
        title: "English Academy Center",
        description: "Kursus bahasa Inggris yang menyenangkan sebagai bekal masa depan anak sejak dini",
        image: "/assets/images/page-specialbuatkamu/thumbnail-englishacademycenter.png",
        cta: "Lihat Lokasi",
        color: "bg-[#e6f4e6]", // Light green bg
        isNew: true, // For sticker
    },
];

export default function DiscoveryPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="bg-[#f7f9fd] flex flex-col min-h-full w-full pb-[80px]">
            {/* Background Decoration */}
            <div className="absolute h-[250px] left-0 top-0 w-full pointer-events-none z-0 overflow-hidden">
                <Image
                    src="/assets/images/page-specialbuatkamu/background-header-specialuntukkamu.png"
                    alt="Background Header"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>

            <div className="relative z-10 flex flex-col w-full">
                {/* Header Title */}
                <div className="flex items-center gap-[12px] px-[20px] pt-[20px] pb-[10px]">
                    <Link href="/" className="shrink-0 text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <h1 className="font-['Inter'] font-bold text-[20px] text-white">Spesial Buat Kamu</h1>
                </div>

                {/* Carousel / Banner Section */}
                <div className="w-full px-[20px] mb-[10px]">
                    <div className="w-full h-[180px] bg-gray-300 rounded-[12px] relative overflow-hidden shadow-lg">
                        {/* PLACEHOLDER FOR FESTIVAL BANNER */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                            [Banner: Festival Semester Baru]
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-between items-center mt-[8px]">
                        <div className="flex gap-[4px]">
                            <div className="w-[6px] h-[6px] rounded-full bg-[#1FB0C3]"></div>
                            <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]"></div>
                            <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]"></div>
                        </div>
                        <button className="text-[#1FB0C3] font-['Inter'] font-semibold text-[12px]">Lihat Semua</button>
                    </div>
                </div>

                {/* Populer Section */}
                <div className="w-full px-[20px] mt-[20px]">
                    <div className="flex items-center justify-between mb-[12px]">
                        <h2 className="font-['Inter'] font-bold text-[18px] text-[#2C313A]">Populer untuk Anak</h2>
                        {/* PAUD Dropdown Placeholder */}
                        <button className="border border-gray-300 rounded-full px-[12px] py-[6px] bg-white text-[12px] font-semibold text-[#2C313A] flex items-center gap-[4px]">
                            <span className="mb-[2px]">⬜</span> PAUD
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="#2C313A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex gap-[8px] overflow-x-auto pb-[10px] scrollbar-hide">
                        {FILTER_CHIPS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-[16px] py-[8px] rounded-full text-[12px] font-semibold shrink-0 transition-colors ${activeFilter === filter
                                    ? "bg-[#1FB0C3] text-white"
                                    : "bg-[#EDEFF3] text-[#2C313A]"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Program List */}
                    <div className="flex flex-col gap-[16px] mt-[10px]">
                        {PROGRAMS.map(program => (
                            <div key={program.id} className={`${program.color} rounded-[12px] p-0 relative overflow-hidden flex flex-row h-[160px] cursor-pointer`}>
                                {/* Content */}
                                <div className="relative z-10 w-[60%] flex flex-col justify-center pl-[20px] pr-[10px] py-[16px]">
                                    <h3 className="font-['Inter'] font-bold text-[16px] text-[#2C313A] leading-[1.2] mb-[8px]">{program.title}</h3>
                                    <p className="font-['Inter'] font-normal text-[12px] text-[#2C313A] leading-[1.4] mb-[12px] line-clamp-3">{program.description}</p>
                                    <div>
                                        <button className="bg-[#F26D0F] text-white text-[12px] font-bold px-[16px] py-[6px] rounded-full shadow-sm hover:bg-[#d96010] transition-colors">
                                            {program.cta}
                                        </button>
                                    </div>
                                </div>

                                {/* Image/Illustration */}
                                <div className="absolute right-0 top-0 h-full w-[50%]">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
