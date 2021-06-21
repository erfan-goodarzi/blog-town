import React, { Component } from "react";
import Header from "./Layout/Header";
 import Post from "./Posts/Post";
import TopPost from "./Posts/TopPost";

import axios from "axios";

class Homepage extends Component {
  state={
    posts: [],
   
}



componentDidMount(){
    axios.get('http://api.mediastack.com/v1/news?access_key=d073b39f8f21673d0431971f9a3c490c')
    .then(res => {
      console.log(res)
      const posts = res.data.data;
      console.log(posts)
        const updatePosts = posts.map(item=>{
            return {
                ...item,
                author: 'Erfan'
            }
        })
        this.setState({posts: updatePosts})
    }).catch(error =>{
        this.setState({error :true})
    })
    
}

postClick = (id) =>{
    this.setState({selectedPostID : id})
}

render() {
    let posts = <h4 style={{textAlign: 'center',color: 'red' }}>Somethig went wrong...</h4>;
    if(!this.state.error){
     posts = this.state.posts.map(item => {
         return <Post Clicked={() => this.postClick(item.id)} title={item.title} author={item.author}/>
     })
    }
    return (
      <div>
      <Header />
      <TopPost />
      <div className="container">
        <div className="row">
            {posts}
        </div>
      </div>
    </div>
    )
}
}

export default Homepage;
