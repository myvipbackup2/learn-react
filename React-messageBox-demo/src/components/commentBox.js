/**
 * Created by lizixiang on 2017/6/10.
 */
import React from 'react'
import Header from './Header'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import {getData} from '../utils/fetch'
import Mock from 'mockjs'
import '../mock'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        };
        getData(this.props.url).then(res => {
            this.setState({
                data: res.data,
                loading: false
            });
            console.log(res)
        });
    }

    handleCommentSubmit = (comment) => {
        console.log(comment);
        this.setState({
            data: [{
                'author': comment.author,
                'text': comment.text,
                'date': Mock.mock('@now'),
                'color': Mock.mock('@color')
            }].concat(this.state.data)
        });
    };

    render() {
        return (
            <div>
                <Header>{this.props.header}</Header>
                <CommentList loading={this.state.loading} title={this.props.title} data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
}

export default App;