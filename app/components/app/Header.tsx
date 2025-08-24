"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from '@iconify/react';

const Header = () => {
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
        <div className="p-3 sticky top-0 z-10 text-white/50 bg-gradient-to-b from-mirage-900/90 to-mirage-950/50 backdrop-blur-md ">
            <div className="flex justify-between items-center gap-1">
                <div className="h-11 w-11">
                    <img src="/media/images/logo.svg" alt="Logo" className=" object-contain w-full h-full" />
                </div>
                <button className="bg-transparent cursor-pointer duration-300 hover:text-white">
                    <Icon icon="lucide:chevron-left" className='text-2xl' />
                </button>
                <button className="bg-transparent cursor-pointer duration-300 hover:text-white">
                    <Icon icon="lucide:chevron-right" className='text-2xl' />
                </button>
                <input
                    type="text"
                    placeholder="Search"
                    className="px-2 py-1.5 text-sm flex-1 text-center border border-white/25 rounded-xl outline-none focus:border-mirage-500 focus:text-white  bg-mirage-500/10 focus:bg-mirage-500/20"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button className="py-2 px-4 ms-2 hidden md:block bg-gradient-to-b text-white from-nile-500 to-nile-600 rounded text-xs">Log in</button>
                <button className="py-2 px-4 ms-2 hidden md:block bg-gradient-to-b text-white from-nile-500 to-nile-600 rounded text-xs">Sign up</button>
                <button className=" p-1 bg-transparent text-white cursor-pointer">
                    <Icon icon="lucide:ellipsis-vertical" className='text-lg' />
                </button>
            </div>
        </div>
    );
};

export default Header;
