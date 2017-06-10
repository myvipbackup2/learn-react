import React from 'react'
import {Row,Col} from 'antd'


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

const Header = () => {
    return(
        <div style={{padding:'20px'}}>
            <Row>
                <Col span={24}>
                    <h1 style={{textAlign:'center'}}>React留言板</h1>
                </Col>
            </Row>
        </div>
    );
};

export default Header;