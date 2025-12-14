import React, { use, useContext, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      if (store.isAuth) {
        navigate("/online-notes", { replace: true });
      }
    };
    init();
  }, [store.isAuth]);

  return (
    <Form
      name="registration"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label={<label style={{ color: "white" }}>Email</label>}
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input onChange={(e) => setEmail(e.target.value)} value={email} />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "white" }}>Username</label>}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input onChange={(e) => setUsername(e.target.value)} value={username} />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "white" }}>Password</label>}
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "white" }}>Confirm password</label>}
        name="confirm password"
        rules={[{ required: true, message: "Please confirm your password!" }]}
      >
        <Input.Password
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirm_password}
        />
      </Form.Item>

      <Form.Item label={null}>
        <button
          className="border border-white/15 px-2 py-1 rounded outline-0 text-white"
          onClick={() => store.registration(email, username, password)}
          type="primary"
        >
          Зарегистрироваться
        </button>
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "white" }}>Уже есть аккаунт?: </label>}
      >
        <Link to="/online-notes/login">Вход</Link>
      </Form.Item>
    </Form>
  );
};
export default observer(RegistrationForm);
