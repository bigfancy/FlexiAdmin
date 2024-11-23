import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import LayoutMenu from "./components/Menu";
import LayoutHeader from "./components/Header";
import TabHeader from "./components/TabHeader";

const { Sider, Content } = Layout;

const LayoutIndex = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ height: 32, margin: 16, background: "rgba(255, 255, 255, 0.2)" }} />
        <LayoutMenu theme="dark" />
      </Sider>
      <Layout>
        <LayoutHeader 
          collapsed={collapsed}
          toggle={() => setCollapsed(!collapsed)}
          isDarkMode={isDarkMode}
          onThemeChange={setIsDarkMode}
        />
        <div className="p-4">
          <TabHeader />
          <Content 
            style={{ 
              margin: "16px 0",
              padding: 24, 
              background: "#fff",
              borderRadius: 4
            }}
          >
            <Outlet />
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};

export default LayoutIndex;
