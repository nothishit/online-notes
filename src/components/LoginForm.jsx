import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      name="login"
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
        label={<label style={{ color: "white" }}>Password</label>}
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Item>

      <Form.Item label={null}>
        <button
          className="border border-white/15 px-2 py-1 rounded outline-0 text-white"
          onClick={() => store.login(email, password)}
          type="primary"
        >
          Войти
        </button>
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "white" }}>Нет аккаунта?: </label>}
      >
        <Link to="/online-notes/registration">Регистрация</Link>
      </Form.Item>
    </Form>
  );
};

export default observer(LoginForm);
