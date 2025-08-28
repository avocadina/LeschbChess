import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";

export const useClientLayout = () => {
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
};
