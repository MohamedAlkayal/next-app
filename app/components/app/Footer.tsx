"use client";
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-auto py-4 px-4 bg-mirage-800/90 text-white/60 backdrop-blur-md">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {year} Thmanyah. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
