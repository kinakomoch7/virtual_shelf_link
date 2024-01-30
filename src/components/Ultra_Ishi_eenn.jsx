import ExternalPageTransition from "./ExternalPageTransition";

const ProjectReport = () => {
	return (
		<>
			<h1>Project Report</h1>
			<div>企画書はこちら</div>
			<ExternalPageTransition
				url="public/dc2023_02.pdf"
				contents="Project Report"
			/>
		</>
	);
};

const GithubRepogitory = () => {
	return (
		<>
			<h1>Github Repogitory</h1>
			<div>Githubはこちら</div>
			<ExternalPageTransition
				url="https://github.com/Ishi-eenn/syarin_no_hatsumei"
				contents="Github"
			/>
		</>
	);
};

const WebSite = () => {
	return (
		<>
			<h1>Web Site</h1>
			<div>Web Siteはこちら</div>
			<ExternalPageTransition
				url="https://iridescent-brioche-050f7c.netlify.app/"
				contents="Web Site"
			/>
		</>
	);
};

export { ProjectReport, GithubRepogitory, WebSite };
