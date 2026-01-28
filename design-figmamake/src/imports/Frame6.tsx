import svgPaths from "./svg-zcd6iiwxok";
import imgImage1004 from "figma:asset/415f677a90a5f54b593cf99a88dafc4e6f393225.png";
import { imgSylButton22 } from "./svg-g2lqn";

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black">Spesial Buat Kamu</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame3 />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close">
          <path clipRule="evenodd" d={svgPaths.p31ba8100} fill="var(--fill-0, #959DAC)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[28px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="var(--fill-0, #E9CBF7)" id="Ellipse 886" r="14" />
        </svg>
      </div>
      <Frame1 />
      <Close />
    </div>
  );
}

function Group() {
  return <div className="absolute contents left-0 top-0" />;
}

function SylButton() {
  return (
    <div className="absolute bg-[#f26d0f] content-stretch flex h-[26px] items-center justify-center left-[14.86px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-14.857px_-77.071px] mask-size-[314.786px_139.286px] px-[11.143px] rounded-[9284.785px] top-[77.07px]" data-name="SylButton@2.2" style={{ maskImage: `url('${imgSylButton22}')` }}>
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16.714px] not-italic relative shrink-0 text-[11.143px] text-center text-white">Lihat Lokasi</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[14.86px] top-[19.5px]">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[14.86px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-14.857px_-19.5px] mask-size-[314.786px_139.286px] not-italic text-[#2c313a] text-[13px] top-[30px] translate-y-[-50%] w-[171.786px]" style={{ maskImage: `url('${imgSylButton22}')` }}>
        <p className="css-4hzbpn leading-[20.429px]">Champions Wonderlab</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[14.86px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-14.857px_-41.786px] mask-size-[314.786px_139.286px] not-italic text-[#2c313a] text-[9.286px] top-[56.79px] translate-y-[-50%] w-[223.786px]" style={{ maskImage: `url('${imgSylButton22}')` }}>
        <p className="css-4hzbpn leading-[14.857px]">Program Belajar dan Stimulasi Anak Usia Dini Terinspirasi dari Kurikulum Singapura</p>
      </div>
      <SylButton />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[123.5px] overflow-clip relative shrink-0 w-full">
      <div className="absolute bg-[#b8eff3] h-[144.857px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_2.786px] mask-size-[314.786px_139.286px] top-[-2.79px] w-[312px]" style={{ maskImage: `url('${imgSylButton22}')` }} />
      <div className="absolute h-[123.5px] left-[171.17px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-171.167px_0px] mask-size-[314.786px_139.286px] top-0 w-[178.65px]" data-name="image 1004" style={{ maskImage: `url('${imgSylButton22}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1004} />
      </div>
      <Group />
      <Group1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[5px] relative shrink-0 w-[23px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 5">
        <g id="Frame 1000009940">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #20A4B0)" id="Ellipse 1638" r="2.5" />
          <circle cx="11.5" cy="2.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 1639" r="2.5" />
          <circle cx="20.5" cy="2.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 1640" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#20a4b0] text-[12px] text-center">Lihat Semua</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[12px] size-full">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame2 />
      <Frame6 />
      <Frame5 />
    </div>
  );
}