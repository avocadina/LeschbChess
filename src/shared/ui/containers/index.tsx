import React from "react";

export interface ContainerProps {
	className?: string;
	children: React.ReactNode;
	color?: string;
	onClick?: () => void;
	radius?: number;
	padding?: string;
}

export const Container = ({ className, children, color, onClick, radius, padding }: ContainerProps) => {
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
