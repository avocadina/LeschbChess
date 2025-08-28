import React from "react";
import { Container, ContainerProps } from "..";

interface Props extends ContainerProps {
	children: React.ReactNode;
}

export default function WhiteContainer({ onClick, className, children, padding, radius }: Props) {
	return (
		<Container
			color={"white"}
			className={className}
			onClick={onClick}
			padding={padding}
			radius={radius}
		>
			{children}
		</Container>
	);
}
