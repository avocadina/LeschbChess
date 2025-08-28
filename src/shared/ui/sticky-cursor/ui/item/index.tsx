"use client";
import classNames from "classnames";
import React from "react";
import { useAppDispatch } from "~/src/app/store/hook";
import { setNavigation } from "~/src/app/store/reducers/navigation.slice";

import Magnetic from "~/src/shared/ui/magnetic/ui";

interface Props {
	children: React.ReactNode;
	needMagnet?: boolean;
	className?: string;
}

export default function StickyCursorItem({ children, needMagnet = false, className }: Props) {
	const dispatch = useAppDispatch();

	const handleSetHover = (hovered: boolean) => {
		dispatch(
			setNavigation({
				cursorHovered: hovered,
			}),
		);
	};
	const classNameLocal = classNames("pointer", className);

	if (needMagnet) {
		return (
			<Magnetic
				onMouseEnter={() => handleSetHover(true)}
				onMouseLeave={() => handleSetHover(false)}
				className={classNameLocal}
			>
				{children}
			</Magnetic>
		);
	}

	return (
		<div
			onMouseEnter={() => handleSetHover(true)}
			onMouseLeave={() => handleSetHover(false)}
			className={classNameLocal}
		>
			{children}
		</div>
	);
}
