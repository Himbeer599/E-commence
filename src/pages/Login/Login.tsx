import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

// 使用导入的图片
const backgroundImages = [
  require('./images/1.jpg'),
  require('./images/2.jpg'),
  require('./images/3.jpg'),
  require('./images/4.jpg'),
  require('./images/5.jpg'),
  require('./images/6.jpg'),
  require('./images/7.jpg'),
  require('./images/8.jpg'),
  require('./images/9.jpg'),
  require('./images/10.jpg'),
  require('./images/11.jpg'),
  require('./images/12.jpg')
];

interface LoginFormData {
  username: string;
  password: string;
}

interface LoginProps {
  onLogin?: (data: LoginFormData) => Promise<void>;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 60000); // 每60秒切换一次

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (values: LoginFormData) => {
    try {
      setLoading(true);
      if (onLogin) {
        await onLogin(values);
        message.success('Login successful');
        navigate('/');
      }
    } catch (error) {
      message.error('Login failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* 背景图片容器 */}
      <div 
        className={styles.backgroundSlider} 
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`
        }}
      />
      
      {/* 登录表单 */}
      <div className={styles.loginFormContainer}>
        <div className={styles.loginForm}>
          <h1 className={styles.title}>Welcome Back</h1>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            size="large"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Username" 
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className={styles.forgotPassword} href="#">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className={styles.loginButton}
                loading={loading}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login; 