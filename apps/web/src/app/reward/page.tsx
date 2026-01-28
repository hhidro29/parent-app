"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

// SVG Paths
const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
    chevronRight: "M8.5 5L13.5 10L8.5 15",
};

// Data Mock
const voucherData = [
    {
        id: 1,
        title: "Cashback English Academy s.d. 2juta",
        minTx: "Min. transaksi Rp.15.000.000",
        expiry: "Berlaku hingga 31 Des 2026",
        icon: "/assets/images/iconlogo-englishacademy.png",
        color: "bg-[#FCEEEF]" // Light pinkish for icon bg
    },
    {
        id: 2,
        title: "Diskon Ruangguru Privat 20%",
        minTx: "Min. transaksi Rp.1.000.000",
        expiry: "Berlaku hingga 31 Des 2026",
        icon: "/assets/images/iconlogo-championswonderlab.png", // Placeholder
        color: "bg-[#FCEEEF]"
    }
];

const benefitData = [
    {
        id: 1,
        title: "Personalized Learning Pathways",
        desc: "Get tailored study plans based on your strengths and weaknesses.",
        image: "/assets/images/thumbnail-activity.png" // Placeholder
    },
    {
        id: 2,
        title: "Discount on Premium Courses",
        desc: "Enjoy special promotions on select courses for loyal users.",
        image: "/assets/images/thumbnail-activity.png" // Placeholder
    }
];

export default function RewardPage() {
    const router = useRouter();

    return (
        <div className="bg-[#f7f9fd] flex flex-col min-h-screen w-full font-['Inter'] pb-[20px]">

            {/* Header & Gradient Background */}
            <div className="relative w-full px-[12px] pt-[12px] pb-[26px] rounded-b-[28px] z-10 bg-[linear-gradient(180deg,#9EA6B2_0%,#6D747F_100%)]">
                {/* Header Toolbar */}
                <div className="w-full flex items-center justify-between h-[44px]">
                    <button
                        onClick={() => router.back()}
                        className="bg-white flex items-center justify-center size-[36px] rounded-full shadow-sm"
                    >
                        <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                            <path d={svgPaths.back} fill="#2C313A" />
                        </svg>
                    </button>
                    <h1 className="text-white font-bold text-[16px] flex-1 text-center pr-[36px]">
                        Ruangguru Reward
                    </h1>
                </div>

                {/* User Tier Card Carousel */}
                <div className="w-full relative mt-[12px]">
                    <div className="bg-white/20 backdrop-blur-sm rounded-[20px] overflow-hidden pb-[12px]">
                        {/* Top Section: Profile */}
                        <div className="p-[12px] flex items-center justify-between bg-[#59606D] backdrop-blur-md">
                            <div className="flex items-center gap-[12px]">
                                <div className="relative size-[36px]">
                                    <Image src="/assets/images/avatar-parent.png" alt="Avatar" fill className="object-cover" />
                                </div>
                                <span className="text-white font-bold text-[16px] leading-tight">Liam's Parent</span>
                            </div>
                            <div className="bg-[linear-gradient(180deg,#8D94A2_0%,#CBD1DE_100%)] rounded-full px-[10px] py-[4px] flex items-center gap-[6px] backdrop-blur-md">
                                <div className="relative size-[16px]">
                                    <Image src="/assets/images/icon-silver.png" alt="Silver" fill className="object-contain" />
                                </div>
                                <span className="text-white font-bold text-[12px]">Silver</span>
                            </div>
                        </div>

                        {/* Bottom Section: Progress */}
                        {/* Measurement: Height 110px */}
                        <div className="h-[110px] p-[12px] flex flex-col justify-between relative">
                            {/* Points Text */}
                            <div className="flex justify-between items-end text-white mb-[8px]">
                                <span className="text-[14px]">1.000 Point</span>
                                <span className="text-[16px] font-bold">12.000 Point</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-[8px] bg-white/30 rounded-full overflow-hidden mb-[12px]">
                                <div className="h-full bg-white w-[10%]" />
                            </div>

                            {/* Info Text & Button */}
                            <div className="flex justify-between items-end">
                                <p className="text-white text-[12px] font-normal leading-tight max-w-[160px]">
                                    Butuh 11.000 Pint untuk naik ke Tier Gold
                                </p>

                                {/* Measurement: Height 32px */}
                                <button className="bg-white text-[#2C313A] text-[12px] font-bold px-[12px] h-[32px] rounded-full flex items-center gap-[4px] hover:bg-gray-50 transition-colors shadow-sm">
                                    Cek Caranya
                                    <svg className="size-[14px]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 5L12 10L7 15" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex items-center justify-center gap-[6px] mt-[12px]">
                        <div className="size-[8px] rounded-full bg-white shadow-sm" />
                        <div className="size-[8px] rounded-full bg-white/40" />
                        <div className="size-[8px] rounded-full bg-white/40" />
                        <div className="size-[8px] rounded-full bg-white/40" />
                    </div>
                </div>
            </div>

            {/* Main Content Body */}
            <div className="w-full px-[12px] flex flex-col gap-[16px] mt-[16px] relative z-20">

                {/* Voucher Promo Section */}
                <div className="flex flex-col gap-[16px]">
                    <h2 className="font-bold text-[#2C313A] text-[16px]">2 Voucher Promo Untukmu</h2>

                    {/* Horizontal Scroll Area */}
                    <div className="flex gap-[12px] overflow-x-auto pb-[4px] -mx-[12px] px-[12px] scrollbar-hide">
                        {voucherData.map((voucher) => (
                            <div key={voucher.id} className="bg-white rounded-[16px] p-[12px] min-w-[300px] flex items-center gap-[12px] shadow-sm border border-gray-100">
                                <div className={`size-[48px] rounded-full ${voucher.color} flex items-center justify-center shrink-0`}>
                                    <div className="relative size-[28px]">
                                        {/* Using a generic icon if specific asset missing */}
                                        <svg viewBox="0 0 24 24" fill="none" className="size-full">
                                            <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#D1566B" strokeWidth="2" />
                                            <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#D1566B" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-[14px] text-[#2C313A] leading-tight mb-[4px]">{voucher.title}</h3>
                                    <p className="text-[12px] text-[#959DAC]">{voucher.minTx}</p>
                                    <p className="text-[12px] text-[#5e677b] mt-[2px]">{voucher.expiry}</p>
                                </div>
                                <div className="shrink-0 text-[#2C313A]">
                                    <svg className="size-[20px]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 5L12 10L7 15" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                        <div className="min-w-[4px]" />{/* Spacer for right padding scroll */}
                    </div>
                </div>

                {/* Benefit Lainnya Section */}
                <div className="flex flex-col gap-[16px]">
                    <h2 className="font-bold text-[#2C313A] text-[16px]">Benefit Lainnya</h2>
                    <div className="flex flex-col gap-[16px]">
                        {benefitData.map(benefit => (
                            <div key={benefit.id} className="bg-white rounded-[16px] p-[12px] flex items-center gap-[12px] shadow-sm">
                                <div className="size-[64px] rounded-full overflow-hidden bg-gray-100 shrink-0 relative border border-gray-100">
                                    <Image src={benefit.image} alt={benefit.title} fill className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-[14px] text-[#2C313A] mb-[4px]">{benefit.title}</h3>
                                    <p className="text-[12px] text-[#5e677b] leading-[1.4]">{benefit.desc}</p>
                                </div>
                                <div className="shrink-0 text-[#2C313A]">
                                    <svg className="size-[20px]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 5L12 10L7 15" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
