"use client";

import { Suspense, useState } from "react";
import useSWR from "swr";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
import { Filter } from "./Filter";
import { fetcher } from "utils/fetcher";
import { allProjectsUrl, projectsByCategoryUrl } from "utils/projectQueries";
import Error from "../../error";
import { Projects } from "./Projects";


export function ProjectsPage() {
	const [category, setCategory] = useState(undefined);
	const fetchUrl = category ? projectsByCategoryUrl(category) : allProjectsUrl;
	const { data, error } = useSWR(fetchUrl, fetcher);
	const filteredProjects = data?.result;

	const onClick = (catName) => setCategory(catName);

	if (error) {
		return <div className="container-md">Error loading projects...</div>;
	}

	return (
		<div className="container-md">
			<section id="projects" className="section">
				<HeadingDivider title="Relevant projects" />

				<Filter onClick={onClick} />

				<Suspense
					fallback={
						<div className="flex-center">
							<Loader />
						</div>
					}
				>
					<ErrorBoundary FallbackComponent={Error}>
						{filteredProjects === undefined ? (
							// Loading state
							<div className="flex-center">
								<Loader />
							</div>
						) : filteredProjects.length === 0 ? (
							// Empty state
							<div className="flex-center">
								<h3 className="text-2xl">No projects found in {category} category</h3>
							</div>
						) : (
							<Projects projects={filteredProjects} />
						)}
					</ErrorBoundary>
				</Suspense>
			</section>
		</div>
	);
}
