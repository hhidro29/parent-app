import svgPaths from "./svg-ip3w8je14p";
import imgSyllabusEaIcon from "figma:asset/b9ac2c82a4b66aa9052f6ea7aa4b5d9dcf714609.png";

function SyllabusEaIcon() {
  return (
    <div className="col-1 ml-[6px] mt-[6px] relative row-1 size-[24px]" data-name="SyllabusEAIcon">
      <div className="absolute inset-[0_-0.4%_0_0.92%]" data-name="SyllabusEAIcon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSyllabusEaIcon} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[36px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, white)" fillOpacity="0.4" id="Ellipse 1643" r="18" />
        </svg>
      </div>
      <SyllabusEaIcon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-start justify-center leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-white">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 w-[min-content]">English Academy - Dasher</p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 w-[min-content]">Balikpapan - Jendral Sudirman</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Group1 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[60px]">
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

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame1 />
      <Group />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] size-full" style={{ backgroundImage: "linear-gradient(169.875deg, rgb(43, 42, 114) 0%, rgb(255, 69, 70) 100%)" }}>
      <Frame3 />
    </div>
  );
}