import React from "react";
import { Container, ContainerProps } from "..";

interface Props extends ContainerProps {
	children: React.ReactNode;
}

export default function ModalGrayContainer(props: Props) {
	return (
		<Container
			color="modal-gray"
			{...props}
		>
			{props.children}
		</Container>
	);
}
