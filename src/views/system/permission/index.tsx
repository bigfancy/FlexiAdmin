import { Table, Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface PermissionType {
  key: string;
  name: string;
  code: string;
  type: string;
  path: string;
}

const Permission = () => {
  const columns: ColumnsType<PermissionType> = [
    {
      title: '权限名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '权限编码',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '路径',
      dataIndex: 'path',
      key: 'path',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link">编辑</Button>
          <Button type="link" danger>删除</Button>
        </Space>
      ),
    },
  ];

  const data: PermissionType[] = [
    {
      key: '1',
      name: '用户管理',
      code: 'system:user',
      type: '菜单',
      path: '/system/user',
    },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <Button type="primary">新增权限</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Permission; 