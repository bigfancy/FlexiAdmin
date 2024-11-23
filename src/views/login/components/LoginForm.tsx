import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
// import { Login } from "@/api/interface";
// import { loginApi } from "@/api/modules/login";
// import { HOME_URL } from "@/config/config";
// import { connect } from "react-redux";
// import { setToken } from "@/redux/modules/global/action";
// import { useTranslation } from "react-i18next";
// import { setTabsList } from "@/redux/modules/tabs/action";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
// import { getMenuList } from "@/api/modules/login";
// import { setAuthRouter } from "@/redux/modules/auth/action";

const LoginForm = (props: any) => {
	// const { t } = useTranslation();
	const { setToken, setTabsList, setAuthRouter } = props;
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState<boolean>(false);
		
	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={() => {}}
			onFinishFailed={() => {}}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					Reset
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					Login
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm
