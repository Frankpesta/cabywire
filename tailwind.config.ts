import type { Config } from "tailwindcss";

interface ThemeColors {
	border: string;
	input: string;
	ring: string;
	background: string;
	foreground: string;
	primary: {
		DEFAULT: string;
		foreground: string;
	};
	secondary: {
		DEFAULT: string;
		foreground: string;
	};
	destructive: {
		DEFAULT: string;
		foreground: string;
	};
	muted: {
		DEFAULT: string;
		foreground: string;
	};
	accent: {
		DEFAULT: string;
		foreground: string;
	};
	popover: {
		DEFAULT: string;
		foreground: string;
	};
	card: {
		DEFAULT: string;
		foreground: string;
	};
}

interface ThemeBorderRadius {
	lg: string;
	md: string;
	sm: string;
}

interface ThemeKeyframes {
	"accordion-down": {
		from: { height: string };
		to: { height: string };
	};
	"accordion-up": {
		from: { height: string };
		to: { height: string };
	};
}

interface ThemeAnimation {
	"accordion-down": string;
	"accordion-up": string;
}

interface ThemeTypography {
	(theme: (path: string) => string): Record<string, unknown>;
}

interface ThemeExtend {
	colors: ThemeColors;
	borderRadius: ThemeBorderRadius;
	keyframes: ThemeKeyframes;
	animation: ThemeAnimation;
	typography: ThemeTypography;
}

interface ThemeContainer {
	center: boolean;
	padding: string;
	screens: {
		"2xl": string;
	};
}

interface Theme {
	container: ThemeContainer;
	extend: ThemeExtend;
}

interface ConfigContent {
	darkMode: string[];
	content: string[];
	prefix: string;
	theme: Theme;
	plugins: unknown[];
}

const config: ConfigContent = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			} as ThemeColors,
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			} as ThemeBorderRadius,
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			} as ThemeKeyframes,
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			} as ThemeAnimation,
			typography: ((theme: (path: string) => string) => ({
				DEFAULT: {
					css: {
						maxWidth: "none",
						color: theme("colors.foreground"),
						a: {
							color: theme("colors.primary.DEFAULT"),
							"&:hover": {
								color: theme("colors.primary.DEFAULT"),
							},
						},
						h1: {
							color: theme("colors.foreground"),
						},
						h2: {
							color: theme("colors.foreground"),
						},
						h3: {
							color: theme("colors.foreground"),
						},
						h4: {
							color: theme("colors.foreground"),
						},
						strong: {
							color: theme("colors.foreground"),
						},
						code: {
							color: theme("colors.foreground"),
						},
						figcaption: {
							color: theme("colors.muted.foreground"),
						},
						blockquote: {
							color: theme("colors.muted.foreground"),
						},
					},
				},
			})) as ThemeTypography,
		} as ThemeExtend,
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies ConfigContent;

export default config;
