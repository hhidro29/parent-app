import svgPaths from "./svg-zxp5ultk2p";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[360px]">
      <div className="bg-[#1c5b91] h-[24px] shrink-0 w-full" />
    </div>
  );
}

function TextField() {
  return (
    <div className="bg-white h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#959dac] text-[14px] tracking-[0.021px]">
            <p className="css-4hzbpn leading-[22px]">Masukkan nomor HP atau email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Base">
      <TextField />
    </div>
  );
}

function StructureButtonLarge() {
  return (
    <div className="bg-[#f26d0f] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[136px]" data-name=".StructureButton/Large">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="css-ew64yg leading-[24px]">Lanjutkan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <StructureButtonLarge />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="title">
      <div className="bg-[#dfe3e7] flex-[1_0_0] h-px min-h-px min-w-px" />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#333842] text-[12px] text-center tracking-[0.018px]">Atau</p>
      <div className="bg-[#dfe3e7] flex-[1_0_0] h-px min-h-px min-w-px" />
    </div>
  );
}

function Manual() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="manual">
      <Base />
      <Button />
      <Title />
    </div>
  );
}

function LogoGoogle() {
  return (
    <div className="absolute inset-[8.33%]" data-name="logo_google">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="logo_google">
          <path clipRule="evenodd" d={svgPaths.p1ee32280} fill="var(--fill-0, #4285F4)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.pb771ef0} fill="var(--fill-0, #34A853)" fillRule="evenodd" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.pc0c3100} fill="var(--fill-0, #FBBC05)" fillRule="evenodd" id="Shape_3" />
          <path clipRule="evenodd" d={svgPaths.p200ab970} fill="var(--fill-0, #EA4335)" fillRule="evenodd" id="Shape_4" />
          <g id="Shape_5"></g>
        </g>
      </svg>
    </div>
  );
}

function Google() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Google">
      <LogoGoogle />
    </div>
  );
}

function StructureButtonLarge1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[136px]" data-name=".StructureButton/Large">
      <div aria-hidden="true" className="absolute border border-[#b0b8c7] border-solid inset-[-0.5px] pointer-events-none rounded-[136.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[12px] relative size-full">
          <Google />
          <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2c313a] text-[14px] text-center">
            <p className="css-ew64yg leading-[24px]">Lanjutkan dengan Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <StructureButtonLarge1 />
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Facebook">
          <path clipRule="evenodd" d={svgPaths.p3ee88200} fill="var(--fill-0, #3F5793)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StructureButtonLarge2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[136px]" data-name=".StructureButton/Large">
      <div aria-hidden="true" className="absolute border border-[#b0b8c7] border-solid inset-[-0.5px] pointer-events-none rounded-[136.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[12px] relative size-full">
          <Facebook />
          <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2c313a] text-[14px] text-center">
            <p className="css-ew64yg leading-[24px]">Lanjutkan dengan Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <StructureButtonLarge2 />
    </div>
  );
}

function SocialLogin() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Social login">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_16px_32px_0px_rgba(59,56,61,0.04)] shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative w-full">
          <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#333842] text-[16px] text-center w-full">Yuk, Hubungkan akun Ruangguru anak anda</p>
          <Manual />
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_16px_32px_0px_rgba(59,56,61,0.04)] shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center leading-[24px] not-italic p-[20px] relative text-[16px] text-center w-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#333842]">Belum Punya Akun?</p>
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#20a4b0]">Buatkan Akun</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16px] top-1/2 translate-y-[-50%] w-[328px]">
      <Content />
      <Content1 />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-[#f3fbfc] relative size-full" data-name="Login">
      <div className="absolute bg-[#1c5b91] h-[24px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-[#f3fbfc] h-[740px] left-0 top-0 w-[360px]" />
      <div className="absolute h-[740px] left-0 top-0 w-[360px]" style={{ backgroundImage: "linear-gradient(115.942deg, rgb(64, 190, 239) 0%, rgb(52, 206, 158) 100%)" }} />
      <div className="absolute flex h-[307.617px] items-center justify-center left-[-33.12px] top-[525.47px] w-[399.124px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[164.71deg]">
          <div className="h-[222.4px] relative w-[352.965px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352.965 222.4">
              <path d={svgPaths.p3939da80} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector 209" />
            </svg>
          </div>
        </div>
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
}