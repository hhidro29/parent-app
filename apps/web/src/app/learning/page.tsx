"use client";

import { useState } from "react";
import Link from "next/link";

const svgPaths = {
    settings: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
    dropdown: "M7 10L12 15L17 10H7Z",
};

interface ChildTab {
    id: string;
    name: string;
    avatar: string;
    program: string;
    location: string;
    color: string;
}

const children: ChildTab[] = [
    {
        id: "liam",
        name: "Liam A.",
        avatar: "/assets/avatar-liam.png",
        program: "English Academy - Dasher",
        location: "Balikpapan - Jendral Sudirman",
        color: "linear-gradient(169.875deg, rgb(43, 42, 114) 0%, rgb(255, 69, 70) 100%)",
    },
    {
        id: "dora",
        name: "Dora D.",
        avatar: "/assets/avatar-dora.png",
        program: "Champions Wonderlab",
        location: "Balikpapan - Jendral Sudirman",
        color: "linear-gradient(169.875deg, rgb(232, 248, 247) 0%, rgb(255, 249, 238) 100%)",
    },
];

const reports = [
    { id: '1', unit: 'Unit A · Language Introduction', title: 'Cooking verbs and kitchen terms', date: '4 Hours ago', status: 'present' as const },
    { id: '2', unit: 'Unit A · Culture & Pronunciation', title: 'Thai traditional cuisine', date: '2 Days ago', status: 'present' as const },
    { id: '3', unit: 'Unit A · Language Practice', title: 'Zero conditional sentences', date: '5 Days ago', status: 'absent' as const },
    { id: '4', unit: 'Unit A · Language Extension', title: 'Kitchen equipment vocabulary', date: '1 Week ago', status: 'sick' as const },
];

function ChildSelector({
    selectedChild,
    onSelect
}: {
    selectedChild: string;
    onSelect: (id: string) => void;
}) {
    return (
        <div className="flex gap-[10px] px-[12px] pt-[12px]">
            {children.map((child) => (
                <button
                    key={child.id}
                    onClick={() => onSelect(child.id)}
                    className={`flex gap-[8px] items-center px-[12px] py-[8px] rounded-tl-[8px] rounded-tr-[8px] transition-colors ${selectedChild === child.id
                            ? "bg-white"
                            : "bg-[rgba(255,255,255,0.1)]"
                        }`}
                >
                    <div className="relative rounded-full shrink-0 size-[24px] bg-gradient-to-br from-[#7BD7FB] to-[#34CE9E]">
                        <div className="absolute border-[0.512px] border-solid border-white inset-0 rounded-full" />
                    </div>
                    <p className={`font-['Inter'] font-bold leading-[22px] text-[14px] ${selectedChild === child.id ? "text-[#2c313a]" : "text-white"
                        }`}>
                        {child.name}
                    </p>
                </button>
            ))}
        </div>
    );
}

function ProgramCard({ child }: { child: ChildTab }) {
    const isLiam = child.id === "liam";

    return (
        <div className="bg-white p-[12px] w-full">
            <div
                className="flex flex-col overflow-clip relative rounded-[12px] w-full"
                style={{ backgroundImage: child.color }}
            >
                <div className="flex items-center justify-between p-[12px] w-full">
                    <div className="flex gap-[8px] items-center flex-1">
                        <div className={`flex items-center justify-center rounded-full shrink-0 size-[36px] ${isLiam ? 'bg-white/40' : 'bg-white/40'}`}>
                            <div className="size-[24px] flex items-center justify-center">
                                <span className="text-[16px]">{isLiam ? '📚' : '🎨'}</span>
                            </div>
                        </div>
                        <div className={`flex flex-col leading-[18px] text-[12px] ${isLiam ? 'text-white' : 'text-[#2c313a]'}`}>
                            <p className="font-['Inter'] font-semibold">{child.program}</p>
                            <p className={`font-['Inter'] font-normal ${isLiam ? 'text-white' : 'text-[#5e677b]'}`}>{child.location}</p>
                        </div>
                    </div>

                    <button className="relative shrink-0 size-[40px] bg-[#F2F5FA] rounded-full flex items-center justify-center">
                        <svg className="size-[16px]" viewBox="0 0 24 24" fill="none">
                            <path d={svgPaths.dropdown} fill="#2C313A" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

function TabSelector({
    activeTab,
    onSelect
}: {
    activeTab: "report" | "journal";
    onSelect: (tab: "report" | "journal") => void;
}) {
    return (
        <div className="bg-white flex gap-[16px] items-start pt-[12px] px-[12px] w-full">
            <button
                onClick={() => onSelect("report")}
                className="flex flex-col gap-[4px] items-center pt-[4px]"
            >
                <p className={`font-['Inter'] font-bold leading-[24px] text-[16px] ${activeTab === "report" ? "text-[#2c313a]" : "text-[#2c313a] opacity-60"
                    }`}>
                    Report
                </p>
                <div className={`h-[2px] w-[40px] ${activeTab === "report" ? "bg-[#f4c84d]" : ""}`} />
            </button>

            <button
                onClick={() => onSelect("journal")}
                className="flex flex-col gap-[4px] items-center pt-[4px]"
            >
                <p className={`font-['Inter'] font-bold leading-[24px] text-[16px] ${activeTab === "journal" ? "text-[#2c313a]" : "text-[#2c313a] opacity-60"
                    }`}>
                    Journal
                </p>
                <div className={`h-[2px] w-[40px] ${activeTab === "journal" ? "bg-[#f4c84d]" : ""}`} />
            </button>
        </div>
    );
}

function StatsCards() {
    return (
        <div className="flex gap-[12px] w-full">
            <div className="bg-[#f5edef] flex-1 rounded-[12px]">
                <div className="flex flex-col gap-[2px] p-[12px]">
                    <p className="font-['Inter'] font-normal leading-[18px] text-[#5e677b] text-[12px]">Lesson Complete</p>
                    <p className="font-['Inter'] font-bold leading-[18px] text-[#2c313a] text-[14px]">10</p>
                </div>
            </div>
            <div className="bg-[#f5edef] flex-1 rounded-[12px]">
                <div className="flex flex-col gap-[2px] p-[12px]">
                    <p className="font-['Inter'] font-normal leading-[18px] text-[#5e677b] text-[12px]">Attendance</p>
                    <p className="font-['Inter'] font-bold leading-[18px] text-[#2c313a] text-[14px]">85%</p>
                </div>
            </div>
        </div>
    );
}

function ReportCard({ report }: { report: typeof reports[0] }) {
    const statusColors = {
        present: { bg: 'bg-[#dbf5e8]', text: 'text-[#2a7650]', label: 'Present' },
        absent: { bg: 'bg-[#fce8e8]', text: 'text-[#c73131]', label: 'Absent' },
        sick: { bg: 'bg-[#fff4e6]', text: 'text-[#d97706]', label: 'Sick' },
        excused: { bg: 'bg-[#e8f4fd]', text: 'text-[#1976d2]', label: 'Excused' },
    };

    const status = statusColors[report.status];

    return (
        <div className="bg-white flex flex-col gap-[12px] p-[12px] rounded-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] shrink-0 w-[296px]">
            <div className="flex flex-col gap-[4px]">
                <div className="flex items-center justify-between">
                    <p className="font-['Inter'] font-normal leading-[16px] text-[#5e677b] text-[11px]">{report.unit}</p>
                    <p className="font-['Inter'] font-normal leading-[16px] text-[#5e677b] text-[11px]">{report.date}</p>
                </div>
                <p className="font-['Inter'] font-semibold leading-[22px] text-[#2c313a] text-[14px]">{report.title}</p>
            </div>
            <div className="bg-[#d9d9d9] h-px w-full" />
            <div className="flex items-center justify-between">
                <div className={`${status.bg} flex items-center gap-[8px] px-[12px] py-[8px] rounded-[12px]`}>
                    <p className={`font-['Inter'] font-bold leading-[18px] ${status.text} text-[12px]`}>{status.label}</p>
                </div>
                {report.status === 'present' && (
                    <button className="bg-[#f26d0f] flex items-center justify-center px-[12px] h-[28px] rounded-full">
                        <p className="font-['Inter'] font-bold leading-[18px] text-white text-[12px]">See Report</p>
                    </button>
                )}
            </div>
        </div>
    );
}

function ReportContent() {
    return (
        <div className="flex flex-col gap-[12px] w-full">
            <StatsCards />

            <div className="flex flex-col gap-[12px] w-full">
                <div className="flex items-center justify-between">
                    <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[16px]">Class Report</p>
                    <Link href="/learning/report" className="font-['Inter'] font-bold leading-[22px] text-[#13939e] text-[14px]">
                        Lihat Semua
                    </Link>
                </div>

                <div className="flex gap-[12px] overflow-x-auto pb-[4px] -mx-[12px] px-[12px] scrollbar-hide">
                    {reports.map((report) => (
                        <ReportCard key={report.id} report={report} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function UnitCard({
    unitName,
    color,
    description,
    lessonsCompleted,
    testScore,
    disabled = false,
}: {
    unitName: string;
    color: string;
    description: string;
    lessonsCompleted: number;
    testScore: string;
    disabled?: boolean;
}) {
    return (
        <Link
            href={disabled ? "#" : `/learning/journal/${unitName.toLowerCase().replace(' ', '-')}`}
            className={`bg-[#3A3968] flex flex-col overflow-hidden rounded-[12px] w-full text-left ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            <div className="flex items-center justify-between p-[16px]">
                <div className="flex gap-[8px] items-center">
                    <div className="rounded-full shrink-0 size-[12px]" style={{ backgroundColor: color }} />
                    <p className="font-['Inter'] font-bold leading-[24px] text-[16px] text-white">{unitName}</p>
                </div>
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            </div>

            <div className="px-[16px]">
                <p className="font-['Inter'] font-normal leading-[20px] text-[14px] text-white">{description}</p>
            </div>

            <div className="flex gap-[12px] p-[16px]">
                <div className="bg-white flex flex-1 flex-col gap-[4px] p-[12px] rounded-[8px]">
                    <p className="font-['Inter'] font-bold text-[24px] text-[#2c313a]">{lessonsCompleted}</p>
                    <p className="font-['Inter'] font-normal text-[12px] text-[#5e677b]">Lesson Completed</p>
                </div>
                <div className="bg-white flex flex-1 flex-col gap-[4px] p-[12px] rounded-[8px]">
                    <p className="font-['Inter'] font-bold text-[24px] text-[#2c313a]">{testScore}</p>
                    <p className="font-['Inter'] font-normal text-[12px] text-[#5e677b]">Final Test</p>
                </div>
            </div>
        </Link>
    );
}

function JournalContent() {
    return (
        <div className="flex flex-col gap-[12px] w-full">
            <UnitCard
                unitName="Unit A"
                color="#986CE5"
                description="In this unit, students learned about their taste buds and how our tongues interact with flavours. Structure: Zero conditional sentences, quantifiers."
                lessonsCompleted={8}
                testScore="85%"
            />
            <UnitCard
                unitName="Unit B"
                color="#4CAF50"
                description="In this unit, students explored how historians excavate historical sites to uncover hidden artifacts. Grammar focus: Past simple and past continuous tenses."
                lessonsCompleted={6}
                testScore="78%"
            />
            <UnitCard
                unitName="Unit C"
                color="#FF9800"
                description="Students will discover the Winter Olympics and explore the unique cultures of Inuit peoples. Grammar: First conditional, will/won't for predictions."
                lessonsCompleted={0}
                testScore="-"
                disabled
            />
        </div>
    );
}

export default function LearningPage() {
    const [selectedChild, setSelectedChild] = useState("liam");
    const [activeTab, setActiveTab] = useState<"report" | "journal">("report");

    const currentChild = children.find(c => c.id === selectedChild) || children[0];

    return (
        <div className="flex flex-col min-h-full w-full bg-[#f7f9fd]">
            {/* Header with Gradient Background */}
            <div className="relative w-full">
                <div className="bg-[#1fb0c3] h-[24px] w-full" />

                <div className="relative overflow-hidden rounded-bl-[28px] w-full">
                    <div
                        className="absolute h-[117px] left-0 top-0 w-full"
                        style={{
                            backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.996deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)",
                        }}
                    />

                    <div className="relative z-10 flex flex-col">
                        <div className="flex items-center justify-between p-[12px]">
                            <p className="font-['Inter'] font-bold leading-[24px] text-[16px] text-white">Child Learning</p>
                            <div className="relative shrink-0 size-[24px] bg-white rounded-full flex items-center justify-center">
                                <svg className="size-[16px]" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="2" fill="#2C313A" />
                                </svg>
                            </div>
                        </div>

                        <ChildSelector selectedChild={selectedChild} onSelect={setSelectedChild} />
                    </div>
                </div>
            </div>

            <ProgramCard child={currentChild} />
            <TabSelector activeTab={activeTab} onSelect={setActiveTab} />

            <div className="bg-[#f7f9fd] flex flex-col gap-[12px] p-[12px] w-full">
                {activeTab === "report" && <ReportContent />}
                {activeTab === "journal" && <JournalContent />}
            </div>
        </div>
    );
}
