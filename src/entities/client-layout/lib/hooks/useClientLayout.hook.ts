import { useCallback, useEffect } from "react";
import { useAppDispatch } from "~/src/app/store/hook";
import { setNavigation } from "~/src/app/store/reducers/navigation.slice";
import Lenis from "@studio-freight/lenis";

export const useClientLayout = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
		return () => {
			lenis.destroy();
		};
	}, []);

	const declareDeviceType = useCallback(() => {
		const isMobile = /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
		if (isIos) {
			dispatch(
				setNavigation({
					deviceType: "ios",
				}),
			);
		} else if (isMobile) {
			dispatch(
				setNavigation({
					deviceType: "android",
				}),
			);
		}
	}, [dispatch]);

	useEffect(() => {
		declareDeviceType();
	}, [declareDeviceType]);
};
