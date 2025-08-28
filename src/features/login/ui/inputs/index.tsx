"use client";
import React from "react";

import classes from "./login-inputs.module.scss";
import TextInput from "~/src/shared/ui/inputs/text-input";
import StickyCursorItem from "~/src/shared/ui/sticky-cursor/ui/item";
import { loginInputs } from "~/src/features/login/model/login.const";

export default function LoginInputs() {
	const [focused, setFocused] = React.useState<boolean>(false);
	return (
		<div className={`${classes.wrapper} flex-column`}>
			<div
				role="list"
				className={`flex-column ${classes.container}`}
			>
				{loginInputs.map((item, index) => {
					return (
						<StickyCursorItem
							key={index + item.name}
							className={`${classes.inputContainer}`}
						>
							<TextInput
								classNameInput={classes.input}
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
							/>
							<span className={`${classes.inputPlaceholder}`}>{item.title}</span>
						</StickyCursorItem>
					);
				})}
			</div>
		</div>
	);
}
