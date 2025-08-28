import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect } from "react";
import { useAppSelector } from "~/src/app/store/hook";
import { selectNav } from "~/src/app/store/reducers/navigation.slice";

export const useStickyCursor = () => {
	const { cursorHovered } = useAppSelector(selectNav);
	const cursorSize = cursorHovered ? 60 : 15;
	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothOptions = {
		damping: 20,
		stiffness: 300,
		mass: 0.5,
	};
	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	const manageMouseMove = useCallback(
		(e: MouseEvent) => {
			const { clientX, clientY } = e;
			mouse.x.set(clientX - cursorSize / 2);
			mouse.y.set(clientY - cursorSize / 2);
		},
		[cursorSize, mouse],
	);

	useEffect(() => {
		window.addEventListener("mousemove", manageMouseMove);
		return () => {
			window.removeEventListener("mousemove", manageMouseMove);
		};
	}, [cursorSize, manageMouseMove]);

	return {
		smoothMouse,
		cursorSize,
	};
};
