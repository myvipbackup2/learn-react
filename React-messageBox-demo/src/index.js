/**
 * Created by lizixiang on 2017/6/10.
 */

import React from 'react';
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import CommentBox from './components/commentBox'

ReactDOM.render(
    <CommentBox url="/commentList" header="React留言板" title="留言列表"/>,
    document.getElementById('root')
);