import { Button, Checkbox, Form, Input } from 'antd';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
}
    from 'mdb-react-ui-kit';
import "./style.css";
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { registerAction } from '../../../../stores/action/auth.action';
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
function Register() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.isRegistered);
    const [getDataRegister, setGetDataRegister] = useState({
        nickname: '',
        email: '',
        phone: '',
        address: '',
        password: '',
    });

    if (user) return <Navigate to={"/login"} />


    const handleChangeRegister = (e) => {
        const { value, name } = e.target;
        setGetDataRegister({
            ...getDataRegister,
            [name]: value,
        });
    };

    const onFinish = () => {
        const { email, address, phone, password } = getDataRegister;
        dispatch(
            registerAction({
                email: email,
                phone: phone,
                address: address,
                password: password,
            })
        )
    };
    window.scrollTo(0, 0);
    return (
        <>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://www.elleman.vn/wp-content/uploads/2018/08/13/gi%C3%A0y-sneakers-2-elle-man-8.jpg)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-3' style={{ maxWidth: '900px' }}>
                    <MDBCardBody style={{ width: "400px", height: '500px' }}>
                        <h3 className="titleRegister">Đăng ký</h3>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                prefix: '84',
                            }}
                            style={{
                                maxWidth: 600,
                                marginTop: 30
                            }}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập email!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Email" name="email" onChange={handleChangeRegister} />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại!',
                                    },
                                ]}
                            >
                                <Input
                                    name="phone"
                                    placeholder='Số điện thoại'
                                    style={{
                                        width: '100%',
                                    }}
                                    onChange={handleChangeRegister}
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
                                hasFeedback
                            >
                                <Input.Password
                                    placeholder="Mật khẩu"
                                    name="password"
                                />
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng xác nhận mật khẩu của bạn!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    name="password"
                                    placeholder='Xác nhận mật khẩu'
                                    onChange={handleChangeRegister}
                                />
                            </Form.Item>
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value
                                                ? Promise.resolve()
                                                : Promise.reject(new Error('Hãy chấp nhận điều khoản')),
                                    },
                                ]}
                                {...tailFormItemLayout}
                            >
                                <Checkbox>
                                    Tôi đã đọc <a className='navigate-login' href="">điều khoản</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button className="form-submit-register" htmlType="submit">
                                    Đăng ký
                                </Button>
                            </Form.Item>
                            <div className='nav-login'>
                                <p>Bạn đã có tài khoản?<Link className='navigate-login' to={"/login"}>Đăng nhập!</Link></p>
                            </div>
                        </Form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    )
}
export default Register;