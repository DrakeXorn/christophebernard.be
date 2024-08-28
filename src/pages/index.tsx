import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<img src="/img/logo.png" alt="Christophe Bernard" />
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">
					Master's student in Computer systems architecture
				</p>
				<p>
					Cat lover, gamer and tech enthusiast with a passion for teaching and
					sharing knowledge
				</p>
			</div>
		</header>
	);
}

function HomepageContents() {
	return (
		<main>
			<section className={styles.features}>
				<div className="container">
					<div className="row">
						<article className={clsx("col col--4", styles.feature)}>
							<Heading as="h2">Who am I?</Heading>
							<p>
								I am a Belgian Master's student in Computer systems architecture
								at the Haute-École de Namur-Liège-Luxembourg (HENALLUX),
								Belgium.
							</p>
							<p>
								Previously teacher in programming and computer science, I am now
								focusing on my studies to pursue a career in the IT and teaching
								industries.
							</p>
						</article>
						<article className={clsx("col col--4", styles.feature)}>
							<Heading as="h2">What do I do?</Heading>
							<p>
								I am passionate about technology, video games, and teaching. I
								like to share my knowledge and help others to learn new things
								and understand more or less complex concepts.
							</p>
						</article>
						<article className={clsx("col col--4", styles.feature)}>
							<Heading as="h2">Want to know my projects?</Heading>
							<p>
								Check out my <a href="/docs/about">about page</a>!
							</p>
						</article>
					</div>
				</div>
			</section>
		</main>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.tagline}>
			<HomepageHeader />
			<HomepageContents />
		</Layout>
	);
}
