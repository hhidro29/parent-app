"use client";

import { useParams, useRouter } from "next/navigation";

const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
};

const reportData = {
    title: "Cooking verbs and kitchen terms",
    unit: "Unit A · Language Introduction",
    date: "Monday, 25 January 2026",
    teacher: "Ms. Sarah",
    duration: "60 minutes",
    objectives: [
        "Learn kitchen-related vocabulary",
        "Understand common cooking verbs",
        "Practice using vocabulary in sentences",
    ],
    activities: [
        { name: "Warm-up Discussion", description: "Students shared their favorite foods", duration: "10 min" },
        { name: "Vocabulary Introduction", description: "New vocabulary with visual aids", duration: "15 min" },
        { name: "Interactive Game", description: "Kitchen vocabulary matching game", duration: "15 min" },
        { name: "Role Play", description: "Pretend cooking show with new verbs", duration: "15 min" },
        { name: "Wrap-up", description: "Review and homework explanation", duration: "5 min" },
    ],
    teacherNotes: "Liam showed great enthusiasm today! He particularly enjoyed the role play activity and was able to use all new vocabulary correctly. Keep practicing at home!",
    skills: [
        { name: "Vocabulary", score: 90 },
        { name: "Speaking", score: 85 },
        { name: "Listening", score: 88 },
        { name: "Participation", score: 95 },
    ],
};

export default function ClassReportDetailPage() {
    const router = useRouter();
    const params = useParams();

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
                        Session Report
                    </p>
                    <div className="w-[34px]" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[12px] p-[12px]">
                {/* Main Info Card */}
                <div className="bg-white rounded-[12px] p-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
                    <p className="font-['Inter'] font-normal text-[11px] text-[#5e677b] mb-[4px]">{reportData.unit}</p>
                    <p className="font-['Inter'] font-bold text-[18px] text-[#2c313a] mb-[12px]">{reportData.title}</p>

                    <div className="flex flex-col gap-[8px]">
                        <div className="flex justify-between">
                            <span className="font-['Inter'] text-[12px] text-[#5e677b]">Date</span>
                            <span className="font-['Inter'] font-semibold text-[12px] text-[#2c313a]">{reportData.date}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-['Inter'] text-[12px] text-[#5e677b]">Teacher</span>
                            <span className="font-['Inter'] font-semibold text-[12px] text-[#2c313a]">{reportData.teacher}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-['Inter'] text-[12px] text-[#5e677b]">Duration</span>
                            <span className="font-['Inter'] font-semibold text-[12px] text-[#2c313a]">{reportData.duration}</span>
                        </div>
                    </div>
                </div>

                {/* Learning Objectives */}
                <div className="bg-white rounded-[12px] p-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
                    <p className="font-['Inter'] font-bold text-[14px] text-[#2c313a] mb-[12px]">Learning Objectives</p>
                    <div className="flex flex-col gap-[8px]">
                        {reportData.objectives.map((obj, i) => (
                            <div key={i} className="flex items-start gap-[8px]">
                                <div className="size-[18px] rounded-full bg-[#dbf5e8] flex items-center justify-center mt-[2px]">
                                    <span className="text-[10px]">✓</span>
                                </div>
                                <p className="font-['Inter'] text-[13px] text-[#2c313a]">{obj}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Assessment */}
                <div className="bg-white rounded-[12px] p-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
                    <p className="font-['Inter'] font-bold text-[14px] text-[#2c313a] mb-[12px]">Skills Assessment</p>
                    <div className="flex flex-col gap-[12px]">
                        {reportData.skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-[4px]">
                                    <span className="font-['Inter'] text-[12px] text-[#5e677b]">{skill.name}</span>
                                    <span className="font-['Inter'] font-bold text-[12px] text-[#2c313a]">{skill.score}%</span>
                                </div>
                                <div className="h-[6px] bg-[#e5e5e5] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#7BD7FB] to-[#34CE9E] rounded-full"
                                        style={{ width: `${skill.score}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activities */}
                <div className="bg-white rounded-[12px] p-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
                    <p className="font-['Inter'] font-bold text-[14px] text-[#2c313a] mb-[12px]">Class Activities</p>
                    <div className="flex flex-col gap-[10px]">
                        {reportData.activities.map((activity, i) => (
                            <div key={i} className="flex gap-[12px] items-start">
                                <div className="size-[24px] rounded-full bg-[#f7f9fd] flex items-center justify-center shrink-0">
                                    <span className="font-['Inter'] font-bold text-[10px] text-[#5e677b]">{i + 1}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <p className="font-['Inter'] font-semibold text-[12px] text-[#2c313a]">{activity.name}</p>
                                        <p className="font-['Inter'] text-[10px] text-[#5e677b]">{activity.duration}</p>
                                    </div>
                                    <p className="font-['Inter'] text-[11px] text-[#5e677b]">{activity.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Teacher Notes */}
                <div className="bg-[#fff9ee] rounded-[12px] p-[16px] border border-[#f4c84d]">
                    <div className="flex items-center gap-[8px] mb-[8px]">
                        <span className="text-[16px]">💬</span>
                        <p className="font-['Inter'] font-bold text-[14px] text-[#2c313a]">Teacher Notes</p>
                    </div>
                    <p className="font-['Inter'] text-[13px] text-[#2c313a] leading-[20px] italic">
                        "{reportData.teacherNotes}"
                    </p>
                </div>
            </div>
        </div>
    );
}
