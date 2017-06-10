/**
 * Created by lizixiang on 2017/6/10.
 */
import React from 'react'
import Header from './components/Header'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'

const App = () => {
    return (
        <div>
            <Header />
            <CommentList />
            <CommentForm />
        </div>
    );
};

export default App;