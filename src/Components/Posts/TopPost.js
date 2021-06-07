import React from "react";
import "./TopPost.css";
import PostImg from "../../assets/image/witcher.jpg";
import ProfileImg from '../../assets/image/profile.png';

const TopPost = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="top-post-img">
              <img
                src={PostImg}
                className="img-responsive img-fluid ml-3"
                alt="Witcher"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="info-post mt-2">
              <span className="badge bg-info category-name">Category</span>
              <h3>
                <a href="/">
                  The Witcher season 2: release date, cast, set photos, trailer
                </a>
              </h3>
              <p className="text-left text-secondary truncate">
                The Witcher season 2 finished filming back in April – and a
                release date is coming in the last three months of 2021. After a
                hell of a long wait, we'll finally see the return of Henry
                Cavill's Geralt of Rivia in this hotly-anticipated second season
                of Netflix's fantasy drama. But what do we know about The
                Witcher season 2 so far? Tons, it turns out, from cast to plot
                details. The story of these coming episodes will see Geralt and
                Ciri traveling together, and unlike the convoluted time
                structure of season 1, you can anticipate this one being a lot
                easier to follow as the tale is told in a more linear fashion.
                We're finally expecting to get our first look at a trailer for
                The Witcher season 2 during Netflix's Geeked week, which takes
                place on June 7-11. At the very least, we'd expect to see the
                writers and cast talk a bit more about the show – especially
                since filming finished earlier this year. This guide will break
                down everything we know about The Witcher season 2 on Netflix so
                far, divided into sections on the story, cast, release date and
                more. Here's what you need to know about Geralt's
              </p>
              <div className="profile-info d-flex">
                  <img src={ProfileImg} className="profile-img" alt="profile-img" />
                  <span className="mt-2">By: Erfan goodarzi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPost;
