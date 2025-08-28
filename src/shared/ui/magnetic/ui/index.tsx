"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMagentic } from "../lib/hooks/useMagnetic.hook";

import classes from "./magnetic.module.scss";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Magnetic(props: Props) {
	const { children, onMouseEnter, onMouseLeave, ...rest } = props;
	const { x, y, ref, reset, handleMouse } = useMagentic();

	return (
		<motion.div
			ref={ref}
			onMouseMove={(e) => {
				handleMouse(e);
				onMouseEnter?.(e);
			}}
			onMouseLeave={(e) => {
				reset();
				onMouseLeave?.(e);
			}}
			style={{ position: "relative" }}
			animate={{ x, y }}
			transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
			className={classNames(rest.className, classes.container)}
		>
			<div className={classes.bounds}></div>
			{children}
		</motion.div>
	);
}
