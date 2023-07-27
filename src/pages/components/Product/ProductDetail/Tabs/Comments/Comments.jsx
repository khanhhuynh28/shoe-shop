import React, { useState } from 'react';
import './style.css';
import { Rate } from 'antd';

const Comments = ({ setReviews, setTotalComments }) => {
    const [valueRate, setValueRate] = useState(0);
    const [commentContent, setCommentContent] = useState('');

    const handleChangeRate = (value) => {
        setValueRate(value);
    };

    const handleChangeComment = (e) => {
        setCommentContent(e.target.value);
    };

    const handleAddComment = () => {
        const newReview = {
            rate: valueRate,
            comment: commentContent,
        };

        setReviews((prevReviews) => [...prevReviews, newReview]);
        setTotalComments((prevTotal) => prevTotal + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddComment();
        setValueRate(0);
        setCommentContent('');
    };

    const desc = ['Kém', 'Tệ', 'Bình thường', 'Tốt', 'Rất tốt'];

    return (
        <>
            <div className="evaluate">
                <h5>Đánh giá sản phẩm</h5>
                <Rate onChange={handleChangeRate} value={valueRate} />
                {valueRate ? <span className="ant-rate-text">{desc[valueRate - 1]}</span> : ''}
            </div>
            <div>
                <h5 className="title-comments">Bình luận</h5>
                <div className="form-comment-input">
                    <textarea
                        value={commentContent}
                        type="text"
                        onChange={handleChangeComment}
                        className="comment-input"
                        placeholder="Viết bình luận...."
                    />
                    <button onClick={handleSubmit} className="comment-button">
                        Đăng
                    </button>
                </div>
            </div>
        </>
    );
};

export default Comments;
