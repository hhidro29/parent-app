"use client";

import { useRouter } from "next/navigation";

const svgPaths = {
    back: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
};

export default function AuthPage() {
    const router = useRouter();

    return (
        <div className="bg-[#f3fbfc] flex flex-col min-h-full w-full">
            <div className="bg-[#1fb0c3] h-[24px] w-full" />

            {/* Header */}
            <div className="flex items-center p-[12px] w-full">
                <button
                    onClick={() => router.back()}
                    className="bg-white flex items-center justify-center p-[4px] rounded-full shrink-0 w-[34px] shadow-[0px_0px_0px_1px_#cfd3db_inset]"
                >
                    <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                        <path d={svgPaths.back} fill="#2C313A" />
                    </svg>
                </button>
                <p className="flex-1 font-['Inter'] font-bold text-[16px] leading-[20px] text-center text-[#2c313a]">
                    Hubungkan Akun Anak
                </p>
                <div className="w-[34px]" />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-[24px] p-[24px]">
                {/* Illustration */}
                <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#7BD7FB]/20 to-[#34CE9E]/20 flex items-center justify-center">
                    <span className="text-[80px]">👨‍👩‍👧</span>
                </div>

                <div className="flex flex-col gap-[8px] text-center">
                    <h2 className="font-['Inter'] font-bold text-[20px] text-[#2c313a]">
                        Hubungkan Akun Anak
                    </h2>
                    <p className="font-['Inter'] font-normal text-[14px] text-[#5e677b] leading-[22px]">
                        Masukkan ID atau email yang terdaftar di akun anak Anda untuk melihat progres belajar mereka
                    </p>
                </div>

                {/* Form */}
                <div className="flex flex-col gap-[16px] w-full max-w-[350px]">
                    <div className="flex flex-col gap-[8px]">
                        <label className="font-['Inter'] font-semibold text-[14px] text-[#2c313a]">
                            ID Anak atau Email
                        </label>
                        <input
                            type="text"
                            placeholder="Masukkan ID atau email"
                            className="w-full h-[48px] px-[16px] rounded-[12px] border border-[#cfd3db] bg-white font-['Inter'] text-[14px] placeholder:text-[#959dac] focus:outline-none focus:border-[#20a4b0]"
                        />
                    </div>

                    <button className="w-full h-[48px] bg-[#f26d0f] rounded-full flex items-center justify-center">
                        <span className="font-['Inter'] font-bold text-[14px] text-white">
                            Hubungkan Akun
                        </span>
                    </button>
                </div>

                {/* Scan QR Option */}
                <div className="flex items-center gap-[12px]">
                    <div className="h-px bg-[#cfd3db] flex-1 w-[60px]" />
                    <span className="font-['Inter'] font-normal text-[12px] text-[#5e677b]">atau</span>
                    <div className="h-px bg-[#cfd3db] flex-1 w-[60px]" />
                </div>

                <button className="flex items-center gap-[8px] px-[24px] py-[12px] rounded-full border border-[#20a4b0]">
                    <span className="text-[20px]">📱</span>
                    <span className="font-['Inter'] font-bold text-[14px] text-[#20a4b0]">
                        Scan QR Code
                    </span>
                </button>
            </div>
        </div>
    );
}
