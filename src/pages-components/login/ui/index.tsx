import React from "react";
import PageWrapper from "~/src/entities/page-wrapper/ui";
import Login from "~/src/features/login/ui";

export default function LoginPage() {
	return (
		<PageWrapper needHeader={false}>
			<Login />
		</PageWrapper>
	);
}
