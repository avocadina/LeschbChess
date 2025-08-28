"use client";
import React from "react";
import { useAppDispatch } from "~/src/app/store/hook";
import { setNavigation } from "~/src/app/store/reducers/navigation.slice";

import Magnetic from "~/src/shared/ui/magnetic/ui";

interface Props {
	children: React.ReactNode;
}

export default function StickyCursorItem({ children }: Props) {
	const dispatch = useAppDispatch();

	const handleSetHover = (hovered: boolean) => {
		dispatch(
			setNavigation({
				cursorHovered: hovered,
			}),
		);
	};

	return (
		<Magnetic
			onMouseEnter={() => handleSetHover(true)}
			onMouseLeave={() => handleSetHover(false)}
		>
			{children}
		</Magnetic>
	);
}
