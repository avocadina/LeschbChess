import React from "react";

import classes from "./login.module.scss";
import ModalGrayContainer from "~/src/shared/ui/containers/modal-gray";
import LoginInputs from "./inputs";
import LoginButton from "./button";

export default function Login() {
	return (
		<div className={`${classes.wrapper}`}>
			<ModalGrayContainer
				className={`${classes.loginContainer} flex-column`}
				radius={20}
				padding="20px"
			>
				<LoginInputs />
				<LoginButton />
			</ModalGrayContainer>
		</div>
	);
}
