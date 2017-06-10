/**
 * Created by lizixiang on 2017/6/10.
 */

import React from 'react'
import {Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;
let showLoading = false;  //显示loading

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class CommentFrom extends React.Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        showLoading = true;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        // Only show error after a field is touched.
        const authorError = isFieldTouched('author') && getFieldError('author');
        const textError = isFieldTouched('text') && getFieldError('text');

        return (
            <div style={{width: '40%', margin: '2% 5%', float: 'right'}}>
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <FormItem validateStatus={authorError ? 'error' : ''}
                              help={authorError || ''}
                    >
                        {getFieldDecorator('author', {
                            rules: [{required: true, message: '请输入用户名!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 15}}/>} placeholder="用户名"/>
                        )}
                    </FormItem>
                    <FormItem validateStatus={textError ? 'error' : ''}
                              help={textError || ''}
                    >
                        {getFieldDecorator('text', {
                            rules: [{required: true, message: '请输入内容!'}],
                        })(
                            <Input prefix={<Icon type="message" style={{fontSize: 15}}/>} type="textarea" rows="5"
                                   placeholder="内容"/>
                        )}
                    </FormItem>
                    <Button disabled={ hasErrors(getFieldsError())} type="primary" htmlType="submit">
                        {showLoading &&
                        <Icon type="loading"/>
                        }
                        发表
                    </Button>
                </Form>
            </div>
        );
    }

}

export default CommentFrom = Form.create()(CommentFrom) ;