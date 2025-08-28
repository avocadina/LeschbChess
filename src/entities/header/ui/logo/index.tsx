"use client";
import React from "react";

import classes from "./header-logo.module.scss";
import LogoImage from "~/public/logo-with-text.svg";
import StickyCursorItem from "~/src/shared/ui/sticky-cursor/ui/item";
import LinkContainer from "~/src/shared/ui/containers/link-container";

export default function HeaderLogo() {
	return (
		<LinkContainer href="/home">
			<StickyCursorItem
				needMagnet={false}
				className={classes.container}
			>
				<LogoImage className={classes.logo} />
				<LogoImage className={classes.logoBlue} />
			</StickyCursorItem>
		</LinkContainer>
	);
}
