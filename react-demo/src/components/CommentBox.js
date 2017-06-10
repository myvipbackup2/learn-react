'use strict';

import React from 'react'
import {DatePicker} from 'antd'


/*class CommentBox extends React.Component {
    render() {
        return (
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
            </div>
        );
    }
}*/

const CommentBox = () => {
    return(
        <div className="ui comments">
            <h1>评论</h1>
            <DatePicker />
        </div>
    );
};

export default CommentBox;