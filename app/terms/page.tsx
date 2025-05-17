"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, XCircle, HelpCircle } from "lucide-react";
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

export default function TermsPage() {
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
								Terms and Conditions
							</h1>
						</motion.div>
						<motion.div variants={fadeIn}>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								Please read these terms carefully before using the Cabwire
								platform.
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
								What You Should Know
							</h2>
							<p className="text-muted-foreground mb-6">
								This summary highlights key points but doesn't replace the full
								terms below.
							</p>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="flex items-start">
									<CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
									<p className="text-sm">
										By using Cabwire, you agree to these terms and our Privacy
										Policy.
									</p>
								</div>
								<div className="flex items-start">
									<XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
									<p className="text-sm">
										Misuse of our platform may result in account termination.
									</p>
								</div>
								<div className="flex items-start">
									<CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
									<p className="text-sm">
										We may update these terms with notice to reflect service
										changes.
									</p>
								</div>
								<div className="flex items-start">
									<HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
									<p className="text-sm">
										Questions? Contact us at support@cabwire.com.
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
								<h2 className="text-3xl font-bold">1. Use of Service</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										Cabwire provides a platform connecting drivers and riders
										for transportation services. By using our services, you
										agree to use them only for lawful purposes and in accordance
										with these Terms.
									</p>
									<p className="text-muted-foreground">
										Our services are intended for users who are at least 18
										years old. By using Cabwire, you represent and warrant that
										you meet this age requirement.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">2. User Accounts</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										When you create an account with us, you must provide
										information that is accurate, complete, and current at all
										times. Failure to do so constitutes a breach of the Terms,
										which may result in immediate termination of your account on
										our Service.
									</p>
									<p className="text-muted-foreground mb-4">
										You are responsible for safeguarding the password that you
										use to access the Service and for any activities or actions
										under your password. You agree not to disclose your password
										to any third party.
									</p>
									<p className="text-muted-foreground">
										You must notify us immediately upon becoming aware of any
										breach of security or unauthorized use of your account.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">3. Intellectual Property</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										The Service and its original content, features, and
										functionality are and will remain the exclusive property of
										Cabwire Technologies and its licensors. The Service is
										protected by copyright, trademark, and other laws of both
										the United States and foreign countries.
									</p>
									<p className="text-muted-foreground">
										Our trademarks and trade dress may not be used in connection
										with any product or service without the prior written
										consent of Cabwire Technologies
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">4. Termination</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										We may terminate or suspend your account immediately,
										without prior notice or liability, for any reason
										whatsoever, including without limitation if you breach the
										Terms.
									</p>
									<p className="text-muted-foreground">
										Upon termination, your right to use the Service will
										immediately cease. If you wish to terminate your account,
										you may simply discontinue using the Service or contact us
										to request account deletion.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">
									5. Limitation of Liability
								</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										In no event shall Cabwire Technologies, nor its directors,
										employees, partners, agents, suppliers, or affiliates, be
										liable for any indirect, incidental, special, consequential
										or punitive damages, including without limitation, loss of
										profits, data, use, goodwill, or other intangible losses,
										resulting from:
									</p>
									<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
										<li>
											Your access to or use of or inability to access or use the
											Service
										</li>
										<li>
											Any conduct or content of any third party on the Service
										</li>
										<li>Any content obtained from the Service</li>
										<li>
											Unauthorized access, use or alteration of your
											transmissions or content
										</li>
									</ul>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">6. Changes</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										We reserve the right, at our sole discretion, to modify or
										replace these Terms at any time. If a revision is material
										we will try to provide at least 30 days' notice prior to any
										new terms taking effect. What constitutes a material change
										will be determined at our sole discretion.
									</p>
									<p className="text-muted-foreground">
										By continuing to access or use our Service after those
										revisions become effective, you agree to be bound by the
										revised terms. If you do not agree to the new terms, please
										stop using the Service.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeIn} className="space-y-6">
								<h2 className="text-3xl font-bold">7. Contact Us</h2>
								<div className="bg-card p-6 rounded-xl border border-border/50">
									<p className="text-muted-foreground mb-4">
										If you have any questions about these Terms, please contact
										us at:
									</p>
									<p className="text-muted-foreground font-medium">
										support@cabwire.com
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
