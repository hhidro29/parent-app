import { useState } from "react";
import svgPaths from "@/imports/svg-zxp5ultk2p";
import svgPathsRegister from "@/imports/svg-mafz80nzyp";

interface AuthPageProps {
  onBack: () => void;
}

export default function AuthPage({ onBack }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-[#f3fbfc] flex flex-col min-h-full w-full relative">
      {/* Background gradient */}
      <div className="absolute h-full left-0 top-0 w-full" style={{ backgroundImage: "linear-gradient(115.942deg, rgb(64, 190, 239) 0%, rgb(52, 206, 158) 100%)" }} />
      
      {/* Decorative wave */}
      <div className="absolute flex h-[307.617px] items-center justify-center left-[-33.12px] top-[525.47px] w-[399.124px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[164.71deg]">
          <div className="h-[222.4px] relative w-[352.965px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352.965 222.4">
              <path d={svgPaths.p3939da80} fill="white" fillOpacity="0.2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Teal bar */}
      <div className="bg-[#1c5b91] h-[24px] w-full relative z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[12px] items-start px-[16px] pt-[100px] w-full">
        {isLogin ? (
          <LoginContent onSwitchToRegister={() => setIsLogin(false)} />
        ) : (
          <RegisterContent onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>

      {/* Back button */}
      <button 
        onClick={onBack}
        className="absolute top-[32px] left-[16px] z-20 bg-white/20 backdrop-blur-sm flex items-center justify-center p-[8px] rounded-full"
      >
        <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
          <path clipRule="evenodd" d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L8.41421 10L12.7071 14.2929C13.0976 14.6834 13.0976 15.3166 12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z" fill="white" fillRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

interface LoginContentProps {
  onSwitchToRegister: () => void;
}

function LoginContent({ onSwitchToRegister }: LoginContentProps) {
  return (
    <>
      {/* Main Login Card */}
      <div className="bg-white rounded-[16px] shadow-[0px_16px_32px_0px_rgba(59,56,61,0.04)] w-full">
        <div className="flex flex-col gap-[12px] items-center p-[20px]">
          <p className="font-['Inter'] font-bold leading-[24px] text-[#333842] text-[16px] text-center w-full">
            Yuk, Hubungkan akun Ruangguru anak anda
          </p>

          {/* Manual Login */}
          <div className="flex flex-col gap-[12px] w-full">
            {/* Email/Phone Input */}
            <div className="bg-white h-[46px] relative rounded-[12px] w-full border border-[#cfd3db]">
              <input
                type="text"
                placeholder="Masukkan nomor HP atau email"
                className="w-full h-full px-[12px] rounded-[12px] font-['Inter'] text-[14px] text-[#2c313a] outline-none"
              />
            </div>

            {/* Continue Button */}
            <button className="bg-[#f26d0f] h-[44px] rounded-full w-full">
              <p className="font-['Inter'] font-bold leading-[24px] text-[14px] text-center text-white">
                Lanjutkan
              </p>
            </button>

            {/* Divider */}
            <div className="flex gap-[4px] items-center w-full">
              <div className="bg-[#dfe3e7] flex-1 h-px" />
              <p className="font-['Inter'] font-normal leading-[20px] text-[#333842] text-[12px]">
                Atau
              </p>
              <div className="bg-[#dfe3e7] flex-1 h-px" />
            </div>
          </div>

          {/* Social Login */}
          <div className="flex flex-col gap-[8px] w-full">
            {/* Google Button */}
            <button className="bg-white h-[44px] rounded-full border border-[#b0b8c7] w-full">
              <div className="flex gap-[8px] items-center justify-center h-full">
                <GoogleIcon />
                <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[14px]">
                  Lanjutkan dengan Google
                </p>
              </div>
            </button>

            {/* Facebook Button */}
            <button className="bg-white h-[44px] rounded-full border border-[#b0b8c7] w-full">
              <div className="flex gap-[8px] items-center justify-center h-full">
                <FacebookIcon />
                <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[14px]">
                  Lanjutkan dengan Facebook
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Switch to Register Card */}
      <div className="bg-white rounded-[16px] shadow-[0px_16px_32px_0px_rgba(59,56,61,0.04)] w-full">
        <div className="flex gap-[12px] items-center justify-center p-[20px]">
          <p className="font-['Inter'] font-normal leading-[24px] text-[#333842] text-[16px]">
            Belum Punya Akun?
          </p>
          <button onClick={onSwitchToRegister}>
            <p className="font-['Inter'] font-bold leading-[24px] text-[#20a4b0] text-[16px]">
              Buatkan Akun
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

interface RegisterContentProps {
  onSwitchToLogin: () => void;
}

function RegisterContent({ onSwitchToLogin }: RegisterContentProps) {
  return (
    <>
      {/* Main Register Card */}
      <div className="bg-white rounded-[16px] shadow-[0px_16px_32px_0px_rgba(59,56,61,0.04)] w-full">
        <div className="flex flex-col gap-[12px] items-center p-[20px]">
          <div className="font-['Inter'] font-bold leading-[24px] text-[#333842] text-[16px] text-center w-full">
            <p className="mb-0">Buatkan akun Ruangguru</p>
            <p>untuk anak anda</p>
          </div>

          {/* Manual Register */}
          <div className="flex flex-col gap-[12px] w-full">
            {/* Email Input */}
            <div className="bg-white h-[44px] relative rounded-[12px] w-full border border-[#dadfea]">
              <div className="flex gap-[8px] items-center h-full px-[12px]">
                <EmailIcon />
                <input
                  type="email"
                  placeholder="Masukkan nomor email"
                  className="flex-1 h-full font-['Inter'] text-[14px] text-[#2c313a] outline-none"
                />
              </div>
            </div>

            {/* WhatsApp Input */}
            <div className="bg-white h-[44px] relative rounded-[12px] w-full border border-[#dadfea]">
              <div className="flex gap-[8px] items-center h-full px-[12px]">
                <PhoneIcon />
                <input
                  type="tel"
                  placeholder="Masukkan nomor Whatsapp"
                  className="flex-1 h-full font-['Inter'] text-[14px] text-[#2c313a] outline-none"
                />
              </div>
            </div>

            {/* Child Name Input */}
            <div className="bg-white h-[44px] relative rounded-[12px] w-full border border-[#dadfea]">
              <div className="flex gap-[8px] items-center h-full px-[12px]">
                <UserIcon />
                <input
                  type="text"
                  placeholder="Nama Anak"
                  className="flex-1 h-full font-['Inter'] text-[14px] text-[#2c313a] outline-none"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="bg-white h-[44px] relative rounded-[12px] w-full border border-[#dadfea]">
              <div className="flex gap-[8px] items-center h-full px-[12px]">
                <KeyIcon />
                <input
                  type="password"
                  placeholder="Password"
                  className="flex-1 h-full font-['Inter'] text-[14px] text-[#2c313a] outline-none"
                />
                <EyeIcon />
              </div>
            </div>

            {/* Register Button */}
            <button className="bg-[#f26d0f] h-[44px] rounded-full w-full">
              <p className="font-['Inter'] font-bold leading-[24px] text-[14px] text-center text-white">
                Daftar
              </p>
            </button>

            {/* Divider */}
            <div className="flex gap-[4px] items-center w-full">
              <div className="bg-[#dfe3e7] flex-1 h-px" />
              <p className="font-['Inter'] font-normal leading-[20px] text-[#333842] text-[12px]">
                Atau
              </p>
              <div className="bg-[#dfe3e7] flex-1 h-px" />
            </div>
          </div>

          {/* Social Login */}
          <div className="flex flex-col gap-[8px] w-full">
            {/* Google Button */}
            <button className="bg-white h-[44px] rounded-full border border-[#b0b8c7] w-full">
              <div className="flex gap-[8px] items-center justify-center h-full">
                <GoogleIcon />
                <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[14px]">
                  Lanjutkan dengan Google
                </p>
              </div>
            </button>

            {/* Facebook Button */}
            <button className="bg-white h-[44px] rounded-full border border-[#b0b8c7] w-full">
              <div className="flex gap-[8px] items-center justify-center h-full">
                <FacebookIcon />
                <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[14px]">
                  Lanjutkan dengan Facebook
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Switch to Login Card */}
      <div className="bg-white rounded-[16px] shadow-[0px_16px_32px_0px_rgba(59,56,61,0.04)] w-full">
        <div className="flex gap-[12px] items-center justify-center p-[20px]">
          <p className="font-['Inter'] font-normal leading-[24px] text-[#333842] text-[16px]">
            Sudah Punya Akun?
          </p>
          <button onClick={onSwitchToLogin}>
            <p className="font-['Inter'] font-bold leading-[24px] text-[#20a4b0] text-[16px]">
              Masuk
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

// Icon Components
function GoogleIcon() {
  return (
    <div className="relative size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p1ee32280} fill="#4285F4" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pb771ef0} fill="#34A853" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pc0c3100} fill="#FBBC05" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p200ab970} fill="#EA4335" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function FacebookIcon() {
  return (
    <div className="relative size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p3ee88200} fill="#3F5793" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPathsRegister.p3f6f8300} fill="#2C313A" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPathsRegister.p25efa600} fill="#2C313A" />
      </svg>
    </div>
  );
}

function UserIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPathsRegister.p7b4ad00} fill="#2C313A" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function KeyIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPathsRegister.p3df89300} fill="#2C313A" />
      </svg>
    </div>
  );
}

function EyeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPathsRegister.p4f09700} fill="#5E677B" fillRule="evenodd" />
      </svg>
    </div>
  );
}
