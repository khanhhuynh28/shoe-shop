import { Link } from "react-router-dom";
import "./style.css";
import { Button, Result } from 'antd';
export function OrderSuccess() {

    return (
        <div className="success">
            <Result
                status="success"
                title="Đã mua thành công"
                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                extra={[
                    <Button style={{ backgroundColor: "#ff4f04", color: "#fff" }} key="console">
                        <Link to={"/"}> Trang Chủ</Link>
                    </Button>,
                ]}
            />
        </div>
    )
}
