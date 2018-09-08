import React from 'react'
import { connect } from 'react-redux'
import Main from '../components/Main';
import {deleteEvent,changeIsCompleted,showAll,addEvent} from'../actions'

const Maincontainer = props => <Main {...props}/>
//component,为需要展示的组件的名字，记得要在上面import
const mapStateToProps = state => {

return  { todos:state.todos,filter:state.filter};

};

export default connect(mapStateToProps,{deleteEvent,changeIsCompleted,showAll,addEvent})(Maincontainer);