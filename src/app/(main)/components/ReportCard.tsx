// app/reports/ReportCard.tsx   (the **big** version)
"use client";

import Image from "next/image";

interface Report {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  pdfUrl: string;
  index: number;
}

interface ReportCardProps {
  report: Report;
  index: number;
}

export default function ReportCard({ report, index }: ReportCardProps) {
  const handleOpenPDF = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(report.pdfUrl, "_blank", "noopener,noreferrer");
  };

  const cardColor = index % 2 === 0 ? "#4caf50" : "#e67e22";

  return (
    <div
      className={`
        group flex flex-col overflow-hidden rounded-xl border border-border 
        shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer
        max-w-md w-full transform hover:scale-105
      `}
      style={{ backgroundColor: cardColor, color: "#fff" }}
      onClick={handleOpenPDF}
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={report.imageUrl}
          alt={report.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          priority
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
          PDF
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{report.title}</h3>
        <p className="text-base opacity-90 mb-6 flex-1 line-clamp-3">
          {report.subtitle}
        </p>
        <button
          onClick={handleOpenPDF}
          className="inline-flex items-center gap-2 text-white hover:text-gray-200 font-semibold transition-colors group-hover:translate-x-1 text-base"
        >
          <span>VIEW REPORT</span>
          <span className="text-sm transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </div>
    </div>
  );
}