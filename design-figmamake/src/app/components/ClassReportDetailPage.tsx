import svgPaths from "@/imports/svg-b1hk66hjpv";
import imgRectangle from "figma:asset/cf64a1804726e5f88ac86ab13f65cb2fc97b847c.png";

interface ClassReportDetailPageProps {
  onBack: () => void;
  reportId: string;
}

export default function ClassReportDetailPage({ onBack }: ClassReportDetailPageProps) {
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 w-full">
        {/* Header */}
        <div className="bg-[#201d4b] h-[24px] w-full shrink-0" />
        
        {/* Gradient Header Bar */}
        <div className="relative w-full" style={{ backgroundImage: "linear-gradient(161.852deg, rgb(43, 42, 114) 0%, rgb(255, 69, 70) 100%)" }}>
          <div className="flex items-center p-[12px] w-full">
            {/* Back Button */}
            <button onClick={onBack} className="bg-white border border-[#cfd3db] flex items-center justify-center p-[4px] rounded-full shrink-0 size-[34.286px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.p3169b700} fill="#2C313A" fillRule="evenodd" />
              </svg>
            </button>
            
            {/* Title */}
            <p className="flex-1 font-['Inter'] font-bold leading-[20px] text-[16px] text-center text-white">Class Report Detail</p>
            
            {/* Spacer for symmetry */}
            <div className="opacity-0 shrink-0 size-[34.286px]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#f2f5fa] flex flex-col gap-[12px] pb-[12px] w-full">
        {/* Calendar */}
        <div className="p-[12px]">
          <div className="flex flex-col overflow-clip rounded-[16px] w-full">
            {/* Calendar Header */}
            <div className="bg-white flex items-center justify-between p-[12px]">
              <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[16px]">Des 2025</p>
              <div className="flex gap-[12px] items-center">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p278fae00} fill="#2C313A" fillRule="evenodd" />
                </svg>
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p19dc7f80} fill="#2C313A" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Calendar Days */}
            <div className="bg-white flex items-center p-[4px] rounded-bl-[16px] rounded-br-[16px]">
              {/* Sunday - Inactive */}
              <div className="flex-1 flex flex-col gap-[8px] items-center opacity-50 pt-[4px] px-[10px] rounded-[12px]">
                <div className="flex flex-col items-center text-[#cd1924] text-center w-full">
                  <p className="font-['Inter'] font-normal leading-[22px] text-[14px]">S</p>
                  <p className="font-['Inter'] font-bold leading-[24px] text-[16px]">16</p>
                </div>
                <div className="bg-transparent h-[4px] w-full" />
              </div>
              
              {/* Monday */}
              <div className="flex-1 flex flex-col gap-[8px] items-center pt-[4px] px-[10px] rounded-[12px]">
                <div className="flex flex-col items-center text-[#2c313a] text-center w-full">
                  <p className="font-['Inter'] font-normal leading-[22px] text-[14px]">M</p>
                  <p className="font-['Inter'] font-bold leading-[24px] text-[16px]">17</p>
                </div>
                <div className="bg-transparent h-[4px] w-full" />
              </div>
              
              {/* Tuesday - Inactive */}
              <div className="flex-1 flex flex-col gap-[8px] items-center pt-[4px] px-[10px] rounded-[12px]">
                <div className="flex flex-col items-center text-[#959dac] text-center w-full">
                  <p className="font-['Inter'] font-normal leading-[22px] text-[14px]">T</p>
                  <p className="font-['Inter'] font-bold leading-[24px] text-[16px]">18</p>
                </div>
                <div className="bg-transparent h-[4px] w-full" />
              </div>
              
              {/* Wednesday - Inactive */}
              <div className="flex-1 flex flex-col gap-[8px] items-center pt-[4px] px-[10px] rounded-[12px]">
                <div className="flex flex-col items-center text-[#959dac] text-center w-full">
                  <p className="font-['Inter'] font-normal leading-[22px] text-[14px]">W</p>
                  <p className="font-['Inter'] font-bold leading-[24px] text-[16px]">19</p>
                </div>
                <div className="bg-transparent h-[4px] w-full" />
              </div>
              
              {/* Thursday - Active */}
              <div className="bg-[#def3f5] flex-1 flex flex-col gap-[8px] items-center pt-[4px] px-[10px] rounded-[12px]">
                <div className="flex flex-col items-center text-[#2c313a] text-center w-full">
                  <p className="font-['Inter'] font-normal leading-[22px] text-[14px]">T</p>
                  <p className="font-['Inter'] font-bold leading-[24px] text-[16px]">20</p>
                </div>
                <div className="h-[4px] w-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.8571 4">
                    <path d={svgPaths.pa9b0d00} fill="#20A4B0" />
                  </svg>
                </div>
              </div>
              
              {/* Friday - Inactive */}
              <div className="flex-1 flex flex-col gap-[8px] items-center pt-[4px] px-[10px] rounded-[12px]">
                <div className="flex flex-col items-center text-[#959dac] text-center w-full">
                  <p className="font-['Inter'] font-normal leading-[22px] text-[14px]">F</p>
                  <p className="font-['Inter'] font-bold leading-[24px] text-[16px]">21</p>
                </div>
                <div className="bg-transparent h-[4px] w-full" />
              </div>
              
              {/* Saturday - Inactive */}
              <div className="flex-1 flex flex-col gap-[8px] items-center pt-[4px] px-[10px] rounded-[12px]">
                <div className="flex flex-col items-center text-[#959dac] text-center w-full">
                  <p className="font-['Inter'] font-normal leading-[22px] text-[14px]">S</p>
                  <p className="font-['Inter'] font-bold leading-[24px] text-[16px]">21</p>
                </div>
                <div className="bg-transparent h-[4px] w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Report Details */}
        <div className="flex flex-col gap-[12px] px-[12px]">
          {/* Date and Title */}
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Inter'] font-normal leading-[16px] text-[#2c313a] text-[11px]">25 November 2025</p>
            <p className="font-['Inter'] font-bold leading-[20px] text-[#2c313a] text-[16px]">Unit A1 : [Placeholder Title]</p>
          </div>

          {/* Master Teacher */}
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#f2f5fa] border border-white flex items-center justify-center rounded-full shrink-0 size-[28px]" />
            <div className="flex flex-col flex-1">
              <p className="font-['Inter'] font-normal leading-[16px] text-black text-[11px]">Master Teacher</p>
              <p className="font-['Inter'] font-semibold leading-[18px] text-black text-[12px]">Winsi Elpril Sekarputri</p>
            </div>
          </div>

          {/* Classroom Image */}
          <div className="h-[180px] overflow-hidden relative rounded-[12px] w-full">
            <img alt="Classroom activity" className="absolute h-[186.67%] left-0 max-w-none object-cover top-[-48.89%] w-full" src={imgRectangle} />
          </div>

          {/* Activity Detail */}
          <div className="bg-white border border-[#cfd3db] flex flex-col gap-[12px] p-[12px] rounded-[16px] w-full">
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#f2f5fa] flex items-center justify-center rounded-full shrink-0 size-[28px]" />
              <p className="flex-1 font-['Inter'] font-bold leading-[18px] text-[14px] text-black">Activity Detail</p>
            </div>
            
            <p className="font-['Inter'] font-bold leading-[18px] text-[12px] text-black">🎯 Tujuan pembelajaran</p>
            <p className="font-['Inter'] font-normal leading-[normal] text-[12px] text-black">
              To learn about living things and their young, life stages, and the number of offspring they have
            </p>
            
            <p className="font-['Inter'] font-bold leading-[18px] text-[12px] text-black">🧠 Fokus keterampilan yang dilatih</p>
            <div className="font-['Inter'] font-normal leading-[normal] text-[12px] text-black">
              <p className="mb-0">Vocabulary:</p>
              <p className="mb-0">-Animal offsprings: calf, joey, cub, puppy, kitten, caterpillar</p>
              <p className="mb-0">-Human life stages: baby, toddler, kid, teenager, adult</p>
              <p className="mb-0">-Plant life stages: seed, seedling, young plant, adult plant</p>
              <p className="mb-0">&nbsp;</p>
              <p>Structure: Nouns, pronouns (he, she, it, they, etc.), reflexive pronouns (themselves, herself, myself, etc.)</p>
            </div>
          </div>

          {/* Catatan Perkembangan */}
          <div className="bg-white border border-[#cfd3db] flex flex-col gap-[12px] p-[12px] rounded-[16px] w-full">
            <div className="flex gap-[8px] items-center">
              <div className="relative shrink-0 size-[28px]">
                <svg className="block size-full" fill="none" viewBox="0 0 28 28">
                  <circle cx="14" cy="14" fill="#F2F5FA" r="14" />
                  <path clipRule="evenodd" d={svgPaths.p2b989900} fill="#2C313A" fillRule="evenodd" />
                </svg>
              </div>
              <p className="flex-1 font-['Inter'] font-bold leading-[18px] text-[14px] text-black">Catatan Perkembangan</p>
            </div>
            
            <p className="font-['Inter'] font-normal leading-[normal] text-[12px] text-black">
              Hari ini, Ananda aktif mengikuti semua kegiatan dengan antusiasme tinggi 🗣️. Dari penguasaan materi, Ananda memahami materi dengan sangat baik dan mampu mengerjakan tugas dengan mandiri 📖. Ketika berinteraksi dengan yang lain, Ananda menunjukkan kemampuan untuk berkomunikasi dengan lancar dan positif, bekerja sama, serta berbagi pendapat dengan percaya diri 👥.
            </p>
          </div>

          {/* Footer Note */}
          <div className="font-['Inter'] font-normal leading-[normal] text-[12px] text-black">
            <p className="mb-0">Mohon diinformasikan jika ada hal yang ingin Ayah/Bunda tanyakan.</p>
            <p className="mb-0">&nbsp;</p>
            <p>Terima kasih atas perhatian dan kerja samanya. Hormat kami, English Academy Center</p>
          </div>

          {/* CTA Button */}
          <button className="bg-[#f26d0f] flex items-center justify-center h-[44px] rounded-full w-full">
            <p className="font-['Inter'] font-bold leading-[22px] text-[14px] text-white">Tanya Master Teacher</p>
          </button>
        </div>
      </div>
    </div>
  );
}