import { Layout } from "antd"

const { Header, Content, Footer } = Layout;


function App() {

  return (
    <Layout>
      <Header>
        <h1>Header</h1>
      </Header>
      <Content>
        <h1>Content</h1>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Syarin_no_hatsumei ©{new Date().getFullYear()} All Rights Reserved.
      </Footer>
    </Layout>
  )
}

export default App
