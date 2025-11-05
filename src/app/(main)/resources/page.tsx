"use client";

import { useState } from "react";
import ResourcesHero from "../components/ResourcesHero";
import ReportsGrid from "../components/ReportsGrid";
import SearchFilters from "../components/SearchFilters";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <ResourcesHero />
      <div className="container mx-auto px-4 py-8">
        <SearchFilters onSearchChange={handleSearchChange} />
        <ReportsGrid searchQuery={searchQuery} />
      </div>
    </div>
  );
}