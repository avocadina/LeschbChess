import React from "react";
import Header from "../../header/ui";

interface Props {
	children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
	return (
		<>
			<Header />
			<div
				role="main"
				className="main"
			>
				{children}
			</div>
		</>
	);
}
