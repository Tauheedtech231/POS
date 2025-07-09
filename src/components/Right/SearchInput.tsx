"use client";

import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <form className="relative flex items-center max-w-xs w-full">
      <Search className="absolute left-3 text-muted-foreground h-5 w-5" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </form>
  );
};

export default SearchInput;
