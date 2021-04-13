import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
    // component 가 실행될 때 constructor가 제일 먼저 실행되면서 초기화를 담당한다.
    constructor(props) {
        super(props);
        this.state = {
            subject: { title: 'WEB', sub: 'World Wide Web!' },
        };
    }
    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                ></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <TOC></TOC>
                <Content
                    title="HTML"
                    desc="HTML is HyperText Markup Language."
                ></Content>
            </div>
        );
    }
}

export default App;
