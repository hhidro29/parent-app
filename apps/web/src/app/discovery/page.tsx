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
        image: "/assets/images/promo-banner-wonderlab.png", // Using existing asset
        cta: "Lihat Lokasi",
        color: "bg-[#e8f8f7]", // Light teal bg
    },
    {
        id: "ea-online",
        title: "English Academy Online",
        description: "Kursus bahasa Inggris yang menyenangkan sebagai bekal masa depan anak sejak dini",
        image: "/placeholder", // Placeholder
        cta: "Lihat Lokasi",
        color: "bg-[#e6f4e6]", // Light green bg
        isNew: true, // For sticker
    },
    {
        id: "ea-center",
        title: "English Academy Center",
        description: "Kursus bahasa Inggris yang menyenangkan sebagai bekal masa depan anak sejak dini",
        image: "/placeholder", // Placeholder
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
            <div
                className="absolute h-[250px] left-0 top-0 w-full pointer-events-none z-0 overflow-hidden"
                style={{ backgroundImage: "linear-gradient(180deg, #1FB0C3 0%, rgba(31, 176, 195, 0) 100%)" }}
            >
                {/* Abstract shapes can go here if needed */}
            </div>

            <div className="relative z-10 flex flex-col w-full">
                {/* Header Title */}
                <div className="flex items-center justify-between px-[20px] pt-[20px] pb-[10px]">
                    <h1 className="font-['Inter'] font-bold text-[20px] text-white">Spesial Buat Kamu</h1>
                    {/* Back button or other controls if needed */}
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
                            <div key={program.id} className={`${program.color} rounded-[12px] p-[16px] relative overflow-hidden flex flex-col gap-[12px]`}>
                                {/* Content */}
                                <div className="relative z-10 w-[60%]">
                                    <h3 className="font-['Inter'] font-bold text-[16px] text-[#2C313A] mb-[4px]">{program.title}</h3>
                                    <p className="font-['Inter'] font-normal text-[12px] text-[#2C313A] mb-[12px] leading-[1.4]">{program.description}</p>
                                    <button className="bg-[#F26D0F] text-white text-[12px] font-bold px-[16px] py-[8px] rounded-full">
                                        {program.cta}
                                    </button>
                                </div>

                                {/* Image/Illustration Placeholder */}
                                <div className="absolute right-[-10px] bottom-0 w-[140px] h-[100px] bg-gray-200 rounded-tl-[20px]">
                                    {program.image !== "/placeholder" ? (
                                        <Image src={program.image} alt={program.title} fill className="object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-500 text-center p-2">
                                            [Asset: {program.title}]
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
