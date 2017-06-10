/**
 * Created by lizixiang on 2017/6/10.
 */

import React from 'react'
import Comment from './Comment'
import {Spin} from 'antd';

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
                <h2>{this.props.title}({commentNode.length})</h2>
                <hr style={{marginBottom: '20px'}}/>
                <Spin spinning={this.props.loading} size="large">
                    {commentNode}
                </Spin>
            </div>
        );
    }
}

export default CommentList;