"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

export function FaqAccordion() {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={{
				hidden: { opacity: 0 },
				visible: {
					opacity: 1,
					transition: {
						staggerChildren: 0.1,
					},
				},
			}}>
			<Accordion type="single" collapsible className="w-full">
				<motion.div variants={fadeIn}>
					<AccordionItem
						value="item-1"
						className="border border-border/50 rounded-lg mb-4 px-6 py-2">
						<AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
							When is Cabwire launching?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							We are currently preparing our launch in multiple cities across
							Canada and the USA. Our early waitlist members will be the first
							to know when we go live in their region.
						</AccordionContent>
					</AccordionItem>
				</motion.div>

				<motion.div variants={fadeIn}>
					<AccordionItem
						value="item-2"
						className="border border-border/50 rounded-lg mb-4 px-6 py-2">
						<AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
							How is Cabwire different from Uber or Lyft?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Cabwire charges lower commission, offers more transparent pricing,
							and provides real human support — we're truly built with drivers
							in mind. Our platform prioritizes fair earnings, flexibility, and
							a better experience for both drivers and riders.
						</AccordionContent>
					</AccordionItem>
				</motion.div>

				<motion.div variants={fadeIn}>
					<AccordionItem
						value="item-3"
						className="border border-border/50 rounded-lg mb-4 px-6 py-2">
						<AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
							Is there a cost to join the waitlist?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							No. Joining the waitlist is 100% free and comes with zero
							commitment. You're simply reserving your spot for early access
							when we launch in your area.
						</AccordionContent>
					</AccordionItem>
				</motion.div>

				<motion.div variants={fadeIn}>
					<AccordionItem
						value="item-4"
						className="border border-border/50 rounded-lg mb-4 px-6 py-2">
						<AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
							What cities will Cabwire be available in?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							We're launching in select cities across Canada and the USA. Our
							initial focus will be on major metropolitan areas with plans to
							expand to mid-sized cities shortly after. Join our waitlist to be
							notified when we're coming to your area.
						</AccordionContent>
					</AccordionItem>
				</motion.div>

				<motion.div variants={fadeIn}>
					<AccordionItem
						value="item-5"
						className="border border-border/50 rounded-lg mb-4 px-6 py-2">
						<AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
							What vehicle requirements do you have?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Vehicle requirements vary by city, but generally we require a
							4-door vehicle in good condition that's no more than 10 but
							generally we require a 4-door vehicle in good condition that's no
							more than 10 years old. Full details will be provided during
							onboarding, including specific requirements for your city. We aim
							to make the vehicle requirements accessible while ensuring safety
							and comfort for riders.
						</AccordionContent>
					</AccordionItem>
				</motion.div>
			</Accordion>
		</motion.div>
	);
}
