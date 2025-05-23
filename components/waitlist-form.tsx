"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { submitWaitlistForm } from "@/actions/waitlist";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

// Validation schema with country
const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
	country: z.enum(["US", "CA"], { required_error: "Country is required." }),
	city: z.string().min(2, { message: "City is required." }),
	phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});

const countryOptions = [
	{ value: "US", label: "USA" },
	{ value: "CA", label: "Canada" },
];

export function WaitlistForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const [selectedCountry, setSelectedCountry] = useState("US");
	const [cityOptions, setCityOptions] = useState<string[]>([]);
	const [loadingCities, setLoadingCities] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			country: "US",
			city: "",
			phone: "",
		},
	});

	// Fetch cities from API when country changes
	useEffect(() => {
		async function fetchCities() {
			setLoadingCities(true);
			try {
				const res = await fetch(`/api/cities?country=${selectedCountry}`);
				if (!res.ok) throw new Error("Failed to fetch cities");
				const data = await res.json();
				setCityOptions(data.cities || []);
			} catch {
				setCityOptions([]);
			} finally {
				setLoadingCities(false);
			}
		}
		fetchCities();
		// Reset city field on country change
		form.setValue("city", "");
	}, [selectedCountry, form]);

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		try {
			await submitWaitlistForm(values);
			toast("You've been added to the waitlist! We'll notify you soon.");
			setIsSuccess(true);
			form.reset({ country: selectedCountry as "US" | "CA" });
		} catch {
			toast("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}

	if (isSuccess) {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				className="text-center py-8">
				<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
					<svg
						className="w-8 h-8 text-primary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 className="text-2xl font-bold mb-4">You're on the list!</h3>
				<p className="text-muted-foreground mb-8">
					Thanks for joining our waitlist. We'll notify you as soon as Cabwire
					launches in your area.
				</p>
				<Button onClick={() => setIsSuccess(false)} variant="outline">
					Sign up another driver
				</Button>
			</motion.div>
		);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Name */}
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<input
										placeholder="John Doe"
										className="h-12 rounded-lg w-full border px-3"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Email */}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<input
										placeholder="john@example.com"
										type="email"
										className="h-12 rounded-lg w-full border px-3"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Country */}
					<FormField
						control={form.control}
						name="country"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Country</FormLabel>
								<FormControl>
									<select
										className="h-12 rounded-lg w-full border px-3"
										{...field}
										value={selectedCountry}
										onChange={(e) => {
											const country = e.target.value;
											setSelectedCountry(country);
											form.setValue("country", country as "US" | "CA");
										}}>
										{countryOptions.map((c) => (
											<option key={c.value} value={c.value}>
												{c.label}
											</option>
										))}
									</select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* City */}
					<FormField
						control={form.control}
						name="city"
						render={({ field }) => (
							<FormItem>
								<FormLabel>City</FormLabel>
								<FormControl>
									<select
										className="h-12 rounded-lg w-full border px-3"
										{...field}
										disabled={loadingCities || cityOptions.length === 0}>
										<option value="">
											{loadingCities ? "Loading cities..." : "Select a city"}
										</option>
										{cityOptions.map((city, i) => (
											<option key={i} value={city}>
												{city}
											</option>
										))}
									</select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Phone */}
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<input
										placeholder="(123) 456-7890"
										className="h-12 rounded-lg w-full border px-3"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button
					type="submit"
					className="w-full h-12 rounded-lg bg-gradient-primary hover:opacity-90 transition-all"
					size="lg"
					disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Submitting...
						</>
					) : (
						"Join the Waitlist"
					)}
				</Button>

				<FormDescription className="text-center">
					That's it - we'll handle the rest.
				</FormDescription>
			</form>
		</Form>
	);
}
