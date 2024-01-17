import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { baseUrl } from '../../constant/baseUrl';
import { Form, Input, Typography, Button, message } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${baseUrl}auth`, values);


      if (response.status === 200) {
        console.log(response.data.message);

        if (response.data.type!=null) {
          if (response.data.type === "USER")
            navigate(`/studentInfo`);

          if (response.data.type === "ADMIN")
            navigate(`/admin`);

          localStorage.setItem('user_id', response.data.ip);
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          message.error(error.response.data.message)
        } else {
          message.error(error.response.data.message)
        }
      }
    }
  };

  return (
    <div className="login">
      {isLogin ? (
        <>
          <Typography>Login</Typography>
          <Form
            name="basic"
            style={{ maxWidth: 400 }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            className="login-form"
            requiredMark={false}
          >
            <Form.Item
              label={<span style={{ fontWeight: 'bold' }}>Email</span>}
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<span style={{ fontWeight: 'bold' }}>Password</span>}
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Typography onClick={toggleForm}>Register</Typography>
            </Form.Item>

            <Form.Item className="flex justify-center">
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : (
        <></>
        // Your registration form and logic can be added here
      )}
    </div>
  );
};

export default Login;
