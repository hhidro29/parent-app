import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { JOURNAL_DATA } from '@/data/journal';

export default async function JournalDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const journalEntry = JOURNAL_DATA[id];

    if (!journalEntry) {
        notFound();
    }

    const isEnglishAcademy = !!journalEntry.scores;

    if (isEnglishAcademy) {
        return (
            // English Academy Layout
            <div className="flex flex-col min-h-screen bg-[#F7F9FD] pb-[40px] relative">
                {/* Gradient Header Background */}
                <div className={`absolute top-0 w-full h-[220px] ${journalEntry.bg}`} />

                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col">
                    {/* Header Nav */}
                    <div className="px-[20px] py-[16px] flex items-center gap-[12px]">
                        <Link href="/learning" className="w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full shadow-sm active:bg-gray-100">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 19L5 12L12 5" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    <div className="px-[20px] mt-[4px] flex flex-col gap-[16px]">
                        {/* Unit Info Card */}
                        <div className="bg-white rounded-[20px] p-[20px] flex flex-col gap-[16px] shadow-sm">
                            <div className="flex items-center gap-[12px]">
                                <div className="w-[48px] h-[48px] rounded-full bg-[#9C27B0] flex items-center justify-center shrink-0">
                                    {/* Placeholder Icon */}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-['Inter'] font-medium text-[12px] text-[#2C313A]">{journalEntry.subTitle}</span>
                                    <h1 className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">{journalEntry.title}</h1>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-[12px]">
                                <div className="bg-[#F7F9FD] rounded-[12px] p-[12px] flex flex-col">
                                    <span className="font-['Inter'] font-bold text-[18px] text-[#2C313A]">{journalEntry.scores?.finalTest}%</span>
                                    <span className="font-['Inter'] font-normal text-[11px] text-[#5E677B]">Final Test Score</span>
                                </div>
                                <div className="bg-[#F7F9FD] rounded-[12px] p-[12px] flex flex-col">
                                    <span className="font-['Inter'] font-bold text-[18px] text-[#2C313A]">{journalEntry.scores?.productiveFinal}%</span>
                                    <span className="font-['Inter'] font-normal text-[11px] text-[#5E677B]">Productive Final score</span>
                                </div>
                            </div>

                            <p className="font-['Inter'] font-normal text-[12px] leading-[18px] text-[#5E677B]">
                                {journalEntry.description}
                            </p>
                        </div>

                        {/* Lesson List */}
                        <div className="flex flex-col gap-[12px]">
                            {journalEntry.skills.map((skill, index) => (
                                <div key={index} className="bg-white rounded-[20px] p-[16px] flex flex-col gap-[12px] shadow-sm relative">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-[2px]">
                                            <span className="font-['Inter'] font-medium text-[11px] text-[#9AA2B1]">{skill.category}</span>
                                            <h3 className="font-['Inter'] font-bold text-[14px] text-[#2C313A]">{skill.title}</h3>
                                        </div>
                                        {skill.date && (
                                            <span className="font-['Inter'] font-medium text-[10px] text-[#9AA2B1] whitespace-nowrap">{skill.date}</span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between mt-[4px]">
                                        {/* Left Side: Quiz Result or Empty */}
                                        <div>
                                            {skill.quizScore !== undefined && (
                                                <div className="bg-[#FFF4E5] px-[12px] py-[6px] rounded-full">
                                                    <span className="font-['Inter'] font-medium text-[12px] text-[#2C313A]">
                                                        Quiz Result <span className="font-bold">{skill.quizScore}/100</span>
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Side: Action Button */}
                                        {skill.hasReport ? (
                                            <Link href={`/learning/report/${id}`} className="bg-[#F26D0F] text-white px-[16px] py-[8px] rounded-full font-['Inter'] font-bold text-[12px]">
                                                See Report
                                            </Link>
                                        ) : (
                                            <div /> /* Placeholder for spacing if needed or other actions */
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F9FD] pb-[40px]">
            {/* Header */}
            <div className="bg-white px-[20px] py-[16px] flex items-center gap-[12px] sticky top-0 z-10 shadow-sm">
                <Link href="/learning" className="w-[32px] h-[32px] flex items-center justify-center rounded-full active:bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 19L5 12L12 5" stroke="#2C313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
                <div className="flex-1 flex justify-center items-center gap-[8px]">
                    <div className="w-[32px] h-[32px] rounded-full overflow-hidden relative">
                        <Image
                            src="/assets/images/profile-dora.png"
                            alt="Dora"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-['Inter'] font-bold text-[16px] text-[#2C313A]">Dora</span>
                </div>
                <div className="w-[32px]" /> {/* Spacer for centering */}
            </div>

            <div className="px-[20px] pt-[20px] flex flex-col gap-[16px]">
                {/* Summary Card */}
                <div className="bg-white rounded-[20px] p-[20px] flex flex-col gap-[16px] shadow-sm">
                    <div className="flex items-center gap-[12px]">
                        <div className={`w-[48px] h-[48px] rounded-full ${journalEntry.bg}`} />
                        <h1 className="font-['Inter'] font-bold text-[18px] text-[#2C313A]">{journalEntry.title}</h1>
                    </div>

                    <div className="bg-[#F7F9FD] rounded-[12px] p-[16px] flex flex-col gap-[4px]">
                        <span className="font-['Inter'] font-normal text-[12px] text-[#5E677B]">Total Stimulasi</span>
                        <span className="font-['Inter'] font-bold text-[20px] text-[#2C313A]">{journalEntry.totalStimulasi}</span>
                    </div>

                    <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#5E677B]">
                        {journalEntry.description}
                    </p>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-[12px]">
                    {journalEntry.skills.map((skill, index) => (
                        <div key={index} className="bg-white rounded-[20px] p-[16px] flex flex-col gap-[16px] shadow-sm">
                            <h3 className="font-['Inter'] font-bold text-[14px] leading-[20px] text-[#2C313A]">
                                {skill.title}
                            </h3>

                            <hr className="border-[#E2E8F0]" />

                            <div className="flex items-center justify-between">
                                <div className={`px-[12px] py-[6px] rounded-full flex items-center gap-[6px] ${skill.status === 'Proficient' ? 'bg-[#E6F6EC]' :
                                    skill.status === 'Developing' ? 'bg-[#E3F2FD]' :
                                        'bg-[#F3E5F5]'
                                    }`}>
                                    <div className={`w-[16px] h-[16px] rounded-full ${skill.status === 'Proficient' ? 'bg-[#4CAF50]' :
                                        skill.status === 'Developing' ? 'bg-[#2196F3]' :
                                            'bg-[#9C27B0]'
                                        }`} />
                                    <span className="font-['Inter'] font-bold text-[12px] text-[#2C313A]">
                                        {skill.status}
                                    </span>
                                </div>

                                <Link href={`/learning/journal/${id}/${index}`} className="bg-[#FF6B00] text-white px-[16px] py-[8px] rounded-full font-['Inter'] font-bold text-[12px]">
                                    See Detail
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
