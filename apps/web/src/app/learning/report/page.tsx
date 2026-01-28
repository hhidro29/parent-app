"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
};

const reports = [
    { id: '1', unit: 'Unit J · Writing Skills', title: 'Essay Structure', date: '5 Hour ago', status: 'present' as const },
    { id: '2', unit: 'Unit I · Cultural Insights', title: 'Festivals and Traditions', date: '25 Nov 2025', status: 'present' as const },
    { id: '3', unit: 'Unit H · Listening Comprehension', title: 'Daily Conversations', date: '25 Nov 2025', status: 'present' as const },
    { id: '4', unit: 'Unit G · Pronunciation Practice', title: 'Common Phonemes', date: '25 Nov 2025', status: 'present' as const },
    { id: '5', unit: 'Unit F · Vocabulary Expansion', title: 'Food and Drink', date: '2 Weeks ago', status: 'present' as const },
    { id: '6', unit: 'Unit E · Grammar Basics', title: 'Tenses and Usage', date: '3 Weeks ago', status: 'present' as const },
    { id: '7', unit: 'Unit D · Language Introduction', title: 'Kata kerja memasak', date: '4 Weeks ago', status: 'present' as const },
];

function ReportCard({ report }: { report: typeof reports[0] }) {
    const statusColors = {
        present: { bg: 'bg-[#dbf5e8]', text: 'text-[#2a7650]', label: 'Hadir' },
        absent: { bg: 'bg-[#fce8e8]', text: 'text-[#c73131]', label: 'Absent' },
        sick: { bg: 'bg-[#fff4e6]', text: 'text-[#d97706]', label: 'Sick' },
        excused: { bg: 'bg-[#e8f4fd]', text: 'text-[#1976d2]', label: 'Excused' },
    };

    const status = statusColors[report.status];

    return (
        <div className="bg-white flex flex-col gap-[12px] p-[12px] rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] w-full">
            <div className="flex flex-col gap-[4px]">
                <div className="flex items-center justify-between">
                    <p className="font-['Inter'] font-normal leading-[16px] text-[#5e677b] text-[11px]">{report.unit}</p>
                    <p className="font-['Inter'] font-normal leading-[16px] text-[#5e677b] text-[11px]">{report.date}</p>
                </div>
                <p className="font-['Inter'] font-semibold leading-[22px] text-[#2c313a] text-[14px]">{report.title}</p>
            </div>
            <div className="bg-[#e5e5e5] h-px w-full" />
            <div className="flex items-center justify-between">
                <div className={`${status.bg} flex items-center gap-[8px] px-[12px] py-[8px] rounded-[12px]`}>
                    <p className={`font-['Inter'] font-bold leading-[18px] ${status.text} text-[12px]`}>{status.label}</p>
                </div>
                {report.status === 'present' && (
                    <Link href={`/learning/report/${report.id}`} className="bg-[#f26d0f] flex items-center justify-center px-[12px] h-[28px] rounded-full">
                        <p className="font-['Inter'] font-bold leading-[18px] text-white text-[12px]">See Report</p>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default function ClassReportListPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-full w-full bg-[#f7f9fd]">
            {/* Header */}
            <div
                className="relative overflow-hidden rounded-bl-[28px] w-full"
                style={{
                    backgroundImage: "linear-gradient(169.875deg, #2B2A72 0%, #FF4546 100%)",
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
                        Class Report
                    </p>
                    <div className="w-[34px]" />
                </div>
            </div>

            {/* Reports List */}
            <div className="flex flex-col gap-[12px] p-[12px]">
                {reports.map((report) => (
                    <ReportCard key={report.id} report={report} />
                ))}
            </div>
        </div>
    );
}
