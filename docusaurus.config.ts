import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
	title: "Christophe Bernard",
	tagline: "Welcome",
	favicon: "img/favicon.ico",

	url: "https://christophbernard.be",
	baseUrl: "/",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "christophebernard.be",
			logo: {
				alt: "Logo",
				src: "https://github.com/DrakeXorn.png",
				style: {
					"border-radius": "50%",
				},
			},
			items: [
				{
					type: "doc",
					docId: "about",
					label: "About",
					position: "left",
				},
				{
					type: "localeDropdown",
					position: "right",
				},
				{
					href: "https://github.com/drakexorn/christophebernard.be",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} Christophe "DrakeXorn" Bernard. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
