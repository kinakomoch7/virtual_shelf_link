import { Layout } from "antd";
import HeaderPage from "./components/header";

const { Header, Content, Footer } = Layout;

function App() {
	return (
		<Layout>
			<Header>
				<HeaderPage />
			</Header>
			<Content>
				<h1>Content</h1>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Syarin_no_hatsumei ©{new Date().getFullYear()} All Rights Reserved.
			</Footer>
		</Layout>
	);
}

export default App;
