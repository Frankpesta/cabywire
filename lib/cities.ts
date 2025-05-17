// lib/cities.ts
import citiesData from "../data/cities.json";

interface City {
	name: string;
	country: string;
	// add other properties if needed
}

const cities: City[] = citiesData as City[];

export function getCitiesByCountry(countryCode: string) {
	const seen = new Set<string>();

	return cities
		.filter((city) => city.country === countryCode)
		.filter((city) => {
			if (seen.has(city.name)) {
				return false;
			}
			seen.add(city.name);
			return true;
		})
		.sort((a, b) => a.name.localeCompare(b.name));
}
