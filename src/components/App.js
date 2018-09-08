import React, { Component } from 'react';
import Maincontainer from '../containers/Maincontainer';
import styled from 'styled-components'
// import axios from 'axios'
// import store from '../store'
import {connect} from'react-redux'
import { loadPost} from '../actions/index';
class App extends Component {
    componentDidMount=() => {
//         const uri ="http://localhost:3008/todoText"
//         axios.get(uri).then(res=>{
// this.props.loadPost(res.data)
//                 }).catch(err=>{})
this.props.loadPost()
console.log(this.props)
    }
    render() {
        return (
            <Wrap>
                <h1>todos</h1>
                <Maincontainer/>
                <footer>
                    <p>Double-click to edit a todo</p>
                    <p>Created by petehunt</p>
                    <p>Part of T0doMVC</p>
                </footer>
            </Wrap>
        );
    }
}

export default connect(null,{loadPost})(App);
const Wrap=styled.div`
display:flex;
flex-direction: column;
align-items:center;
line-height:10px;
background: #fff;


h1{
    font-size: 100px;
    font-weight:400;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    width: 100%
}
footer{
    margin: 65px auto 0;
    color: #bfbfbf;
    font-size: 10px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
}
`