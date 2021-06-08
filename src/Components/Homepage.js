import React from "react";
import Header from "./Layout/Header";
import Post from "./Posts/Post";
import TopPost from "./Posts/TopPost";
import PostImg from "../assets/image/boeing_787_9_516453.jpg";
import PostImg2 from "../assets/image/woman-wearing-virtual-reality-simulator_23-2148910255.jpg";
import PostImg3 from "../assets/image/3d-illustration-astronaut-pose-against-isolated-black-background-with-clipping-path_46363-369.jpg";

const Homepage = () => {
  return (
    <div>
      <Header />
      <TopPost />
      <div className="container">
        <div className="row">
        
           <Post img={PostImg}/>
           <Post img={PostImg2}/>
           <Post img={PostImg3}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
