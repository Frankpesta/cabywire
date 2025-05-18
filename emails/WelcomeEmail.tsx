// emails/WelcomeEmail.tsx
import * as React from "react";
import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Section,
	Text,
	Heading,
	Button,
	Img,
} from "@react-email/components";

interface WelcomeEmailProps {
	name: string;
	logoUrl?: string; // Optional logo URL prop
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({
	name,
	logoUrl = "https://cabwire.com/logo.svg",
}) => (
	<Html lang="en">
		<Head />
		<Preview>You're Now on the Cabwire Waitlist! 🚗</Preview>
		<Body
			style={{
				fontFamily: "Arial, sans-serif",
				backgroundColor: "#f9fafb",
				margin: 0,
				padding: 0,
			}}>
			<Container
				style={{
					backgroundColor: "#ffffff",
					margin: "40px auto",
					padding: "20px",
					borderRadius: "8px",
					maxWidth: "600px",
					boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
				}}>
				{/* Logo Section */}
				<Section style={{ textAlign: "center", marginBottom: "24px" }}>
					<Img
						src={logoUrl}
						alt="Cabwire Logo"
						width={120}
						height="auto"
						style={{ margin: "0 auto", display: "block" }}
					/>
				</Section>

				{/* Header */}
				<Section>
					<Heading
						style={{
							color: "#3b82f6",
							fontSize: "22px",
							marginBottom: "8px",
							textAlign: "center",
						}}>
						Urban mobility is about to get better - and you're first in line
					</Heading>
				</Section>

				{/* Body */}
				<Section>
					<Text
						style={{
							color: "#111827",
							fontSize: "16px",
							lineHeight: "26px",
							marginBottom: "18px",
						}}>
						Hey {name},
					</Text>
					<Text
						style={{
							color: "#6b7280",
							fontSize: "16px",
							lineHeight: "26px",
							marginBottom: "16px",
						}}>
						Thanks for signing up to join <b>Cabwire</b> - where your ride
						experience is about to become faster, fairer, and smarter. 🚦
					</Text>
					<Text
						style={{
							color: "#111827",
							fontSize: "16px",
							lineHeight: "26px",
							marginBottom: "16px",
						}}>
						We're building an AI-powered ride-hailing platform designed around
						the real needs of today’s riders and drivers:
					</Text>
					<ul
						style={{
							color: "#3b82f6",
							fontSize: "16px",
							margin: "0 0 16px 20px",
							padding: 0,
						}}>
						<li>Transparent pricing</li>
						<li>Seamless city-level routing</li>
						<li>Empowered local drivers</li>
						<li>Human-first, tech-enhanced service</li>
					</ul>
					<Text
						style={{
							color: "#111827",
							fontSize: "16px",
							lineHeight: "26px",
							marginBottom: "16px",
						}}>
						As part of our early access community, you’ll get:
					</Text>
					<ul
						style={{
							color: "#10b981",
							fontSize: "16px",
							margin: "0 0 16px 20px",
							padding: 0,
						}}>
						<li>✅ Priority access when we go live in your city</li>
						<li>✅ Rider perks and promo codes</li>
						<li>✅ A chance to shape the platform before the world sees it</li>
					</ul>
					<Text
						style={{
							color: "#6b7280",
							fontSize: "16px",
							lineHeight: "26px",
							marginBottom: "16px",
						}}>
						We’ll be in touch soon with launch updates and app previews. Until
						then, follow us on{" "}
						<a
							href="https://linkedin.com/company/cabwire"
							style={{ color: "#3b82f6", textDecoration: "underline" }}>
							LinkedIn
						</a>
						,{" "}
						<a
							href="https://instagram.com/cabwire"
							style={{ color: "#3b82f6", textDecoration: "underline" }}>
							Instagram
						</a>
						, and{" "}
						<a
							href="https://twitter.com/cabwire"
							style={{ color: "#3b82f6", textDecoration: "underline" }}>
							X/Twitter
						</a>{" "}
						to see how we're putting people and cities back at the heart of
						mobility.
					</Text>
					<Text
						style={{
							color: "#111827",
							fontSize: "16px",
							lineHeight: "26px",
							marginBottom: "8px",
						}}>
						Thanks again for believing in a new way to ride.
					</Text>
					<Text
						style={{
							color: "#3b82f6",
							fontSize: "16px",
							fontWeight: "bold",
							marginBottom: "4px",
						}}>
						- Team Cabwire
					</Text>
					<Text
						style={{
							color: "#6b7280",
							fontSize: "14px",
							fontStyle: "italic",
							marginBottom: "24px",
						}}>
						Your city. Your ride. Your way.
					</Text>
				</Section>

				{/* Call to Action */}
				<Section style={{ marginTop: "16px", textAlign: "center" }}>
					<Button
						style={{
							backgroundColor: "#3b82f6",
							color: "#ffffff",
							borderRadius: "6px",
							textDecoration: "none",
							fontWeight: "bold",
							fontSize: "16px",
							cursor: "pointer",
							display: "inline-block",
							padding: "12px 20px",
						}}
						href="https://cabwire.com"
						target="_blank"
						rel="noopener noreferrer">
						Visit Our Website
					</Button>
				</Section>

				{/* Footer */}
				<Section style={{ marginTop: "32px" }}>
					<Text
						style={{
							color: "#9ca3af",
							fontSize: "12px",
							textAlign: "center",
							lineHeight: "18px",
						}}>
						If you have any questions, reply to this email or contact{" "}
						<a
							href="mailto:support@cabwire.com"
							style={{ color: "#9ca3af", textDecoration: "underline" }}>
							support@cabwire.com
						</a>
					</Text>
				</Section>
			</Container>
		</Body>
	</Html>
);

export default WelcomeEmail;
