import { useEffect, useState } from "react";
import { useAppSelector } from "~/src/app/store/hook";
import { selectNav } from "~/src/app/store/reducers/navigation.slice";

export const useCheckIfDesktop = () => {
	const { deviceType } = useAppSelector(selectNav);
	const [isDesktop, setIsDesktop] = useState<boolean>(false);

	useEffect(() => {
		if (deviceType === "web") {
			setIsDesktop(true);
		} else {
			setIsDesktop(false);
		}
	}, [deviceType]);

	return isDesktop;
};
