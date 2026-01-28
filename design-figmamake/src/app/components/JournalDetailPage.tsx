import svgPaths from "@/imports/svg-kvv3jpujla";

interface JournalDetailPageProps {
  onBack: () => void;
  unitId: string;
}

export default function JournalDetailPage({ onBack }: JournalDetailPageProps) {
  const lessons = [
    { id: '1', unit: 'A.1 Language Introduction', title: 'Kata kerja memasak', date: '5 Hour ago', hasQuiz: true, quizScore: '70/100' },
    { id: '2', unit: 'A.3 Culture & pronunciation', title: 'Makanan khas Thailand', date: '5 Days ago', hasQuiz: false, quizScore: '' },
    { id: '3', unit: 'A.2 Language practice', title: 'Zero conditional', date: '1 Week ago', hasQuiz: false, quizScore: '' },
    { id: '4', unit: 'A.4 Language extension', title: 'Peralatan memasak', date: '1 Week ago', hasQuiz: false, quizScore: '' },
    { id: '5', unit: 'A.5 Language practice 2', title: 'Kata pembilang', date: '2 Weeks ago', hasQuiz: false, quizScore: '' },
    { id: '6', unit: 'A.6 Cross-curricular', title: 'Selera', date: '2 Weeks ago', hasQuiz: false, quizScore: '' },
    { id: '7', unit: 'A.3 Culture & pronunciation', title: 'Makanan khas Thailand', date: '3 Weeks ago', hasQuiz: false, quizScore: '' },
    { id: '8', unit: 'A.4 Language extension', title: 'Peralatan memasak', date: '3 Weeks ago', hasQuiz: false, quizScore: '' },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#f2f5fa]">
      {/* Header Background */}
      <div className="absolute h-[118px] left-0 top-0 w-full" style={{ backgroundImage: "linear-gradient(161.852deg, rgb(43, 42, 114) 0%, rgb(255, 69, 70) 100%)" }} />

      {/* Content */}
      <div className="relative flex flex-col w-full h-full overflow-y-auto">
        {/* Top Bar */}
        <div className="bg-[#201d4b] h-[24px] w-full shrink-0" />
        
        {/* Header Section with Unit Info */}
        <div className="relative w-full shrink-0" style={{ backgroundImage: "linear-gradient(145.654deg, rgb(43, 42, 114) 0%, rgb(255, 69, 70) 100%)" }}>
          <div className="flex flex-col gap-[12px] p-[12px] w-full">
            {/* Back Button */}
            <button onClick={onBack} className="bg-white border border-[#cfd3db] flex items-center justify-center p-[4px] rounded-full shrink-0 size-[34.286px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.p3169b700} fill="#2C313A" fillRule="evenodd" />
              </svg>
            </button>

            {/* Unit Info Card */}
            <div className="bg-white flex flex-col gap-[12px] p-[12px] rounded-[16px] w-full">
              {/* Unit Badge */}
              <div className="flex gap-[10px] items-center w-full">
                <div className="relative shrink-0 size-[32px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="#986CE5" r="16" />
                  </svg>
                </div>
                <div className="flex flex-col leading-[18px] text-black text-[12px]">
                  <p className="font-['Inter'] font-normal">Unit A</p>
                  <p className="font-['Inter'] font-bold text-[14px]">Crazy Colour</p>
                </div>
              </div>

              {/* Test Scores */}
              <div className="flex gap-[12px] w-full">
                <div className="bg-[#f9f9f9] flex-1 flex flex-col gap-[2px] px-[12px] py-[8px] rounded-[12px]">
                  <p className="font-['Inter'] font-bold leading-[22px] text-[#2c313a] text-[18px] tracking-[-0.1px]">85%</p>
                  <p className="font-['Inter'] font-normal leading-[18px] text-[#5e677b] text-[12px]">Final Test</p>
                </div>
                <div className="bg-[#f9f9f9] flex-1 flex flex-col gap-[2px] px-[12px] py-[8px] rounded-[12px]">
                  <p className="font-['Inter'] font-bold leading-[22px] text-[#2c313a] text-[18px] tracking-[-0.1px]">85%</p>
                  <p className="font-['Inter'] font-normal leading-[18px] text-[#5e677b] text-[12px]">Productive Final</p>
                </div>
              </div>

              {/* Description */}
              <p className="font-['Inter'] font-normal h-[36px] leading-[18px] overflow-hidden text-[#5e677b] text-[12px] text-ellipsis w-full">
                In this unit, students learned about their taste buds and how our tongues interact with flavours. Structure: Zero conditional sentence, a few/ a little/ many/ a lot/ much.
              </p>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="flex flex-col gap-[12px] p-[12px] w-full">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} {...lesson} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LessonCard({ id, unit, title, date, hasQuiz, quizScore }: { id: string; unit: string; title: string; date: string; hasQuiz: boolean; quizScore: string }) {
  return (
    <div className="bg-white flex flex-col gap-[12px] p-[12px] rounded-[16px] shadow-[0px_16px_20px_4px_rgba(129,134,142,0.16)] w-full">
      {/* Lesson Info */}
      <div className="flex flex-col gap-[4px]">
        <div className="flex items-center justify-between">
          <p className="font-['Inter'] font-normal leading-[16px] text-[#5e677b] text-[11px] flex-1">{unit}</p>
          <p className="font-['Inter'] font-normal leading-[16px] text-[#5e677b] text-[11px] shrink-0">{date}</p>
        </div>
        <p className="font-['Inter'] font-semibold leading-[22px] text-[14px] text-black">{title}</p>
      </div>

      {/* Divider and Actions */}
      {hasQuiz && (
        <>
          <div className="bg-[#d9d9d9] h-px w-full" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <div className="bg-[#fbf1e6] flex gap-[8px] items-center px-[12px] py-[8px] rounded-[12px]">
                <p className="font-['Inter'] font-normal leading-[18px] text-[#2c313a] text-[12px]">Quiz Result</p>
                <p className="font-['Inter'] font-bold leading-[18px] text-[#2c313a] text-[12px]">{quizScore}</p>
              </div>
            </div>
            <button className="bg-[#f26d0f] flex items-center justify-center px-[12px] h-[28px] rounded-full">
              <p className="font-['Inter'] font-bold leading-[18px] text-white text-[12px]">See Report</p>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
