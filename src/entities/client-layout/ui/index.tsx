"use client";
import React from "react";
import { useClientLayout } from "~/src/entities/client-layout/lib/hooks/useClientLayout.hook";
import StairsTransition from "~/src/shared/ui/stairs-transition/ui";
import StickyCursor from "~/src/shared/ui/sticky-cursor/ui";

interface Props {
	children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
	useClientLayout();

	return (
		<StairsTransition>
			<StickyCursor />
			<div
				role="main"
				className={"main"}
			>
				{children}
			</div>
		</StairsTransition>
	);
}
