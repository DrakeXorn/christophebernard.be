import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<img src="/img/logo.png" alt="Christophe Bernard" />
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">
					<Translate id="homepage.hero-subtitle" />
				</p>
				<p>
					<Translate id="homepage.hero-subtitle-2" />
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
							<Heading as="h2">
								<Translate id="homepage.who-am-i-title" />
							</Heading>
							<p>
								<Translate id="homepage.who-am-i-1" />
							</p>
							<p>
								<Translate id="homepage.who-am-i-2" />
							</p>
						</article>
						<article className={clsx("col col--4", styles.feature)}>
							<Heading as="h2">
								<Translate id="homepage.what-do-i-do-title" />
							</Heading>
							<p>
								<Translate id="homepage.what-do-i-do" />
							</p>
						</article>
						<article className={clsx("col col--4", styles.feature)}>
							<Heading as="h2">
								<Translate id="homepage.about-me-title" />
							</Heading>
							<p>
								<Translate
									id="homepage.about-me"
									values={{
										aboutLink: (
											<Link to="/docs/about">
												<Translate id="homepage.about-me-about-page" />
											</Link>
										),
									}}
								>
									{"Check out my {aboutLink}!"}
								</Translate>
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
