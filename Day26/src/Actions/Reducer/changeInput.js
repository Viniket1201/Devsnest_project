import {changeFirstName,changeLastName} from '..'
const initialValue ={
    firstName: '',
    lastName:''
}
export const changeInpValue=(state=initialValue,action)=>{
    switch (action.type) {
        case changeFirstName().type:return {...state,firstName:action.payload}
        case changeLastName().type:return {...state,lastName:action.payload}
        default:return state
    }
}