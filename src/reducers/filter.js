const inistialState ='all'

const filter=(state=inistialState,action)=>{
    switch(action.type){
        case 'SHOW_ALL':   console.log(action.str) 
         return  state=action.str
        
        default:return state
    }
}
export default filter