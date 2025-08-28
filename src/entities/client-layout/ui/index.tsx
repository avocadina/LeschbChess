"use client";
import React from "react";
import { useClientLayout } from "~/src/entities/client-layout/lib/hooks/useClientLayout.hook";
import StairsTransition from "~/src/shared/ui/stairs-transition/ui";

interface Props {
	children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
	useClientLayout();

	return (
		<StairsTransition>
			<div
				role="main"
				className={"main"}
			>
				{children}
			</div>
		</StairsTransition>
	);
}
