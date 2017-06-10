/**
 * Created by lizixiang on 2017/6/10.
 */

import React from 'react'
import {Avatar, Timeline} from 'antd'

/*const Comment = () => {
    return (
        <div>
            <Avatar size="large">{this.props.author}</Avatar>
            <Timeline>
                <Timeline.Item>{this.props.date}</Timeline.Item>
                <Timeline.Item>{this.props.children}</Timeline.Item>
            </Timeline>
        </div>
    );
};*/

class Comment extends React.Component{
    render(){
        return (
            <div>
                <Avatar size="large">{this.props.author}</Avatar>
                <Timeline>
                    <Timeline.Item>{this.props.date}</Timeline.Item>
                    <Timeline.Item>{this.props.children}</Timeline.Item>
                </Timeline>
            </div>
        );
    }
}

export default Comment;
