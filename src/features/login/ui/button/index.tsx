"use client";
import React from "react";
import Button from "~/src/shared/ui/button";

export default function LoginButton() {
	return (
		<Button
			typeButton="light-blue"
			size="12-16"
			radius={16}
		>
			<span className="white medium">Continue</span>
		</Button>
	);
}
