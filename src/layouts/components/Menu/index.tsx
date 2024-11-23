import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, SettingOutlined, UserOutlined, TeamOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

interface Props {
  theme: "light" | "dark";
}

const LayoutMenu = ({ theme }: Props) => {
  const navigate = useNavigate();
  
  const menuItems: MenuProps["items"] = [
    {
      key: "index",
      icon: <HomeOutlined />,
      label: "首页",
      onClick: () => navigate("/home/index")
    },
    {
      key: "system",
      icon: <SettingOutlined />,
      label: "系统管理",
      children: [
        {
          key: "user",
          icon: <UserOutlined />,
          label: "用户管理",
          onClick: () => navigate("/home/system/user")
        },
        {
          key: "role",
          icon: <TeamOutlined />,
          label: "角色管理",
          onClick: () => navigate("/home/system/role")
        },
        {
          key: "permission",
          icon: <SafetyCertificateOutlined />,
          label: "权限管理",
          onClick: () => navigate("/home/system/permission")
        }
      ]
    }
  ];

  return <Menu theme={theme} mode="inline" items={menuItems} />;
};

export default LayoutMenu; 