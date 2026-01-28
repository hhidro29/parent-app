"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChatPage() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-[#F7F9FD] pb-[100px]">
            {/* Header Section */}
            <div className="relative w-full shrink-0">
                <div className="bg-[#1FB0C3] h-[24px] w-full" />

                {/* Main Header with Pattern */}
                <div className="relative h-[87px] w-full overflow-hidden bg-[#34CE9E]">
                    {/* Gradient Layer */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(166.414deg, #7BD7FB 0%, #34CE9E 100%)"
                        }}
                    />

                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 z-1 opacity-40 mix-blend-luminosity">
                        <Image
                            src="/assets/images/page-specialbuatkamu/background-header-specialuntukkamu.png"
                            alt="Header Pattern"
                            fill
                            className="object-cover object-top"
                        />
                    </div>

                    <div className="relative z-10 flex items-center justify-between px-[12px] h-full pt-[24px]">
                        <h1 className="font-['Inter'] font-bold text-[24px] text-white tracking-[-0.12px]">Chat</h1>
                        <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20B0C3" strokeWidth="3" strokeLinecap="round">
                                <path d="M12 5V19M5 12H19" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start pt-[60px] px-[24px]">
                {/* Illustration */}
                <div className="w-full flex justify-center mb-[24px]">
                    <ChatIllustration />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center text-center gap-[8px] mb-[40px]">
                    <h2 className="font-['Inter'] font-bold text-[16px] text-[#2C313A] leading-[24px]">Butuh bantuan?</h2>
                    <p className="font-['Inter'] text-[12px] text-[#5E677B] leading-[18px]">
                        <span className="font-bold">Student Advisor - Jakarta Kemang</span>
                        <br />
                        bisa membantu anda lewat Whatsapp
                    </p>
                </div>

                {/* Whatsapp Button */}
                <Link
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    className="w-full bg-[#4CAF50] active:scale-[0.98] transition-all flex items-center justify-center gap-[8px] h-[52px] rounded-full"
                >
                    <WhatsAppIcon />
                    <span className="font-['Inter'] font-bold text-[16px] text-white">Hubungi via Whatsapp</span>
                </Link>
            </div>
        </div>
    );
}

function WhatsAppIcon() {
    return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2c-.188.563.337 1.088.9.9l3.032-.892A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.695 0 8.5 3.805 8.5 8.5s-3.805 8.5-8.5 8.5a8.457 8.457 0 01-4.354-1.195l-.296-.176-2.584.76.76-2.584-.176-.296A8.457 8.457 0 013.5 12c0-4.695 3.805-8.5 8.5-8.5z"
                fill="white"
                fillRule="evenodd"
            />
            <path
                d="M9.5 8.5c-.15-.35-.35-.35-.5-.35h-.5c-.2 0-.5.1-.75.35-.25.25-.75.75-.75 1.8 0 1.05.75 2.1 .85 2.25.15.15 2 3.15 4.9 4.35 2.4.95 2.9.75 3.4.7.5-.05 1.6-.65 1.85-1.3.25-.65.25-1.2.15-1.3-.1-.1-.3-.2-.6-.35-.3-.15-1.6-.8-1.85-.9-.25-.1-.45-.15-.6.15-.15.3-.6.9-.75 1.1-.15.2-.3.2-.55.1-.25-.1-1.1-.4-2.1-1.3-.75-.7-1.3-1.55-1.45-1.85-.15-.3 0-.45.1-.6.1-.1.3-.3.45-.45s.2-.25.3-.45c.1-.2.05-.35 0-.5-.05-.15-.6-1.5-.85-2.05z"
                fill="white"
            />
        </svg>
    );
}

function ChatIllustration() {
    return (
        <div className="h-[188px] w-[194px] relative">
            <svg className="w-full h-full" viewBox="0 0 194 188" fill="none">
                {/* Sparkles */}
                <path d="M30 40 L35 30 L40 40 Z" fill="#F89825" />
                <path d="M160 60 L165 50 L170 60 Z" fill="#F89825" />

                {/* Phone Case */}
                <g transform="rotate(-15 97 94)">
                    <rect x="57" y="24" width="80" height="140" rx="12" fill="#F45922" />
                    <rect x="62" y="29" width="70" height="130" rx="8" fill="white" fillOpacity="0.2" />

                    {/* Message lines */}
                    <rect x="70" y="45" width="54" height="10" rx="3" fill="#FEE3D6" />
                    <rect x="70" y="65" width="44" height="10" rx="3" fill="#FEE3D6" />
                    <rect x="70" y="85" width="49" height="10" rx="3" fill="#FEE3D6" />
                </g>

                {/* Floating cards */}
                <g transform="rotate(-15 60 110)">
                    <rect x="40" y="90" width="50" height="35" rx="6" fill="#FFEEDB" />
                </g>

                <g transform="rotate(-15 140 50)">
                    <rect x="120" y="30" width="60" height="40" rx="6" fill="#FFAD8F" />
                </g>

                <g transform="rotate(-15 50 60)">
                    <rect x="40" y="50" width="35" height="25" rx="4" fill="#FEE3D6" />
                </g>
            </svg>
        </div>
    );
}
