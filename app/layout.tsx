import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./footer";
import { HeaderBar } from "./headerBar";

export const metadata: Metadata = {
	title: "OxtailSooop",
	description: "THE portfolio :D",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={"antialiased bg-gray-900 text-gray-200 font-mono"}>
				{
					// <HeaderBar />
				}
				{children}
				<Footer />
			</body>
		</html>
	);
}
