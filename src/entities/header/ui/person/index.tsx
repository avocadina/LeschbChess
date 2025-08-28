import React from "react";
import classNames from "classnames";

import classes from "./header-person.module.scss";
import Person from "~/public/header/person.svg";
import LinkContainer from "~/src/shared/ui/containers/link-container";
import StickyCursorItem from "~/src/shared/ui/sticky-cursor/ui/item";

export default function HeaderPerson() {
	return (
		<LinkContainer
			href="/login"
			className={classNames(classes.loggedOut)}
		>
			<StickyCursorItem>
				<Person />
			</StickyCursorItem>
		</LinkContainer>
	);
}
