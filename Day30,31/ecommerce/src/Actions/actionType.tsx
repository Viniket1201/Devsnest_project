import {Menu} from '../components/Data'
import {dataInterface} from '../components/types'
export const dataInitialize=()=>{
    return {
        type:'INITIALIZE',
        payload:Menu
    }
}
export const itemDataSet=(itemData:dataInterface|unknown)=>{
    return {
        type:'SETITEM',
        payload:[itemData]
    }
}
export const addToCartAction=(itemData:dataInterface,itemVal:number)=>{
    return {
        type:'ADDCART',
        payload:[{...itemData,addItem:itemVal}]
    }
}
export const removeCartItem=(itemData:dataInterface)=>{
    return {
        type:'REMOVEITEM',
        payload:[itemData]
    }
}