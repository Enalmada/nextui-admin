import type { ReactNode } from "react";
import React from "react";
import { type UserDropdownConfig } from "./user-dropdown";
interface Props {
    children: ReactNode;
    userDropdownConfig: UserDropdownConfig;
}
export declare const NavbarWrapper: ({ userDropdownConfig, children }: Props) => React.JSX.Element;
export {};
