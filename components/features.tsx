import {
	CheckCircle,
	Clock,
	DollarSign,
	HeartHandshake,
	Shield,
	Users,
} from "lucide-react";

export function Features() {
	return (
		<div className="grid md:grid-cols-2 gap-12">
			<div className="space-y-8">
				<h3 className="text-2xl font-bold">For Drivers</h3>

				<div className="space-y-6">
					<div className="flex gap-4">
						<DollarSign className="h-6 w-6 text-primary flex-shrink-0" />
						<div>
							<h4 className="font-semibold mb-1">
								Low Commission, High Earnings
							</h4>
							<p className="text-muted-foreground">
								Keep more of your money with one of the most driver-friendly
								rates in the industry.
							</p>
						</div>
					</div>

					<div className="flex gap-4">
						<Clock className="h-6 w-6 text-primary flex-shrink-0" />
						<div>
							<h4 className="font-semibold mb-1">Flexible Schedule</h4>
							<p className="text-muted-foreground">
								You choose when to drive. No penalties. No pressure.
							</p>
						</div>
					</div>

					<div className="flex gap-4">
						<CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
						<div>
							<h4 className="font-semibold mb-1">Full Transparency</h4>
							<p className="text-muted-foreground">
								See fare details, rider info, and payout summaries — no
								guessing, no surprises.
							</p>
						</div>
					</div>

					<div className="flex gap-4">
						<HeartHandshake className="h-6 w-6 text-primary flex-shrink-0" />
						<div>
							<h4 className="font-semibold mb-1">24/7 Human Support</h4>
							<p className="text-muted-foreground">
								Real people. Real help. Anytime you need it.
							</p>
						</div>
					</div>

					<div className="flex gap-4">
						<Users className="h-6 w-6 text-primary flex-shrink-0" />
						<div>
							<h4 className="font-semibold mb-1">
								Exclusive Early Driver Perks
							</h4>
							<p className="text-muted-foreground">
								Our first wave of drivers will enjoy priority onboarding,
								exclusive incentives, and founding driver benefits.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="space-y-8">
				<h3 className="text-2xl font-bold">For Riders</h3>

				<div className="space-y-6">
					<div className="flex gap-4">
						<Shield className="h-6 w-6 text-primary flex-shrink-0" />
						<div>
							<h4 className="font-semibold mb-1">
								Fast, Safe, and Affordable Rides
							</h4>
							<p className="text-muted-foreground">
								Whether you're headed to work, home, or somewhere new — we'll
								get you there with ease.
							</p>
						</div>
					</div>

					<div className="flex gap-4">
						<CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
						<div>
							<h4 className="font-semibold mb-1">
								Real-Time Tracking & Smart Matching
							</h4>
							<p className="text-muted-foreground">
								Powered by intelligent systems to reduce wait times and improve
								route efficiency.
							</p>
						</div>
					</div>

					<div className="flex gap-4">
						<Users className="h-6 w-6 text-primary flex-shrink-0" />
						<div>
							<h4 className="font-semibold mb-1">Local-Focused</h4>
							<p className="text-muted-foreground">
								We're starting in select cities across Canada and the USA —
								focusing on real needs and local partnerships.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
