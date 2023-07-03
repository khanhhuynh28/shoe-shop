import { Tabs } from 'antd';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `Chi tiết sản phẩm`,
        children: `Content of Tab Pane 1`,
    },
    {
        key: '2',
        label: `Bình luận`,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: `Đánh giá`,
        children: (
            <p></p>
        ),
    },
];
const Tab = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default Tab;