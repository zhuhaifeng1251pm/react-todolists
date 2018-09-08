import React, { Component } from 'react';
import styled from 'styled-components'
import store from '../store'
class Menu extends Component {
    handleClick=(str) => {
        // store.dispatch({type:'SHOW_ALL',str:str})
        // console.log(this.props)
        // console.log(str)
        this.props.showAll(str)
    }
    handleCLear=() => {
        store.dispatch({type:'CLEAR_COMPLETED'})
    }
    render() {
        const {todos,filter}=this.props
        const num2 =todos.length
        const num= todos.filter(todo=>todo.isCompleted===false).length
        const num1=todos.filter(todo=>todo.isCompleted===true).length
        return (
            <Wrap  style={{display:num2?'flex':'none'}}>
                <span> {num} items left</span>
                <div>
                    <span style={{border:filter==='all'?'2px solid rgba(175, 47, 47, 0.2)':'2px solid #fff'}} onClick={()=>{this.handleClick('all')}}>All</span>
                    <span style={{border:filter==='active'?'2px solid rgba(175, 47, 47, 0.2)':'2px solid #fff'}} onClick={()=>{this.handleClick('active')}}>Active</span>
                    <span style={{border:filter==='completed'?'2px solid rgba(175, 47, 47, 0.2)':'2px solid #fff'}} onClick={()=>{this.handleClick('completed')}}>Complted</span>
                </div>
                <span style={{display:num1?'block':'none'}} onClick={this.handleCLear}>Clear Completed</span>
            </Wrap>
        );
    }
}

export default Menu;
const Wrap=styled.div`
    width: 100%;
    color: #777;
    padding: 10px 15px;
    line-height: 40px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    :before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index:-1;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
  div {
    width: 200px;
    display: flex;
    line-height: 40px;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    margin-right: 30px;
  }
  div>span{
    color: inherit;
    margin: 3px;
    line-height: 25px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 3px;
    
  }
  div>span:hover {
    border: 1px solid rgba(175, 47, 47, 0.2);
  }
  

`