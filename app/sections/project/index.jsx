import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

const url = `https://ipo27378.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'projects'%20%26%26%20createdAt%20%3E%20'2022-01-01T00%3A00%3A00Z'%5D%20%7B%0A%20%20createdAt%2C%0A%20%20title%2C%0A%20%20description%2C%0A%20%20category%5B%5D-%3E%7Btitle%7D%2C%20%2F%2F%20Fetch%20all%20category%20titles%20as%20an%20array%0A%20%20stack%5B%5D-%3E%7B%0A%20%20%20%20title%0A%20%20%7D%2C%0A%20%20poster%2C%0A%20%20%22images%22%3A%20images%5B%5D.asset-%3Eurl%2C%0A%20%20repoUrl%2C%0A%20%20liveUrl%0A%7D`;

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	const { data, error } = useSWR(url, fetcher);
	const projects = data?.result;

	if (error && !data) {
		return null;
	}

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>

					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<button aria-label="See more projects">More projects</button>
					</Link>
				</div>
			</section>
		</LazyMotion>
	);
}
