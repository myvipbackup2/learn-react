/**
 * Created by lizixiang on 2017/6/10.
 */

import React from 'react'
import Comment from './Comment'

const CommentList = () => {
    return (
        <div style={{width:'40%',margin:'2% 5%',float:'left'}}>
            <h2>评论列表:</h2>
            <hr style={{marginBottom:'20px'}} />
            <Comment author="lzx" date="5 分钟前">这是评论内容</Comment>
            <Comment author="test2"date="8 分钟前">dsasdasdasdasds</Comment>
        </div>
    );
};

export default CommentList;