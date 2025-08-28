import { useRef, useState } from "react";
import { useCheckIfDesktop } from "~/src/shared/lib/hooks/useCheckIfDescktop.hook";
import { positionXY } from "~/src/shared/model/shared.const";
import { PostionXY } from "~/src/shared/model/shared.interface";

export const useMagentic = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState<PostionXY>(positionXY);
	const isDesktop = useCheckIfDesktop();

	const handleSetPostion = (x: number, y: number) => {
		setPosition({ x, y });
	};

	const reset = () => {
		handleSetPostion(0, 0);
	};

	const handleMouse = (e: React.MouseEvent) => {
		if (!ref.current) return;
		if (!isDesktop) return;
		const { clientX, clientY } = e;
		const { height, width, top, left } = ref.current.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		handleSetPostion(middleX, middleY);
	};

	return {
		x: position.x,
		y: position.y,
		ref,
		handleMouse,
		reset,
	};
};
