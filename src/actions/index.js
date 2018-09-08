import { CHANGE_ISCOMPLETED, DELETE_EVENT,
  // LOAD_POST,
  CLEAR_COMPLETED,SHOW_ALL,ADD_TO_EVENT} from '../constants/actionType';
// import axios from 'axios'
// import { currentState } from '../selectors';
import shortId from "shortid";
export const deleteEvent = id => ({
  type: DELETE_EVENT,
  id
});
// export const deleteEvent = id => {
//   return dispatch =>{
//     const uri =`http://localhost:3008/todoText/${id}`
//     axios.delete(uri).then(
//       res => {
//         dispatch({
//           type: DELETE_EVENT,
//           id
//         })
//       }
//     )
//    }
// }

export const changeIsCompleted = id => ({
  type: CHANGE_ISCOMPLETED,
  id
});
// export const changeIsCompleted = (todos,id) => {
//   return dispatch=>{
//     const uri =`http://localhost:3008/todoText/${id}`
//     axios.patch(uri,{isCompleted:!currentState(todos,id)}).then(res=>{
//       const isCompleted=res.data.isCompleted
//       dispatch({
//         type: CHANGE_ISCOMPLETED,
//         isCompleted,id
//       })
//     })
//   }
// }
export const loadPost = posts => ({
  type: DELETE_EVENT,
  posts
});
// export const  loadPost = ()=>{
//  return dispatch =>{
//   const uri ="http://localhost:3008/todoText"
//   axios.get(uri).then(
//     res => {
//       // const posts = res.data
//       dispatch({
//         type: LOAD_POST,
//         posts:res.data
//       })
//     }
//   )
//  }
// }
export const clearss =()=>({
    type:CLEAR_COMPLETED
})
export const showAll =(str)=>({
type:SHOW_ALL,
str
})
// export const addEvent =(text) =>dispatch=>{
//   const uri ="http://localhost:3008/todoText"
//   axios.post(uri,{todoText:text,isCompleted:false}).then(res=>{
//       dispatch({
//         type:ADD_TO_EVENT,
//         data:res.data
//       })
//   }).catch(err=>{})

// }
export const addEvent =(text)=>({
  type:ADD_TO_EVENT,
    data:text,
    isCompleted:false,
    id:shortId()
  })