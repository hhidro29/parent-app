import { useState } from "react";
import svgPaths from "@/imports/svg-w3yp4jo2ob";
import svgPathsDora from "@/imports/svg-lqbcn4hzwa";
import imgImage1008 from "figma:asset/fcf4d2b72c3eb5dc8b5ae0ac5095080b29f51ad2.png";
import imgImage19 from "figma:asset/e7b24dc6e85fb42d79e6ace8ab9126f7d742557c.png";
import imgImage20 from "figma:asset/a897f204df85b5389f32ff0bf8b0596f67a77d91.png";
import imgSyllabusEaIcon from "figma:asset/b9ac2c82a4b66aa9052f6ea7aa4b5d9dcf714609.png";
import imgImage504 from "figma:asset/93b3db8f1ccb2f1185c4ad955c74f8ab610118bb.png";
import { imgRectangle34625034 } from "@/imports/svg-crvs6";
import svgPathsDropdown from "@/imports/svg-ip3w8je14p";
import ClassReportListPage from "@/app/components/ClassReportListPage";
import ClassReportDetailPage from "@/app/components/ClassReportDetailPage";
import JournalDetailPage from "@/app/components/JournalDetailPage";

interface LearningPageProps {
  onNavigateToAuth?: () => void;
}

export default function LearningPage({ onNavigateToAuth }: LearningPageProps) {
  const [activeTab, setActiveTab] = useState<"report" | "journal">("report");
  const [selectedChild, setSelectedChild] = useState<"liam" | "dora">("dora");
  const [currentView, setCurrentView] = useState<"main" | "reportList" | "reportDetail" | "journalDetail">("main");
  const [selectedReportId, setSelectedReportId] = useState<string>("");
  const [selectedUnitId, setSelectedUnitId] = useState<string>("");

  // Handle navigation - Return pages without bottom padding
  if (currentView === "reportList") {
    return (
      <div className="absolute inset-0 z-50 bg-white">
        <ClassReportListPage onBack={() => setCurrentView("main")} onViewDetail={(id) => { setSelectedReportId(id); setCurrentView("reportDetail"); }} />
      </div>
    );
  }

  if (currentView === "reportDetail") {
    return (
      <div className="absolute inset-0 z-50 bg-white">
        <ClassReportDetailPage onBack={() => setCurrentView("reportList")} reportId={selectedReportId} />
      </div>
    );
  }

  if (currentView === "journalDetail") {
    return (
      <div className="absolute inset-0 z-50 bg-white">
        <JournalDetailPage onBack={() => setCurrentView("main")} unitId={selectedUnitId} />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full w-full bg-[#f7f9fd]">
      {/* Header with Gradient Background */}
      <div className="relative w-full">
        {/* Teal bar at top */}
        <div className="bg-[#1fb0c3] h-[24px] w-full" />
        
        {/* Gradient header with pattern */}
        <div className="relative overflow-hidden rounded-bl-[28px] w-full">
          {/* Gradient background */}
          <div 
            className="absolute h-[117px] left-0 top-0 w-full" 
            style={{ 
              backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.996deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)",
              maskImage: `url('${imgRectangle34625034}')`,
              maskSize: "100% 100%",
              maskRepeat: "no-repeat"
            }} 
          />
          
          {/* Pattern overlay */}
          <div 
            className="absolute h-[273px] left-0 mix-blend-luminosity top-[-4px] w-full"
            style={{
              maskImage: `url('${imgRectangle34625034}')`,
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
              maskPosition: "0px 4px"
            }}
          >
            <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgImage1008} />
          </div>
          
          {/* Header content */}
          <div className="relative z-10 flex flex-col">
            <div className="flex items-center justify-between p-[12px]">
              <p className="font-['Inter'] font-bold leading-[24px] text-[16px] text-white">Child Learning</p>
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" fill="white" r="12" />
                  <path clipRule="evenodd" d={svgPaths.p3ec7c880} fill="#2C313A" fillRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Child Selector Pills */}
            <div className="flex gap-[10px] px-[12px] pt-[12px]">
              <button
                onClick={() => setSelectedChild("liam")}
                className={`flex gap-[8px] items-center px-[12px] py-[8px] rounded-tl-[8px] rounded-tr-[8px] ${
                  selectedChild === "liam" ? "bg-white" : "bg-[rgba(255,255,255,0.1)]"
                }`}
              >
                <div className="relative rounded-full shrink-0 size-[24px]">
                  <img alt="Liam A." className="rounded-full size-full object-cover" src={imgImage19} />
                  <div className="absolute border-[0.512px] border-solid border-white inset-0 rounded-full" />
                </div>
                <p className={`font-['Inter'] font-bold leading-[22px] text-[14px] ${selectedChild === "liam" ? "text-[#2c313a]" : "text-white"}`}>
                  Liam A.
                </p>
              </button>

              <button
                onClick={() => setSelectedChild("dora")}
                className={`flex gap-[8px] items-center px-[12px] py-[8px] rounded-tl-[8px] rounded-tr-[8px] ${
                  selectedChild === "dora" ? "bg-[#f1faf6]" : "bg-[rgba(255,255,255,0.1)]"
                }`}
              >
                <div className="relative rounded-full shrink-0 size-[24px]">
                  <img alt="Dora D." className="rounded-full size-full object-cover" src={imgImage20} />
                  <div className="absolute border border-solid border-white inset-0 rounded-full" />
                </div>
                <p className={`font-['Inter'] font-bold leading-[22px] text-[14px] ${selectedChild === "dora" ? "text-[#2c313a]" : "text-white"}`}>
                  Dora D.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedChild === "liam" ? (
        <LiamView 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onViewAllReports={() => setCurrentView("reportList")}
          onViewUnit={(id) => { setSelectedUnitId(id); setCurrentView("journalDetail"); }}
        />
      ) : (
        <DoraView 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onViewAllReports={() => setCurrentView("reportList")}
        />
      )}
    </div>
  );
}

function LiamView({ activeTab, setActiveTab, onViewAllReports, onViewUnit }: any) {
  return (
    <>
      {/* Program Card */}
      <div className="bg-white p-[12px] w-full">
        <div className="flex flex-col overflow-clip relative rounded-[12px] w-full" style={{ backgroundImage: "linear-gradient(169.875deg, rgb(43, 42, 114) 0%, rgb(255, 69, 70) 100%)" }}>
          <div className="flex items-center justify-between p-[12px] w-full">
            <div className="flex gap-[8px] items-center flex-1">
              <div className="bg-white bg-opacity-40 flex items-center justify-center rounded-full shrink-0 size-[36px]">
                <div className="size-[24px]">
                  <img alt="Program Icon" className="size-full object-cover" src={imgSyllabusEaIcon} />
                </div>
              </div>
              <div className="flex flex-col leading-[18px] text-[12px] text-white">
                <p className="font-['Inter'] font-semibold">English Academy - Dasher</p>
                <p className="font-['Inter'] font-normal">Balikpapan - Jendral Sudirman</p>
              </div>
            </div>
            
            {/* Dropdown button */}
            <button className="relative shrink-0 size-[60px]">
              <svg className="block size-full" fill="none" viewBox="0 0 60 60">
                <path d={svgPathsDropdown.p10c92680} fill="#0C0C0C" fillOpacity="0.5" />
                <circle cx="30" cy="30" fill="#F2F5FA" r="10" />
                <path clipRule="evenodd" d={svgPathsDropdown.p1ac75900} fill="#2C313A" fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white flex gap-[16px] items-start pt-[12px] px-[12px] w-full">
        <button onClick={() => setActiveTab("report")} className="flex flex-col gap-[4px] items-center pt-[4px]">
          <p className={`font-['Inter'] font-bold leading-[24px] text-[16px] ${activeTab === "report" ? "text-[#2c313a]" : "text-[#2c313a] opacity-60"}`}>
            Report
          </p>
          {activeTab === "report" && <div className="bg-[#f4c84d] h-[2px] w-[40px]" />}
          {activeTab !== "report" && <div className="h-[2px] w-[40px]" />}
        </button>

        <button onClick={() => setActiveTab("journal")} className="flex flex-col gap-[4px] items-center pt-[4px]">
          <p className={`font-['Inter'] font-bold leading-[24px] text-[16px] ${activeTab === "journal" ? "text-[#2c313a]" : "text-[#2c313a] opacity-60"}`}>
            Journal
          </p>
          {activeTab === "journal" && <div className="bg-[#f4c84d] h-[2px] w-[40px]" />}
          {activeTab !== "journal" && <div className="h-[2px] w-[40px]" />}
        </button>
      </div>

      {/* Content */}
      <div className="bg-[#f7f9fd] flex flex-col gap-[12px] p-[12px] w-full">
        {activeTab === "report" && <ReportContentLiam onViewAllReports={onViewAllReports} />}
        {activeTab === "journal" && <JournalContentLiam onViewUnit={onViewUnit} />}
      </div>
    </>
  );
}

function DoraView({ activeTab, setActiveTab, onViewAllReports }: any) {
  return (
    <>
      {/* Program Card */}
      <div className="bg-white p-[12px] w-full">
        <div className="flex flex-col overflow-clip relative rounded-[12px] w-full" style={{ backgroundImage: "linear-gradient(169.875deg, rgb(232, 248, 247) 0%, rgb(255, 249, 238) 100%)" }}>
          <div className="flex items-center justify-between p-[12px] w-full">
            <div className="flex gap-[8px] items-center flex-1">
              <div className="relative shrink-0 size-[36px]">
                <svg className="block size-full" fill="none" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" fill="white" fillOpacity="0.4" r="18" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                   <img className="w-[32px] h-[13px] object-contain" src={imgImage504} alt="Icon" />
                </div>
              </div>
              <div className="flex flex-col leading-[18px] text-[12px]">
                <p className="font-['Inter'] font-semibold text-[#2c313a]">Champions Wonderlab</p>
                <p className="font-['Inter'] font-normal text-[#5e677b]">Balikpapan - Jendral Sudirman</p>
              </div>
            </div>
            
            {/* Dropdown button */}
            <button className="relative shrink-0 size-[60px]">
              <svg className="block size-full" fill="none" viewBox="0 0 60 60">
                <path d={svgPathsDora.p10c92680} fill="#0C0C0C" fillOpacity="0.1" />
                <circle cx="30" cy="30" fill="#F2F5FA" r="10" />
                <path clipRule="evenodd" d={svgPathsDora.p1ac75900} fill="#2C313A" fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white flex gap-[16px] items-start pt-[12px] px-[12px] w-full">
        <button onClick={() => setActiveTab("report")} className="flex flex-col gap-[4px] items-center pt-[4px]">
          <p className={`font-['Inter'] font-bold leading-[24px] text-[16px] ${activeTab === "report" ? "text-[#2c313a]" : "text-[#2c313a] opacity-60"}`}>
            Report
          </p>
          {activeTab === "report" && <div className="bg-[#f4c84d] h-[2px] w-[40px]" />}
          {activeTab !== "report" && <div className="h-[2px] w-[40px]" />}
        </button>

        <button onClick={() => setActiveTab("journal")} className="flex flex-col gap-[4px] items-center pt-[4px]">
          <p className={`font-['Inter'] font-bold leading-[24px] text-[16px] ${activeTab === "journal" ? "text-[#2c313a]" : "text-[#2c313a] opacity-60"}`}>
            Journal
          </p>
          {activeTab === "journal" && <div className="bg-[#f4c84d] h-[2px] w-[40px]" />}
          {activeTab !== "journal" && <div className="h-[2px] w-[40px]" />}
        </button>
      </div>

      {/* Content */}
      <div className="bg-[#f7f9fd] flex flex-col gap-[12px] p-[12px] w-full">
        {activeTab === "report" && <ReportContentDora onViewAllReports={onViewAllReports} />}
        {activeTab === "journal" && (
            <div className="flex flex-col gap-[12px] w-full min-h-[300px] items-center justify-center text-[#5e677b]">
                <p>Journal feature coming soon for Dora</p>
            </div>
        )}
      </div>
    </>
  );
}

function ReportContentLiam({ onViewAllReports }: { onViewAllReports: () => void }) {
  const reports = [
    { id: '1', unit: 'Unit A · Language Introduction', title: 'Cooking verbs and kitchen terms', date: '4 Hours ago', status: 'present' },
    { id: '2', unit: 'Unit A · Culture & Pronunciation', title: 'Thai traditional cuisine', date: '2 Days ago', status: 'present' },
    { id: '3', unit: 'Unit A · Language Practice', title: 'Zero conditional sentences', date: '5 Days ago', status: 'absent' },
    { id: '4', unit: 'Unit A · Language Extension', title: 'Kitchen equipment vocabulary', date: '1 Week ago', status: 'sick' },
    { id: '5', unit: 'Unit A · Language Practice 2', title: 'Quantifiers and measurements', date: '1 Week ago', status: 'present' },
    { id: '6', unit: 'Unit A · Cross-curricular', title: 'Taste and flavor science', date: '2 Weeks ago', status: 'present' },
    { id: '7', unit: 'Unit A · Final Assessment', title: 'Unit A comprehensive test', date: '2 Weeks ago', status: 'present' },
    { id: '8', unit: 'Unit B · History Introduction', title: 'Archaeological methods', date: '3 Weeks ago', status: 'present' },
    { id: '9', unit: 'Unit B · Past Tenses', title: 'Past simple and continuous', date: '3 Weeks ago', status: 'excused' },
    { id: '10', unit: 'Unit B · Vocabulary Building', title: 'Historical artifacts and tools', date: '4 Weeks ago', status: 'present' },
    { id: '11', unit: 'Unit B · Reading Skills', title: 'Ancient civilization stories', date: '1 Month ago', status: 'present' },
    { id: '12', unit: 'Unit B · Speaking Practice', title: 'Describing historical events', date: '1 Month ago', status: 'present' },
    { id: '13', unit: 'Unit B · Writing Skills', title: 'Historical narrative writing', date: '1 Month ago', status: 'present' },
    { id: '14', unit: 'Unit B · Listening Practice', title: 'Documentary comprehension', date: '1 Month ago', status: 'present' },
    { id: '15', unit: 'Unit B · Grammar Review', title: 'Time expressions with past tenses', date: '1 Month ago', status: 'present' },
    { id: '16', unit: 'Unit B · Final Assessment', title: 'Unit B comprehensive test', date: '1 Month ago', status: 'present' },
  ];

  return (
    <div className="flex flex-col gap-[12px] w-full">
      {/* Stats Cards */}
      <div className="flex gap-[12px] w-full">
        <div className="bg-[#f5edef] flex-1 rounded-[12px]">
          <div className="flex flex-col gap-[2px] p-[12px]">
            <p className="font-['Inter'] font-normal leading-[18px] text-[#5e677b] text-[12px]">Lesson Complete</p>
            <p className="font-['Inter'] font-bold leading-[18px] text-[#2c313a] text-[14px]">10</p>
          </div>
        </div>
        <div className="bg-[#f5edef] flex-1 rounded-[12px]">
          <div className="flex flex-col gap-[2px] p-[12px]">
            <p className="font-['Inter'] font-normal leading-[18px] text-[#5e677b] text-[12px]">Attendance</p>
            <p className="font-['Inter'] font-bold leading-[18px] text-[#2c313a] text-[14px]">85%</p>
          </div>
        </div>
      </div>

      {/* Class Report */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="flex items-center justify-between">
          <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[16px]">Class Report</p>
          <button className="font-['Inter'] font-bold leading-[22px] text-[#13939e] text-[14px]" onClick={onViewAllReports}>
            Lihat Semua
          </button>
        </div>
        
        <div className="flex gap-[12px] overflow-x-auto pb-[4px] -mx-[12px] px-[12px] scrollbar-hide">
          {reports.map((report) => (
            <div key={report.id} className="bg-white flex flex-col gap-[12px] p-[12px] rounded-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] shrink-0 w-[296px]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Inter'] font-normal leading-[16px] text-[#5e677b] text-[11px]">{report.unit}</p>
                  <p className="font-['Inter'] font-normal leading-[16px] text-[#5e677b] text-[11px]">{report.date}</p>
                </div>
                <p className="font-['Inter'] font-semibold leading-[22px] text-[#2c313a] text-[14px]">{report.title}</p>
              </div>
              <div className="bg-[#d9d9d9] h-px w-full" />
              <div className="flex items-center justify-between">
                {report.status === 'present' && (
                  <>
                    <div className="bg-[#dbf5e8] flex items-center gap-[8px] px-[12px] py-[8px] rounded-[12px]">
                      <p className="font-['Inter'] font-bold leading-[18px] text-[#2a7650] text-[12px]">Present</p>
                    </div>
                    <button className="bg-[#f26d0f] flex items-center justify-center px-[12px] h-[28px] rounded-full">
                      <p className="font-['Inter'] font-bold leading-[18px] text-white text-[12px]">See Report</p>
                    </button>
                  </>
                )}
                {report.status === 'absent' && (
                  <div className="bg-[#fce8e8] flex items-center gap-[8px] px-[12px] py-[8px] rounded-[12px]">
                    <p className="font-['Inter'] font-bold leading-[18px] text-[#c73131] text-[12px]">Absent</p>
                  </div>
                )}
                {report.status === 'sick' && (
                  <div className="bg-[#fff4e6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-[12px]">
                    <p className="font-['Inter'] font-bold leading-[18px] text-[#d97706] text-[12px]">Sick</p>
                  </div>
                )}
                {report.status === 'excused' && (
                  <div className="bg-[#e8f4fd] flex items-center gap-[8px] px-[12px] py-[8px] rounded-[12px]">
                    <p className="font-['Inter'] font-bold leading-[18px] text-[#1976d2] text-[12px]">Excused</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportContentDora({ onViewAllReports }: { onViewAllReports: () => void }) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {/* Stats Cards - Dora Style */}
      <div className="flex gap-[12px] w-full">
        <div className="bg-[#d6eceb] flex-1 rounded-[12px]">
          <div className="flex flex-col gap-[2px] p-[12px]">
            <p className="font-['Inter'] font-normal leading-[18px] text-[#5e677b] text-[12px]">Lesson Complete</p>
            <p className="font-['Inter'] font-bold leading-[18px] text-[#2c313a] text-[14px]">10</p>
          </div>
        </div>
        <div className="bg-[#d6eceb] flex-1 rounded-[12px]">
          <div className="flex flex-col gap-[2px] p-[12px]">
            <p className="font-['Inter'] font-normal leading-[18px] text-[#5e677b] text-[12px]">Attendance</p>
            <p className="font-['Inter'] font-bold leading-[18px] text-[#2c313a] text-[14px]">85%</p>
          </div>
        </div>
      </div>

      {/* Class Report */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="flex items-center justify-between">
          <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[16px]">Class Report</p>
          <button className="font-['Inter'] font-bold leading-[22px] text-[#13939e] text-[14px]" onClick={onViewAllReports}>
            Lihat Semua
          </button>
        </div>
        
        <div className="flex gap-[12px] overflow-x-auto pb-[4px] -mx-[12px] px-[12px] scrollbar-hide">
          {/* Card 1: Button */}
          <div className="bg-white flex flex-col gap-[12px] p-[12px] rounded-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] shrink-0 w-[296px]">
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center justify-between text-[#5e677b] text-[11px] leading-[16px]">
                <p>Unit D · Language Introduction</p>
                <p>4 Hour ago</p>
              </div>
              <p className="font-['Inter'] font-semibold leading-[22px] text-[#2c313a] text-[14px]">Kata kerja memasak</p>
            </div>
            
            <div className="bg-[#d9d9d9] h-px w-full" />
            
            <div className="flex items-center justify-between">
              <div className="bg-[#55c75f] flex items-center px-[4px] py-[2px] rounded-[4px]">
                <p className="font-['Inter'] font-bold leading-[16px] text-white text-[11px]">Hadir</p>
              </div>
              <button className="bg-[#f26d0f] flex items-center justify-center px-[12px] h-[28px] rounded-full">
                <p className="font-['Inter'] font-bold leading-[18px] text-white text-[12px]">See Report</p>
              </button>
            </div>
          </div>

          {/* Card 2: Quiz */}
          <div className="bg-white flex flex-col gap-[12px] p-[12px] rounded-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] shrink-0 w-[296px]">
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center justify-between text-[#5e677b] text-[11px] leading-[16px]">
                <p>Unit D · Language Introduction</p>
                <p>25 Jan 2026</p>
              </div>
              <p className="font-['Inter'] font-semibold leading-[22px] text-[#2c313a] text-[14px]">Kata kerja memasak</p>
            </div>
            
            <div className="bg-[#d9d9d9] h-px w-full" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <div className="bg-[#55c75f] flex items-center px-[4px] py-[2px] rounded-[4px]">
                    <p className="font-['Inter'] font-bold leading-[16px] text-white text-[11px]">Hadir</p>
                </div>
                <div className="flex items-center gap-[4px]">
                    <svg className="size-[20px]" viewBox="0 0 20 20" fill="none">
                        <path clipRule="evenodd" d={svgPathsDora.p2e9dc100} fill="#2C313A" fillRule="evenodd" />
                    </svg>
                    <p className="font-['Inter'] font-normal text-[11px] text-[#5e677b]">Quiz 70/100</p>
                </div>
              </div>
              <svg className="size-[20px]" viewBox="0 0 20 20" fill="none">
                 <path clipRule="evenodd" d={svgPathsDora.p19dc7f80} fill="#2C313A" fillRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Card 3: Quiz */}
          <div className="bg-white flex flex-col gap-[6px] p-[12px] rounded-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] shrink-0 w-[296px]">
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center justify-between text-[#5e677b] text-[11px] leading-[16px]">
                <p>Language Introduction</p>
                <p>25 Januari 2026</p>
              </div>
              <p className="font-['Inter'] font-bold leading-[22px] text-[#2c313a] text-[14px]">Kata kerja memasak</p>
            </div>
            
            <div className="bg-[#d9d9d9] h-px w-full" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <div className="bg-[#55c75f] flex items-center px-[4px] py-[2px] rounded-[4px]">
                    <p className="font-['Inter'] font-bold leading-[16px] text-white text-[11px]">Hadir</p>
                </div>
                <div className="flex items-center gap-[4px]">
                    <svg className="size-[20px]" viewBox="0 0 20 20" fill="none">
                        <path clipRule="evenodd" d={svgPathsDora.p2e9dc100} fill="#2C313A" fillRule="evenodd" />
                    </svg>
                    <p className="font-['Inter'] font-normal text-[11px] text-[#5e677b]">Quiz 70/100</p>
                </div>
              </div>
              <svg className="size-[20px]" viewBox="0 0 20 20" fill="none">
                 <path clipRule="evenodd" d={svgPathsDora.p19dc7f80} fill="#2C313A" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Periodical Report */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="flex items-center justify-between">
            <p className="font-['Inter'] font-bold leading-[24px] text-[#2c313a] text-[16px]">Periodical Report</p>
            <p className="font-['Inter'] font-bold leading-[22px] text-[#13939e] text-[14px]">Lihat Semua</p>
        </div>
        
        <div className="flex flex-col gap-[12px]">
            {['Dasher 3 - Learning Report 1', 'Dasher 3 - Learning Report 2', 'Dasher 3 - Final Report'].map((title, idx) => (
                <div key={idx} className="bg-white flex items-center p-[12px] rounded-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
                    <div className="rounded-full size-[36px] mr-[12px]" style={{ background: "linear-gradient(180deg, #AEDD6B 0%, #4F49D6 100%)" }} />
                    <div className="flex flex-col gap-[4px] flex-1">
                        <p className="font-['Inter'] font-bold text-[14px] text-[#2c313a] leading-[22px]">{title}</p>
                        <p className="font-['Inter'] font-normal text-[11px] text-[#5e677b] leading-[16px]">Published 25 November 2025</p>
                    </div>
                    <svg className="size-[20px]" viewBox="0 0 20 20" fill="none">
                        <path clipRule="evenodd" d={svgPathsDora.p19dc7f80} fill="#79808F" fillRule="evenodd" />
                    </svg>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function JournalContentLiam({ onViewUnit }: { onViewUnit: (id: string) => void }) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <UnitCard
        unitName="Unit A"
        color="#986CE5"
        description="In this unit, students learned about their taste buds and how our tongues interact with flavours. Structure: Zero conditional sentences, quantifiers (a few/a little/many/a lot/much)."
        lessonsCompleted={8}
        testScore="85%"
        expanded={true}
        onViewUnit={onViewUnit}
        disabled={false}
      />
      <UnitCard
        unitName="Unit B"
        color="#4CAF50"
        description="In this unit, students explored how historians excavate historical sites to uncover hidden artifacts. Grammar focus: Past simple and past continuous tenses, time expressions."
        lessonsCompleted={6}
        testScore="78%"
        expanded={false}
        onViewUnit={onViewUnit}
        disabled={false}
      />
      <UnitCard
        unitName="Unit C"
        color="#FF9800"
        description="Students will discover the Winter Olympics and explore the unique cultures of Inuit peoples. Grammar: First conditional, will/won't for predictions. Not yet started."
        lessonsCompleted={0}
        testScore="-"
        expanded={false}
        onViewUnit={onViewUnit}
        disabled={true}
      />
    </div>
  );
}

function UnitCard({
  unitName,
  color,
  description,
  lessonsCompleted,
  testScore,
  expanded,
  onViewUnit,
  disabled,
}: {
  unitName: string;
  color: string;
  description: string;
  lessonsCompleted: number;
  testScore: string;
  expanded: boolean;
  onViewUnit: (id: string) => void;
  disabled: boolean;
}) {
  return (
    <button 
      onClick={() => !disabled && onViewUnit(unitName)}
      className={`bg-[#3A3968] flex flex-col overflow-hidden rounded-[12px] w-full text-left ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      <div className="flex items-center justify-between p-[16px]">
        <div className="flex gap-[8px] items-center">
          <div className="rounded-full shrink-0 size-[12px]" style={{ backgroundColor: color }} />
          <p className="font-['Inter'] font-bold leading-[24px] text-[16px] text-white">{unitName}</p>
        </div>
        <svg 
          className={`size-[24px] ${disabled ? 'opacity-50' : ''}`}
          fill="none" 
          viewBox="0 0 24 24"
        >
          <path d="M9 6l6 6-6 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>

      <div className="px-[16px]">
        <p className="font-['Inter'] font-normal leading-[20px] text-[14px] text-white">{description}</p>
      </div>

      <div className="flex gap-[12px] p-[16px]">
        <div className="bg-white flex flex-1 flex-col gap-[4px] p-[12px] rounded-[8px]">
          <p className="font-['Inter'] font-bold text-[24px] text-[#2c313a]">{lessonsCompleted}</p>
          <p className="font-['Inter'] font-normal text-[12px] text-[#5e677b]">Lesson Completed</p>
        </div>
        <div className="bg-white flex flex-1 flex-col gap-[4px] p-[12px] rounded-[8px]">
          <p className="font-['Inter'] font-bold text-[24px] text-[#2c313a]">{testScore}</p>
          <p className="font-['Inter'] font-normal text-[12px] text-[#5e677b]">Final Test</p>
        </div>
      </div>
    </button>
  );
}
