import type { ReactNode } from "react";
import React from "react";
interface Props {
    title: string;
    children?: ReactNode;
}
export declare const SidebarMenu: ({ title, children }: Props) => React.JSX.Element;
export {};
