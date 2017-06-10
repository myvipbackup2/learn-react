/**
 * Created by lizixiang on 2017/6/10.
 */

import React from 'react'
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const CommentFrom = () => {
    return (
        <div style={{width:'40%',margin:'2% 5%',float:'right'}}>
            <Form className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ fontSize: 15 }} />} placeholder="姓名" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="message" style={{ fontSize: 15 }} />} type="textarea" rows="5" placeholder="内容" />
                </FormItem>
                <Button>发表</Button>
            </Form>
        </div>
    );
};

export default CommentFrom;