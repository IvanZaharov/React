import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src='https://vestikavkaza.ru/upload/2019-05-11/15575929445cd6fb70bb49e4.13759249.jpg'/>
                {props.message}
                <div>{props.like} Like</div>
            </div>
        </div>
    )
}
export default Post;