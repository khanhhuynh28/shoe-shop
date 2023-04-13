import React, { useState } from "react";
import "./LoginForm.css";
import { Link, Navigate } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../stores/action/auth.action";
function LoginForm(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  })
  const [login, setLogin] = useState({
    login: "login"
  })
  if (user) return <Navigate to={"/"} />
  const handleChangeLogin = (e) => {
    const { value, name } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const { email, password } = formLogin;
  const onFinish = () => {

    dispatch(
      loginAction({
        email: email,
        password: password
      })
    )
  };
  // const navigate = useNavigate();



  const localHandler = (boolean) => {
    const { handleLoggedIn } = props;
    handleLoggedIn(boolean);
    localStorage.setItem("loggedIn", boolean);
  };


  const localBoolean = localStorage.getItem("loggedIn");
  return (
    <>
      <div className="container-login">


        <MDBContainer className="my-0">

          <MDBCard>
            <MDBRow className='g-0'>

              <MDBCol md='6'>
                <MDBCardImage src='https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg' alt="login form" className='rounded-start w-100' />
              </MDBCol>

              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>
                  <h3 className="login-title">Đăng nhập</h3>
                  <div className="form-login">
                    <Form
                      onFinish={onFinish}
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                    >
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập email!',
                          },
                        ]}
                      >
                        <Input
                          name="email"
                          prefix={<MailOutlined />}
                          placeholder="Email"
                          onChange={handleChangeLogin}
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
                          },
                        ]}
                      >
                        <Input
                          name="password"
                          prefix={<LockOutlined className="site-form-item-icon" />}
                          type="password"
                          placeholder="Mật khẩu"
                          onChange={handleChangeLogin}
                        />
                      </Form.Item>

                      <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                          <Checkbox>Nhớ mật khẩu</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                          Quên mật khẩu?
                        </a>
                      </Form.Item>

                      <Form.Item style={{ textAlign: "center" }}>
                        <Button htmlType="submit" className="login-form-button">
                          Đăng nhập
                        </Button>
                        Hoặc <a href="http://localhost:3000/register">Đăng ký!</a>
                      </Form.Item>
                    </Form>

                    <div className="icon">
                      <p>Hoặc sử dụng</p>
                      <ul>
                        <li>
                          <img className="image" src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" alt="" />
                        </li >
                        <li>
                          <img className="image" src="https://static.chotot.com/storage/assets/LOGIN/google.svg" alt="" />
                        </li>
                        <li className="apple">
                          <img className="image" src="https://static.chotot.com/storage/assets/LOGIN/apple.svg" alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCol>

            </MDBRow>
          </MDBCard>

        </MDBContainer>
      </div>
    </>
  );
}

export default LoginForm;



