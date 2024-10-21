"use client";

import { usePathname } from "next/navigation";
import type { FC, ReactElement, ReactNode } from "react";
import React from "react";

import { useSidebarContext } from "../layout/layout-context";
import { type AdminNavHeader, CompaniesDropdown } from "./companies-dropdown";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";

interface ConditionalWrapperProps {
	condition: boolean;
	wrapper: (children: ReactNode) => ReactElement;
	children: ReactNode;
}

const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
	condition,
	wrapper,
	children,
}) => {
	if (children === undefined) {
		return null;
	}
	return condition ? wrapper(children) : <>{children}</>;
};

interface SidebarItemConfig {
	title: string;
	icon: ReactNode;
	href: string;
}

export interface SidebarSectionConfig {
	title: string | null;
	items: SidebarItemConfig[];
}

interface Props {
	sidebarConfig: SidebarSectionConfig[];
	adminNavHeader: AdminNavHeader;
}

export const SidebarWrapper = ({ sidebarConfig, adminNavHeader }: Props) => {
	const { collapsed, setCollapsed } = useSidebarContext();
	const pathname = usePathname();

	return (
		<aside className="sticky top-0 z-[202] h-screen">
			{collapsed ? (
				<div className={Sidebar.Overlay()} onClick={setCollapsed} />
			) : null}
			<div
				className={Sidebar({
					collapsed: collapsed,
				})}
			>
				<div className={Sidebar.Header()}>
					<CompaniesDropdown adminNavHeader={adminNavHeader} />
				</div>
				<div className="flex h-full flex-col justify-between">
					<div className={Sidebar.Body()}>
						{sidebarConfig.map((section, sectionIndex) => (
							<ConditionalWrapper
								key={`section-${sectionIndex}`}
								condition={!!section.title}
								wrapper={(children) => (
									<SidebarMenu title={section.title || ""}>
										{children}
									</SidebarMenu>
								)}
							>
								{section.items.map((item, itemIndex) => (
									<SidebarItem
										key={`item-${itemIndex}`}
										isActive={pathname === item.href}
										title={item.title}
										icon={item.icon}
										href={item.href}
									/>
								))}
							</ConditionalWrapper>
						))}
					</div>
				</div>
			</div>
		</aside>
	);
};
