"use client";
import React from "react";
import Header from "../../header/ui";
import StairsTransition from "~/src/shared/ui/stairs-transition/ui";

interface Props {
	children: React.ReactNode;
	needHeader?: boolean;
}

export default function PageWrapper({ children, needHeader = true }: Props) {
	return (
		<StairsTransition>
			{needHeader && <Header />}
			<div
				role="main"
				className="main"
			>
				{children}
			</div>
		</StairsTransition>
	);
}
