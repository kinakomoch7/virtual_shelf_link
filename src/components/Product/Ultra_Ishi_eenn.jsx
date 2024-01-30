import ExternalPageTransition from "./ExternalPageTransition";
import githubIcon from '../../image/githubIcon.svg'
import pdfIcon from '../../image/pdfIcon.svg'
import bookIcon from '../../image/bookIcon.svg'

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
				url="/dc2023_02.pdf"
				contents={<div style={{ display:'flex', justifyContent:'center'}}><img src={pdfIcon} width={30} height={30}/> Report</div>}
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
				contents={<div style={{ display:'flex', justifyContent:'center'}}><img src={githubIcon} width={30} height={30}/>GitHub</div>}
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
				contents={<div style={{ display:'flex', justifyContent:'center'}}><img src={bookIcon} width={30} height={30}/> App Site</div>}
			/>
		</>
	);
};

export { ProjectReport, GithubRepogitory, WebSite };
