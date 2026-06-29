"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Muhammad Ansar. I graduated in Computer Science from the University of Gujrat in 2024,
							and I currently work as a Software Engineer at Mindblaze Technologies.
						</p>
						<p>
							During my university years, I developed a deep passion for the fundamentals &mdash; Object Oriented
							Programming, Data Structures &amp; Algorithms, Databases, and Computer Networks &mdash; and I&apos;ve never
							stopped learning new concepts and techniques since.
						</p>
						<p>So, officially, my programming journey began in 2021 as a Flutter Developer.</p>
						<p className="my-3.5">
							I enjoy diving deep into technologies that interest me, which is why I spent my early years
							building cross-platform mobile apps with Flutter before moving into the web.
						</p>
						<p>
							Curiosity pulled me toward React, and I was hooked by how fast I could build and maintain
							interfaces with it. That naturally led me into Next.js, and soon after into building complete products end to end.
						</p>
						<p className="my-3.5">
							Today I work as a full-stack developer, shipping web apps with Next.js, cross-platform apps with
							React Native, and backends with Laravel and Node.js &mdash; from database to deployment.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
