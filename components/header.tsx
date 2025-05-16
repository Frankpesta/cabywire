"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Us" },
	{ href: "/terms", label: "Terms" },
	{ href: "/privacy", label: "Privacy" },
	{ href: "/cookie-policy", label: "Cookie Policy" },
];

export function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 z-50 w-full transition-all duration-300",
				scrolled
					? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3"
					: "bg-transparent py-5"
			)}>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<Link href="/" className="flex items-center gap-2 relative z-10">
					<Image
						src={"/logo.svg"}
						width={100}
						height={100}
						alt="logo"
						objectFit="cover"
					/>
				</Link>

				<div className="flex items-center gap-4">
					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						<AnimatePresence>
							{navLinks.map((link) => (
								<motion.div
									key={link.href}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: navLinks.indexOf(link) * 0.1,
									}}>
									<Link
										href={link.href}
										className={cn(
											"text-sm font-medium transition-all duration-200 hover:text-primary relative py-2",
											pathname === link.href
												? "text-primary"
												: "text-foreground/70"
										)}>
										{link.label}
										{pathname === link.href && (
											<motion.span
												className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
												layoutId="navbar-indicator"
												transition={{
													type: "spring",
													stiffness: 350,
													damping: 30,
												}}
											/>
										)}
									</Link>
								</motion.div>
							))}
						</AnimatePresence>
					</nav>

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}>
						<ModeToggle />
					</motion.div>

					{/* Mobile Navigation */}
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild className="md:hidden">
							<Button variant="ghost" size="icon" className="relative z-10">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="px-6 py-6">
							<div className="flex flex-col h-full">
								<div className="flex justify-between items-center mb-8 pr-6">
									<Image
										src={"/logo.svg"}
										alt="logo"
										width={100}
										height={100}
										objectFit="cover"
									/>
								</div>
								<nav className="flex flex-col gap-6 mt-8">
									{navLinks.map((link, index) => (
										<motion.div
											key={link.href}
											initial={{ opacity: 0, x: 50 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3, delay: index * 0.1 }}>
											<Link
												href={link.href}
												className={cn(
													"text-xl font-medium transition-colors hover:text-primary flex items-center",
													pathname === link.href
														? "text-primary"
														: "text-foreground/70"
												)}
												onClick={() => setOpen(false)}>
												{link.label}
												{pathname === link.href && (
													<span className="ml-2 h-1.5 w-1.5 rounded-full bg-primary" />
												)}
											</Link>
										</motion.div>
									))}
								</nav>
								<div className="mt-auto mb-8 pr-6">
									<Link href="/#waitlist" onClick={() => setOpen(false)}>
										<Button className="w-full" size="lg">
											Join Waitlist
										</Button>
									</Link>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
