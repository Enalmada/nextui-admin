import React from 'react';
interface Props {
    title: string;
    icon: React.ReactNode;
    isActive?: boolean;
    href?: string;
}
export declare const SidebarItem: ({ icon, title, isActive, href }: Props) => React.JSX.Element;
export {};
