"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function HeroAnimation() {
	const animationRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!animationRef.current) return;

		const elements = Array.from({ length: 20 }).map((_, i) => {
			const el = document.createElement("div");
			el.className = "absolute rounded-full bg-primary/10 dark:bg-primary/5";
			el.style.width = `${Math.random() * 100 + 50}px`;
			el.style.height = el.style.width;
			el.style.left = `${Math.random() * 100}%`;
			el.style.top = `${Math.random() * 100}%`;
			el.style.opacity = "0";
			animationRef.current?.appendChild(el);
			return el;
		});

		animate(elements, {
			opacity: [0, 0.2],
			scale: [0, 1],
			delay: stagger(200, { from: "center" }),
			duration: 2000,
			easing: "easeOutExpo",
			complete: () => {
				// Helper function to generate a random number between min and max
				const random = (min: number, max: number) =>
					Math.random() * (max - min) + min;

				animate(elements as HTMLElement[], {
					translateX: () => random(-20, 20) + "px",
					translateY: () => random(-20, 20) + "px",
					duration: 3000,
					easing: "easeInOutSine",
				});
			},
		});

		return () => {
			elements.forEach((el) => el.remove());
		};
	}, []);

	return (
		<div
			ref={animationRef}
			className="absolute inset-0 overflow-hidden -z-10"
			aria-hidden="true"
		/>
	);
}
