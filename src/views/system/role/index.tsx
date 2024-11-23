import { Table, Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface RoleType {
  key: string;
  name: string;
  description: string;
  createTime: string;
}

const Role = () => {
  const columns: ColumnsType<RoleType> = [
    {
      title: '角色名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link">编辑</Button>
          <Button type="link">权限设置</Button>
          <Button type="link" danger>删除</Button>
        </Space>
      ),
    },
  ];

  const data: RoleType[] = [
    {
      key: '1',
      name: '管理员',
      description: '系统管理员',
      createTime: '2024-01-01',
    },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <Button type="primary">新增角色</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Role; 