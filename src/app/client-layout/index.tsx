import React from "react";
import StoreProvider from "../store/store-provider";
import ClientLayout from "~/src/entities/client-layout/ui";

interface Props {
	children: React.ReactNode;
}

export default function ClientRootLayout({ children }: Props) {
	return (
		<StoreProvider>
			<ClientLayout>{children}</ClientLayout>
		</StoreProvider>
	);
}
