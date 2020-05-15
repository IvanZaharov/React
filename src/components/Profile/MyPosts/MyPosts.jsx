import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Привет, как дела?' like='14'/>
            <Post message='Ты играл в дбд?' like='20'/>
        </div>
    )
}
export default MyPosts;