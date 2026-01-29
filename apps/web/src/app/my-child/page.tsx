"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
    chevronRight: "M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z",
    plus: "M12 5V19M5 12H19",
};

const children = [
    {
        id: "liam",
        name: "Liam A.",
        description: "Sekolah Dasar - Kelas 3",
        tier: "silver" as const,
        subscriptionCount: 2,
        subscriptionDate: "31 Juni 2026",
    },
    {
        id: "dora",
        name: "Dora P.",
        description: "PAUD - 2 Tahun",
        tier: "gold" as const,
        subscriptionCount: 1,
        subscriptionDate: "31 Juni 2026",
    },
];

function ChildCard({ child }: { child: typeof children[0] }) {


    return (
        <div className="bg-white rounded-[12px] w-full border border-[#cfd3db] overflow-hidden">
            <div className="p-[12px] flex flex-col gap-[10px]">
                {/* Header Row */}
                <div className="flex items-start justify-between">
                    <div className="flex gap-[8px] items-center">
                        <div className="relative shrink-0 size-[28px] rounded-full bg-gradient-to-br from-[#7BD7FB] to-[#34CE9E]" />
                        <div className="flex flex-col gap-[4px]">
                            <p className="font-['Inter'] font-semibold text-[14px] leading-[18px] text-[#2c313a]">
                                {child.name}
                            </p>
                            <p className="font-['Inter'] font-normal text-[12px] leading-normal text-black">
                                {child.description}
                            </p>
                        </div>
                    </div>

                    {/* Tier Badge */}

                </div>

                {/* Subscription Strip */}
                <div className="bg-[#edeff9] rounded-[8px] w-full px-[8px] py-[4px]">
                    <div className="flex items-center justify-between gap-[10px]">
                        <p className="font-['Inter'] font-normal text-[10px] leading-[16px] text-[#5e677b]">
                            {child.subscriptionCount} paket langganan aktif sampai <span className="font-bold">{child.subscriptionDate}</span>
                        </p>
                        <svg className="size-[16px]" viewBox="0 0 24 24" fill="none">
                            <path d={svgPaths.chevronRight} fill="#2C313A" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PromoCard() {
    return (
        <div className="relative shrink-0 w-[254px] h-[112px] rounded-[12px] overflow-hidden bg-gradient-to-br from-[#E8F8F7] to-[#FFF9EE]">
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[48px]">📚</span>
            </div>
            <button className="absolute bottom-[14px] right-[14px] bg-[#f26d0f] rounded-full h-[28px] px-[12px] flex items-center justify-center">
                <p className="font-['Inter'] font-bold text-[12px] leading-[18px] text-white">
                    Langganan
                </p>
            </button>
        </div>
    );
}

export default function MyChildPage() {
    const router = useRouter();

    return (
        <div className="bg-[#f7f9fd] flex flex-col min-h-full w-full relative">
            {/* Background Gradient */}
            <div
                className="absolute h-[118px] left-0 rounded-bl-[28px] top-0 w-full pointer-events-none z-0"
                style={{ backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.852deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)" }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col w-full">


                {/* Header */}
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
                        My Child
                    </p>
                    <div className="w-[34px]" />
                </div>

                {/* Main Content */}
                <div className="bg-[#f7f9fd] flex flex-col gap-[12px] p-[12px] pb-[20px] rounded-[20px] w-full mt-[4px]">
                    {children.map((child) => (
                        <ChildCard key={child.id} child={child} />
                    ))}

                    {/* Connect Account Button */}
                    <div className="flex w-full mt-[4px]">
                        <Link
                            href="/auth"
                            className="bg-white h-[28px] rounded-full flex items-center justify-center pl-[8px] pr-[12px] gap-[4px] border border-[#cfd3db]"
                        >
                            <svg className="size-[16px]" viewBox="0 0 24 24" fill="none">
                                <path d={svgPaths.plus} stroke="#2C313A" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span className="font-['Inter'] font-bold text-[12px] leading-[18px] text-[#2c313a]">
                                Connect Account
                            </span>
                        </Link>
                    </div>

                    {/* Promo Section */}
                    <div className="flex flex-col gap-[12px] mt-[4px]">
                        <p className="font-['Inter'] font-bold text-[16px] leading-[20px] text-[#2c313a]">
                            Paket belajar untuk anak anda
                        </p>
                        <div className="flex gap-[10px] overflow-x-auto pb-[4px] -mx-[12px] px-[12px] scrollbar-hide">
                            <PromoCard />
                            <PromoCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
