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
        <div style={{ textAlign: "left", fontSize: "16px", margin: "10px" }}>
          <div style={{ marginLeft: "10px" }}>チーム2 車輪の発明</div>

          <div style={{ marginLeft: "10px", marginTop: "5px" }}>
            小出朋希 川邉開人 石川翼 井上隆大
          </div>
        </div>
        <KawarbeSpecial />
        <ProductLink />
      </Content>
      <Footer
        style={{ textAlign: "center", height: "20vh", lineHeight: "13vh" }}
      >
        Syarin_no_hatsumei ©{new Date().getFullYear()} All Rights Reserved.
      </Footer>
    </Layout>
  );
}

export default App;
