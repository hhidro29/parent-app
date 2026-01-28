import svgPaths from "./svg-q2v92f3guv";
import imgEllipse1645 from "figma:asset/125f00a1494ee1c2e57eea6334552294f0d2b3a9.png";
import imgImage19 from "figma:asset/e7b24dc6e85fb42d79e6ace8ab9126f7d742557c.png";
import imgSyllabusEaIcon from "figma:asset/b9ac2c82a4b66aa9052f6ea7aa4b5d9dcf714609.png";
import imgImage1013 from "figma:asset/b5b72591df3965bb7cfb42bb9fb98367498d873b.png";
import { imgImage1012 } from "./svg-2b9m4";

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowLeft">
          <path clipRule="evenodd" d={svgPaths.p3169b700} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SylIconButton() {
  return (
    <div className="bg-white content-stretch flex items-start p-[4px] relative rounded-[9999px] shrink-0 w-[34.286px]" data-name="SylIconButton@1.2">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
      <ArrowLeft />
    </div>
  );
}

function ArrowLeft1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowLeft">
          <path clipRule="evenodd" d={svgPaths.p3169b700} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SylIconButton1() {
  return (
    <div className="bg-white content-stretch flex items-start opacity-0 p-[4px] relative rounded-[9999px] shrink-0 w-[34.286px]" data-name="SylIconButton@1.2">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
      <ArrowLeft1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <SylIconButton />
          <p className="css-g0mm18 flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-center text-ellipsis text-white">Ruangguru Reward</p>
          <SylIconButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[360px]">
      <div className="bg-[#6e757f] h-[24px] shrink-0 w-full" />
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white">Liam A.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame13 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#8d94a2] gap-[8px] items-center px-[12px] py-[4px] relative rounded-[12px] shrink-0 to-[#cbd1de]">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse1645} width="16" />
      </div>
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[12px] text-white">Silver</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[28px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage19} />
      </div>
      <Frame7 />
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame28 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
        <Frame8 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[12px] text-white">12.000 Point</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white">1.000 Point</p>
      <Frame21 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-[#8d94a2] col-1 h-[12px] ml-0 mt-0 rounded-[8px] row-1 w-[312px]" />
      <div className="bg-white col-1 h-[12px] ml-0 mt-0 rounded-[8px] row-1 w-[26px]" />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChevronRight">
          <path clipRule="evenodd" d={svgPaths.p19dc7f80} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[6px] relative rounded-[12px] shrink-0">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#2c313a] text-[12px]">Cek Caranya</p>
      <ChevronRight />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[12px] text-white">
        <p className="css-4hzbpn mb-0">{`Butuh 11.000 Pint untuk `}</p>
        <p className="css-4hzbpn">naik ke Tier Gold</p>
      </div>
      <Frame38 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#778090] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <Frame23 />
        <Group1 />
        <Frame22 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#5f6775] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full">
      <Container />
      <Container1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1646" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" fillOpacity="0.3" id="Ellipse 1647" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" fillOpacity="0.3" id="Ellipse 1647" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" fillOpacity="0.3" id="Ellipse 1647" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 p-[12px] top-[80px] w-[360px]">
      <Frame31 />
      <Frame24 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#2c313a] text-[14px] w-[336px]">2 Voucher Promo Untukmu</p>
    </div>
  );
}

function SyllabusEaIcon() {
  return (
    <div className="col-1 ml-[6px] mt-[6px] relative row-1 size-[24px]" data-name="SyllabusEAIcon">
      <div className="absolute inset-[0_-0.4%_0_0.92%]" data-name="SyllabusEAIcon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSyllabusEaIcon} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[36px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, #FBDDDF)" id="Ellipse 1650" r="18" />
        </svg>
      </div>
      <SyllabusEaIcon />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[#2c313a] text-[14px]">Cashback English Academy s.d. 2juta</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame14 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5e677b] text-[12px]">Min. transaksi Rp.15.000.000</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame34 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[11px] text-black">Berlaku hingga 31 Des 2026</p>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChevronRight">
          <path clipRule="evenodd" d={svgPaths.p1a9010f0} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] shrink-0 w-[300px]">
      <Group3 />
      <Frame9 />
      <ChevronRight1 />
    </div>
  );
}

function SyllabusEaIcon1() {
  return (
    <div className="col-1 ml-[6px] mt-[6px] relative row-1 size-[24px]" data-name="SyllabusEAIcon">
      <div className="absolute inset-[0_-0.4%_0_0.92%]" data-name="SyllabusEAIcon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSyllabusEaIcon} />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[36px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, #FBDDDF)" id="Ellipse 1650" r="18" />
        </svg>
      </div>
      <SyllabusEaIcon1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[#2c313a] text-[14px]">Cashback English Academy s.d. 2juta</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame15 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">Min. transaksi Rp.15.000.000</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame40 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[11px] text-black">Berlaku hingga 31 Des 2026</p>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChevronRight">
          <path clipRule="evenodd" d={svgPaths.p1a9010f0} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] shrink-0 w-[300px]">
      <Group5 />
      <Frame11 />
      <ChevronRight2 />
    </div>
  );
}

function SyllabusEaIcon2() {
  return (
    <div className="col-1 ml-[6px] mt-[6px] relative row-1 size-[24px]" data-name="SyllabusEAIcon">
      <div className="absolute inset-[0_-0.4%_0_0.92%]" data-name="SyllabusEAIcon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSyllabusEaIcon} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[36px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, white)" fillOpacity="0.4" id="Ellipse 1643" r="18" />
        </svg>
      </div>
      <SyllabusEaIcon2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#2c313a] text-[14px]">Cashback s.d. 2juta</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame16 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">Min. transaksi Rp.15.000.000</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame41 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[11px] text-black">Berlaku hingga 31 Des 2026</p>
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChevronRight">
          <path clipRule="evenodd" d={svgPaths.p1a9010f0} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Group />
      <Frame12 />
      <ChevronRight3 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[12px] shrink-0 w-[300px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame39 />
      <Frame30 />
      <Frame29 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#2c313a] text-[14px] w-[336px]">Benefit Lainnya</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[10px] mt-[10px] relative row-1">
      <div className="col-1 h-[144.818px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[95.488px_34.056px] mask-size-[62px_62px] ml-[-95.49px] mt-[-34.06px] relative row-1 w-[217.226px]" data-name="image 1012" style={{ maskImage: `url('${imgImage1012}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1013} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-gradient-to-b col-1 from-[#838a96] ml-0 mt-0 row-1 size-[82px] to-[#afb6c3]" />
      <Group4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[#2c313a] text-[14px]">Personalized Learning Pathways</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame17 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black w-full">Get tailored study plans based on your strengths and weaknesses.</p>
    </div>
  );
}

function ChevronRight4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChevronRight">
          <path clipRule="evenodd" d={svgPaths.p1a9010f0} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Frame42 />
      <ChevronRight4 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Group2 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame43 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[10px] mt-[10px] relative row-1">
      <div className="col-1 h-[144.818px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[95.488px_34.056px] mask-size-[62px_62px] ml-[-95.49px] mt-[-34.06px] relative row-1 w-[217.226px]" data-name="image 1012" style={{ maskImage: `url('${imgImage1012}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1013} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-gradient-to-b col-1 from-[#838a96] ml-0 mt-0 row-1 size-[82px] to-[#afb6c3]" />
      <Group6 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[#2c313a] text-[14px]">Discount on Premium Courses</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame18 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black w-full">Enjoy special promotions on select courses for loyal users.</p>
    </div>
  );
}

function ChevronRight5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChevronRight">
          <path clipRule="evenodd" d={svgPaths.p1a9010f0} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Frame44 />
      <ChevronRight5 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Group7 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame45 />
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[10px] mt-[10px] relative row-1">
      <div className="col-1 h-[144.818px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[95.488px_34.056px] mask-size-[62px_62px] ml-[-95.49px] mt-[-34.06px] relative row-1 w-[217.226px]" data-name="image 1012" style={{ maskImage: `url('${imgImage1012}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1013} />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-gradient-to-b col-1 from-[#838a96] ml-0 mt-0 row-1 size-[82px] to-[#afb6c3]" />
      <Group8 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#2c313a] text-[14px]">Early Enrollment for New Courses</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame19 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">Be the first to register for new classes before they are available to the public.</p>
    </div>
  );
}

function ChevronRight6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChevronRight">
          <path clipRule="evenodd" d={svgPaths.p1a9010f0} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Frame47 />
      <ChevronRight6 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Group9 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame48 />
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-gradient-to-b col-1 from-[#838a96] ml-0 mt-0 row-1 size-[82px] to-[#afb6c3]" />
      <div className="bg-[#6b6b6b] col-1 ml-[20px] mt-[20px] row-1 size-[42px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#2c313a] text-[14px]">Cashback s.d. 2juta</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame20 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">Min. transaksi Rp.15.000.000</p>
    </div>
  );
}

function ChevronRight7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChevronRight">
          <path clipRule="evenodd" d={svgPaths.p1a9010f0} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Frame50 />
      <ChevronRight7 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Group10 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame51 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[12px] top-[319px] w-[336px]">
      <Frame36 />
      <Frame33 />
      <Frame32 />
      <Frame37 />
      <Frame46 />
      <Frame49 />
      <Frame35 />
    </div>
  );
}

export default function MyChild() {
  return (
    <div className="bg-[#f7f9fd] relative size-full" data-name="My Child">
      <div className="absolute h-[300px] left-0 rounded-bl-[28px] top-0 w-[360px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(140.194deg, rgb(184, 188, 195) 0%, rgb(126, 129, 134) 100%)" }} />
      <Frame5 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}