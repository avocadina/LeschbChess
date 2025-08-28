import React from "react";

import { motion } from "framer-motion";
import classes from "./stairs-transition.module.scss";
import { expand, opacity } from "../lib/animations/animations";

interface Props {
	children: React.ReactNode;
}

export default function StairsTransition({ children }: Props) {
	const anim = (variants: any, custom: number | null = null) => {
		return {
			initial: "initial",
			animate: "enter",
			exit: "exit",
			custom,
			variants,
		};
	};

	const nbOfColumns = 6;
	return (
		<div className={`${classes.stairs}`}>
			<motion.div
				{...anim(opacity)}
				className={`${classes.transitionBg}`}
			/>
			<div className={`${classes.transitionContainer}`}>
				{[...Array(nbOfColumns)].map((_, i) => (
					<motion.div
						key={i}
						{...anim(expand, nbOfColumns - i)}
					/>
				))}
			</div>
			{children}
		</div>
	);
}
