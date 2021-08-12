import {FC,useState} from 'react'
import {Cart} from './Cart'
export const Navbar:FC = () => {
  const [isShowCart, setIsShowCart] = useState<boolean>(false)
    return (
      <>
         <nav>
            <h1>Ecommerce Website</h1>
            <button onClick={()=>setIsShowCart(!isShowCart)}>Cart</button>
          </nav>
          <Cart isShowCart={isShowCart} setIsShowCart={setIsShowCart}/>
      </>
    )
}