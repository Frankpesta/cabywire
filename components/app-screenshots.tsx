"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate } from "animejs";

export function AppScreenshots() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		animate(containerRef.current.querySelectorAll(".screenshot"), {
			translateY: [20, 0],
			opacity: [0, 1],
			delay: 200,
			duration: 1000,
			easing: "easeOutQuad",
		});

		const interval = setInterval(() => {
			const screenshots = containerRef.current?.querySelectorAll(".screenshot");
			if (screenshots && screenshots.length > 0) {
				animate(screenshots, {
					translateY: [0, -10, 0],
					duration: 2000,
					delay: 300,
					easing: "easeInOutSine",
				});
			}
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative flex justify-center items-center h-[500px]">
			{/* These would be replaced with actual screenshots from the Figma design */}
			<div className="screenshot absolute left-[10%] md:left-[20%] shadow-xl rounded-xl overflow-hidden">
				<Image
					src="/app-screenshot-1.png"
					alt="Cabwire App Screenshot"
					width={250}
					height={500}
					className="w-auto h-[400px]"
				/>
			</div>
			<div className="screenshot absolute shadow-xl rounded-xl overflow-hidden z-10">
				<Image
					src="/app-screenshot-2.png"
					alt="Cabwire App Screenshot"
					width={250}
					height={500}
					className="w-auto h-[450px]"
				/>
			</div>
			<div className="screenshot absolute right-[10%] md:right-[20%] shadow-xl rounded-xl overflow-hidden">
				<Image
					src="/app-screenshot-3.png"
					alt="Cabwire App Screenshot"
					width={250}
					height={500}
					className="w-auto h-[400px]"
				/>
			</div>
		</div>
	);
}
