"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

interface ChildData {
    id: string;
    name: string;
    avatar: string;
    program: string;
    location: string;
    gradient: string;
    stats: {
        lessonComplete: number;
        attendance: string;
    };
}

const CHILDREN_DATA: ChildData[] = [
    {
        id: "liam",
        name: "Liam A.",
        avatar: "/assets/images/profile-liam.png",
        program: "English Academy - Dasher",
        location: "Balikpapan - Jendral Sudirman",
        gradient: "linear-gradient(169.875deg, #2B2A72 0%, #FF4546 100%)",
        stats: {
            lessonComplete: 10,
            attendance: "85%",
        }
    },
    {
        id: "dora",
        name: "Dora D.",
        avatar: "/assets/images/profile-dora.png",
        program: "Champions Wonderlab",
        location: "Balikpapan - Jendral Sudirman",
        gradient: "linear-gradient(169.875deg, #E8F8F7 0%, #FFF9EE 100%)",
        stats: {
            lessonComplete: 8,
            attendance: "90%",
        }
    }
];


const PACKAGES: Record<string, { id: string; name: string; location: string; icon: string | null; selected: boolean }[]> = {
    liam: [
        {
            id: "ea",
            name: "English Academy · Dasher",
            location: "Balikpapan - Jendral Sudirman",
            icon: "/assets/images/package-banner-2.png", // Using the SNBP banner
            selected: true
        },
        {
            id: "ba",
            name: "Brain Academy Center",
            location: "Balikpapan - Jendral Sudirman",
            icon: "/assets/images/package-banner-1.png", // Using the Promo banner
            selected: false
        }
    ],
    dora: [
        {
            id: "cw",
            name: "Champions Wonderlab",
            location: "Balikpapan - Jendral Sudirman",
            icon: "/assets/images/package-banner-3.png", // Using the Tryout banner
            selected: true
        }
    ]
};

const LIAM_JOURNAL = [
    {
        unit: "Unit D",
        description: "In this unit, students learned about their taste buds and how our tongues interact with flavours. Structure...",
        lessonCompleted: "10",
        finalTest: "85%",
        status: "active",
        dotColor: "bg-[#FF7096]"
    },
    {
        unit: "Unit E",
        description: "In this unit, students learned about how historians excavate historical sites to uncover hidden artifacts....",
        lessonCompleted: "5",
        finalTest: "-",
        status: "active",
        dotColor: "bg-[#FF7096]"
    },
    {
        unit: "Unit F",
        description: "In this unit, students learned about Winter Olympics and explored the unique cultures of Inuit peoples wh...",
        lessonCompleted: "0",
        finalTest: "-",
        status: "disabled",
        dotColor: "bg-[#FF7096]"
    }
];

import { REPORTS_BY_CHILD } from "@/data/reports";


const DORA_JOURNAL = [
    {
        id: "cognitive",
        title: "Cognitive Development",
        description: "Building problem-solving skills, memory, and logical thinking through puzzles and patterns.",
        bg: "bg-[#FF9800]", // Orange
        totalStimulasi: 3
    },
    {
        id: "language",
        title: "Communication & Language Development",
        description: "Enhancing vocabulary, sentence structure, and storytelling abilities.",
        bg: "bg-[#9C27B0]", // Purple
        totalStimulasi: 4
    },
    {
        id: "physical",
        title: "Physical Development",
        description: "Improving gross and fine motor skills through active play and coordination exercises.",
        bg: "bg-[#4CAF50]",
        totalStimulasi: 3
    },
    {
        id: "social",
        title: "Social & Emotional Development",
        description: "Fostering cooperation, empathy, and self-confidence in group activities.",
        bg: "bg-[#673AB7]", // Deep Purple
        totalStimulasi: 3
    }
];

export default function LearningPage() {
    const [selectedChildId, setSelectedChildId] = useState("liam");
    const [activeTab, setActiveTab] = useState<"report" | "journal">("report");
    const [reportFilter, setReportFilter] = useState("All");

    const selectedChild = CHILDREN_DATA.find(c => c.id === selectedChildId) || CHILDREN_DATA[0];

    const currentReports = REPORTS_BY_CHILD[selectedChildId] || [];

    const filteredReports = currentReports.filter(report => {
        if (reportFilter === "All") return true;
        if (reportFilter === "Class Report") return report.type === "Class Report";
        if (reportFilter === "Parent Teacher Report") return report.type === "Teacher Parent Report";
        return true;
    });

    return (
        <div className="flex flex-col min-h-full w-full bg-[#F7F9FD] pb-[100px]">
            {/* Header Section */}
            <div className="relative w-full shrink-0">

                <div className="relative h-[117px] w-full overflow-hidden rounded-bl-[28px] bg-[#34CE9E]">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.996deg, #7BD7FB 0%, #34CE9E 100%)"
                        }}
                    />
                    <div className="absolute inset-0 z-1 opacity-40 mix-blend-luminosity">
                        <Image
                            src="/assets/images/page-specialbuatkamu/background-header-specialuntukkamu.png"
                            alt="Header Pattern"
                            fill
                            className="object-cover object-top"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col w-full h-full">
                        <div className="flex items-center justify-between px-[12px] py-[12px]">
                            <h1 className="font-['Inter'] font-bold text-[20px] text-white">Child Learning</h1>
                            <div className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2C313A" strokeWidth="3" strokeLinecap="round">
                                    <path d="M12 5V19M5 12H19" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-end px-[12px] gap-[10px] flex-1 mt-auto">
                            {CHILDREN_DATA.map(child => (
                                <button
                                    key={child.id}
                                    onClick={() => setSelectedChildId(child.id)}
                                    className={`flex items-center gap-[8px] px-[12px] py-[8px] rounded-t-[8px] transition-colors ${selectedChildId === child.id ? "bg-white" : "bg-white/10 text-white"
                                        }`}
                                >
                                    <div className="relative w-[24px] h-[24px] rounded-full overflow-hidden border border-white">
                                        <Image src={child.avatar} alt={child.name} fill className="object-cover" />
                                    </div>
                                    <span className={`font-['Inter'] font-bold text-[14px] ${selectedChildId === child.id ? "text-[#2C313A]" : "text-white"}`}>
                                        {child.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Program Card area */}
            <div className="w-full px-[12px] py-[12px] bg-white">
                <Drawer>
                    <DrawerTrigger asChild>
                        <div
                            className="w-full h-[60px] rounded-[16px] overflow-hidden flex items-center justify-between relative shadow-sm cursor-pointer active:scale-[0.99] transition-transform"
                            style={{ backgroundImage: selectedChild.gradient }}
                        >
                            <div className="flex items-center gap-[12px] flex-1 pl-[12px]">
                                {/* Logo */}
                                <div className="w-[36px] h-[36px] relative shrink-0">
                                    {selectedChild.id === 'liam' ? (
                                        <Image
                                            src="/assets/images/iconlogo-englishacademy.png"
                                            alt="Program Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    ) : (
                                        <Image
                                            src="/assets/images/iconlogo-championswonderlab.png"
                                            alt="Program Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    )}
                                </div>

                                {/* Text */}
                                <div className={`flex flex-col ${selectedChildId === 'liam' ? 'text-white' : 'text-[#2C313A]'}`}>
                                    <span className="font-['Inter'] font-bold text-[14px] leading-tight">{selectedChild.program}</span>
                                    <span className="font-['Inter'] font-normal text-[12px] opacity-90">{selectedChild.location}</span>
                                </div>
                            </div>

                            {/* Right Button */}
                            <button className={`w-[60px] h-full rounded-tl-[15px] flex items-center justify-center shrink-0 transition-colors ${selectedChildId === 'liam' ? 'bg-[#0C0C0C]/50' : 'bg-[#0C0C0C]/10'}`}>
                                <div className="size-[24px] bg-white rounded-full flex items-center justify-center">
                                    <svg className="size-[12px]" viewBox="0 0 24 24" fill="none" stroke="#2C313A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </DrawerTrigger>
                    <DrawerContent className="rounded-t-[20px]">
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader className="flex items-center justify-between px-[20px] py-[16px]">
                                <DrawerTitle className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">
                                    Pilih Paket · {selectedChild.name}
                                </DrawerTitle>
                            </DrawerHeader>
                            <div className="p-[20px] pt-0 flex flex-col gap-[12px]">
                                {PACKAGES[selectedChildId]?.map((pkg) => (
                                    <div
                                        key={pkg.id}
                                        className={`w-full p-[12px] rounded-[16px] border flex items-center gap-[12px] bg-white transition-colors ${pkg.selected
                                            ? "border-[#E2E8F0] shadow-sm"
                                            : "border-[#E2E8F0]"
                                            }`}
                                    >
                                        <div className={`w-[80px] h-[48px] rounded-[8px] flex items-center justify-center shrink-0 overflow-hidden ${pkg.icon ? "bg-transparent" : "bg-[#F1F5F9]"
                                            }`}>
                                            {pkg.icon ? (
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={pkg.icon}
                                                        alt={pkg.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-full h-full bg-[#E2E8F0]" />
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-['Inter'] font-bold text-[13px] text-[#2C313A]">
                                                {pkg.name}
                                            </span>
                                            <span className="font-['Inter'] font-normal text-[12px] text-[#5E677B]">
                                                {pkg.location}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                <DrawerClose asChild>
                                    <button className="w-full py-[12px] rounded-full bg-[#F1F5F9] font-['Inter'] font-bold text-[14px] text-[#5E677B] mt-[8px]">
                                        Tutup
                                    </button>
                                </DrawerClose>
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>

            {/* Stats Section */}
            <div className="w-full px-[12px] pb-[12px] bg-white">
                <div className="flex gap-[12px] w-full">
                    <div className="flex-1 bg-[#F5EDEF] rounded-[12px] p-[12px]">
                        <p className="font-['Inter'] font-normal text-[12px] text-[#5E677B] mb-[2px]">Lesson Complete</p>
                        <p className="font-['Inter'] font-bold text-[14px] text-[#2C313A]">{selectedChild.stats.lessonComplete}</p>
                    </div>
                    <div className="flex-1 bg-[#F5EDEF] rounded-[12px] p-[12px]">
                        <p className="font-['Inter'] font-normal text-[12px] text-[#5E677B] mb-[2px]">Attendance</p>
                        <p className="font-['Inter'] font-bold text-[14px] text-[#2C313A]">{selectedChild.stats.attendance}</p>
                    </div>
                </div>
            </div>

            {/* Main Tabs */}
            <div className="w-full px-[12px] bg-white flex gap-[24px] border-b border-[#F1F5F9]">
                {["Report", "Journal"].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase() as any)}
                        className="flex flex-col items-center pt-[14px] pb-[10px] relative"
                    >
                        <span className={`font-['Inter'] font-bold text-[16px] ${activeTab === tab.toLowerCase() ? "text-[#2C313A]" : "text-[#2C313A] opacity-60"}`}>
                            {tab}
                        </span>
                        {activeTab === tab.toLowerCase() && (
                            <div className="absolute bottom-0 w-[40px] h-[2px] bg-[#F4C84D]" />
                        )}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex flex-col p-[12px] gap-[12px]">
                {activeTab === "report" ? (
                    <>
                        {/* Filter Pills */}
                        <div className="flex gap-[8px] overflow-x-auto pb-[4px] -mx-[12px] px-[12px] scrollbar-hide">
                            {["All", "Class Report", "Parent Teacher Report"].map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setReportFilter(filter)}
                                    className={`px-[16px] py-[8px] rounded-full border whitespace-nowrap transition-colors ${reportFilter === filter
                                        ? "bg-[#E6F6F8] border-[#34CE9E] text-[#2C313A] font-bold"
                                        : "bg-white border-[#E2E8F0] text-[#5E677B]"
                                        } text-[13px]`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Unified Report List */}
                        <div className="flex flex-col gap-[12px]">
                            {filteredReports.map((report) => (
                                <div key={report.id} className="bg-white rounded-[16px] p-[16px] flex flex-col gap-[12px] shadow-sm border border-slate-100">
                                    {/* Header */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[8px] overflow-hidden">
                                            <span className={`font-['Inter'] font-bold text-[12px] whitespace-nowrap ${report.type === "Class Report" ? "text-[#13939E]" : "text-[#F26D0F]"
                                                }`}>
                                                {report.type}
                                            </span>
                                            {report.unit && (
                                                <span className="font-['Inter'] font-normal text-[12px] text-[#5E677B] truncate">
                                                    {report.unit}
                                                </span>
                                            )}
                                        </div>
                                        <span className="font-['Inter'] font-normal text-[11px] text-[#9BA3AF] whitespace-nowrap shrink-0">
                                            {report.time}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-['Inter'] font-bold text-[16px] text-[#2C313A] leading-[24px]">
                                        {report.title}
                                    </h3>

                                    <div className="h-[1px] bg-[#F1F5F9] w-full" />

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                        {report.status ? (
                                            <div className="px-[12px] py-[6px] rounded-[8px] bg-[#E6F6F8] flex items-center justify-center">
                                                <span className="font-['Inter'] font-bold text-[12px] text-[#258B79]">{report.status}</span>
                                            </div>
                                        ) : (
                                            <div /> /* Spacer if no status */
                                        )}
                                        <Link
                                            href={report.link}
                                            className="bg-[#F26D0F] text-white font-bold text-[12px] px-[16px] h-[32px] rounded-full active:scale-95 transition-transform flex items-center justify-center shadow-orange-200 shadow-sm"
                                        >
                                            See Report
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col gap-[12px]">
                        {/* Journal Content Based on Child */}
                        {selectedChildId === 'liam' ? (
                            LIAM_JOURNAL.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${item.status === 'disabled' ? 'bg-[#9BA3AF]' : 'bg-[#3A3968]'} rounded-[12px] p-[16px] text-white flex flex-col gap-[12px] cursor-pointer shadow-md`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[8px]">
                                            <div className={`w-[14px] h-[14px] ${item.dotColor} rounded-full`} />
                                            <span className="font-['Inter'] font-bold text-[16px]">{item.unit}</span>
                                            <div className="w-[14px] h-[14px] border border-white/40 rounded-full flex items-center justify-center text-[8px] opacity-60">i</div>
                                        </div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </div>
                                    <p className="font-['Inter'] text-[13px] opacity-90 leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="flex gap-[12px] mt-[4px]">
                                        <div className="flex-1 bg-[#F5F7FF] rounded-[10px] p-[10px] flex flex-col items-start min-h-[58px]">
                                            <p className="text-[10px] text-[#5E677B] font-bold mb-[2px]">Lesson Completed</p>
                                            <p className="font-['Inter'] font-bold text-[18px] text-[#2C313A] mt-auto">{item.lessonCompleted}</p>
                                        </div>
                                        <div className="flex-1 bg-[#F5F7FF] rounded-[10px] p-[10px] flex flex-col items-start min-h-[58px]">
                                            <p className="text-[10px] text-[#5E677B] font-bold mb-[2px]">Final Test Score</p>
                                            <p className="font-['Inter'] font-bold text-[18px] text-[#2C313A] mt-auto">{item.finalTest}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : selectedChildId === 'dora' ? (
                            // Dora's Journal
                            DORA_JOURNAL.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/learning/journal/${item.id}`}
                                    className="bg-white rounded-[20px] p-[16px] shadow-sm border border-slate-100 flex flex-col gap-[12px] cursor-pointer active:scale-[0.99] transition-transform"
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[12px]">
                                            <div className={`size-[32px] rounded-full ${item.bg}`} />
                                            <span className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">
                                                {item.title}
                                            </span>
                                        </div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </div>

                                    {/* Description */}
                                    <p className="font-['Inter'] text-[13px] text-[#2C313A] leading-[20px]">
                                        {item.description}
                                    </p>

                                    {/* Footer: Total Stimulasi */}
                                    <div className="w-full bg-[#F1F5F9] rounded-[12px] p-[12px] flex flex-col">
                                        <span className="font-['Inter'] font-normal text-[12px] text-[#5E677B]">Total Stimulasi</span>
                                        <span className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">{item.totalStimulasi}</span>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="w-full py-[40px] flex flex-col items-center justify-center opacity-60">
                                <p className="text-[#2C313A] font-bold">No Journal available yet</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
