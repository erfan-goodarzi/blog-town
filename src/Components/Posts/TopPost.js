import React from 'react';
import './TopPost.css';
import PostImg from '../../assets/image/witcher.jpg';

const TopPost = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="top-post-img">
                            <img src={PostImg} className="img-responsive img-fluid ml-3" alt="Witcher" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                            <div className="info-post mt-2">
                                <span className="badge bg-info category-name">Category</span>
                                <h3><a href="/">The Witcher season 2: release date, cast, set photos, trailer and what we know</a></h3>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopPost;
