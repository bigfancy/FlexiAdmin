import { Layout, theme, Button, Dropdown, Space, Avatar, Switch, Breadcrumb } from "antd";
import type { MenuProps } from "antd";
import { 
  MenuFoldOutlined, 
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  BulbOutlined,
  HomeOutlined
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Header } = Layout;

// 面包屑路径映射
const breadcrumbNameMap: Record<string, string> = {
  '/home': '首页',
  '/home/system': '系统管理',
  '/home/system/user': '用户管理',
  '/home/system/role': '角色管理',
  '/home/system/permission': '权限管理',
  '/home/profile': '个人中心',
  '/home/settings': '个人设置'
};

interface Props {
  collapsed?: boolean;
  toggle?: () => void;
  isDarkMode: boolean;
  onThemeChange: (checked: boolean) => void;
}

const LayoutHeader = ({ collapsed = false, toggle, isDarkMode, onThemeChange }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = theme.useToken();

  // 生成面包屑项
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      key: url,
      title: breadcrumbNameMap[url]
    };
  });

  const breadcrumbItems = [
    {
      title: <HomeOutlined />,
      key: 'home',
    },
    ...extraBreadcrumbItems
  ];

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "个人中心",
      icon: <UserOutlined />,
      onClick: () => navigate("/home/profile")
    },
    {
      key: "2",
      label: "个人设置",
      icon: <SettingOutlined />,
      onClick: () => navigate("/home/settings")
    },
    {
      type: "divider"
    },
    {
      key: "3",
      label: "退出登录",
      icon: <LogoutOutlined />,
      onClick: () => navigate("/login")
    }
  ];

  return (
    <Header 
      style={{ 
        background: token.colorBgContainer,
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Space>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggle}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Breadcrumb items={breadcrumbItems} />
      </Space>
      
      <Space>
        <Space align="center" size={24}>
          <BulbOutlined />
          <Switch
            checked={isDarkMode}
            onChange={onThemeChange}
            checkedChildren="🌜"
            unCheckedChildren="🌞"
          />
        </Space>
        <span style={{ marginRight: 12 }}>欢迎回来，Admin</span>
        <Dropdown menu={{ items }} placement="bottomRight">
          <Space style={{ cursor: "pointer" }}>
            <Avatar icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default LayoutHeader; 