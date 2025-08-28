import React from "react";

export interface ContainerProps {
	className?: string;
	radius?: number;
	padding?: string;
	onClick?: () => void;
}

interface Props extends ContainerProps {
	color: string;
	children: React.ReactNode;
}

export const Container = ({ className, children, color, onClick, radius, padding }: Props) => {
	return (
		<div
			className={`${className} bg-${color}`}
			onClick={onClick}
			style={{ borderRadius: radius, padding }}
		>
			{children}
		</div>
	);
};
