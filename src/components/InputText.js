import React, { Component } from 'react';
import styled from 'styled-components'
// import store from '../store'
// import shortid from 'shortid'
// import axios from 'axios';
class InputText extends Component {
    state={
        text:''
    }
    handleChange=(event) => {
        this.setState({
            text:event.target.value
        })
    }
    addToEvent=() => {
    const {text}=this.state
    if(text.trim()){
        // store.dispatch({type:'ADD_TO_EVENT',todoText:text,id:shortid()})
        // const uri ="http://localhost:3008/todoText"
        // axios.post(uri,{todoText:text,isCompleted:false}).then(res=>{
            this.props.addEvent(text)
            // console.log(res.data)
        // }).catch(err=>{})
        // this.props.addEvent(text,shortid())
     this.setState({
         text:''
     })
    }
    }
    render() {
        const {text}=this.state
        return (
            <Wrap>
                <input type="text" value={text} onChange={this.handleChange} placeholder="What needs to be done?"/>
                <button onClick={this.addToEvent}>提交</button>
            </Wrap>
        );
    }
}

export default InputText;
const Wrap = styled.div`
    width:100%;
    height:65px;
    display:flex;
    align-items: center;
    justify-content: space-between;
input{
    width: 450px;
    height: 65px;
    outline: 0;
    box-sizing: border-box;
    padding: 16px 16px 16px 50px;
    font-size: 24px;
    border: 0;
}
input::-webkit-input-placeholder {
    color: #ccc;
    font-style: italic;
  }
  button {
    width: 100px;
    background-color: #1992ff;
    border-color: #1992ff;
    font-size: 24px;
    color: #fff;
    height: 65px;
  }

`