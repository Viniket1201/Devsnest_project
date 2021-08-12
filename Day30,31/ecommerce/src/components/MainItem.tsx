import { Link } from "react-router-dom";
interface MainItemInterface {
  id: number;
  title: string;
  price: number;
  img: string;
}
export const MainItem = ({ id, title, price, img }: MainItemInterface) => {
  return (
    <div className='mainItemDiv'>
      <img src={img} />
      <div>
    <h2>
      <Link to={`/${id}`}>
       {title}
      </Link>
      </h2>
      <h4>Price :{price}$</h4>
      </div>
    </div>
  );
};