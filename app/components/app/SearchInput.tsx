"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
    const searchParams = useSearchParams();
    const initialSearch = searchParams?.get("podcast") || "";
    const [search, setSearch] = useState(initialSearch);
    const router = useRouter();
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        if (search.trim() === "") {
            router.push(`/`);
        };
        debounceRef.current = setTimeout(() => {
            router.push(`?podcast=${encodeURIComponent(search)}`);
        }, 500);
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [search, router]);

    return (
        <input
            type="text"
            placeholder="Search"
            className="px-2 py-1.5 text-sm flex-1 text-center border border-white/25 rounded-xl outline-none focus:border-mirage-500 focus:text-white bg-mirage-500/10 focus:bg-mirage-500/20"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    );
};

export default SearchInput;
