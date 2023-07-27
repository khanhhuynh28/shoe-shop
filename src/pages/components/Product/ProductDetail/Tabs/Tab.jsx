import { Rate, Tabs } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments/Comments'
import './tab.css';

const Tab = ({ description }) => {
    const [totalComments, setTotalComments] = useState(0);

    const [idUser] = useState(() => {
        const useName = JSON.parse(localStorage.getItem('login'));
        return useName;
    });
    const [reviews, setReviews] = useState([
        {
            rate: 0,
            comment: ''
        }
    ]);

    const items = [
        {
            key: '1',
            label: `Chi tiết sản phẩm`,
            children: (
                <p>{description}</p>
            ),
        },
        {
            key: '2',
            label: `Đánh giá ${totalComments}`,
            children: (
                <div className='container-comments'>
                    {idUser ? (
                        <>
                            <div className='comment'>
                                <Comments setReviews={setReviews} setTotalComments={setTotalComments} />
                                {reviews?.map((review, index) => (
                                    <div key={index}>
                                        <div className='show-comment'>
                                            {idUser ? (idUser.map(item => <div key={item} className='name'>{item.email.split("@")[0]}</div>)) : (null)}
                                            <Rate value={review.rate} disabled />
                                            <div className='content-comment'>{review.comment}</div>
                                            <div className='like-comment'>
                                                <span className='like'><a href="">Like</a></span>
                                                <span className='feed-back'><a href="">Phản hồi</a></span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (<Link to={'/login'}><p>Đăng nhập để bình luận</p></Link>)}
                </div>
            ),
        },

    ];

    return <Tabs defaultActiveKey="1" items={items} />;
};

export default Tab;
