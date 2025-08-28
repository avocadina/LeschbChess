import type { Metadata } from "next";
import ClientRootLayout from "./client-layout";

import "./styles/reset.scss";
import "./styles/global.scss";
import "./styles/globals.css";

export const metadata: Metadata = {
	title: "leSchb Chess",
	description: "Сайт с информацией по шахматам (в разработке)",
	icons: ["/logo.png"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`body`}>
				<ClientRootLayout>{children}</ClientRootLayout>
			</body>
		</html>
	);
}
