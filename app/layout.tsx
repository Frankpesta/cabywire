import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cabwire - Ride with Freedom. Drive with Purpose.",
	description:
		"Get ready for a smarter, fairer, and more human ride-hailing experience. Cabwire is launching soon across Canada and the USA.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="flex min-h-screen flex-col">
						<Header />
						<main className="flex-1 pt-16">{children}</main>
						<Footer />
					</div>
					<Toaster position="top-right" />
				</ThemeProvider>
			</body>
		</html>
	);
}
