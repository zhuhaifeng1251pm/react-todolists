import { DELETE_EVENT,CLEAR_COMPLETED,CHANGE_ISCOMPLETED,LOAD_POST,ADD_TO_EVENT } from "../constants/actionType";
const inistialState=[{
    "id": "123",
    "todoText": "123123",
    "isCompleted": false
  },
  {
    "id": "456",
    "todoText": "qweqweqweq",
    "isCompleted": true
  },
  {
    "id": "789",
    "todoText": "qweqwe12312qweq",
    "isCompleted": true
  },
  {
    "todoText": "123123123",
    "isCompleted": false,
    "id": "aWwrZVS"
  }
    
]
const todos=(state=inistialState,action)=>{
    switch(action.type){
        case ADD_TO_EVENT:
        // return [...state,action.data]
        // console.log(action)
        return [...state,{todoText:action.data,id:action.id,isCompleted:action.isCompleted}]

        // case CHANGE_ISCOMPLETED: return state.map( todo => todo.id === action.id? { ...todo, isCompleted: action.isCompleted }: todo)
        case CHANGE_ISCOMPLETED: return state.map( todo => todo.id === action.id? { ...todo, isCompleted: !todo.isCompleted }: todo)

         
        case DELETE_EVENT:return state.filter(todo=>todo.id !==action.id)
        case CLEAR_COMPLETED:return state.filter(todo=>todo.isCompleted===false)
        case LOAD_POST: 
        return action.posts
        default :return state
    }
}
export default todos