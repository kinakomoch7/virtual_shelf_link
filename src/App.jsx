import { Layout } from "antd";
import HeaderPage from "./components/header";
import KawarbeSpecial from "./components/kawarbeSpecial";
import {
	ProjectReport,
	GithubRepogitory,
	WebSite,
} from "./components/Ultra_Ishi_eenn";
import YouTubePage from "./components/YouTubePage";
import { HeadText } from "./components/HeadText";

const { Content, Footer } = Layout;

function App() {
	return (
		<Layout>
			<HeaderPage />
			<Content>
        <KawarbeSpecial />
        <div style={{ display: 'flex', flexDirection: 'column', alignContent:'center', justifyContent:'space-evenly', backgroundColor: "#021529", width:'100vw', height:'90vh' }}>
          <HeadText contents='Productについて' style={{ color:' white' }} />
          <div style={{ display: "flex", justifyContent:'space-evenly',alignItems:'center'}}>
            <YouTubePage />
            <div style={{ display: 'flex', flexDirection: 'column', alignContent:'center', justifyContent:'space-around' }}>
              <ProjectReport />
              <GithubRepogitory />
              <WebSite />
            </div>
          </div>
        </div>
			</Content>
			<Footer style={{ textAlign: "center", height:'20vh' , lineHeight: '13vh'}}>
				Syarin_no_hatsumei ©{new Date().getFullYear()} All Rights Reserved.
			</Footer>
		</Layout>
	);
}

export default App;
