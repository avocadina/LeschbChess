import React from "react";
import { Container, ContainerProps } from "..";

interface Props extends ContainerProps {
	children: React.ReactNode;
}

export default function BlackContainer(props: Props) {
	return (
		<Container
			color={"black"}
			{...props}
		>
			{props.children}
		</Container>
	);
}
