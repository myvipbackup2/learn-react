import React from 'react'
import {Row, Col} from 'antd'

class Header extends React.Component {
    render() {
        return (
            <div style={{padding: '20px'}}>
                <Row>
                    <Col span={24}>
                        <h1 style={{textAlign: 'center'}}>{this.props.children}</h1>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;