import ExternalPageTransition from "./ExternalPageTransition";

const styles = {
	subHead : {
		color: 'white',
		fontSize: 30,
		marginTop: 30,
	}
}

const ProjectReport = () => {
	return (
		<>
			<div style={styles.subHead}>Project Report</div>
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
			<div style={styles.subHead}>Github Repogitory</div>
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
			<div style={styles.subHead}>App Site</div>
			<ExternalPageTransition
				url="https://iridescent-brioche-050f7c.netlify.app/"
				contents="App Site"
			/>
		</>
	);
};

export { ProjectReport, GithubRepogitory, WebSite };
