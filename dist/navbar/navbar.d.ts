import React from 'react';
import { type UserDropdownConfig } from './user-dropdown';
interface Props {
    children: React.ReactNode;
    userDropdownConfig: UserDropdownConfig;
}
export declare const NavbarWrapper: ({ userDropdownConfig, children }: Props) => React.JSX.Element;
export {};
