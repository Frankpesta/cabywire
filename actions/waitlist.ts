"use server";

import { db } from "@/db/db";
import { waitlist } from "@/db/schema";

type WaitlistFormData = {
	name: string;
	email: string;
	city: string;
	phone: string;
};

export async function submitWaitlistForm(data: WaitlistFormData) {
	try {
		await db.insert(waitlist).values({
			name: data.name,
			email: data.email,
			city: data.city,
			phone: data.phone,
			createdAt: new Date(),
		});

		return { success: true };
	} catch (error) {
		console.error("Error submitting waitlist form:", error);
		throw new Error("Failed to submit waitlist form");
	}
}
