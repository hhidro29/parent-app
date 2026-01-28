import svgPaths from "./svg-uhonltkptg";
import imgImage19 from "figma:asset/e7b24dc6e85fb42d79e6ace8ab9126f7d742557c.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="pointer-events-none relative rounded-[51.22px] shrink-0 size-[24px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[51.22px] size-full" src={imgImage19} />
        <div aria-hidden="true" className="absolute border-[0.512px] border-solid border-white inset-0 rounded-[51.22px]" />
      </div>
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Liam A.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pt-[12px] px-[12px] relative shrink-0 w-[336px]">
      <Frame6 />
      <div className="bg-gradient-to-r from-[#fd4647] h-px rounded-[20px] shrink-0 to-[70%] to-[rgba(41,37,121,0)] w-full" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start justify-center leading-[18px] not-italic relative shrink-0 text-[12px] text-white w-full">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 w-[min-content]">English Academy - Dasher</p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 w-[min-content]">Balikpapan - Jendral Sudirman</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[276px] size-[60px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Group 771269">
          <path d={svgPaths.p10c92680} fill="var(--fill-0, #0C0C0C)" fillOpacity="0.5" id="Rectangle 10967" />
          <g id="Group 1723">
            <circle cx="30" cy="30" fill="var(--fill-0, #F2F5FA)" id="Ellipse 159" r="10" />
            <g id="ChevronDown">
              <path clipRule="evenodd" d={svgPaths.p1ac75900} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative shrink-0 w-[336px]">
      <Frame1 />
      <Group />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[336px]" style={{ backgroundImage: "linear-gradient(162.646deg, rgb(43, 42, 114) 0%, rgb(255, 69, 70) 100%)" }}>
      <Frame8 />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pt-[4px] relative shrink-0">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#2c313a] text-[16px]">Class</p>
      <div className="bg-[#dcbc63] h-[2px] shrink-0 w-[40px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pt-[4px] relative shrink-0">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic opacity-60 relative shrink-0 text-[#2c313a] text-[16px]">Report</p>
      <div className="h-[2px] shrink-0 w-[40px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[12px] relative size-full">
      <div className="absolute bg-[#27214e] h-[81px] left-0 top-0 w-[360px]" />
      <Frame7 />
      <Frame5 />
    </div>
  );
}