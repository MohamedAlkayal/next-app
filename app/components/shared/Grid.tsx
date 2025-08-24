"use client";
import React from "react";

interface GridProps {
    className?: string;
    children: React.ReactNode;
}

function Grid({ className = "", children }: GridProps) {
    const gridClass = `grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6`;

    return (
        <div className={`p-3 pt-6 ${gridClass} gap-4 ${className}`}>
            {children}
        </div>
    );
}

export default Grid;
