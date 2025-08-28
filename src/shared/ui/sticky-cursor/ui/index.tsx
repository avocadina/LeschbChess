"use client";
import React from "react";
import { useStickyCursor } from "../lib/hooks/useStickyCursor.hook";
import { motion } from "framer-motion";

import classes from "./sticky-cursor.module.scss";
import classNames from "classnames";

export default function StickyCursor() {
	const { smoothMouse, cursorSize } = useStickyCursor();

	return (
		<div className={classNames(classes.cursorContainer)}>
			<motion.div
				className={classNames(classes.cursor)}
				style={{
					left: smoothMouse.x,
					top: smoothMouse.y,
				}}
				animate={{
					width: cursorSize,
					height: cursorSize,
				}}
			></motion.div>
		</div>
	);
}
