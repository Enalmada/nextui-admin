import type { ReactNode } from "react";
import React from "react";
interface Props {
    title: string;
    icon: ReactNode;
    isActive?: boolean;
    href?: string;
}
export declare const SidebarItem: ({ icon, title, isActive, href }: Props) => React.JSX.Element;
export {};
