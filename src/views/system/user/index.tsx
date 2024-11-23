import React, { useState } from 'react';
import { Table, Button, Space, Drawer, Form, Input, Select, Card, Row, Col, Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface UserType {
  id: number;
  username: string;
  status: number;
  roleId: number;
  createTime: string;
}

const UserManagement: React.FC = () => {
  const [searchForm] = Form.useForm();
  const [data, setData] = useState<UserType[]>([]);
  const [visible, setVisible] = useState(false);

  const columns: ColumnsType<UserType> = [
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (status: number) => (
        <Switch checked={status === 1} />
      )
    },
    {
      title: '角色',
      dataIndex: 'roleId',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type="link" icon={<EditOutlined />}>编辑</Button>
          <Button type="link" danger icon={<DeleteOutlined />}>删除</Button>
        </Space>
      )
    }
  ];

  return (
    <div className="p-4">
      <Card className="mb-4">
        <Form form={searchForm} onFinish={values => console.log(values)}>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item name="username" label="用户名">
                <Input placeholder="请输入用户名" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>搜索</Button>
                  <Button onClick={() => searchForm.resetFields()}>重置</Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>

      <div className="mb-4">
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setVisible(true)}>
          新增
        </Button>
      </div>

      <Table columns={columns} dataSource={data} rowKey="id" />

      <Drawer
        title="新增用户"
        width={600}
        open={visible}
        onClose={() => setVisible(false)}
      >
        {/* Drawer Form Content */}
      </Drawer>
    </div>
  );
};

export default UserManagement;