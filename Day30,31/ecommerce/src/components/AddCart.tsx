import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { allActionsArr } from '../Actions'
import { dataInterface } from './types'
export const AddCart = ({itemData}:{itemData:dataInterface}) => {
    const [itemVal, setItemVal] = useState(1)
    const dispatch = useDispatch()
    const handleAddCart=()=>{
        dispatch(allActionsArr.addToCartAction(itemData,itemVal))
    }
    return (
        <div className='addCart'>
            <div>
            <button onClick={()=>{setItemVal(preVal=>preVal+1)}} >+</button>
            <span>{itemVal<1?1:itemVal}</span>
            <button onClick={()=>{if(itemVal>1){setItemVal(preVal=>preVal-1)}}}>-</button>
            </div>
            <button onClick={()=>handleAddCart()}>Add to Cart</button>
        </div>
    )
}