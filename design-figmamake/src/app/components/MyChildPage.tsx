import svgPaths from "@/imports/svg-u99d48dp33";
import imgImage19 from "figma:asset/e7b24dc6e85fb42d79e6ace8ab9126f7d742557c.png";
import imgEllipse1645 from "figma:asset/125f00a1494ee1c2e57eea6334552294f0d2b3a9.png";
import imgImage20 from "figma:asset/a897f204df85b5389f32ff0bf8b0596f67a77d91.png";
import imgEllipse1644 from "figma:asset/3f47327c5727e53da2c0b9bde40029de7b2e7225.png";
import imgImage51 from "figma:asset/172d236ba917909eabfaee7b2e9ff9a679541889.png";

interface MyChildPageProps {
  onBack: () => void;
  onNavigateToAuth?: () => void;
  onNavigateToReward?: (childId: string) => void;
}

export default function MyChildPage({ onBack, onNavigateToAuth, onNavigateToReward }: MyChildPageProps) {
  return (
    <div className="bg-[#f7f9fd] flex flex-col min-h-full w-full relative">
      {/* Background Gradient */}
      <div 
        className="absolute h-[118px] left-0 rounded-bl-[28px] top-0 w-full pointer-events-none z-0" 
        style={{ backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.852deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)" }} 
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col w-full">
        {/* Top Spacer/StatusBar Area */}
        <div className="bg-[#1fb0c3] h-[24px] w-full shrink-0" />

        {/* Header */}
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
            My Child
          </p>
          {/* Spacer for centering */}
          <div className="w-[34.286px]" /> 
        </div>

        {/* Main Content Area */}
        <div className="bg-[#f7f9fd] flex flex-col gap-[12px] p-[12px] pb-[20px] rounded-[20px] w-full mt-[4px]">
          
          {/* Child Card 1: Liam */}
          <ChildCard 
            name="Liam A."
            description="Sekolah Dasar - Kelas 3"
            avatar={imgImage19}
            tier="silver"
            subscriptionCount={2}
            subscriptionDate="31 Juni 2026"
            onTierClick={() => onNavigateToReward?.('liam')}
          />

          {/* Child Card 2: Dora */}
          <ChildCard 
            name="Dora P."
            description="PAUD - 2 Tahun"
            avatar={imgImage20}
            tier="gold"
            subscriptionCount={1}
            subscriptionDate="31 Juni 2026"
            onTierClick={() => onNavigateToReward?.('dora')}
          />

          {/* Connect Account Button */}
          <div className="flex w-full mt-[4px]">
            <button 
              onClick={onNavigateToAuth}
              className="bg-white h-[28px] rounded-full flex items-center justify-center pl-[8px] pr-[12px] gap-[4px] border border-[#cfd3db]"
            >
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g clipPath="url(#clip0_connect)">
                    <path clipRule="evenodd" d={svgPaths.pdf12a00} fill="#2C313A" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_connect">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="font-['Inter'] font-bold text-[12px] leading-[18px] text-[#2c313a]">
                Connect Account
              </span>
            </button>
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

interface ChildCardProps {
  name: string;
  description: string;
  avatar: string;
  tier: "silver" | "gold";
  subscriptionCount: number;
  subscriptionDate: string;
  onTierClick?: () => void;
}

function ChildCard({ name, description, avatar, tier, subscriptionCount, subscriptionDate, onTierClick }: ChildCardProps) {
  return (
    <div className="bg-white rounded-[12px] w-full border border-[#cfd3db] overflow-hidden">
      <div className="p-[12px] flex flex-col gap-[10px]">
        {/* Header Row */}
        <div className="flex items-start justify-between">
          <div className="flex gap-[8px] items-center">
            <div className="relative shrink-0 size-[28px]">
              <img alt={name} className="absolute inset-0 size-full object-cover rounded-full" src={avatar} />
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Inter'] font-semibold text-[14px] leading-[18px] text-[#2c313a]">
                {name}
              </p>
              <p className="font-['Inter'] font-normal text-[12px] leading-normal text-black">
                {description}
              </p>
            </div>
          </div>
          
          {/* Tier Badge */}
          <button 
            onClick={onTierClick}
            className={`flex items-center gap-[8px] p-[4px] pr-[2px] rounded-[12px] cursor-pointer active:opacity-80 transition-opacity ${
              tier === 'silver' 
                ? 'bg-gradient-to-r from-[#8d94a2] to-[#cbd1de]' 
                : 'bg-gradient-to-r from-[#d38c2f] to-[#e4cb71]'
            }`}
          >
            <div className="relative shrink-0 size-[16px]">
              <img 
                alt={`${tier} tier`} 
                className="size-full" 
                src={tier === 'silver' ? imgEllipse1645 : imgEllipse1644} 
              />
            </div>
            <p className="font-['Inter'] font-bold text-[11px] leading-[16px] text-white">
              {tier === 'silver' ? 'Silver Tier' : 'Gold Tier'}
            </p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.p31d7e580} fill="white" fillRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>

        {/* Subscription Strip */}
        <div className="bg-[#edeff9] rounded-[8px] w-full px-[8px] py-[4px]">
          <div className="flex items-center justify-between gap-[10px]">
            <p className="font-['Inter'] font-normal text-[10px] leading-[16px] text-[#5e677b]">
              {subscriptionCount} paket langganan aktif sampai <span className="font-bold">{subscriptionDate}</span>
            </p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.p31d7e580} fill="#2C313A" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromoCard() {
  return (
    <div className="relative shrink-0 w-[254px] h-[112px] rounded-[12px] overflow-hidden">
      <img alt="Promo" className="absolute inset-0 size-full object-cover" src={imgImage51} />
      <button className="absolute bottom-[14px] right-[14px] bg-[#f26d0f] rounded-full h-[28px] px-[12px] flex items-center justify-center">
        <p className="font-['Inter'] font-bold text-[12px] leading-[18px] text-white">
          Langganan
        </p>
      </button>
    </div>
  );
}
