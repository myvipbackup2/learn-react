/**
 * Created by lizixiang on 2017/6/10.
 */

import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
    render() {
        let commentNode = this.props.data.map((comment, index) => {
            return (
                <Comment key={index} color={comment.color} author={comment.author} date={comment.date}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div style={{width: '40%', margin: '2% 5%', float: 'left'}}>
                <h2>评论列表:</h2>
                <hr style={{marginBottom: '20px'}}/>
                {commentNode}
            </div>
        );
    }
}

export default CommentList;