"use server";

import { db } from "@/db/db";
import { waitlist } from "@/db/schema";
import { Resend } from "resend";
import WelcomeEmail from "@/emails/WelcomeEmail";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY!);

type WaitlistFormData = {
	name: string;
	email: string;
	country: "US" | "CA";
	city: string;
	phone: string;
};

export async function submitWaitlistForm(data: WaitlistFormData) {
	try {
		// Insert into waitlist
		await db.insert(waitlist).values({
			name: data.name,
			email: data.email,
			country: data.country,
			city: data.city,
			phone: data.phone,
			createdAt: new Date(),
		});

		// If insertion is successful, send welcome email
		try {
			await resend.emails.send({
				from: "Cabwire <onboarding@cabwire.com>",
				to: data.email,
				subject: "Welcome to the Waitlist!",
				react: await WelcomeEmail({
					name: data.name,
				}),
			});
		} catch (emailError) {
			console.error("Error sending welcome email:", emailError);
			// Optionally, you can decide whether to throw here or just log and continue
			throw new Error("Failed to send welcome email");
		}

		return { success: true };
	} catch (dbError) {
		console.error("Error submitting waitlist form:", dbError);
		throw new Error("Failed to submit waitlist form");
	}
}
