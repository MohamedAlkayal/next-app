import React from "react";
import { Icon } from '@iconify/react';

const Idle: React.FC = () => (
    <div className="flex flex-col items-center justify-center py-12 text-white">
        <Icon icon="mdi:podcast" className="text-6xl mb-4 text-blue-400 animate-bounce" />
        <h2 className="text-2xl font-bold mb-2">Search for Podcasts</h2>
        <p className="text-lg text-white/70">Type a keyword above to discover amazing podcasts!</p>
    </div>
);

export default Idle;
