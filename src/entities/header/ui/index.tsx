import React from "react";

import classes from "./header.module.scss";
import HeaderLogo from "./logo";
import HeaderNav from "./nav";
import HeaderPerson from "./person";

export default function Header() {
	return (
		<div
			role="header"
			className={`${classes.header}`}
		>
			<div className={`wrapper flex-row ${classes.header__wrapper}`}>
				<HeaderLogo />
				<div className={`flex-row gap-6 align-center`}>
					<HeaderNav />
					<HeaderPerson />
				</div>
			</div>
		</div>
	);
}
