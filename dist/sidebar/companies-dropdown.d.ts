import React from 'react';
interface Props {
    adminNavHeader: AdminNavHeader;
}
export interface AdminNavHeader {
    name: string;
    name2: string;
    logo: React.ReactNode;
}
export declare const CompaniesDropdown: ({ adminNavHeader }: Props) => React.JSX.Element;
export {};
