import { Layout } from "antd";
import HeaderPage from "./components/header";
import KawarbeSpecial from "./components/kawarbeSpecial";
import {
	ProjectReport,
	GithubRepogitory,
	WebSite,
} from "./components/Ultra_Ishi_eenn";
import YouTubePage from "./components/YouTubePage";

const { Content, Footer } = Layout;

function App() {
	return (
		<Layout>
			<HeaderPage />
			<Content>
				<h1>Content</h1>
        <KawarbeSpecial />
				<ProjectReport />
				<GithubRepogitory />
				<WebSite />
				<YouTubePage />
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Syarin_no_hatsumei ©{new Date().getFullYear()} All Rights Reserved.
			</Footer>
		</Layout>
	);
}

export default App;
