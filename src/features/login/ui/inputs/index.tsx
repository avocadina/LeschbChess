"use client";
import React from "react";
import classNames from "classnames";

import classes from "./login-inputs.module.scss";
import TextInput from "~/src/shared/ui/inputs/text-input";
import StickyCursorItem from "~/src/shared/ui/sticky-cursor/ui/item";
import { loginInputs } from "~/src/features/login/model/login.const";

export default function LoginInputs() {
	const [focused, setFocused] = React.useState<number | null>(null);
	return (
		<div
			role="list"
			className={`flex-column ${classes.container}`}
		>
			{loginInputs.map((item, index) => {
				return (
					<StickyCursorItem
						key={index + item.name}
						className={classNames(classes.inputContainer, {
							[classes.focused]: focused === index,
						})}
					>
						<TextInput
							classNameInput={classes.input}
							onFocus={() => setFocused(index)}
							onBlur={() => setFocused(null)}
						/>
						<span className={`${classes.inputPlaceholder}`}>{item.title}</span>
					</StickyCursorItem>
				);
			})}
		</div>
	);
}
