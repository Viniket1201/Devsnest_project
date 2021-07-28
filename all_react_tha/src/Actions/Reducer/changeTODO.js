import {inpValueType,addBtnType,removeBtnType} from '../index'

const initialValue={
    inpVal:"",
    TODOS:[]
}
const restTODOS=(state,id)=>{
    const restTodos=state.TODOS.filter((ele)=>{return ele.id !== id})
    console.log(restTodos)
    return restTodos
}
export const changeTodo=(state= initialValue,action)=>{
    switch (action.type) {
        case inpValueType().type: return {...state,inpVal:action.payload}
        case addBtnType().type: return action.payload.todo? {inpVal:'',TODOS:[...state.TODOS,action.payload]}:state
        case removeBtnType().type: return {...state,TODOS:restTODOS(state,action.payload)}
        default: return state
    }
}