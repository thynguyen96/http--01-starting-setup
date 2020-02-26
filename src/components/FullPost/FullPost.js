import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {

    state = {
        loadPost: null
    }

    componentDidUpdate = () => {
        if(this.props.id){
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                this.setState({
                    loadPost: response.data
                })
            })
        }
    }
    render () {
        let post = <p style={{textAlign: 'center'}} >Please select a Post!</p>;
        if(this.props.id){
            <p style={{textAlign: 'center'}} >Loading...</p>
        }
        if(this.props.loadPost){
            post = (
                <div className="FullPost">
                    <h1>this.state.loadPost.title</h1>
                    <p>this.state.loadPost.content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;