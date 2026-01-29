'use client';

import { JOURNAL_DATA } from '@/data/journal';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function StimulationDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const skillIndex = parseInt(params.skillIndex as string);
    const router = useRouter();

    const journalEntry = JOURNAL_DATA[id];
    const skill = journalEntry?.skills[skillIndex];

    const [isActivityOpen, setIsActivityOpen] = useState(false);

    if (!journalEntry || !skill) {
        return notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F9FD] pb-[40px]">
            {/* Header */}
            <div className="bg-[#E6F6EC] px-[20px] py-[16px] flex items-center gap-[12px] sticky top-0 z-10">
                <button onClick={() => router.back()} className="w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full shadow-sm active:bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 19L5 12L12 5" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="flex-1 flex justify-center items-center gap-[8px]">
                    <div className="w-[32px] h-[32px] rounded-full overflow-hidden relative border-2 border-white">
                        <Image
                            src="/assets/images/profile-dora.png"
                            alt="Child Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">Dora</span>
                </div>
                <div className="w-[32px]" />
            </div>

            <div className="px-[20px] -mt-[20px] relative z-0 pt-[40px] flex flex-col gap-[16px]">

                {/* Main Skill Card */}
                <div className="bg-white rounded-[20px] p-[20px] flex flex-col gap-[12px] shadow-sm">
                    <span className="font-['Inter'] font-bold text-[12px] text-[#9C27B0]">
                        {journalEntry.title}
                    </span>

                    <h1 className="font-['Inter'] font-bold text-[18px] leading-[26px] text-[#2C313A]">
                        {skill.title}
                    </h1>

                    <div className="flex items-center justify-between mt-[4px]">
                        <div className="flex flex-col">
                            <span className="font-['Inter'] font-bold text-[12px] text-[#2C313A]">Stimulation Result</span>
                            <span className="font-['Inter'] font-normal text-[12px] text-[#5E677B]">Updated {skill.updatedDate || '25 Sep 2025'}</span>
                        </div>

                        <div className={`px-[16px] py-[8px] rounded-full flex items-center gap-[8px] ${skill.status === 'Proficient' ? 'bg-[#FFF3E0]' : // Mockup shows yellowish/orange for Proficient
                            skill.status === 'Developing' ? 'bg-[#E3F2FD]' :
                                'bg-[#F3E5F5]'
                            }`}>
                            {/* Star Icon */}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" fill={
                                    skill.status === 'Proficient' ? '#FF9800' :
                                        skill.status === 'Developing' ? '#2196F3' :
                                            '#9C27B0'
                                } />
                            </svg>
                            <span className="font-['Inter'] font-bold text-[14px] text-[#2C313A]">
                                {skill.status}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Observation Indicator Card */}
                <div className="bg-white rounded-[20px] p-[20px] flex flex-col gap-[16px] shadow-sm">
                    <h3 className="font-['Inter'] font-bold text-[14px] text-[#2C313A]">Observation Indicator</h3>

                    <div className="flex flex-col gap-[12px]">
                        {skill.observationIndicators.map((indicator, idx) => (
                            <div key={idx} className="flex gap-[12px] items-start">
                                <div className="w-[20px] h-[20px] rounded-[4px] bg-[#66BB6A] flex items-center justify-center shrink-0 mt-[2px]">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#2C313A]">
                                    {indicator}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity Detail Card */}
                <div className="bg-white rounded-[20px] p-[20px] shadow-sm">
                    <button
                        onClick={() => setIsActivityOpen(!isActivityOpen)}
                        className="flex items-center justify-between w-full"
                    >
                        <h3 className="font-['Inter'] font-bold text-[14px] text-[#2C313A]">Activity Detail</h3>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-200 ${isActivityOpen ? 'rotate-180' : ''}`}
                        >
                            <path d="M6 9L12 15L18 9" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {isActivityOpen && (
                        <div className="mt-[16px] pt-[16px] border-t border-[#E2E8F0]">
                            <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#5E677B]">
                                {skill.activityDetail}
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
