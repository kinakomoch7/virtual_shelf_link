import { Layout } from "antd";
import HeaderPage from "./components/header";
import KawarbeSpecial from "./components/kawarbeSpecial";
import { ProductLink } from "./components/ProductLink";

const { Content, Footer } = Layout;

function App() {
	return (
		<Layout>
			<HeaderPage />
			<Content>
        <KawarbeSpecial />
				<ProductLink />
			</Content>
			<Footer style={{ textAlign: "center", height:'20vh' , lineHeight: '13vh'}}>
				Syarin_no_hatsumei ©{new Date().getFullYear()} All Rights Reserved.
			</Footer>
		</Layout>
	);
}

export default App;
