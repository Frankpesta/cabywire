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
	logoUrl = "https://cabwire.com/logo.svg", // Replace with your actual logo URL
}) => (
	<Html lang="en">
		<Head />
		<Preview>Welcome to the waitlist!</Preview>
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
						alt="Company Logo"
						width={120}
						height="auto"
						style={{ margin: "0 auto", display: "block" }}
					/>
				</Section>

				{/* Greeting */}
				<Section>
					<Heading
						style={{
							color: "#111827",
							fontSize: "24px",
							marginBottom: "16px",
							textAlign: "center",
						}}>
						Hi {name},
					</Heading>
					<Text
						style={{
							color: "#6b7280",
							fontSize: "16px",
							lineHeight: "24px",
							textAlign: "center",
							marginBottom: "24px",
						}}>
						Thank you for joining our waitlist! We're excited to have you on
						board and will notify you as soon as we launch in your area.
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
