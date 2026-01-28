"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
};

const childrenData = {
    liam: {
        name: "Liam A.",
        tier: "silver" as const,
        points: 1250,
        nextTier: "Gold",
        pointsToNext: 750,
        totalNeeded: 2000,
    },
    dora: {
        name: "Dora D.",
        tier: "gold" as const,
        points: 2850,
        nextTier: "Platinum",
        pointsToNext: 1150,
        totalNeeded: 4000,
    },
};

const rewards = [
    { id: 1, name: "Merchandise Mug", points: 500, image: "☕" },
    { id: 2, name: "Merchandise T-Shirt", points: 1000, image: "👕" },
    { id: 3, name: "Voucher Buku Rp50.000", points: 1500, image: "📚" },
    { id: 4, name: "Diskon 20% Langganan", points: 2000, image: "🎫" },
    { id: 5, name: "Free Session Classes", points: 2500, image: "🎓" },
];

const pointHistory = [
    { id: 1, activity: "Menyelesaikan Unit A", points: "+200", date: "25 Jan 2026" },
    { id: 2, activity: "Kehadiran 100% Minggu Ini", points: "+150", date: "20 Jan 2026" },
    { id: 3, activity: "Final Test Score 85%", points: "+300", date: "15 Jan 2026" },
    { id: 4, activity: "Tukar Voucher Buku", points: "-500", date: "10 Jan 2026" },
];

export default function RewardPage() {
    const router = useRouter();
    const params = useParams();
    const childId = params.childId as string;
    const [activeTab, setActiveTab] = useState<"rewards" | "history">("rewards");

    const child = childrenData[childId as keyof typeof childrenData] || childrenData.liam;

    const tierStyles = {
        silver: {
            gradient: "bg-gradient-to-r from-[#8d94a2] to-[#cbd1de]",
            color: "#8d94a2",
        },
        gold: {
            gradient: "bg-gradient-to-r from-[#d38c2f] to-[#e4cb71]",
            color: "#d38c2f",
        },
    };

    const tier = tierStyles[child.tier];
    const progress = ((child.totalNeeded - child.pointsToNext) / child.totalNeeded) * 100;

    return (
        <div className="bg-[#f7f9fd] flex flex-col min-h-full w-full">
            {/* Header with Gradient */}
            <div
                className="relative overflow-hidden w-full pb-[40px]"
                style={{
                    backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.996deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)",
                }}
            >


                {/* Header Bar */}
                <div className="flex items-center p-[12px] w-full">
                    <button
                        onClick={() => router.back()}
                        className="bg-white flex items-center justify-center p-[4px] rounded-full shrink-0 w-[34px] shadow-[0px_0px_0px_1px_#cfd3db_inset]"
                    >
                        <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                            <path d={svgPaths.back} fill="#2C313A" />
                        </svg>
                    </button>
                    <p className="flex-1 font-['Inter'] font-bold text-[20px] leading-[20px] text-center text-white">
                        Rewards
                    </p>
                    <div className="w-[34px]" />
                </div>

                {/* Points Card */}
                <div className="px-[12px]">
                    <div className="bg-white rounded-[16px] p-[16px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.1)]">
                        <div className="flex items-center justify-between mb-[12px]">
                            <div className="flex items-center gap-[8px]">
                                <div className="size-[36px] rounded-full bg-gradient-to-br from-[#7BD7FB] to-[#34CE9E]" />
                                <div>
                                    <p className="font-['Inter'] font-semibold text-[14px] text-[#2c313a]">{child.name}</p>
                                    <div className={`inline-flex items-center gap-[4px] px-[8px] py-[2px] rounded-full ${tier.gradient}`}>
                                        <span className="font-['Inter'] font-bold text-[10px] text-white capitalize">{child.tier} Tier</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-['Inter'] font-bold text-[24px] text-[#2c313a]">{child.points.toLocaleString()}</p>
                                <p className="font-['Inter'] font-normal text-[11px] text-[#5e677b]">Total Points</p>
                            </div>
                        </div>

                        {/* Progress to Next Tier */}
                        <div className="bg-[#f7f9fd] rounded-[12px] p-[12px]">
                            <div className="flex justify-between items-center mb-[8px]">
                                <p className="font-['Inter'] font-normal text-[12px] text-[#5e677b]">Progress ke {child.nextTier}</p>
                                <p className="font-['Inter'] font-bold text-[12px] text-[#2c313a]">{child.pointsToNext} pts lagi</p>
                            </div>
                            <div className="h-[8px] bg-[#e5e5e5] rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full ${tier.gradient}`}
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white flex gap-[16px] px-[12px] pt-[16px] -mt-[20px] rounded-t-[20px]">
                <button
                    onClick={() => setActiveTab("rewards")}
                    className="flex flex-col gap-[4px] items-center"
                >
                    <p className={`font-['Inter'] font-bold text-[14px] ${activeTab === "rewards" ? "text-[#2c313a]" : "text-[#959dac]"
                        }`}>
                        Rewards
                    </p>
                    <div className={`h-[2px] w-[50px] ${activeTab === "rewards" ? "bg-[#f4c84d]" : ""}`} />
                </button>

                <button
                    onClick={() => setActiveTab("history")}
                    className="flex flex-col gap-[4px] items-center"
                >
                    <p className={`font-['Inter'] font-bold text-[14px] ${activeTab === "history" ? "text-[#2c313a]" : "text-[#959dac]"
                        }`}>
                        Riwayat Poin
                    </p>
                    <div className={`h-[2px] w-[70px] ${activeTab === "history" ? "bg-[#f4c84d]" : ""}`} />
                </button>
            </div>

            {/* Content */}
            <div className="bg-white flex flex-col gap-[12px] p-[12px]">
                {activeTab === "rewards" && (
                    <div className="grid grid-cols-2 gap-[12px]">
                        {rewards.map((reward) => (
                            <div key={reward.id} className="bg-[#f7f9fd] rounded-[12px] p-[12px] flex flex-col items-center">
                                <div className="size-[60px] rounded-full bg-white flex items-center justify-center mb-[8px]">
                                    <span className="text-[32px]">{reward.image}</span>
                                </div>
                                <p className="font-['Inter'] font-semibold text-[12px] text-[#2c313a] text-center">{reward.name}</p>
                                <p className="font-['Inter'] font-bold text-[14px] text-[#f26d0f] mt-[4px]">{reward.points} pts</p>
                                <button
                                    className={`mt-[8px] px-[16px] py-[6px] rounded-full text-[11px] font-bold ${child.points >= reward.points
                                        ? "bg-[#f26d0f] text-white"
                                        : "bg-[#e5e5e5] text-[#959dac]"
                                        }`}
                                    disabled={child.points < reward.points}
                                >
                                    Tukar
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "history" && (
                    <div className="flex flex-col gap-[8px]">
                        {pointHistory.map((item) => (
                            <div key={item.id} className="bg-[#f7f9fd] rounded-[12px] p-[12px] flex justify-between items-center">
                                <div>
                                    <p className="font-['Inter'] font-semibold text-[13px] text-[#2c313a]">{item.activity}</p>
                                    <p className="font-['Inter'] font-normal text-[11px] text-[#5e677b]">{item.date}</p>
                                </div>
                                <p className={`font-['Inter'] font-bold text-[14px] ${item.points.startsWith('+') ? "text-[#2a7650]" : "text-[#c73131]"
                                    }`}>
                                    {item.points}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
