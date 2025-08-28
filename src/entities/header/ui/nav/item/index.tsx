"use client";
import React from "react";

import classes from "./nav-item.module.scss";
import StickyCursorItem from "~/src/shared/ui/sticky-cursor/ui/item";
import LinkContainer from "~/src/shared/ui/containers/link-container";
import classNames from "classnames";
import { IHeaderNavItem } from "~/src/entities/header/model/header.interface";

interface Props extends IHeaderNavItem {}

export default function HeaderNavItem({ title, link }: Props) {
	return (
		<StickyCursorItem>
			<LinkContainer
				href={link}
				className={classNames(`${classes.link} text-24`)}
			>
				{title}
			</LinkContainer>
		</StickyCursorItem>
	);
}
