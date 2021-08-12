import {FC,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {allActionsArr} from '../Actions'
import {rootReducerType} from '../Reducers/index'
import {MainItem} from './MainItem'
export const Main :FC= () => {
    const {dataGallary}= useSelector((state:rootReducerType)=> state.ISR)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActionsArr.dataInitialize())
    }, [])
    return (

            <section className='main'>
                {dataGallary.length >0 ? dataGallary.map((item)=>{
                    return(
                        <MainItem key={item.id} {...item} />)}):<h1>Loading...</h1>}
            </section> 
    )
}