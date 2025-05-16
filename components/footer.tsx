import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
	return (
		<footer className="border-t border-border/40 bg-secondary/50 dark:bg-secondary/10 py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-2">
							<Image
								src="/logo.svg"
								alt="Cabwire Logo"
								width={100}
								height={100}
								objectFit="cover"
							/>
						</Link>
						<p className="text-muted-foreground">
							Ride with Freedom. Drive with Purpose.
						</p>
						<div className="flex space-x-4">
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors">
								<Facebook size={20} />
								<span className="sr-only">Facebook</span>
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors">
								<Twitter size={20} />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors">
								<Instagram size={20} />
								<span className="sr-only">Instagram</span>
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors">
								<Linkedin size={20} />
								<span className="sr-only">LinkedIn</span>
							</Link>
						</div>
					</div>

					<div>
						<h3 className="font-semibold text-lg mb-4">Company</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/about"
									className="text-muted-foreground hover:text-primary transition-colors">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors">
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors">
									Press
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-lg mb-4">Legal</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/terms"
									className="text-muted-foreground hover:text-primary transition-colors">
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="text-muted-foreground hover:text-primary transition-colors">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/cookie-policy"
									className="text-muted-foreground hover:text-primary transition-colors">
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors">
									Licenses
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-lg mb-4">Join Us</h3>
						<p className="text-muted-foreground mb-4">
							Be the first to know when we launch in your city.
						</p>
						<Link href="/#waitlist">
							<Button className="w-full">Join Waitlist</Button>
						</Link>
					</div>
				</div>

				<div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Cabwire. All rights reserved.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-primary transition-colors">
							Accessibility
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-primary transition-colors">
							Sitemap
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-primary transition-colors">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
