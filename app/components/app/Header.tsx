"use client";
import React from "react";
import { Icon } from '@iconify/react';
import Image from "next/image";
import SearchInputWrapper from "./SearchInputWrapper";

const Header = () => {

    return (
        <div className="p-3 sticky top-0 z-10 text-white/50 bg-gradient-to-b from-mirage-900/90 to-mirage-950/50 backdrop-blur-md ">
            <div className="flex justify-between items-center gap-1">
                <div className="h-11 w-11 block md:hidden relative">
                    <Image
                        src="/media/images/logo.svg"
                        alt="Logo"
                        fill
                        priority
                        className="object-contain" />
                </div>
                <button className="bg-transparent cursor-pointer duration-300 hover:text-white">
                    <Icon icon="lucide:chevron-left" className='text-2xl' />
                </button>
                <button className="bg-transparent cursor-pointer duration-300 hover:text-white">
                    <Icon icon="lucide:chevron-right" className='text-2xl' />
                </button>
                <SearchInputWrapper />
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
