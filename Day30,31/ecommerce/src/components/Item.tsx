import { useParams,Link } from "react-router-dom";
import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { allActionsArr } from "../Actions";
import { rootReducerType } from "../Reducers/index";
import { dataInterface } from "./types";
import {AddCart} from './AddCart'
export const Item = () => {
  let { id } = useParams<{ id: string | never }>();
  const { dataGallary, itemData} = useSelector((state: rootReducerType) => state.ISR);

  const dispatch = useDispatch();
  useEffect((): void => {
    const itemDataFind = dataGallary.find((item: dataInterface): boolean => {
      return item.id === Number(id);});
    dispatch(allActionsArr.itemDataSet(itemDataFind));
  },[id]);

  
    return (
      <>
      { itemData[0]?(<section className="item"><div className='itemDiv'>
        <figure>
          <img src={itemData[0].img} alt="" />
        </figure>
        <aside>
          <div>
          <h1>{itemData[0].title}</h1>
          <h3>Price:{itemData[0].price}$</h3>
          <h5>{itemData[0].desc}</h5>
          </div>
          <AddCart  itemData={itemData[0]}/>
          <button>
            <Link to="/">Go Back</Link>
          </button>
        </aside>
        </div>
      </section>):(<h3>loading...</h3>)}
      </>
    );
  }