import React, { Component } from "react";
import { getCurrentTodos } from "../selectors";
import styled from "styled-components";
// import axios from 'axios';
class TodoList extends Component {
    isToCompleted = id => {
        const { 
          // todos, 
          changeIsCompleted } = this.props;
        // // store.dispatch(changeIsCompleted(id))
        // const uri=`http://localhost:3008/todoText/${id}`

        // axios.patch(uri,{isCompleted:!currentState(todos,id)}).then(res=>{
        //   console.log(res)
        // changeIsCompleted(id)
        // })
        // changeIsCompleted(todos,id)
        changeIsCompleted(id)
    };
    handleDelete = id => {
        //  const uri=`http://localhost:3008/todoText/${id}`
        //   // store.dispatch(deleteEvent(id))
        //  axios.delete(uri).then(res=>{
        //    const {deleteEvent}=this.props
        //   deleteEvent(id)
        //  }).catch(err=>{})
        this.props.deleteEvent(id);
        // console.log(id)
    };
    render() {
        console.log(this.props);
        const { todos, filter } = this.props;
        const listItems =
            todos.length === 0 ? (
                <span></span>
            ) : (
                <ul>
                    {getCurrentTodos(todos, filter).map(todo => (
                        <li
                            style={{
                                textDecoration: todo.isCompleted
                                    ? "line-through"
                                    : "none"
                            }}
                            key={todo.id}
                            onClick={() => {
                                this.isToCompleted(todo.id);
                            }}
                        >
                            {" "}
                            <div>
                                <input
                                    type="checkbox"
                                    id={`input${todo.id}`}
                                    checked={todo.isCompleted}
                                />
                                <label htmlFor={`input${todo.id}`} />
                                <span>{todo.todoText}</span>
                            </div>
                            <button
                                onClick={() => {
                                    this.handleDelete(todo.id);
                                }}
                            >
                                {" "}
                                <img
                                    src="http://pcgnine5c.bkt.clouddn.com/x.png"
                                    alt=""
                                />{" "}
                            </button>
                        </li>
                    ))}
                </ul>
            );
        // const listItemsActive= todos.length===0?'': <ul>{todos.filter(todo=>todo.isCompleted===false).map(todo=> <li key={todo.id}  onClick={this.isToCompleted(todo.id)}>{todo.todoText} <button onClick={()=>{this.handleDelete(todo.id)}}>x</button></li> )}</ul>
        // const listItemsCompleted= todos.length===0?'': <ul>{todos.filter(todo=>todo.isCompleted===true).map(todo=> <li key={todo.id} onClick={this.isToCompleted(todo.id)}>{todo.todoText} <button onClick={()=>{this.handleDelete(todo.id)}}>x</button></li> )}</ul>
        return <Wrap>{listItems}</Wrap>;
    }
}

export default TodoList;

const Wrap = styled.div`
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        margin-top: 1px;
    }
    ul > li {
        width: 450px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 0px 35px;
        align-items: center;
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        justify-content: space-between;
        display: flex;
        align-items: center;
    }
    ul > li:hover button {
        display: block;
    }
    ul > li > span {
        margin-left: 0px;
    }
    ul > li {
        position: relative;
    }
    ul > li > div input[type="checkbox"] {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    /* ul> li >div  label {
    padding-left: 80px;
  } */
    ul > li > div label::before {
        content: "";
        display: block;
        width: 22px;
        height: 22px;
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 14px;
        left: 0px;
    }
    ul > li > div input:checked ~ label::before {
        background-image: url("http://pcgnine5c.bkt.clouddn.com/gou.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    ul > li > button {
        border: 0;
        outline: 0;
        background-image: url("../imges/x.png");
        width: 25px;
        height: 25px;
        background-color: #fff;
        font-size: 30px;
        color: #cc9a9a;
        margin-bottom: 11px;
        display: none;
        margin-left: 50px;
    }
`;
