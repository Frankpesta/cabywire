"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { motion, useInView } from "framer-motion";
import {
	CheckCircle,
	ChevronRight,
	Clock,
	DollarSign,
	HeartHandshake,
	Shield,
	Users,
} from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

const images = ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"];

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

import { ReactNode, HTMLAttributes } from "react";

type SectionProps = {
	children: ReactNode;
	className?: string;
} & HTMLAttributes<HTMLElement>;

function Section({ children, className, ...props }: SectionProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<section ref={ref} className={className} {...props}>
			<motion.div
				variants={fadeIn}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}>
				{children}
			</motion.div>
		</section>
	);
}

export default function Home() {
	return (
		<div className="bg-background overflow-hidden">
			{/* Hero Section - Completely Redesigned */}
			<section className="relative min-h-screen flex items-center pt-20 pb-20">
				{/* Background Elements */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-30" />
					<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 dark:bg-primary/5" />
					<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 dark:bg-blue-500/5" />
				</div>

				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left Column - Content */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="order-2 lg:order-1">
							<div className="relative">
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl dark:bg-primary/10"
								/>

								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
									className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
									Ride with Freedom. <br />
									Drive with Purpose.
								</motion.h1>

								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									className="text-xl md:text-2xl text-muted-foreground mb-8">
									A smarter, fairer, and more human ride-hailing experience
									launching soon across North America.
								</motion.p>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									className="flex flex-col md:flex-row gap-4">
									<Link href="#waitlist">
										<Button
											size="lg"
											className="text-lg px-8 h-14 rounded-full bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all">
											Join the Waitlist
											<ChevronRight className="ml-2 h-4 w-4" />
										</Button>
									</Link>
									<Link href="#how-it-works">
										<Button
											size="lg"
											variant="outline"
											className="text-lg px-8 h-14 rounded-full border-2 hover:bg-secondary/50 transition-all">
											Learn More
										</Button>
									</Link>
								</motion.div>

								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.6, delay: 0.6 }}
									className="mt-12 flex items-center gap-4">
									<div className="flex -space-x-4">
										{images.map((i) => (
											<div
												key={i}
												className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-blue-600/80 border-2 border-background flex items-center justify-center text-white text-xs font-bold">
												<Image
													src={i}
													alt="people"
													width={100}
													height={100}
													objectFit="cover"
													className="object-cover rounded-[100%] w-full h-full"
												/>
											</div>
										))}
									</div>
									<p className="text-sm text-muted-foreground">
										Join{" "}
										<span className="text-foreground font-medium">2,500+</span>{" "}
										drivers already on the waitlist
									</p>
								</motion.div>
							</div>
						</motion.div>

						{/* Right Column - Image */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="order-1 lg:order-2 relative">
							<div className="relative">
								{/* Decorative elements */}
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-xl -translate-y-1/4 translate-x-1/4 dark:bg-blue-500/10 z-0"
								/>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.3 }}
									className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/20 dark:border-black/20 shadow-2xl">
									<div className="aspect-[4/3] relative">
										<Image
											src="/hero-img.avif"
											alt="Cabwire Ride-Sharing Experience"
											fill
											className="object-cover"
										/>
									</div>
								</motion.div>

								{/* Floating elements */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.6 }}
									className="absolute -bottom-10 -left-10 glass-effect p-4 rounded-xl z-20 shadow-lg animate-float">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
											<DollarSign className="h-5 w-5 text-green-500" />
										</div>
										<div>
											<p className="text-sm font-medium">Lower Commission</p>
											<p className="text-xs text-muted-foreground">
												Keep more of your earnings
											</p>
										</div>
									</div>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.8 }}
									className="absolute -top-5 right-10 glass-effect p-4 rounded-xl z-20 shadow-lg animate-float"
									style={{ animationDelay: "2s" }}>
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
											<Shield className="h-5 w-5 text-blue-500" />
										</div>
										<div>
											<p className="text-sm font-medium">Safe & Reliable</p>
											<p className="text-xs text-muted-foreground">
												Vetted drivers & riders
											</p>
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Bottom wave decoration */}
				<div className="absolute bottom-0 left-0 w-full overflow-hidden">
					<svg
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						className="relative block w-full h-[60px] rotate-180">
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							className="fill-background"></path>
					</svg>
				</div>
			</section>

			{/* Mission & Vision Section */}
			<Section className="py-24 bg-gradient-subtle dark:bg-secondary/5">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-16">
						<div className="space-y-6 relative">
							<div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl dark:bg-primary/5" />
							<h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
							<p className="text-lg text-muted-foreground">
								To transform ride-hailing into a fair, transparent, and
								empowering experience for both drivers and riders — where people
								come first, technology enhances freedom, and earnings are truly
								fair.
							</p>
							<div className="pt-4">
								<Link href="/about">
									<Button variant="link" className="group text-primary p-0">
										Learn more about our mission
										<ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link>
							</div>
						</div>

						<div className="space-y-6 relative">
							<div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl dark:bg-blue-500/5" />
							<h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
							<p className="text-lg text-muted-foreground">
								A world where independent drivers are respected entrepreneurs,
								and every ride — from the first click to drop-off — is powered
								by trust, comfort, and efficiency.
							</p>
							<div className="pt-4">
								<Link href="/about">
									<Button variant="link" className="group text-primary p-0">
										Discover our vision
										<ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* Why We're Different Section */}
			<Section className="py-24" id="why-different">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
							Why We're Different
						</h2>
						<p className="text-lg text-muted-foreground">
							We've listened to drivers. We've studied the gaps. And we've built
							a platform around what truly matters.
						</p>
					</div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						className="grid md:grid-cols-2 gap-12">
						<div className="space-y-8">
							<h3 className="text-2xl font-bold flex items-center">
								<span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
									<Users className="h-5 w-5 text-primary" />
								</span>
								For Drivers
							</h3>

							<div className="space-y-6">
								<motion.div
									variants={fadeIn}
									className="group bg-card hover:bg-secondary/50 p-6 rounded-xl border border-border/50 transition-all hover:shadow-md">
									<div className="flex gap-4">
										<DollarSign className="h-6 w-6 text-primary flex-shrink-0" />
										<div>
											<h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
												Low Commission, High Earnings
											</h4>
											<p className="text-muted-foreground">
												Keep more of your money with one of the most
												driver-friendly rates in the industry.
											</p>
										</div>
									</div>
								</motion.div>

								<motion.div
									variants={fadeIn}
									className="group bg-card hover:bg-secondary/50 p-6 rounded-xl border border-border/50 transition-all hover:shadow-md">
									<div className="flex gap-4">
										<Clock className="h-6 w-6 text-primary flex-shrink-0" />
										<div>
											<h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
												Flexible Schedule
											</h4>
											<p className="text-muted-foreground">
												You choose when to drive. No penalties. No pressure.
											</p>
										</div>
									</div>
								</motion.div>

								<motion.div
									variants={fadeIn}
									className="group bg-card hover:bg-secondary/50 p-6 rounded-xl border border-border/50 transition-all hover:shadow-md">
									<div className="flex gap-4">
										<CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
										<div>
											<h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
												Full Transparency
											</h4>
											<p className="text-muted-foreground">
												See fare details, rider info, and payout summaries — no
												guessing, no surprises.
											</p>
										</div>
									</div>
								</motion.div>
							</div>
						</div>

						<div className="space-y-8">
							<h3 className="text-2xl font-bold flex items-center">
								<span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
									<Users className="h-5 w-5 text-primary" />
								</span>
								For Riders
							</h3>

							<div className="space-y-6">
								<motion.div
									variants={fadeIn}
									className="group bg-card hover:bg-secondary/50 p-6 rounded-xl border border-border/50 transition-all hover:shadow-md">
									<div className="flex gap-4">
										<Shield className="h-6 w-6 text-primary flex-shrink-0" />
										<div>
											<h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
												Fast, Safe, and Affordable Rides
											</h4>
											<p className="text-muted-foreground">
												Whether you're headed to work, home, or somewhere new —
												we'll get you there with ease.
											</p>
										</div>
									</div>
								</motion.div>

								<motion.div
									variants={fadeIn}
									className="group bg-card hover:bg-secondary/50 p-6 rounded-xl border border-border/50 transition-all hover:shadow-md">
									<div className="flex gap-4">
										<CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
										<div>
											<h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
												Real-Time Tracking & Smart Matching
											</h4>
											<p className="text-muted-foreground">
												Powered by intelligent systems to reduce wait times and
												improve route efficiency.
											</p>
										</div>
									</div>
								</motion.div>

								<motion.div
									variants={fadeIn}
									className="group bg-card hover:bg-secondary/50 p-6 rounded-xl border border-border/50 transition-all hover:shadow-md">
									<div className="flex gap-4">
										<HeartHandshake className="h-6 w-6 text-primary flex-shrink-0" />
										<div>
											<h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
												Local-Focused
											</h4>
											<p className="text-muted-foreground">
												We're starting in select cities across Canada and the
												USA — focusing on real needs and local partnerships.
											</p>
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</Section>

			{/* App Showcase Section */}
			<Section className="py-24 bg-gradient-subtle dark:bg-secondary/5 relative overflow-hidden">
				<div className="absolute inset-0 -z-10 mask-radial-faded">
					<div className="absolute inset-0 bg-grid dark:bg-grid-dark" />
				</div>

				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
							Built for the People Behind the Wheel
						</h2>
						<p className="text-lg text-muted-foreground">
							Cabwire is more than a ride-hailing platform — it's an ecosystem
							designed to uplift the people who keep cities moving.
						</p>
					</div>

					<div className="relative h-[600px] mb-16">
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
							<div className="relative w-[280px] h-[570px] rounded-[40px] overflow-hidden border-8 border-foreground/10 shadow-2xl">
								<Image
									src="/samp1.svg"
									alt="Cabwire App Main Screen"
									width={280}
									height={570}
									className="object-cover"
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="absolute left-[15%] md:left-[25%] top-[10%] z-10">
							<div className="relative w-[240px] h-[490px] rounded-[36px] overflow-hidden border-8 border-foreground/10 shadow-xl rotate-[-10deg]">
								<Image
									src="/samp2.svg"
									alt="Cabwire App Screen"
									width={240}
									height={490}
									className="object-cover"
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="absolute right-[15%] md:right-[25%] top-[10%] z-10">
							<div className="relative w-[240px] h-[490px] rounded-[36px] overflow-hidden border-8 border-foreground/10 shadow-xl rotate-[10deg]">
								<Image
									src="/samp3.svg"
									alt="Cabwire App Screen"
									width={240}
									height={490}
									className="object-cover"
								/>
							</div>
						</motion.div>
					</div>

					<div className="max-w-3xl mx-auto">
						<motion.div
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}>
							<h3 className="text-2xl font-bold mb-8 text-center">
								We believe:
							</h3>
							<div className="space-y-6">
								<motion.div
									variants={fadeIn}
									className="bg-card p-6 rounded-xl border border-border/50">
									<p className="flex items-start">
										<span className="mr-4 text-primary">•</span>
										<span>
											Drivers deserve more than just fares — they deserve
											respect.
										</span>
									</p>
								</motion.div>
								<motion.div
									variants={fadeIn}
									className="bg-card p-6 rounded-xl border border-border/50">
									<p className="flex items-start">
										<span className="mr-4 text-primary">•</span>
										<span>
											Riders deserve more than just rides — they deserve peace
											of mind.
										</span>
									</p>
								</motion.div>
								<motion.div
									variants={fadeIn}
									className="bg-card p-6 rounded-xl border border-border/50">
									<p className="flex items-start">
										<span className="mr-4 text-primary">•</span>
										<span>
											Communities deserve platforms that give back, create jobs,
											and build trust.
										</span>
									</p>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</Section>

			{/* How It Works Section */}
			<Section className="py-24" id="how-it-works">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
							How It Works
						</h2>
						<p className="text-lg text-muted-foreground">
							Getting started with Cabwire is simple. Here's what you need to
							know.
						</p>
					</div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid md:grid-cols-3 gap-8">
						<motion.div variants={fadeIn} className="relative">
							<div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-lg dark:bg-primary/5" />
							<div className="bg-card rounded-xl p-8 text-center border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg h-full flex flex-col">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">
									1
								</div>
								<h3 className="text-xl font-semibold mb-4">
									Join the Waitlist
								</h3>
								<p className="text-muted-foreground mb-6 flex-grow">
									Fill out a quick form and reserve your early access. Be among
									the first to experience Cabwire.
								</p>
								<Link href="#waitlist">
									<Button variant="outline" className="w-full">
										Get Started
									</Button>
								</Link>
							</div>
						</motion.div>

						<motion.div variants={fadeIn} className="relative mt-8 md:mt-0">
							<div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-lg dark:bg-primary/5" />
							<div className="bg-card rounded-xl p-8 text-center border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg h-full flex flex-col">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">
									2
								</div>
								<h3 className="text-xl font-semibold mb-4">
									Get Onboarded First
								</h3>
								<p className="text-muted-foreground mb-6 flex-grow">
									As we launch in your city, you'll be among the first to get
									full access to the Cabwire platform.
								</p>
								<Button variant="outline" className="w-full" disabled>
									Coming Soon
								</Button>
							</div>
						</motion.div>

						<motion.div variants={fadeIn} className="relative mt-8 md:mt-0">
							<div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-lg dark:bg-primary/5" />
							<div className="bg-card rounded-xl p-8 text-center border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg h-full flex flex-col">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">
									3
								</div>
								<h3 className="text-xl font-semibold mb-4">
									Start Earning Instantly
								</h3>
								<p className="text-muted-foreground mb-6 flex-grow">
									Download the Cabwire Driver app and hit the road on your
									schedule. Enjoy better earnings from day one.
								</p>
								<Button variant="outline" className="w-full" disabled>
									Coming Soon
								</Button>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</Section>

			{/* Who Can Sign Up Section */}
			<Section className="py-24 bg-gradient-subtle dark:bg-secondary/5">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
							Who Can Sign Up as a Driver?
						</h2>

						<motion.div
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="space-y-4">
							<motion.div
								variants={fadeIn}
								className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-md">
								<div className="flex items-start">
									<div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
										<CheckCircle className="h-5 w-5 text-primary" />
									</div>
									<p>You're at least 18 years old</p>
								</div>
							</motion.div>

							<motion.div
								variants={fadeIn}
								className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-md">
								<div className="flex items-start">
									<div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
										<CheckCircle className="h-5 w-5 text-primary" />
									</div>
									<p>
										You have a valid driver's license and clean driving record
									</p>
								</div>
							</motion.div>

							<motion.div
								variants={fadeIn}
								className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-md">
								<div className="flex items-start">
									<div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
										<CheckCircle className="h-5 w-5 text-primary" />
									</div>
									<p>You own or lease a vehicle that meets city requirements</p>
								</div>
							</motion.div>

							<motion.div
								variants={fadeIn}
								className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-md">
								<div className="flex items-start">
									<div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
										<CheckCircle className="h-5 w-5 text-primary" />
									</div>
									<p>You want control over your income and work-life</p>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</Section>

			{/* FAQ Section */}
			<Section className="py-24" id="faq">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-muted-foreground">
							Got questions? We've got answers. If you don't see what you're
							looking for, reach out to our team.
						</p>
					</div>

					<div className="max-w-3xl mx-auto">
						<FaqAccordion />
					</div>
				</div>
			</Section>

			{/* Waitlist Section */}
			<Section
				className="py-24 bg-gradient-subtle dark:bg-secondary/5 relative"
				id="waitlist">
				<div className="absolute inset-0 -z-10 mask-radial-faded">
					<div className="absolute inset-0 bg-grid dark:bg-grid-dark" />
				</div>

				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
								Join the Driver Waitlist
							</h2>
							<p className="text-lg text-muted-foreground">
								Be the first to earn, grow, and lead with Cabwire. Early members
								get exclusive perks and priority access.
							</p>
						</div>

						<div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-lg">
							<WaitlistForm />
						</div>
					</div>
				</div>
			</Section>

			{/* Final CTA Section */}
			<Section className="py-24">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
							Ready to Drive the Future?
						</h2>
						<p className="text-xl mb-10">
							Cabwire is calling. Your seat's waiting.
						</p>

						<div className="flex flex-col md:flex-row gap-4 justify-center">
							<Link href="#waitlist">
								<Button
									size="lg"
									className="text-lg px-8 h-14 rounded-full bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all">
									Join the Waitlist
									<ChevronRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							<Link href="/about">
								<Button
									size="lg"
									variant="outline"
									className="text-lg px-8 h-14 rounded-full border-2 hover:bg-secondary/50 transition-all">
									Learn More
								</Button>
							</Link>
						</div>

						<p className="text-sm text-muted-foreground mt-6">
							Early access. Exclusive perks. More money in your pocket.
						</p>
					</div>
				</div>
			</Section>
		</div>
	);
}
