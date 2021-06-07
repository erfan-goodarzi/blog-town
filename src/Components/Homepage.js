import React from 'react';
import Header from './Layout/Header';
import TopPost from './Posts/TopPost';
import Post from './Posts/Post'

const Homepage = () => {
    return (
        <div>
            <Header/>
            <TopPost/>
           <Post/>
        </div>
    );
}

export default Homepage;
