import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios'

class FullPost extends Component {

    state = {
        loadedPost : null,
      
    }
    componentDidUpdate = () =>{
        if (this.props.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) { 
                axios.get('/posts/'+ this.props.id)
                .then(res => {
                    this.setState({loadedPost : res.data})
                })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/postsss/'+ this.props.id)
        .then(res => console.log(res))
        .catch(err => this.setState({error : true}))  //console.log(err, 'gogo')
    }

    render () {

        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>

        if (this.props.id) {
            post = <p style={{textAlign:"center"}}>Loading !!!!!</p>
        }

        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }


        return post;
    }
}

export default FullPost;