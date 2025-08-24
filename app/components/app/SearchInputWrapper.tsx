"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Loading fallback for the search input
const SearchInputFallback = () => (
    <div className="px-2 py-1.5 text-sm flex-1 text-center border border-white/25 rounded-xl bg-mirage-500/10 animate-pulse">
        &nbsp;
    </div>
);

// Dynamically import the SearchInput component with no SSR
const SearchInput = dynamic(() => import("./SearchInput"), {
    ssr: false,
    loading: () => <SearchInputFallback />
});

const SearchInputWrapper = () => {
    return (
        <Suspense fallback={<SearchInputFallback />}>
            <SearchInput />
        </Suspense>
    );
};

export default SearchInputWrapper;
