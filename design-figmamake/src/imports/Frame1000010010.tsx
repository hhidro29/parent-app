import svgPaths from "./svg-w3yp4jo2ob";
import imgImage1008 from "figma:asset/fcf4d2b72c3eb5dc8b5ae0ac5095080b29f51ad2.png";
import imgImage19 from "figma:asset/e7b24dc6e85fb42d79e6ace8ab9126f7d742557c.png";
import imgImage20 from "figma:asset/a897f204df85b5389f32ff0bf8b0596f67a77d91.png";
import { imgRectangle34625034 } from "./svg-7qohs";

function Frame3() {
  return (
    <div className="absolute h-[100px] left-0 overflow-clip top-0 w-[360px]">
      <div className="absolute h-[117px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[360px_117px] rounded-bl-[28px] top-0 w-[360px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.996deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)", maskImage: `url('${imgRectangle34625034}')` }} />
      <div className="absolute h-[273px] left-[-25px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25px_4px] mask-size-[360px_117px] mix-blend-luminosity top-[-4px] w-[410px]" data-name="image 1008" style={{ maskImage: `url('${imgRectangle34625034}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgImage1008} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 1000009943">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 1641" r="12" />
          <g id="Plus">
            <path clipRule="evenodd" d={svgPaths.p3ec7c880} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-white">Child Learning</p>
          <Group />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <div className="pointer-events-none relative rounded-[51.22px] shrink-0 size-[24px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[51.22px] size-full" src={imgImage19} />
        <div aria-hidden="true" className="absolute border-[0.512px] border-solid border-white inset-0 rounded-[51.22px]" />
      </div>
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#2c313a] text-[14px]">Liam A.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <div className="pointer-events-none relative rounded-[30px] shrink-0 size-[24px]" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[30px] size-full" src={imgImage20} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[30px]" />
      </div>
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[14px] text-white">Dora D.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[10px] items-start pt-[12px] px-[12px] relative w-full">
        <Frame />
        <Frame1 />
      </div>
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame3 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}