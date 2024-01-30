import { Layout } from "antd";
import HeaderPage from "./components/header";
import KawarbeSpecial from "./components/kawarbeSpecial";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <HeaderPage />
      </Header>

      <Content>
        <KawarbeSpecial />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Syarin_no_hatsumei ©{new Date().getFullYear()} All Rights Reserved.
      </Footer>
    </Layout>
  );
}

export default App;
