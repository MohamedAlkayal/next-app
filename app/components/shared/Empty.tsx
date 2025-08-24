"use client";
import React from "react";
import { Icon } from '@iconify/react';

interface EmptyProps {
    icon?: string;
    title?: string;
    description?: string;
    className?: string;
}

const Empty: React.FC<EmptyProps> = ({
    icon = "lucide:mic-off",
    title = "No items found.",
    description = "Try a different search term or check back later.",
    className = ""
}) => (
    <div className={`p-10 text-center text-white/60 ${className}`}>
        <Icon icon={icon} className="mx-auto mb-4 text-4xl" />
        <p className="text-lg">{title}</p>
        <p className="text-sm mt-2">{description}</p>
    </div>
);

export default Empty;
