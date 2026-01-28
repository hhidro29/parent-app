"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        avatar: "/assets/images/page-specialbuatkamu/thumbnail-championswonderlab.png",
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
        avatar: "/assets/images/avatar-dora-session.png",
        program: "Champions Wonderlab",
        location: "Balikpapan - Jendral Sudirman",
        gradient: "linear-gradient(169.875deg, #E8F8F7 0%, #FFF9EE 100%)",
        stats: {
            lessonComplete: 8,
            attendance: "90%",
        }
    }
];

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

const CLASS_REPORTS = [
    {
        id: "1",
        unit: "Unit A · Language Introduction",
        title: "Cooking verbs and kitchen terms",
        time: "4 Hours ago",
        status: "Present",
        statusColor: "bg-[#dbf5e8] text-[#2a7650]",
    },
    {
        id: "2",
        unit: "Unit A · Culture & Pronunciation",
        title: "Thai traditional cuisine",
        time: "2 Days ago",
        status: "Present",
        statusColor: "bg-[#dbf5e8] text-[#2a7650]",
    }
];

const PERIODICAL_REPORTS = [
    {
        title: "Dasher 3 - Learning Report 1",
        date: "Published 25 November 2025",
    },
    {
        title: "Dasher 3 - Learning Report 2",
        date: "Published 25 November 2025",
    },
    {
        title: "Dasher 3 - Final Report",
        date: "Published 25 November 2025",
    }
];

export default function LearningPage() {
    const [selectedChildId, setSelectedChildId] = useState("liam");
    const [activeTab, setActiveTab] = useState<"report" | "journal">("report");

    const selectedChild = CHILDREN_DATA.find(c => c.id === selectedChildId) || CHILDREN_DATA[0];

    return (
        <div className="flex flex-col min-h-full w-full bg-[#F7F9FD] pb-[100px]">
            {/* Header Section */}
            <div className="relative w-full shrink-0">
                <div className="bg-[#1FB0C3] h-[24px] w-full" />
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
                            <h1 className="font-['Inter'] font-bold text-[16px] text-white">Child Learning</h1>
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
                <div
                    className="w-full rounded-[12px] overflow-hidden flex items-center justify-between p-[12px] relative shadow-sm"
                    style={{ backgroundImage: selectedChild.gradient }}
                >
                    <div className="flex items-center gap-[8px] flex-1">
                        <div className="w-[36px] h-[36px] bg-white/40 rounded-full flex items-center justify-center shrink-0">
                            <div className="bg-white rounded-full w-[24px] h-[24px] flex items-center justify-center overflow-hidden">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2C313A" strokeWidth="2.5">
                                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
                                </svg>
                            </div>
                        </div>
                        <div className={`flex flex-col ${selectedChildId === 'liam' ? 'text-white' : 'text-[#2C313A]'}`}>
                            <span className="font-['Inter'] font-semibold text-[12px] leading-tight">{selectedChild.program}</span>
                            <span className={`font-['Inter'] font-normal text-[12px] opacity-90`}>{selectedChild.location}</span>
                        </div>
                    </div>

                    <button className="relative shrink-0 size-[40px] bg-black/10 rounded-full flex items-center justify-center">
                        <div className="relative size-[20px] bg-[#F2F5FA] rounded-full flex items-center justify-center">
                            <svg className="size-[10px]" viewBox="0 0 24 24" fill="none">
                                <path d="M7 10L12 15L17 10H7Z" fill="#2C313A" />
                            </svg>
                        </div>
                    </button>
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
                        {/* Stats Section */}
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

                        {/* Class Report Section */}
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex items-center justify-between">
                                <h2 className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">Class Report</h2>
                                <Link href="/learning/report" className="font-['Inter'] font-bold text-[14px] text-[#13939E]">Lihat Semua</Link>
                            </div>

                            <div className="flex gap-[12px] overflow-x-auto pb-[4px] -mx-[12px] px-[12px] scrollbar-hide">
                                {CLASS_REPORTS.map(report => (
                                    <div key={report.id} className="min-w-[296px] bg-white rounded-[12px] p-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] shrink-0 flex flex-col gap-[12px]">
                                        <div className="flex flex-col gap-[4px]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-['Inter'] font-normal text-[11px] text-[#5E677B] leading-[16px]">{report.unit}</span>
                                                <span className="font-['Inter'] font-normal text-[11px] text-[#5E677B] leading-[16px]">{report.time}</span>
                                            </div>
                                            <h3 className="font-['Inter'] font-semibold text-[14px] text-[#2C313A] leading-[22px]">{report.title}</h3>
                                        </div>
                                        <div className="h-[1px] bg-[#D9D9D9] w-full" />
                                        <div className="flex items-center justify-between">
                                            <div className={`px-[12px] py-[8px] rounded-[12px] flex items-center justify-center ${report.statusColor}`}>
                                                <span className="font-['Inter'] font-bold text-[12px] leading-[18px]">{report.status}</span>
                                            </div>
                                            <Link
                                                href="/learning/report"
                                                className="bg-[#F26D0F] text-white font-bold text-[12px] px-[12px] h-[28px] rounded-full active:scale-95 transition-transform flex items-center justify-center"
                                            >
                                                See Report
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Periodical Report Section */}
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex items-center justify-between">
                                <h2 className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">Periodical Report</h2>
                                <Link href="#" className="font-['Inter'] font-bold text-[14px] text-[#13939E]">Lihat Semua</Link>
                            </div>

                            <div className="flex flex-col gap-[12px]">
                                {PERIODICAL_REPORTS.map((report, idx) => (
                                    <div key={idx} className="bg-white rounded-[12px] p-[12px] flex items-center shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] active:bg-slate-50 cursor-pointer">
                                        <div className="w-[36px] h-[36px] rounded-full mr-[12px] shrink-0"
                                            style={{ background: "linear-gradient(180deg, #AEDD6B 0%, #4F49D6 100%)" }} />
                                        <div className="flex flex-col flex-1">
                                            <span className="font-['Inter'] font-bold text-[14px] text-[#2C313A] leading-[22px]">{report.title}</span>
                                            <span className="font-['Inter'] font-normal text-[11px] text-[#5E677B] leading-[16px]">{report.date}</span>
                                        </div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#79808F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col gap-[12px]">
                        {/* Journal Cards for Liam */}
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
