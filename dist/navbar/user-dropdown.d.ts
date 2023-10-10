import React from 'react';
export interface UserConfig {
    displayName?: string;
    email?: string;
    photoURL?: string;
}
export interface DropdownItemConfig {
    key: string;
    label: string;
    href?: string;
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
    isSpecial?: boolean;
}
export interface UserDropdownConfig {
    user: UserConfig;
    trigger: React.ReactElement | string;
    items: DropdownItemConfig[];
}
interface Props {
    userDropdownConfig: UserDropdownConfig;
}
export declare const UserDropdown: ({ userDropdownConfig }: Props) => React.JSX.Element;
export {};
