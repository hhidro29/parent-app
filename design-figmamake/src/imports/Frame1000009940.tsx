import svgPaths from "./svg-3rokt3npux";
import imgImage1008 from "figma:asset/fcf4d2b72c3eb5dc8b5ae0ac5095080b29f51ad2.png";

function Frame4() {
  return (
    <div className="absolute h-[130px] left-0 overflow-clip top-0 w-[360px]">
      <div className="absolute h-[130px] left-0 rounded-bl-[28px] top-0 w-[360px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(160.145deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)" }} />
      <div className="absolute h-[273px] left-[-25px] mix-blend-luminosity top-[-4px] w-[410px]" data-name="image 1008">
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
          <path d={svgPaths.p2b4e2300} fill="var(--fill-0, #F7BA58)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <CurrencyDollar />
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2c313a] text-[12px] text-center">Payment</p>
        </div>
      </div>
    </div>
  );
}

function Kid() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Kid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Kid">
          <path clipRule="evenodd" d={svgPaths.pfcc9a00} fill="var(--fill-0, #477AD7)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Kid />
          <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#2c313a] text-[12px] text-center w-[min-content]">My Child</p>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Image">
          <g id="Vector">
            <path d={svgPaths.p2ca0da00} fill="var(--fill-0, #6B46A5)" />
            <path clipRule="evenodd" d={svgPaths.p32d06700} fill="var(--fill-0, #6B46A5)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Image />
          <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#2c313a] text-[12px] text-center w-[min-content]">Galery</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[336px]">
      <Frame />
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative size-full">
      <Frame4 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Good Morning</p>
      <Frame5 />
    </div>
  );
}