/**
 * Created by lizixiang on 2017/6/10.
 */
import React, { Component } from 'react';
import ReactDom from 'react-dom'
import 'antd/dist/antd.css';
import CommentBox from './components/CommentBox'

ReactDom.render(
    <CommentBox />,
    document.getElementById('root')
);