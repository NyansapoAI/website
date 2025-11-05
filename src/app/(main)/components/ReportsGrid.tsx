"use client";

import { useState, useMemo } from "react";
import ReportCard from "./ReportCard";

const reports = [
  {
    id: 1,
    title: "RCP Baseline Report",
    subtitle: "(2025)",
    imageUrl: "/imgs/reports/baseline.png", // Cover image
    pdfUrl: "/pdfs/RCP Baseline Report.pdf", // PDF file
    index: 0,
  },
  {
    id: 2,
    title: "Endline Report",
    subtitle: "(2025)",
    imageUrl: "/imgs/reports/endline.png",
    pdfUrl: "/pdfs/EndlineReport.pdf",
    index: 1,
  },
  // {
  //   id: 3,
  //   title: "ACCOUNTABILITY TO CHILDREN AND COMMUNITIES YEARLY REPORT",
  //   subtitle: "(2024)",
  //   imageUrl: "/images/reports/accountability-yearly-report.jpg",
  //   pdfUrl: "/pdfs/accountability-yearly-report.pdf",
  // },
  // {
  //   id: 4,
  //   title: "4TH AFRICAN REGIONAL CONFERENCE ON LOSS AND DAMAGE",
  //   subtitle: "LILONGWE CALL ON ACCELERATING ACCESS TO CLIMATE FINANCE AND LOCALITY LED (2025) MALAWI",
  //   imageUrl: "/images/reports/african-regional-conference.jpg",
  //   pdfUrl: "/pdfs/african-regional-conference.pdf",
  // },
  // {
  //   id: 5,
  //   title: "ANOTHER REPORT TITLE",
  //   subtitle: "(2025) COUNTRY",
  //   imageUrl: "/images/reports/another-report.jpg",
  //   pdfUrl: "/pdfs/another-report.pdf",
  // },
];


interface ReportsGridProps {
  searchQuery: string;
}

export default function ReportsGrid({ searchQuery }: ReportsGridProps) {
  const filteredReports = useMemo(() => {
    if (!searchQuery.trim()) {
      return reports;
    }

    const query = searchQuery.toLowerCase().trim();
    return reports.filter(report => 
      report.title.toLowerCase().includes(query) ||
      report.subtitle.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  if (filteredReports.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No reports found matching "{searchQuery}"</p>
        <p className="text-gray-400 mt-2">Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredReports.map((report, index) => (
        <ReportCard key={report.id} report={report} index={index} />
      ))}
    </div>
  );
}