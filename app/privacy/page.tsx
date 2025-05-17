"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, AlertCircle } from "lucide-react";
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

export default function PrivacyPage() {
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
								Privacy Policy
							</h1>
						</motion.div>
						<motion.div variants={fadeIn}>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								We take your privacy seriously. This policy explains how we
								collect, use, and protect your information.
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

			{/* Quick Summary Section */}
			<section className="py-12 bg-gradient-subtle dark:bg-secondary/5">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto">
						<div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
							<h2 className="text-2xl font-bold mb-4 flex items-center">
								<AlertCircle className="mr-2 h-6 w-6 text-primary" />
								Quick Summary
							</h2>
							<p className="text-muted-foreground mb-6">
								This summary provides key points of our privacy policy, but is
								not a substitute for reading the full policy.
							</p>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="flex items-start">
									<div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
										<Shield className="h-4 w-4 text-primary" />
									</div>
									<p className="text-sm">
										We collect personal information to provide and improve our
										services.
									</p>
								</div>
								<div className="flex items-start">
									<div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
										<Lock className="h-4 w-4 text-primary" />
									</div>
									<p className="text-sm">
										We implement strong security measures to protect your data.
									</p>
								</div>
								<div className="flex items-start">
									<div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
										<Eye className="h-4 w-4 text-primary" />
									</div>
									<p className="text-sm">
										You have rights to access, correct, and delete your personal
										information.
									</p>
								</div>
								<div className="flex items-start">
									<div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
										<FileText className="h-4 w-4 text-primary" />
									</div>
									<p className="text-sm">
										We may share data with service providers who help us deliver
										our services.
									</p>
								</div>
							</div>
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
								<h2 className="text-3xl font-bold">
									1. Information We Collect
								</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<h3 className="text-xl font-semibold mb-4">Personal Data</h3>
									<p className="text-muted-foreground mb-4">
										We may collect the following types of personal information:
									</p>
									<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
										<li>
											Name, email address, phone number, and other contact
											details
										</li>
										<li>
											Payment information (processed securely through our
											payment providers)
										</li>
										<li>Location data when you use our services</li>
										<li>Profile information and preferences</li>
										<li>Identity verification information for drivers</li>
									</ul>
								</div>

								<div className="bg-card p-6 rounded-xl border border-border/50">
									<h3 className="text-xl font-semibold mb-4">Usage Data</h3>
									<p className="text-muted-foreground mb-4">
										We collect information about how you interact with our
										services:
									</p>
									<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
										<li>
											Log data (IP address, browser type, pages visited, time
											spent)
										</li>
										<li>Device information (device type, operating system)</li>
										<li>App usage statistics and interaction data</li>
										<li>Ride history and patterns</li>
									</ul>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">
									2. How We Use Your Information
								</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										We use the information we collect to:
									</p>
									<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
										<li>Provide, maintain, and improve our services</li>
										<li>Process transactions and send related information</li>
										<li>
											Send you technical notices, updates, and support messages
										</li>
										<li>Respond to your comments and questions</li>
										<li>Develop new products and services</li>
										<li>Monitor usage patterns and analyze trends</li>
										<li>Prevent fraudulent activity and enhance security</li>
										<li>Comply with legal obligations</li>
									</ul>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">
									3. Sharing Your Information
								</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										We may share your information with:
									</p>
									<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
										<li>
											Service providers who perform services on our behalf
										</li>
										<li>
											Partners with whom we offer co-branded services or
											promotions
										</li>
										<li>
											Law enforcement or other third parties when required by
											law
										</li>
										<li>
											Other users as needed to facilitate your ride (e.g.,
											sharing driver/rider first name and vehicle details)
										</li>
										<li>In connection with a merger, sale, or acquisition</li>
									</ul>
									<p className="text-muted-foreground mt-4">
										We do not sell your personal information to third parties
										for marketing purposes.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">4. Your Rights</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										Depending on your location, you may have certain rights
										regarding your personal information:
									</p>
									<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
										<li>
											Right to access and receive a copy of your personal data
										</li>
										<li>
											Right to correct inaccurate or incomplete information
										</li>
										<li>
											Right to delete your personal data in certain
											circumstances
										</li>
										<li>
											Right to restrict or object to processing of your data
										</li>
										<li>Right to data portability</li>
										<li>Right to withdraw consent at any time</li>
									</ul>
									<p className="text-muted-foreground mt-4">
										To exercise these rights, please contact us at
										privacy@cabwire.com.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">5. Data Security</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										We implement appropriate technical and organizational
										measures to protect the security of your personal
										information. However, no method of transmission over the
										Internet or electronic storage is 100% secure.
									</p>
									<p className="text-muted-foreground">
										Our security measures include:
									</p>
									<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
										<li>Encryption of sensitive data</li>
										<li>Regular security assessments</li>
										<li>Access controls and authentication requirements</li>
										<li>Monitoring for suspicious activity</li>
										<li>Employee training on data protection</li>
									</ul>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">
									6. Changes to This Privacy Policy
								</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground">
										We may update our Privacy Policy from time to time. We will
										notify you of any changes by posting the new Privacy Policy
										on this page and updating the "Last Updated" date. For
										significant changes, we will provide additional notice, such
										as an email notification.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">7. Contact Us</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										If you have any questions about this Privacy Policy, please
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
