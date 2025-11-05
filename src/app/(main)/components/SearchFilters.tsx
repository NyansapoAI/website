"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  onSearchChange: (query: string) => void;
}

export default function SearchFilters({ onSearchChange }: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <div className="mb-8 flex justify-end">
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
        <input
          type="text"
          placeholder="SEARCH OUR REPORTS"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-12 pr-6 py-4 text-base text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg outline-none placeholder-gray-400 hover:bg-white/15 focus:bg-white/20 focus:border-accent transition-all duration-300"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("");
              onSearchChange("");
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}