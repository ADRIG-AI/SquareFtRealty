"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-6 items-center bg-[var(--figma-light-gray)] rounded-[10px] p-2 h-[72px]">
        <div className="flex-1 px-4 py-2 bg-transparent text-[17px] font-medium tracking-[-0.32px] text-[#A0A0A2]">
          Search by Location, Property name or Type
        </div>
        <div className="bg-[var(--figma-dark)] text-white px-4 py-2 rounded-[10px] flex items-center gap-3 h-full">
          <Search className="h-6 w-6" />
          <span className="text-[16px] font-medium tracking-[-0.32px]">Search</span>
        </div>
      </div>
    );
  }

  return (
      <div className="flex gap-6 items-center bg-[var(--figma-light-gray)] rounded-[10px] p-2 h-[72px]">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by Location, Property name or Type"
        className="flex-1 px-4 py-2 bg-transparent text-[17px] font-medium tracking-[-0.32px] placeholder:text-[#A0A0A2] focus:outline-none"
        suppressHydrationWarning
      />
      <button 
        className="bg-[var(--figma-dark)] text-white px-4 py-2 rounded-[10px] flex items-center gap-3 hover:opacity-90 transition-opacity h-full"
        suppressHydrationWarning
      >
        <Search className="h-6 w-6" />
        <span className="text-[16px] font-medium tracking-[-0.32px]">Search</span>
      </button>
    </div>
  );
}
