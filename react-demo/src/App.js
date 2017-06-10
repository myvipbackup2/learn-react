/**
 * Created by lizixiang on 2017/6/10.
 */
import React from 'react'
import Header from './components/Header'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'
import './mock'
import {getData} from './fetch'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        getData(this.props.url).then(res => {
            this.setState({
                data: res.data
            });
            console.log(res)
        });
    }

    render() {
        return (
            <div>
                <Header />
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
}

export default App;