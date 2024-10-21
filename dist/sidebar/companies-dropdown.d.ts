import type { ReactNode } from "react";
import React from "react";
interface Props {
    adminNavHeader: AdminNavHeader;
}
export interface AdminNavHeader {
    name: string;
    name2: string;
    logo: ReactNode;
}
export declare const CompaniesDropdown: ({ adminNavHeader }: Props) => React.JSX.Element;
export {};
