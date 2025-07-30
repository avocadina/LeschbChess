"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "..";

interface Props {
	children: React.ReactNode;
}

export default function StoreProvider({ children }: Readonly<Props>) {
	return <Provider store={store}>{children}</Provider>;
}
