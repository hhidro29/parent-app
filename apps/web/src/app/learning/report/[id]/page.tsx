"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
};

export default function ClassReportDetailPage() {
    const router = useRouter();

    const days = [
        { day: "S", date: "16" },
        { day: "M", date: "17" },
        { day: "T", date: "18" },
        { day: "W", date: "19" },
        { day: "T", date: "20", active: true },
        { day: "F", date: "21" },
        { day: "S", date: "22" },
    ];

    return (
        <div className="flex flex-col min-h-full w-full bg-[#f7f9fd] relative">
            {/* Header Background - Fixed Height 118px */}
            <div
                className="absolute top-0 w-full h-[118px] z-0"
                style={{
                    backgroundImage: "linear-gradient(169.875deg, #2B2A72 0%, #FF4546 100%)",
                }}
            />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col w-full">
                {/* Top Bar - 18px top padding, 12px bottom gap */}
                <div className="flex items-center px-[12px] pt-[18px] pb-[12px] w-full">
                    <button
                        onClick={() => router.back()}
                        className="bg-white flex items-center justify-center p-[4px] rounded-full shrink-0 w-[34px] shadow-[0px_0px_0px_1px_#cfd3db_inset]"
                    >
                        <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                            <path d={svgPaths.back} fill="#2C313A" />
                        </svg>
                    </button>
                    <p className="flex-1 font-['Inter'] font-bold text-[16px] leading-[20px] text-center text-white">
                        Class Report Detail
                    </p>
                    <div className="w-[34px]" />
                </div>

                {/* Scrollable Content */}
                <div className="flex flex-col px-[12px] gap-[12px]">
                    {/* Calendar Card */}
                    <div className="bg-white rounded-[20px] p-[16px] shadow-sm flex flex-col gap-[16px]">
                        <div className="flex items-center justify-between">
                            <span className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">Des 2025</span>
                            <div className="flex gap-[16px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-180 cursor-pointer">
                                    <path d="M9 18L15 12L9 6" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="cursor-pointer">
                                    <path d="M9 18L15 12L9 6" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-center">
                            {days.map((item, index) => (
                                <div key={index} className="flex flex-col gap-[8px] items-center relative">
                                    <span className={`text-[12px] font-medium ${item.active ? 'text-[#3CAB9E]' : 'text-[#9AA2B1]'}`}>
                                        {item.day}
                                    </span>
                                    <span className={`text-[16px] font-bold ${item.active ? 'text-[#2C313A]' : 'text-[#9AA2B1]'}`}>
                                        {item.date}
                                    </span>
                                    {item.active && (
                                        <div className="absolute -bottom-[20px] w-[32px] h-[4px] bg-[#3CAB9E] rounded-t-full" />
                                    )}
                                    {item.active && (
                                        <div className="absolute inset-x-[-8px] -top-[4px] -bottom-[4px] bg-[#EBFDFA] -z-10 rounded-[8px]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Unit Info Section */}
                    <div className="flex flex-col gap-[12px] mt-[4px]">
                        <span className="font-['Inter'] text-[12px] text-[#5E677B]">25 November 2025</span>
                        <h1 className="font-['Inter'] font-bold text-[20px] text-[#2C313A] leading-[1.3]">
                            Discovering Me - This Is Me!
                        </h1>

                        <div className="flex items-center gap-[12px]">
                            <div className="w-[40px] h-[40px] bg-[#F1F5F9] rounded-full shrink-0 overflow-hidden relative">
                                {/* Placeholder for teacher avatar */}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-[#5E677B]">Master Teacher</span>
                                <span className="font-['Inter'] font-bold text-[12px] text-[#2C313A]">Winsi Elpril Sekarputri</span>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-[328/180] rounded-[16px] overflow-hidden mt-[4px]">
                            <Image
                                src="/assets/images/thumbnail-activity.png"
                                alt="Activity"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Activity Detail Card */}
                    <div className="bg-white rounded-[20px] p-[16px] shadow-sm flex flex-col gap-[16px] mt-[8px]">
                        <div className="flex items-center gap-[12px]">
                            <div className="size-[40px] bg-[#F7F9FD] rounded-full flex items-center justify-center">
                                {/* Activity Icon Placeholder */}
                                <div className="size-[24px] bg-[#E2E8F0] rounded-full" />
                            </div>
                            <span className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">Activity Detail</span>
                        </div>

                        <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-col gap-[4px]">
                                <h3 className="font-['Inter'] font-bold text-[14px] text-[#2C313A] flex items-center gap-[6px]">
                                    <span>🎯</span> Tujuan pembelajaran
                                </h3>
                                <p className="font-['Inter'] text-[13px] text-[#2C313A] leading-[20px]">
                                    To learn about living things and their young, life stages, and the number of offspring they have
                                </p>
                            </div>

                            <div className="flex flex-col gap-[4px]">
                                <h3 className="font-['Inter'] font-bold text-[14px] text-[#2C313A] flex items-center gap-[6px]">
                                    <span>🧠</span> Fokus keterampilan yang dilatih
                                </h3>

                                {/* Skill Card 1 */}
                                <div className="border border-[#BF7AF0] rounded-[16px] p-[16px] flex flex-col gap-[12px] mt-[8px]">
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col gap-[4px]">
                                            <span className="font-['Inter'] font-semibold text-[10px] text-[#9747FF]">Social & Emotional Development</span>
                                            <span className="font-['Inter'] font-bold text-[13px] text-[#2C313A] leading-[1.4]">
                                                Show awareness of personal identity (own abilities and personal qualities)
                                            </span>
                                        </div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 rotate-90">
                                            <path d="M6 9l6 6 6-6" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="font-['Inter'] text-[12px] text-[#5E677B]">Stimulation Result</span>
                                        <div className="bg-[#FFF4E5] px-[12px] py-[6px] rounded-full flex items-center gap-[6px]">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F26D0F">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            <span className="font-['Inter'] font-bold text-[12px] text-[#2C313A]">Proficient</span>
                                        </div>
                                    </div>

                                    <p className="font-['Inter'] text-[12px] text-[#2C313A] leading-[18px]">
                                        Liam showed authenticity today by being herself and honestly expressing her feelings. At the beginning of the day, she felt a little shy and returned to her mum after entering the class. However, it did not take long for Liam to build her confidence, and she became willing and able to participate in all the activities offered to her. We observed Liam engaging with these
                                    </p>
                                </div>

                                {/* Skill Card 2 */}
                                <div className="border border-[#F26D0F] rounded-[16px] p-[16px] flex flex-col gap-[12px] mt-[8px]">
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col gap-[4px]">
                                            <span className="font-['Inter'] font-semibold text-[10px] text-[#E85C34]">Authenticity</span>
                                            <span className="font-['Inter'] font-bold text-[13px] text-[#2C313A] leading-[1.4]">
                                                Feels content being oneself, Expresses genuine feelings honestly, Respects personal uniqueness and individuality
                                            </span>
                                        </div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 rotate-90">
                                            <path d="M6 9l6 6 6-6" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="font-['Inter'] text-[12px] text-[#5E677B]">Stimulation Result</span>
                                        <div className="bg-[#FFF4E5] px-[12px] py-[6px] rounded-full flex items-center gap-[6px]">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F26D0F">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            <span className="font-['Inter'] font-bold text-[12px] text-[#2C313A]">Proficient</span>
                                        </div>
                                    </div>

                                    <p className="font-['Inter'] text-[12px] text-[#2C313A] leading-[18px]">
                                        Liam frequently brings both his hands and feet to his mouth. During floor time, he spends significant moments looking intently at his hands, rotating them, and grasping his toes. He uses his hands to purposefully grasp toys and shake them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Catatan Perkembangan Card */}
                    <div className="bg-white rounded-[20px] p-[16px] shadow-sm flex flex-col gap-[12px] mt-[4px]">
                        <div className="flex items-center gap-[12px]">
                            <div className="size-[24px] flex items-center justify-center">
                                <div className="w-[32px] h-[32px] rounded-full bg-[#f7f9fd] flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                </div>
                            </div>
                            <span className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">Catatan Perkembangan</span>
                        </div>
                        <p className="font-['Inter'] text-[13px] text-[#2C313A] leading-[20px]">
                            Hari ini, Ananda aktif mengikuti semua kegiatan dengan antusiasme tinggi 🗣️. Dari penguasaan materi, Ananda memahami materi dengan sangat baik dan mampu mengerjakan tugas dengan mandiri 📖. Ketika berinteraksi dengan yang lain, Ananda menunjukkan kemampuan untuk berkomunikasi dengan lancar dan positif, bekerja sama, serta berbagi pendapat dengan percaya diri 👥.
                        </p>
                    </div>

                    <div className="mt-[20px] mb-[80px]">
                        <p className="font-['Inter'] text-[12px] text-[#2C313A] leading-[18px]">
                            Mohon diinformasikan jika ada hal yang ingin Ayah/Bunda tanyakan.
                        </p>
                        <p className="font-['Inter'] text-[12px] text-[#2C313A] leading-[18px] mt-[12px]">
                            Terima kasih atas perhatian dan kerja samanya. Hormat kami, English Academy Center
                        </p>
                    </div>

                    {/* Fixed Bottom Button */}
                    <div className="fixed bottom-0 left-0 right-0 p-[12px] bg-white border-t border-slate-100 flex justify-center z-50">
                        {/* Constrain width for desktop view compatibility if inside a container */}
                        <div className="w-full max-w-[450px]">
                            <button className="w-full bg-[#F26D0F] text-white font-['Inter'] font-bold text-[16px] py-[14px] rounded-full shadow-lg active:scale-[0.98] transition-transform">
                                Tanya Master Teacher
                            </button>
                        </div>
                    </div>

                    <div className="h-[20px]" />
                </div>
            </div>
        </div>
    );
}
