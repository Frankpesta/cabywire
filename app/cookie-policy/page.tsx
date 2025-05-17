"use client";

import { motion } from "framer-motion";
import { Cookie, AlertCircle, Info, Settings, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function CookiePolicyPage() {
	return (
		<div className="bg-background">
			{/* Hero Section */}
			<div className="relative pt-32 pb-20">
				{/* Background Elements */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-30" />
					<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 dark:bg-primary/5" />
					<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 dark:bg-blue-500/5" />
				</div>

				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						animate="visible"
						variants={staggerContainer}
						className="max-w-4xl mx-auto text-center">
						<motion.div variants={fadeIn}>
							<h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
								Cookie Policy
							</h1>
						</motion.div>
						<motion.div variants={fadeIn}>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								This policy explains how we use cookies and similar technologies
								on our website and services.
							</p>
						</motion.div>
						<motion.div variants={fadeIn} className="mt-8">
							<p className="text-sm text-muted-foreground">
								Last Updated: May 15, 2025
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Cookie Types Visual Section */}
			<section className="py-12 bg-gradient-subtle dark:bg-secondary/5">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto">
						<div className="grid md:grid-cols-4 gap-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.1 }}
								className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg text-center">
								<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Cookie className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-semibold mb-2">Essential</h3>
								<p className="text-sm text-muted-foreground">
									Required for basic website functionality
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg text-center">
								<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Settings className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-semibold mb-2">Functional</h3>
								<p className="text-sm text-muted-foreground">
									Remember your preferences and settings
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg text-center">
								<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Info className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-semibold mb-2">Analytics</h3>
								<p className="text-sm text-muted-foreground">
									Help us understand how visitors use our site
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg text-center">
								<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Clock className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-semibold mb-2">Advertising</h3>
								<p className="text-sm text-muted-foreground">
									Deliver relevant advertisements to you
								</p>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={staggerContainer}
							className="space-y-12">
							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">1. What are Cookies?</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground">
										Cookies are small data files that are placed on your
										computer or mobile device when you visit a website. Cookies
										are widely used by website owners to make their websites
										work, or to work more efficiently, as well as to provide
										reporting information.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">2. How We Use Cookies</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										We use cookies for the following purposes:
									</p>
									<div className="space-y-4">
										<div className="bg-secondary/50 dark:bg-secondary/20 p-4 rounded-lg">
											<h3 className="font-semibold mb-2">Essential cookies</h3>
											<p className="text-sm text-muted-foreground">
												These are necessary for the website to function
												properly. They enable basic functions like page
												navigation, secure areas, and account authentication.
												The website cannot function properly without these
												cookies.
											</p>
										</div>

										<div className="bg-secondary/50 dark:bg-secondary/20 p-4 rounded-lg">
											<h3 className="font-semibold mb-2">
												Functionality cookies
											</h3>
											<p className="text-sm text-muted-foreground">
												These enable personalized features and remember your
												preferences, such as language selection, region, or
												display settings. They enhance your user experience but
												are not essential.
											</p>
										</div>

										<div className="bg-secondary/50 dark:bg-secondary/20 p-4 rounded-lg">
											<h3 className="font-semibold mb-2">Analytics cookies</h3>
											<p className="text-sm text-muted-foreground">
												These help us understand how visitors interact with our
												website by collecting and reporting information
												anonymously. They show us which pages are popular, how
												visitors move around the site, and if they encounter
												errors.
											</p>
										</div>

										<div className="bg-secondary/50 dark:bg-secondary/20 p-4 rounded-lg">
											<h3 className="font-semibold mb-2">
												Advertising cookies
											</h3>
											<p className="text-sm text-muted-foreground">
												These are used to deliver advertisements relevant to you
												and your interests. They are also used to limit the
												number of times you see an advertisement and help
												measure the effectiveness of advertising campaigns.
											</p>
										</div>
									</div>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">
									3. Your Choices Regarding Cookies
								</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										You can set your browser to refuse all or some browser
										cookies, or to alert you when websites set or access
										cookies. If you disable or refuse cookies, please note that
										some parts of this website may become inaccessible or not
										function properly.
									</p>
									<p className="text-muted-foreground mb-4">
										Most web browsers allow some control of most cookies through
										the browser settings. To find out more about cookies,
										including how to see what cookies have been set and how to
										manage and delete them, visit
										<a
											href="https://www.allaboutcookies.org"
											className="text-primary ml-1 hover:underline">
											www.allaboutcookies.org
										</a>
										.
									</p>
									<div className="bg-primary/5 p-4 rounded-lg">
										<h3 className="font-semibold mb-2 flex items-center">
											<AlertCircle className="h-4 w-4 mr-2 text-primary" />
											Cookie Consent
										</h3>
										<p className="text-sm text-muted-foreground">
											When you first visit our website, we will ask for your
											consent to use non-essential cookies. You can change your
											preferences at any time by clicking on the "Cookie
											Settings" link in the footer of our website.
										</p>
									</div>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">
									4. Types of Cookies We Use
								</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										We use the following types of cookies:
									</p>
									<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
										<li>
											<span className="font-medium">Session Cookies:</span>{" "}
											These are temporary and are erased when you close your
											browser. They help our website remember what you selected
											on the previous page to avoid having to re-enter
											information.
										</li>
										<li>
											<span className="font-medium">Persistent Cookies:</span>{" "}
											These remain on your device until you erase them or they
											expire. They help us recognize you as an existing user so
											it's easier to return to our site or interact with our
											services without signing in again.
										</li>
										<li>
											<span className="font-medium">First-party Cookies:</span>{" "}
											These are set by the website you are visiting (in this
											case, Cabwire).
										</li>
										<li>
											<span className="font-medium">Third-party Cookies:</span>{" "}
											These are set by a third party service provider on our
											behalf. We use these for analytics, marketing, and
											functionality purposes.
										</li>
									</ul>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">
									5. Changes to This Cookie Policy
								</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground">
										We may update our Cookie Policy from time to time. We will
										notify you of any changes by posting the new Cookie Policy
										on this page and updating the "Last Updated" date. You are
										advised to review this Cookie Policy periodically for any
										changes.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">6. Contact Us</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										If you have any questions about our Cookie Policy, please
										contact us at:
									</p>
									<p className="text-muted-foreground font-medium">
										privacy@cabwire.com
									</p>
								</div>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="mt-12 text-center">
							<Link href="/">
								<Button variant="outline" size="lg" className="rounded-full">
									Back to Home
								</Button>
							</Link>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
