import svgPaths from "@/imports/svg-3rokt3npux";
import imgImage1008 from "figma:asset/fcf4d2b72c3eb5dc8b5ae0ac5095080b29f51ad2.png";
import imgPromoBackground from "figma:asset/d46f3fc7c46d82d3ccfd30de37a0fe1267ea6393.png";
import imgImage19 from "figma:asset/e7b24dc6e85fb42d79e6ace8ab9126f7d742557c.png";
import imgRectangle from "figma:asset/cf64a1804726e5f88ac86ab13f65cb2fc97b847c.png";
import imgImage20 from "figma:asset/a897f204df85b5389f32ff0bf8b0596f67a77d91.png";
import { imgSylButton22 } from "@/imports/svg-2c64q";

interface HomePageProps {
  onNavigateToPayment?: () => void;
  onNavigateToMyChild?: () => void;
}

function HeaderBackground() {
  return (
    <div className="absolute h-[130px] left-0 overflow-clip top-0 w-full">
      <div className="absolute h-[130px] left-0 rounded-bl-[28px] top-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(160.145deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)" }} />
      <div className="absolute h-[273px] left-[-25px] mix-blend-luminosity top-[-4px] w-[calc(100%+50px)]" data-name="image 1008">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgImage1008} />
      </div>
    </div>
  );
}

function CurrencyDollar() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="CurrencyDollar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="CurrencyDollar">
          <path d={svgPaths.p2b4e2300} fill="#F7BA58" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function PaymentCard({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <CurrencyDollar />
          <p className="font-['Inter'] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2c313a] text-[12px] text-center">Payment</p>
        </div>
      </div>
    </button>
  );
}

function Kid() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Kid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Kid">
          <path clipRule="evenodd" d={svgPaths.pfcc9a00} fill="#477AD7" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MyChildCard({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Kid />
          <p className="font-['Inter'] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#2c313a] text-[12px] text-center w-[min-content]">My Child</p>
        </div>
      </div>
    </button>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Image">
          <g id="Vector">
            <path d={svgPaths.p2ca0da00} fill="#6B46A5" />
            <path clipRule="evenodd" d={svgPaths.p32d06700} fill="#6B46A5" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GalleryCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Image />
          <p className="font-['Inter'] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#2c313a] text-[12px] text-center w-[min-content]">Galery</p>
        </div>
      </div>
    </div>
  );
}

function QuickActions({ onNavigateToPayment, onNavigateToMyChild }: { onNavigateToPayment?: () => void; onNavigateToMyChild?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <PaymentCard onClick={onNavigateToPayment} />
      <MyChildCard onClick={onNavigateToMyChild} />
      <GalleryCard />
    </div>
  );
}

function HeaderSection({ onNavigateToPayment, onNavigateToMyChild }: { onNavigateToPayment?: () => void; onNavigateToMyChild?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative w-full">
      <HeaderBackground />
      <p className="font-['Inter'] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white z-10">Good Morning</p>
      <QuickActions onNavigateToPayment={onNavigateToPayment} onNavigateToMyChild={onNavigateToMyChild} />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative">
        <p className="font-['Inter'] font-bold leading-[24px] relative shrink-0 text-[#2c313a] text-[16px]">Story</p>
        <p className="font-['Inter'] font-normal leading-[18px] relative shrink-0 text-[#5e677b] text-[12px]">All Children</p>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Filter">
          <path clipRule="evenodd" d="M3.42684 7.58377L5.23267 7.58375C5.64963 9.40899 7.24185 10.7678 9.14239 10.7678C11.043 10.7678 12.6352 9.40895 13.0521 7.58368L20.5732 7.58362C21.0851 7.58361 21.5 7.1565 21.5 6.62964C21.5 6.10277 21.085 5.67567 20.5732 5.67567L13.0502 5.67574C12.6303 3.85467 11.0401 2.5 9.14239 2.5C7.2447 2.5 5.65441 3.8547 5.23455 5.6758L3.42682 5.67582C2.91495 5.67582 2.5 6.10294 2.5 6.6298C2.5 7.15666 2.91496 7.58377 3.42684 7.58377ZM3.42683 18.3202H11.4125C11.831 20.1433 13.4222 21.4999 15.3212 21.4999C17.2203 21.4999 18.8115 20.1433 19.23 18.3202H20.5732C21.085 18.3202 21.5 17.8931 21.5 17.3663C21.5 16.8394 21.085 16.4123 20.5732 16.4123H19.2301C18.8117 14.589 17.2204 13.2322 15.3212 13.2322C13.4221 13.2322 11.8308 14.589 11.4124 16.4123H3.42683C2.91496 16.4123 2.5 16.8394 2.5 17.3663C2.5 17.8931 2.91496 18.3202 3.42683 18.3202Z" fill="#2C313A" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame27 />
      <Filter />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter'] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black">Spesial Buat Kamu</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame28 />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close">
          <path clipRule="evenodd" d="M15.5544 5.79248C15.9263 5.42055 15.9263 4.81754 15.5544 4.44561C15.1825 4.07368 14.5794 4.07368 14.2075 4.44561L10 8.65313L5.79248 4.44561C5.42055 4.07368 4.81754 4.07368 4.44561 4.44561C4.07368 4.81754 4.07368 5.42055 4.44561 5.79248L8.65313 10L4.44561 14.2075C4.07368 14.5794 4.07368 15.1825 4.44561 15.5544C4.81754 15.9263 5.42055 15.9263 5.79248 15.5544L10 11.3469L14.2075 15.5544C14.5794 15.9263 15.1825 15.9263 15.5544 15.5544C15.9263 15.1825 15.9263 14.5794 15.5544 14.2075L11.3469 10L15.5544 5.79248Z" fill="#959DAC" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[28px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="#E9CBF7" id="Ellipse 886" r="14" />
        </svg>
      </div>
      <Frame17 />
      <Close />
    </div>
  );
}

function Group() {
  return <div className="absolute contents left-0 top-0" />;
}

function SylButton() {
  return (
    <div className="absolute bg-[#f26d0f] content-stretch flex h-[26px] items-center justify-center left-[14.86px] px-[11.143px] rounded-[9284.785px] top-[77.07px]" data-name="SylButton@2.2">
      <p className="font-['Inter'] font-bold leading-[16.714px] not-italic relative shrink-0 text-[11.143px] text-center text-white">Lihat Lokasi</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute left-[14.86px] top-[19.5px]">
      <div className="absolute flex flex-col font-['Inter'] font-bold justify-center leading-[20.429px] left-[14.86px] not-italic text-[#2c313a] text-[13px] top-[30px] translate-y-[-50%] w-[171.786px]">
        <p>Champions Wonderlab</p>
      </div>
      <div className="absolute flex flex-col font-['Inter'] font-normal justify-center leading-[14.857px] left-[14.86px] not-italic text-[#2c313a] text-[9.286px] top-[56.79px] translate-y-[-50%] w-[223.786px]">
        <p>Program Belajar dan Stimulasi Anak Usia Dini Terinspirasi dari Kurikulum Singapura</p>
      </div>
      <SylButton />
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-[110px] overflow-hidden relative rounded-[12px] shrink-0 w-full">
      {/* Background Image - locked left and right, cropped vertically */}
      <div className="absolute inset-0">
        <img 
          alt="Champions Wonderlab Promo" 
          className="h-full object-cover object-center w-full" 
          src={imgPromoBackground} 
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b8eff3]/85 to-transparent" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-[12px]">
        <div className="flex flex-col gap-[2px] max-w-[55%]">
          <p className="font-['Inter'] font-bold leading-[18px] text-[#2c313a] text-[12px]">
            Champions Wonderlab
          </p>
          <p className="font-['Inter'] font-normal leading-[13px] text-[#2c313a] text-[9px]">
            Program Belajar dan Stimulasi Anak Usia Dini Terinspirasi dari Kurikulum Singapura
          </p>
        </div>
        <div>
          <button className="bg-[#f26d0f] font-['Inter'] font-bold leading-[14px] px-[10px] py-[4px] rounded-full text-[10px] text-white hover:bg-[#d96010] transition-colors">
            Lihat Lokasi
          </button>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[5px] relative shrink-0 w-[23px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 5">
        <g id="Frame 1000009940">
          <circle cx="2.5" cy="2.5" fill="#20A4B0" id="Ellipse 1638" r="2.5" />
          <circle cx="11.5" cy="2.5" fill="#D9D9D9" id="Ellipse 1639" r="2.5" />
          <circle cx="20.5" cy="2.5" fill="#D9D9D9" id="Ellipse 1640" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame37 />
      <p className="font-['Inter'] font-semibold leading-[16px] not-italic relative shrink-0 text-[#20a4b0] text-[12px] text-center">Lihat Semua</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <Frame24 />
        <Frame40 />
        <Frame38 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter'] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black">Class Report · Champions Wonderlab</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">4 hours ago</p>
      <Frame29 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[28px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage19} />
      </div>
      <Frame13 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="h-[120px] relative shrink-0 w-[312px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[261.33%] left-0 max-w-none top-[-88.44%] w-full" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Inter'] font-bold leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-[312px]">Discovering Me - This Is Me!</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame34 />
      <p className="font-['Inter'] font-normal leading-[18px] not-italic relative shrink-0 text-[#2c313a] text-[12px] w-[312px]">{`We hope you're having a great day! Here is Little Wonder's update from the classroom:`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <Frame23 />
        <Frame32 />
        <Frame39 />
        <p className="font-['Inter'] font-bold leading-[22px] min-w-full not-italic relative shrink-0 text-[#20a4b0] text-[14px] text-right w-[min-content]">See Session Report</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter'] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black">Announcement</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">4 hours ago</p>
      <Frame30 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[28px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="#E9CBF7" id="Ellipse 886" r="14" />
        </svg>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <Frame25 />
        <p className="font-['Inter'] font-normal leading-[22px] not-italic relative shrink-0 text-[#2c313a] text-[14px] w-full">{`Don't forget your water bottles!`}</p>
        <p className="font-['Inter'] font-bold leading-[22px] not-italic relative shrink-0 text-[#20a4b0] text-[14px] text-right w-full">See Detail</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex font-['Inter'] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 text-[12px] w-full">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Dora A · English Academy</p>
      <p className="relative shrink-0">{` 4 hours ago`}</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-black">
      <Frame31 />
      <p className="font-['Inter'] font-bold leading-[22px] relative shrink-0 text-[14px] w-[312px]">Dora's Session Report</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[28px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage20} />
      </div>
      <Frame19 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Inter'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#2c313a] text-[14px] w-[min-content]">Discovering Me - This Is Me!</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <Frame26 />
        <div className="bg-[#d9d9d9] h-px shrink-0 w-full" />
        <Frame33 />
        <p className="font-['Inter'] font-bold leading-[22px] min-w-full not-italic relative shrink-0 text-[#20a4b0] text-[14px] text-right w-[min-content]">See Detail</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame4 />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f7f9fd] relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-[16px] relative w-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

export default function HomePage({ onNavigateToPayment, onNavigateToMyChild }: HomePageProps) {
  return (
    <div className="content-stretch flex flex-col items-start w-full">
      <div className="bg-[#1fb0c3] h-[24px] shrink-0 w-full" />
      <HeaderSection onNavigateToPayment={onNavigateToPayment} onNavigateToMyChild={onNavigateToMyChild} />
      <Frame11 />
    </div>
  );
}