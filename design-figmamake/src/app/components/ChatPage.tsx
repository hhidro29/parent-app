import { useState } from "react";
import svgPaths from "@/imports/svg-wbht7w3g01";

export default function ChatPage() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <div className="flex flex-col min-h-full w-full">
      {/* Header */}
      <div className="relative">
        <div className="bg-[#1fb0c3] h-[24px] w-full" />
        <div
          className="h-[87px] w-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(166.414deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)",
          }}
        >
          <div className="flex items-center p-[12px] pt-[24px]">
            <p className="font-['Inter'] font-bold leading-[30px] text-[24px] text-white tracking-[-0.12px]">Chat</p>
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="bg-[#f7f9fd] flex flex-col gap-[12px] p-[12px] w-full">
        {/* WhatsApp Help Button */}
        <button
          onClick={() => setShowWhatsAppModal(true)}
          className="bg-white border border-[#cfd3db] flex flex-col gap-[8px] items-center justify-center mt-[24px] p-[24px] rounded-[12px] w-full"
        >
          <div className="flex flex-col gap-[8px] items-center">
            <IllustrationIcon />
            <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[16px] text-center">Butuh bantuan?</p>
            <p className="font-['Inter'] leading-[18px] text-[12px] text-[#5e677b] text-center">
              <span className="font-bold">Student Advisor - Jakarta Kemang</span>
              <br />
              bisa membantu anda lewat Whatsapp
            </p>
          </div>
          <div className="bg-[#4caf50] flex gap-[8px] items-center justify-center mt-[8px] px-[24px] py-[12px] rounded-full">
            <WhatsAppIcon />
            <p className="font-['Inter'] font-bold leading-[24px] text-[16px] text-white">Hubungi via Whatsapp</p>
          </div>
        </button>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="absolute bg-black bg-opacity-40 flex items-center justify-center inset-0 z-50">
          <div className="bg-white flex flex-col max-w-[340px] mx-[12px] rounded-[12px] w-full">
            <div className="p-[16px]">
              <div className="flex flex-col gap-[24px] items-center">
                <IllustrationIcon />
                <div className="flex flex-col gap-[8px] items-center text-center">
                  <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[16px]">Butuh bantuan?</p>
                  <p className="font-['Inter'] leading-[18px] text-[12px] text-[#5e677b]">
                    <span className="font-bold">Student Advisor - Jakarta Kemang</span>
                    <br />
                    bisa membantu anda lewat Whatsapp
                  </p>
                </div>
              </div>
            </div>
            <div className="p-[16px]">
              <button
                onClick={() => {
                  window.open("https://wa.me/6281234567890", "_blank");
                  setShowWhatsAppModal(false);
                }}
                className="bg-[#4caf50] flex gap-[8px] items-center justify-center px-[16px] py-[14px] rounded-full w-full"
              >
                <WhatsAppIcon />
                <p className="font-['Inter'] font-bold leading-[24px] text-[16px] text-white">Hubungi via Whatsapp</p>
              </button>
            </div>
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="font-['Inter'] font-semibold p-[16px] text-[14px] text-[#5e677b]"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
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

function IllustrationIcon() {
  return (
    <div className="h-[120px] w-[120px]">
      <svg className="size-full" fill="none" viewBox="0 0 120 120">
        <rect fill="#FFE8D6" height="80" rx="8" width="80" x="20" y="25" />
        <rect fill="#FFC7A8" height="16" opacity="0.3" rx="2" width="60" x="30" y="40" />
        <rect fill="#FFC7A8" height="20" opacity="0.3" rx="2" width="60" x="30" y="60" />
        <rect fill="#FFC7A8" height="20" opacity="0.3" rx="2" width="60" x="30" y="84" />
        <path d="M95 30 L110 20 L110 70 L95 80 Z" fill="#F48722" />
        <circle cx="100" cy="25" fill="#F7BA58" r="8" />
      </svg>
    </div>
  );
}