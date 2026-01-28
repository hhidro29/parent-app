import svgPaths from "@/imports/svg-p9edwmh37u";

interface ClassReportListPageProps {
  onBack: () => void;
  onViewDetail: (reportId: string) => void;
}

export default function ClassReportListPage({ onBack, onViewDetail }: ClassReportListPageProps) {
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
    <div className="flex flex-col h-full w-full overflow-y-auto">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 w-full">
        {/* Header */}
        <div className="bg-[#201d4b] h-[24px] w-full shrink-0" />
        
        {/* Gradient Header Bar */}
        <div className="relative w-full" style={{ backgroundImage: "linear-gradient(161.852deg, rgb(43, 42, 114) 0%, rgb(255, 69, 70) 100%)" }}>
          <div className="flex items-center p-[12px] w-full">
            {/* Back Button */}
            <button onClick={onBack} className="bg-white border border-[#cfd3db] flex items-center justify-center p-[4px] rounded-full shrink-0 size-[34.286px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.p3169b700} fill="#2C313A" fillRule="evenodd" />
              </svg>
            </button>
            
            {/* Title */}
            <p className="flex-1 font-['Inter'] font-bold leading-[20px] text-[16px] text-center text-white">Class Report</p>
            
            {/* Spacer for symmetry */}
            <div className="opacity-0 shrink-0 size-[34.286px]" />
          </div>
        </div>
      </div>

      {/* Report List */}
      <div className="bg-[#f2f5fa] flex flex-col gap-[12px] p-[12px] w-full">
        {reports.map((report) => (
          <div key={report.id} className="bg-white flex flex-col gap-[12px] p-[12px] rounded-[12px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)] w-full">
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
                  <button onClick={() => onViewDetail(report.id)} className="bg-[#f26d0f] flex items-center justify-center px-[12px] h-[28px] rounded-full">
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
  );
}