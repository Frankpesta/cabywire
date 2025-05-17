"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
	ChevronRight,
	Users,
	Shield,
	DollarSign,
	HeartHandshake,
} from "lucide-react";
import Image from "next/image";

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

export default function AboutPage() {
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
								About Cabwire
							</h1>
						</motion.div>
						<motion.div variants={fadeIn}>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								Transforming ride-hailing with fairness, transparency, and human
								connection.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Our Story Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold text-gradient">
								Our Story
							</h2>
							<p className="text-lg">
								Cabwire began when our founding team — a mix of former
								ride-hailing drivers, tech innovators, and transportation
								experts — came together with a shared vision: to build a
								ride-hailing platform that puts people first.
							</p>
							<p className="text-lg">
								We spent months talking to drivers across North America,
								understanding their challenges, frustrations, and hopes. We
								heard stories of unpredictable earnings, opaque algorithms, and
								a growing disconnect between platforms and the people who power
								them.
							</p>
							<p className="text-lg">
								These conversations shaped our core principles and the
								technology we're building. Every feature, policy, and decision
								at Cabwire is guided by a simple question: "Is this fair and
								beneficial for both drivers and riders?"
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative">
							<div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl dark:bg-primary/5" />
							<div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/20 dark:border-black/20 shadow-2xl">
								<Image
									src="/about-image.jpg"
									alt="Cabwire Team"
									width={600}
									height={400}
									className="w-full h-auto object-cover"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Mission & Values Section */}
			<section className="py-20 bg-gradient-subtle dark:bg-secondary/5 relative">
				<div className="absolute inset-0 -z-10 mask-radial-faded">
					<div className="absolute inset-0 bg-grid dark:bg-grid-dark" />
				</div>

				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
							Our Mission & Values
						</h2>
						<p className="text-lg text-muted-foreground">
							We're building Cabwire for the long haul — creating sustainable
							practices that benefit drivers, riders, and the communities we
							serve.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
							<div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
								<Users className="h-7 w-7 text-primary" />
							</div>
							<h3 className="text-xl font-bold mb-3">People First</h3>
							<p className="text-muted-foreground">
								We believe that when drivers are treated with respect and fairly
								compensated, everyone wins.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
							<div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
								<Shield className="h-7 w-7 text-primary" />
							</div>
							<h3 className="text-xl font-bold mb-3">Transparency</h3>
							<p className="text-muted-foreground">
								No hidden fees, no surprise costs, no opaque algorithms. Just
								clear, honest business.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
							<div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
								<DollarSign className="h-7 w-7 text-primary" />
							</div>
							<h3 className="text-xl font-bold mb-3">Fair Earnings</h3>
							<p className="text-muted-foreground">
								We believe drivers deserve to keep more of what they earn, with
								lower commission rates.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
							<div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
								<HeartHandshake className="h-7 w-7 text-primary" />
							</div>
							<h3 className="text-xl font-bold mb-3">Community Impact</h3>
							<p className="text-muted-foreground">
								We're committed to making a positive impact in every city we
								operate in.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Leadership Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
							Our Leadership
						</h2>
						<p className="text-lg text-muted-foreground">
							Meet the team that's reimagining what ride-hailing can be when
							built on a foundation of fairness, transparency, and human
							connection.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
							<div className="h-64 relative">
								<Image
									src="/team-member-1.jpg"
									alt="Sarah Johnson"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
								<p className="text-primary mb-3">CEO & Co-Founder</p>
								<p className="text-muted-foreground">
									Former ride-share driver turned tech entrepreneur with a
									passion for fair business practices.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
							<div className="h-64 relative">
								<Image
									src="/team-member-2.jpg"
									alt="Michael Chen"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-1">Michael Chen</h3>
								<p className="text-primary mb-3">CTO & Co-Founder</p>
								<p className="text-muted-foreground">
									Tech innovator with 15+ years experience building scalable
									transportation platforms.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
							<div className="h-64 relative">
								<Image
									src="/team-member-3.jpg"
									alt="Aisha Patel"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-1">Aisha Patel</h3>
								<p className="text-primary mb-3">COO</p>
								<p className="text-muted-foreground">
									Operations expert with a background in urban transportation
									planning and policy.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Looking Forward Section */}
			<section className="py-20 bg-gradient-subtle dark:bg-secondary/5">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold text-gradient text-center">
								Looking Forward
							</h2>
							<p className="text-lg">
								As we prepare to launch across select cities in Canada and the
								USA, we're excited to introduce a ride-hailing experience that
								values human connection as much as technological innovation.
							</p>
							<p className="text-lg">
								We're building Cabwire for the long haul — creating sustainable
								practices that benefit drivers, riders, and the communities we
								serve. We believe that when drivers are treated with respect and
								fairly compensated, everyone wins.
							</p>
							<p className="text-lg">
								Join us as we reimagine what ride-hailing can be when built on a
								foundation of fairness, transparency, and human connection.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="mt-12 text-center">
							<Link href="/#waitlist">
								<Button
									size="lg"
									className="text-lg px-8 h-14 rounded-full bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all">
									Join the Waitlist
									<ChevronRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
