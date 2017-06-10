/**
 * Created by lizixiang on 2017/6/10.
 */

import React from 'react';
import ReactDom from 'react-dom'
import 'antd/dist/antd.css';
import CommentBox from './components/commentBox'

ReactDom.render(
    <CommentBox url="/commentList" header="React留言板" title="留言列表"/>,
    document.getElementById('root')
);