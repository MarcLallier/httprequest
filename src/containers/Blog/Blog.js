import React, { Component } from 'react';

//import axios from 'axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    // state = {
    //     posts : []
    // }

    // componentDidMount = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res =>{
    //     this.setState({post : res})
    //     })
    // }


    render () {

        // const post = this.state.posts.map(post => {
        //     return <Post />
        // })

        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;