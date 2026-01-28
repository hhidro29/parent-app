import svgPaths from "@/imports/svg-jr4tbs4irs";

interface BottomNavigationProps {
  currentPage: "home" | "learning" | "chat";
  onNavigate: (page: "home" | "learning" | "chat") => void;
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g>
            <path clipRule="evenodd" d={svgPaths.p302f5f0} fill={active ? "#20A4B0" : "#959DAC"} fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p11148400} fill={active ? "#20A4B0" : "#959DAC"} fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pee5f600} fill={active ? "#20A4B0" : "#959DAC"} fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LearningIcon({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g>
            <path d={svgPaths.p2991c3f0} fill={active ? "#20A4B0" : "#959DAC"} />
            <path d={svgPaths.p2a329280} fill={active ? "#20A4B0" : "#959DAC"} />
            <path d={svgPaths.p33138980} fill={active ? "#20A4B0" : "#959DAC"} />
            <path clipRule="evenodd" d={svgPaths.p3b13c200} fill={active ? "#20A4B0" : "#959DAC"} fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChatIcon({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPaths.p30eb000} fill={active ? "#20A4B0" : "#959DAC"} fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

export default function BottomNavigation({ currentPage, onNavigate }: BottomNavigationProps) {
  return (
    <div className="absolute bg-white bottom-0 flex items-center justify-around left-0 px-[12px] py-[8px] w-full">
      <button
        onClick={() => onNavigate("home")}
        className="flex flex-1 flex-col gap-[4px] items-center justify-center"
      >
        <HomeIcon active={currentPage === "home"} />
        <p
          className={`font-['Inter'] font-${currentPage === "home" ? "semibold" : "normal"} leading-[18px] text-[12px] ${
            currentPage === "home" ? "text-[#20a4b0]" : "text-[#959dac]"
          }`}
        >
          Home
        </p>
      </button>

      <button
        onClick={() => onNavigate("learning")}
        className="flex flex-1 flex-col gap-[4px] items-center justify-center"
      >
        <LearningIcon active={currentPage === "learning"} />
        <p
          className={`font-['Inter'] font-${currentPage === "learning" ? "semibold" : "normal"} leading-[18px] text-[12px] ${
            currentPage === "learning" ? "text-[#20a4b0]" : "text-[#959dac]"
          }`}
        >
          Learning
        </p>
      </button>

      <button
        onClick={() => onNavigate("chat")}
        className="flex flex-1 flex-col gap-[4px] items-center justify-center"
      >
        <ChatIcon active={currentPage === "chat"} />
        <p
          className={`font-['Inter'] font-${currentPage === "chat" ? "semibold" : "normal"} leading-[18px] text-[12px] ${
            currentPage === "chat" ? "text-[#20a4b0]" : "text-[#959dac]"
          }`}
        >
          Chat
        </p>
      </button>
    </div>
  );
}
