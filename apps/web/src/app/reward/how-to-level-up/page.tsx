"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

// SVG Paths
const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
};

// Data Mock
const levelUpActivities = [
    {
        id: 1,
        title: "Mengikuti kelas atau course",
        points: "14 Point"
    },
    {
        id: 2,
        title: "Menyelesaikan materi pembelajaran",
        points: "14 Point"
    },
    {
        id: 3,
        title: "Menyelesaikan quiz atau evaluasi",
        points: "14 Point"
    },
    {
        id: 4,
        title: "Aktif belajar secara konsisten",
        points: "14 Point"
    },
    {
        id: 5,
        title: "Mengikuti challenge atau event tertentu",
        points: "14 Point"
    }
];

export default function HowToLevelUpPage() {
    const router = useRouter();

    return (
        <div className="bg-[#f7f9fd] flex flex-col min-h-[100dvh] w-full font-['Inter']">
            {/* Header */}
            {/* Height: 56px based on design */}
            <div className="sticky top-0 w-full h-[56px] px-[12px] flex items-center justify-between z-50 bg-[#3DB4A8] shadow-sm">
                <button
                    onClick={() => router.back()}
                    className="bg-white flex items-center justify-center size-[36px] rounded-full shadow-sm"
                >
                    <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                        <path d={svgPaths.back} fill="#2C313A" />
                    </svg>
                </button>
                <h1 className="text-white font-bold text-[16px] flex-1 text-center pr-[36px]">
                    How to level up
                </h1>
            </div>

            {/* Main Content */}
            <div className="p-[12px] flex flex-col gap-[12px]">
                {levelUpActivities.map((activity, index) => (
                    <div key={activity.id} className="bg-white p-[12px] rounded-[8px] flex items-center gap-[12px] shadow-sm">
                        {/* Image Placeholder */}
                        <div className="size-[80px] bg-gray-200 rounded-full shrink-0 relative overflow-hidden">
                            {/* Ideally use different images for each or a generic one */}
                            <Image
                                src="/assets/images/thumbnail-activity.png"
                                alt={activity.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-[#2C313A] font-bold text-[14px] leading-tight mb-[4px]">
                                {activity.title}
                            </h3>
                            <p className="text-[#59606D] text-[12px]">
                                {activity.points}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
