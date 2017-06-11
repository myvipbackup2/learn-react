/**
 * Created by lizixiang on 2017/6/10.
 */

import React from 'react'
import {Avatar, Timeline} from 'antd'

class Comment extends React.Component {
    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                <Avatar style={{float: 'left', backgroundColor: this.props.color}}
                        size="large">{this.props.author}</Avatar>
                <Timeline style={{float: 'left', marginLeft: '3%', width: '80%'}}>
                    <Timeline.Item>{this.props.date}</Timeline.Item>
                    <Timeline.Item>{this.props.children}</Timeline.Item>
                </Timeline>
            </div>
        );
    }
}

export default Comment;
