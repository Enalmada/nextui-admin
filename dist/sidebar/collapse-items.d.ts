import type { ReactNode } from "react";
import React from "react";
interface Props {
    icon: ReactNode;
    title: string;
    items: string[];
}
export declare const CollapseItems: ({ icon, items, title }: Props) => React.JSX.Element;
export {};
