import { Tabs } from 'antd';
import { UserOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import type { TabsProps } from 'antd';

const TabHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items: TabsProps['items'] = [
    {
      key: '/home/system/user',
      label: (
        <span>
          <UserOutlined />
          用户管理
        </span>
      ),
    },
    {
      key: '/home/system/role',
      label: (
        <span>
          <TeamOutlined />
          角色管理
        </span>
      ),
    },
    {
      key: '/home/system/permission',
      label: (
        <span>
          <SettingOutlined />
          权限管理
        </span>
      ),
    },
  ];

  const onChange = (key: string) => {
    navigate(key);
  };

  return (
    <Tabs 
      activeKey={location.pathname}
      items={items} 
      onChange={onChange}
      type="card"
      className="custom-tabs"
    />
  );
};

export default TabHeader; 