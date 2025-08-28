import React from "react";

import classes from "./nav.module.scss";
import classNames from "classnames";
import { headerNav } from "../../model/header.const";
import HeaderNavItem from "./item";

export default function HeaderNav() {
	return (
		<nav className={classNames(`${classes.container} flex-row`)}>
			{headerNav.map((item, index) => (
				<HeaderNavItem
					key={index + item.link}
					title={item.title}
					link={item.link}
				/>
			))}
		</nav>
	);
}
