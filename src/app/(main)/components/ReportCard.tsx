"use client";

import Image from "next/image";

interface Report {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  pdfUrl: string;
  index: number; // Add index to determine color
}

interface ReportCardProps {
  report: Report;
  index: number; // Add index prop
}

export default function ReportCard({ report, index }: ReportCardProps) {
  const handleOpenPDF = () => {
    window.open(report.pdfUrl, '_blank', 'noopener,noreferrer');
  };

  // Determine color based on index (even = green, odd = orange)
  const cardColor = index % 2 === 0 ? '#4caf50' : '#e67e22';
  const textColor = '#ffffff'; // White text for better contrast

  return (
    <div 
      className="group flex flex-col overflow-hidden rounded-lg border border-border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      style={{ 
        backgroundColor: cardColor,
        color: textColor
      }}
      onClick={handleOpenPDF}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={report.imageUrl}
          alt={report.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* PDF Badge */}
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          PDF
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2">
          {report.title}
        </h3>
        <p className="text-sm opacity-90 mb-5 flex-1 line-clamp-2">
          {report.subtitle}
        </p>
        
        <div className="flex gap-3 items-center">
          <button
            onClick={handleOpenPDF}
            className="inline-flex items-center gap-2 text-white hover:text-gray-200 font-semibold transition-colors group-hover:translate-x-1 flex-1 justify-start text-sm"
          >
            <span>VIEW REPORT</span>
            <span className="text-xs transform group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}