import { rootReducerType } from "../Reducers/index";
import {useSelector,useDispatch} from 'react-redux'
import {allActionsArr} from '../Actions/index'
export const Cart = ({isShowCart,setIsShowCart}:{isShowCart:boolean,setIsShowCart:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const {addToCart} = useSelector((state:rootReducerType) => state.ISR)
  const dispatch = useDispatch()
    return (
        <>
            <article className="cart" style={{right:(isShowCart?"0px":"-310px")}}>
            <button onClick={()=>setIsShowCart(!isShowCart)}>X</button>
            <div className="cartItems">
                  {addToCart.map((cartItem)=>{
                  return (
                    <div className="cartItem" key={cartItem.id}>
                        <img src={cartItem.img} alt="" />
                        <div>
                            <h3>{cartItem.title}</h3>
                            <h5>Price:{cartItem.price}$</h5>
                            <h4>Amount:{cartItem.addItem}</h4>
                            <h4>Totle: {Number(cartItem.price)* Number(cartItem.addItem)}$</h4>
                            <button onClick={()=>dispatch(allActionsArr.removeCartItem(cartItem))}>Remove</button>
                        </div>
                    </div>
                  )
                })}
            </div>
          </article>
        </>
    )
}