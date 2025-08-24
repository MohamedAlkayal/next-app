"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";

export type LayoutType = "grid" | "scroll" | "list" | "compact";

interface Props {
    initialLayout: LayoutType;
    layout?: LayoutType;
    onLayoutChange?: (layout: LayoutType) => void;
    children: React.ReactNode;
}

export default function LayoutPreferenceClient({ initialLayout, layout: controlledLayout, onLayoutChange, children }: Props) {
    const [internalLayout, setInternalLayout] = useState<LayoutType>(initialLayout);

    const layout = controlledLayout !== undefined ? controlledLayout : internalLayout;

    const setLayout = (newLayout: LayoutType) => {
        setInternalLayout(newLayout);
        Cookies.set("episodesLayout", newLayout, { expires: 365 });
        if (onLayoutChange) {
            onLayoutChange(newLayout);
        }
    };

    return (
        <LayoutContext.Provider value={{ layout, setLayout }}>
            {children}
        </LayoutContext.Provider>
    );
}

const LayoutContext = React.createContext<{
    layout: LayoutType;
    setLayout: (layout: LayoutType) => void;
}>({
    layout: "grid",
    setLayout: () => { },
});

export const useLayoutPreference = () => React.useContext(LayoutContext);
