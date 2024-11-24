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
  const [data, setData] = useState<UserType[]>([
    {
      id: 1,
      username: 'admin',
      status: 1,
      roleId: 1,
      createTime: '2024-01-01 12:00:00'
    },
    {
      id: 2,
      username: 'test',
      status: 0,
      roleId: 2,
      createTime: '2024-01-02 12:00:00'
    }
  ]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

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

  const onFinish = (values: any) => {
    console.log('表单值:', values);
    setVisible(false);
    form.resetFields();
  };

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
              <Form.Item name="status" label="状态">
                <Select placeholder="请选择状态">
                  <Select.Option value={1}>启用</Select.Option>
                  <Select.Option value={0}>禁用</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="roleId" label="角色">
                <Select placeholder="请选择角色">
                  <Select.Option value={1}>管理员</Select.Option>
                  <Select.Option value={2}>普通用户</Select.Option>
                </Select>
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
        extra={
          <Space>
            <Button onClick={() => setVisible(false)}>取消</Button>
            <Button type="primary" onClick={() => form.submit()}>
              确定
            </Button>
          </Space>
        }
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item
            name="roleId"
            label="角色"
            rules={[{ required: true, message: '请选择角色' }]}
          >
            <Select placeholder="请选择角色">
              <Select.Option value={1}>管理员</Select.Option>
              <Select.Option value={2}>普通用户</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="status"
            label="状态"
            initialValue={1}
          >
            <Switch checkedChildren="启用" unCheckedChildren="禁用" defaultChecked />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default UserManagement;