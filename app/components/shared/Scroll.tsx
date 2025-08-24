"use client";
import React, { useRef, useState, useEffect } from "react";

interface ScrollProps {
    className?: string;
    children: React.ReactNode;
}

function Scroll({ className = "", children }: ScrollProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [showScrollbar, setShowScrollbar] = useState(false);

    useEffect(() => {
        const updateIndicator = () => {
            const el = scrollRef.current;
            if (!el) return;
            const visibleRatio = el.clientWidth / el.scrollWidth;
            const indicatorWidth = visibleRatio * el.clientWidth;
            const maxScroll = el.scrollWidth - el.clientWidth;
            const left = maxScroll > 0 ? (el.scrollLeft / maxScroll) * (el.clientWidth - indicatorWidth) : 0;
            setIndicatorStyle({ left, width: indicatorWidth });
            setShowScrollbar(el.scrollWidth > el.clientWidth);
        };
        const el = scrollRef.current;
        if (el) {
            el.addEventListener("scroll", updateIndicator);
            window.addEventListener("resize", updateIndicator);
            updateIndicator();
        }
        return () => {
            if (el) el.removeEventListener("scroll", updateIndicator);
            window.removeEventListener("resize", updateIndicator);
        };
    }, []);

    return (
        <div className={`p-3 pt-6 group ${className}`}>
            <div
                ref={scrollRef}
                className='pb-10 flex gap-4 overflow-x-auto hide-scrollbar'
            >
                {children}
            </div>
            {showScrollbar && (
                <div className="h-2">
                    <div className="relative h-0.5 w-full group-hover:h-2 duration-300">
                        <div className="absolute left-0 top-0 h-full w-full bg-nile-800/40 rounded-full" />
                        <div
                            className="absolute top-0 h-full bg-mirage-700 rounded-full ease-in-out"
                            style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Scroll;
