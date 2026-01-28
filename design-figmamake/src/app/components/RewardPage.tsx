import { useState, useEffect } from "react";
import imgImage19 from "figma:asset/e7b24dc6e85fb42d79e6ace8ab9126f7d742557c.png";
import imgImage20 from "figma:asset/a897f204df85b5389f32ff0bf8b0596f67a77d91.png";
import imgEllipse1645 from "figma:asset/125f00a1494ee1c2e57eea6334552294f0d2b3a9.png";
import imgEllipse1644 from "figma:asset/3f47327c5727e53da2c0b9bde40029de7b2e7225.png";
import imgSyllabusEaIcon from "figma:asset/b9ac2c82a4b66aa9052f6ea7aa4b5d9dcf714609.png";
import imgImage1013 from "figma:asset/b5b72591df3965bb7cfb42bb9fb98367498d873b.png";
import svgPaths from "@/imports/svg-q2v92f3guv";
import RewardHeader from "@/app/components/RewardHeader";

interface RewardPageProps {
  onBack: () => void;
  initialChildId?: string;
}

const PROFILES = [
  {
    id: "liam",
    name: "Liam A.",
    tier: "Silver",
    tierIcon: imgEllipse1645,
    avatar: imgImage19,
    currentPoints: 12000,
    targetPoints: 23000,
    nextTier: "Gold",
    pointsNeeded: 11000,
    gradient: "linear-gradient(140.194deg, rgb(184, 188, 195) 0%, rgb(126, 129, 134) 100%)",
    tierBadgeGradient: "from-[#8d94a2] to-[#cbd1de]",
    barColor: "bg-[#8d94a2]", // Track
    barTrackColor: "bg-white", // Progress
    cardBgColor: "bg-[#5f6775]",
    infoBgColor: "bg-[#778090]",
  },
  {
    id: "dora",
    name: "Dora P.",
    tier: "Gold",
    tierIcon: imgEllipse1644,
    avatar: imgImage20,
    currentPoints: 24000,
    targetPoints: 32000,
    nextTier: "Diamond",
    pointsNeeded: 11000,
    gradient: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(90deg, rgb(218, 165, 73) 0%, rgb(218, 165, 73) 100%)",
    tierBadgeGradient: "from-[#d38c2f] to-[#e4cb71]",
    barColor: "bg-[#bb8528]", // Track
    barTrackColor: "bg-white", // Progress
    cardBgColor: "bg-[#9b651d]",
    infoBgColor: "bg-[#daa549]",
  }
];

export default function RewardPage({ onBack, initialChildId }: RewardPageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (initialChildId) {
      const index = PROFILES.findIndex(p => p.id === initialChildId);
      if (index !== -1) {
        setActiveIndex(index);
      }
    }
  }, [initialChildId]);

  return (
    <div className="bg-[#f7f9fd] flex flex-col min-h-full w-full relative overflow-x-hidden">
      
      <RewardHeader 
        profiles={PROFILES}
        activeIndex={activeIndex}
        onIndexChange={setActiveIndex}
        onBack={onBack}
      />

      <div className="relative z-10 flex flex-col w-full h-full">
        {/* Promo Section */}
        <div className="my-[16px] px-[12px] flex flex-col gap-[12px] w-full">
          <p className="font-['Inter'] font-bold text-[14px] text-[#2c313a]">2 Voucher Promo Untukmu</p>
          <div className="flex gap-[12px] overflow-x-auto pb-[4px] -mx-[12px] px-[12px] scrollbar-hide">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-[12px] p-[12px] min-w-[300px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] flex gap-[10px] items-start">
                <div className="relative size-[36px] shrink-0">
                  <div className="absolute inset-0 bg-[#FBDDDF] rounded-full" />
                  <img src={imgSyllabusEaIcon} className="absolute top-[6px] left-[6px] size-[24px]" alt="Icon" />
                </div>
                <div className="flex flex-col gap-[4px] flex-1">
                  <div className="flex items-center gap-[8px]">
                    <p className="font-['Inter'] font-semibold text-[14px] text-[#2c313a]">Cashback English Academy s.d. 2juta</p>
                  </div>
                  <p className="font-['Inter'] font-normal text-[12px] text-[#5e677b]">Min. transaksi Rp.15.000.000</p>
                  <p className="font-['Inter'] font-normal text-[11px] text-black mt-[8px]">Berlaku hingga 31 Des 2026</p>
                </div>
                <div className="size-[24px] shrink-0">
                  <svg className="block size-full" viewBox="0 0 24 24" fill="none">
                    <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p1a9010f0 || "M8.8 17.7C8.4 17.3 8.4 16.7 8.8 16.3L13.1 12L8.8 7.7C8.4 7.3 8.4 6.7 8.8 6.3C9.2 5.9 9.8 5.9 10.2 6.3L15.2 11.3C15.4 11.5 15.5 11.8 15.5 12C15.5 12.3 15.4 12.5 15.2 12.7L10.2 17.7C9.8 18.1 9.2 18.1 8.8 17.7Z"} fill="#2C313A"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-[24px] px-[12px] pb-[40px] flex flex-col gap-[12px] w-full">
          <p className="font-['Inter'] font-bold text-[14px] text-[#2c313a]">Benefit Lainnya</p>
          <div className="flex flex-col gap-[12px]">
            <BenefitItem 
              title="Personalized Learning Pathways" 
              description="Get tailored study plans based on your strengths and weaknesses."
              icon={imgImage1013}
            />
            <BenefitItem 
              title="Discount on Premium Courses" 
              description="Enjoy special promotions on select courses for loyal users."
              icon={imgImage1013}
            />
            <BenefitItem 
              title="Early Enrollment for New Courses" 
              description="Be the first to register for new classes before they are available to the public."
              icon={imgImage1013}
            />
            <BenefitItem 
              title="Cashback s.d. 2juta" 
              description="Min. transaksi Rp.15.000.000"
              icon={imgImage1013}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

function BenefitItem({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="bg-white rounded-[12px] w-full flex items-center p-[12px] gap-[10px]">
      <div className="relative size-[82px] shrink-0 rounded-full overflow-hidden bg-gradient-to-b from-[#838a96] to-[#afb6c3] p-[10px]">
        {/* Masked Image simulation using rounded-full and object-cover */}
        <div className="relative size-full rounded-full overflow-hidden bg-white">
           <img src={icon} className="size-full object-cover" alt="Benefit" />
        </div>
      </div>
      <div className="flex flex-col gap-[4px] flex-1">
        <p className="font-['Inter'] font-semibold text-[14px] text-[#2c313a]">{title}</p>
        <p className="font-['Inter'] font-normal text-[12px] text-black leading-normal">{description}</p>
      </div>
      <div className="size-[24px] shrink-0">
        <svg className="block size-full" viewBox="0 0 24 24" fill="none">
          <path clipRule="evenodd" fillRule="evenodd" d={"M8.8 17.7C8.4 17.3 8.4 16.7 8.8 16.3L13.1 12L8.8 7.7C8.4 7.3 8.4 6.7 8.8 6.3C9.2 5.9 9.8 5.9 10.2 6.3L15.2 11.3C15.4 11.5 15.5 11.8 15.5 12C15.5 12.3 15.4 12.5 15.2 12.7L10.2 17.7C9.8 18.1 9.2 18.1 8.8 17.7Z"} fill="#2C313A"/>
        </svg>
      </div>
    </div>
  )
}
