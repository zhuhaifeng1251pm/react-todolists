//用来计算衍生数据，衍生数据：由 store 中的数据经过计算出来的数据
const getCurrentTodos=(state,filter)=>{
    switch(filter){
        case 'active':return state.filter(todo=>!todo.isCompleted)
        case 'completed':return state.filter(todo=>todo.isCompleted)
       case 'all':return state
       default:return state
    }
}
export {getCurrentTodos}

export const currentState=(todos,id) => {
    return todos.find(todo=>todo.id===id).isCompleted
    
}