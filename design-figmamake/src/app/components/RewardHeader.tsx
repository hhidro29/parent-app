import { motion, AnimatePresence } from "motion/react";
import svgPaths from "@/imports/svg-q2v92f3guv";

export interface RewardProfile {
  id: string;
  name: string;
  tier: string;
  tierIcon: string;
  avatar: string;
  currentPoints: number;
  targetPoints: number;
  nextTier: string;
  pointsNeeded: number;
  gradient: string;
  tierBadgeGradient: string;
  barColor: string;
  barTrackColor: string;
  cardBgColor: string;
  infoBgColor: string;
}

interface RewardHeaderProps {
  profiles: RewardProfile[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onBack: () => void;
}

export default function RewardHeader({ profiles, activeIndex, onIndexChange, onBack }: RewardHeaderProps) {
  const activeProfile = profiles[activeIndex];

  return (
    <>
      {/* Dynamic Background Header */}
      <motion.div 
        className="absolute h-[300px] left-0 rounded-bl-[28px] top-0 w-full pointer-events-none z-0"
        initial={false}
        animate={{ background: activeProfile.gradient }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 flex flex-col w-full">
        {/* Header Bar */}
        <div className="bg-transparent h-[24px] w-full shrink-0" />
        <div className="flex items-center p-[12px] w-full">
          <button 
            onClick={onBack} 
            className="bg-white flex items-center justify-center p-[4px] rounded-full shrink-0 w-[34.286px] shadow-[0px_0px_0px_1px_#cfd3db_inset]"
          >
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.p3169b700} fill="#2C313A" fillRule="evenodd" />
              </svg>
            </div>
          </button>
          <p className="flex-1 font-['Inter'] font-bold text-[16px] leading-[20px] text-center text-white">
            Ruangguru Reward
          </p>
          <div className="w-[34.286px]" />
        </div>

        {/* Carousel Area */}
        <div className="px-[12px] mt-[4px] w-full relative">
          <div className="relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className={`${activeProfile.cardBgColor} rounded-[12px] w-full overflow-hidden transition-colors duration-500`}>
                  {/* Top Part: User & Tier */}
                  <div className="p-[12px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                      <div className="relative size-[28px] shrink-0 rounded-full overflow-hidden">
                        <img src={activeProfile.avatar} className="size-full object-cover" alt="Avatar" />
                      </div>
                      <p className="font-['Inter'] font-semibold text-[14px] text-white">
                        {activeProfile.name}
                      </p>
                    </div>
                    
                    <div className={`flex items-center gap-[8px] px-[12px] py-[4px] rounded-[12px] bg-gradient-to-r ${activeProfile.tierBadgeGradient}`}>
                      <img src={activeProfile.tierIcon} className="size-[16px]" alt="Tier" />
                      <p className="font-['Inter'] font-bold text-[12px] text-white">
                        {activeProfile.tier}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Part: Points & Progress */}
                  <div className={`${activeProfile.infoBgColor} p-[12px] flex flex-col gap-[12px] transition-colors duration-500`}>
                    <div className="flex justify-between items-center text-white text-[12px]">
                      <span className="font-normal">{activeProfile.currentPoints.toLocaleString('id-ID')} Point</span>
                      <span className="font-bold">{activeProfile.targetPoints.toLocaleString('id-ID')} Point</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-[12px] rounded-[8px] overflow-hidden">
                      <div className={`absolute inset-0 ${activeProfile.barColor}`} />
                      <div 
                        className={`absolute left-0 top-0 h-full ${activeProfile.barTrackColor} rounded-[8px]`} 
                        style={{ width: `${(activeProfile.currentPoints / activeProfile.targetPoints) * 100}%` }}
                      />
                    </div>

                    <div className="flex items-center gap-[12px] w-full">
                      <div className="flex-1 text-[12px] text-white font-normal leading-normal">
                        <p>Butuh {activeProfile.pointsNeeded.toLocaleString('id-ID')} Point untuk</p>
                        <p>naik ke Tier {activeProfile.nextTier}</p>
                      </div>
                      <button className="bg-white flex items-center gap-[4px] pl-[12px] pr-[6px] py-[6px] rounded-[12px] shrink-0">
                        <span className="font-['Inter'] font-bold text-[12px] text-[#2c313a]">Cek Caranya</span>
                        <div className="size-[20px]">
                          <svg className="block size-full" viewBox="0 0 20 20" fill="none">
                            <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p19dc7f80 || "M7.33333 14.75C7 14.4167 7 13.9167 7.33333 13.5833L10.9167 10L7.33333 6.41667C7 6.08333 7 5.58333 7.33333 5.25C7.66667 4.91667 8.16667 4.91667 8.5 5.25L12.6667 9.41667C12.8333 9.58333 12.9167 9.83333 12.9167 10C12.9167 10.25 12.8333 10.4167 12.6667 10.5833L8.5 14.75C8.16667 15.0833 7.66667 15.0833 7.33333 14.75Z"} fill="#2C313A"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-[4px] justify-center w-full mt-[12px]">
            {profiles.map((_, index) => (
              <button 
                key={index} 
                onClick={() => onIndexChange(index)}
                className={`size-[8px] rounded-full transition-all ${activeIndex === index ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
            {/* Extra dots from Figma */}
            <div className="size-[8px] rounded-full bg-white/30" />
            <div className="size-[8px] rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </>
  );
}
