"use client";

import { useParams, useRouter } from "next/navigation";

const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
};

const lessonData = [
    { id: 1, title: "Cooking verbs and kitchen terms", type: "Language Introduction", completed: true, score: 90 },
    { id: 2, title: "Thai traditional cuisine", type: "Culture & Pronunciation", completed: true, score: 85 },
    { id: 3, title: "Zero conditional sentences", type: "Language Practice", completed: true, score: 88 },
    { id: 4, title: "Kitchen equipment vocabulary", type: "Language Extension", completed: true, score: 92 },
    { id: 5, title: "Reading: World Cuisines", type: "Reading Practice", completed: true, score: 78 },
    { id: 6, title: "Listening: Restaurant Orders", type: "Listening Practice", completed: true, score: 85 },
    { id: 7, title: "Speaking: Describe a Recipe", type: "Speaking Practice", completed: true, score: 80 },
    { id: 8, title: "Unit A Review", type: "Review Session", completed: true, score: 87 },
];

const unitInfo = {
    name: "Unit A",
    theme: "Food & Cooking",
    color: "#986CE5",
    description: "In this unit, students learned about their taste buds and how our tongues interact with flavours. Grammar focus: Zero conditional sentences, quantifiers.",
    avgScore: 86,
    finalTest: "85%",
};

export default function JournalDetailPage() {
    const router = useRouter();
    const params = useParams();

    return (
        <div className="flex flex-col min-h-full w-full bg-[#f7f9fd]">
            {/* Header */}
            <div
                className="relative overflow-hidden rounded-bl-[28px] w-full"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(152, 108, 229, 0.9) 0%, rgba(152, 108, 229, 0.7) 100%)`,
                }}
            >
                <div className="h-[24px] w-full" style={{ backgroundColor: unitInfo.color }} />
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
                        {unitInfo.name} Journal
                    </p>
                    <div className="w-[34px]" />
                </div>

                {/* Unit Info */}
                <div className="px-[12px] pb-[16px]">
                    <div className="flex items-center gap-[8px] mb-[8px]">
                        <div className="rounded-full size-[12px] bg-white" />
                        <p className="font-['Inter'] font-bold text-[20px] text-white">{unitInfo.name}: {unitInfo.theme}</p>
                    </div>
                    <p className="font-['Inter'] text-[13px] text-white/90 leading-[20px]">{unitInfo.description}</p>
                </div>
            </div>

            {/* Stats */}
            <div className="flex gap-[12px] p-[12px] -mt-[8px]">
                <div className="bg-white flex-1 rounded-[12px] p-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
                    <p className="font-['Inter'] font-bold text-[24px] text-[#2c313a]">{unitInfo.avgScore}%</p>
                    <p className="font-['Inter'] text-[11px] text-[#5e677b]">Average Score</p>
                </div>
                <div className="bg-white flex-1 rounded-[12px] p-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
                    <p className="font-['Inter'] font-bold text-[24px] text-[#2c313a]">{unitInfo.finalTest}</p>
                    <p className="font-['Inter'] text-[11px] text-[#5e677b]">Final Test</p>
                </div>
                <div className="bg-white flex-1 rounded-[12px] p-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
                    <p className="font-['Inter'] font-bold text-[24px] text-[#2c313a]">{lessonData.length}</p>
                    <p className="font-['Inter'] text-[11px] text-[#5e677b]">Lessons</p>
                </div>
            </div>

            {/* Lessons List */}
            <div className="flex flex-col gap-[12px] px-[12px] pb-[12px]">
                <p className="font-['Inter'] font-bold text-[16px] text-[#2c313a]">Lessons Completed</p>

                {lessonData.map((lesson, index) => (
                    <div key={lesson.id} className="bg-white rounded-[12px] p-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] flex gap-[12px] items-center">
                        <div
                            className="size-[40px] rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${unitInfo.color}20` }}
                        >
                            <span className="font-['Inter'] font-bold text-[14px]" style={{ color: unitInfo.color }}>
                                {index + 1}
                            </span>
                        </div>
                        <div className="flex-1">
                            <p className="font-['Inter'] font-semibold text-[13px] text-[#2c313a]">{lesson.title}</p>
                            <p className="font-['Inter'] text-[11px] text-[#5e677b]">{lesson.type}</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="font-['Inter'] font-bold text-[16px] text-[#2c313a]">{lesson.score}%</p>
                            <div className="bg-[#dbf5e8] px-[8px] py-[2px] rounded-full">
                                <span className="font-['Inter'] font-bold text-[9px] text-[#2a7650]">Completed</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
