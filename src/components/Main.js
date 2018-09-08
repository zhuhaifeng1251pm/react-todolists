import React, { Component } from 'react';
import style from 'styled-components'
import TodoList from './TodoList';
import InputText from './InputText';
import Menu from './Menu';
class Main extends Component {
    
    render() {
        console.log(this.props)
        const {todos,filter,deleteEvent,changeIsCompleted,showAll,addEvent}=this.props
    
        return (
            <Wrap>
                <InputText addEvent={addEvent}/>
                <TodoList   todos={todos} filter={filter} deleteEvent={deleteEvent
} changeIsCompleted={changeIsCompleted} 

                />
                <Menu filter={filter} todos={todos} showAll={showAll}/>
            </Wrap>
        );
    }
}

export default Main;

const Wrap = style.div`
width:550px;
margin:0 auto;
background-color:#fff;
display:flex;
flex-direction: column;
align-items:center;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

`