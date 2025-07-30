import type { Metadata } from "next";
import ClientRootLayout from "./client-layout";

export const metadata: Metadata = {
	title: "leSchb Chess",
	description: "Сайт с информацией по шахматам (в разработке)",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={``}>
				<ClientRootLayout>{children}</ClientRootLayout>
			</body>
		</html>
	);
}
