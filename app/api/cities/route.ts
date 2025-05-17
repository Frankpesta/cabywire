// app/api/cities/route.ts
import { NextResponse } from "next/server";
import { getCitiesByCountry } from "@/lib/cities";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const country = searchParams.get("country");

	if (!country || (country !== "US" && country !== "CA")) {
		return NextResponse.json({ error: "Invalid country" }, { status: 400 });
	}

	const cities = getCitiesByCountry(country).map((city) => city.name);

	return NextResponse.json({ cities });
}
