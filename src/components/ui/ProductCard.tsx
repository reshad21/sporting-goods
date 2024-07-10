import { Link } from "react-router-dom";
import { Button } from "./button";
import { Label } from "./label";

export type TProductdata = {
  _id: string;
  price: number;
  rating: number;
  quantity: number;
  brand: string;
  category: string;
  description: string;
  imgurl: string;
  title: string;
};
const ProductCard = ({
  _id,
  price,
  rating,
  quantity,
  brand,
  category,
  description,
  imgurl,
  title,
}: TProductdata) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img src={imgurl} alt="Product Image" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex items-center gap-2">
          <Label>CATEGORY:</Label>
          <span>{category}</span>
        </div>
        <div className="flex items-center gap-2">
          <Label>BRAND:</Label>
          <span>{brand}</span>
        </div>
        <div className="flex items-center gap-2">
          <Label>Quantity:</Label>
          <span>{quantity}</span>
        </div>
        <div className="flex items-center gap-2">
          <Label>Rating:</Label>
          <span>{rating}</span>
        </div>
        <div className="flex items-center gap-2">
          <Label>PRICE:</Label>
          <span>{price}$</span>
        </div>
        <div className="card-actions justify-between">
          <Link to={`/singleProduct/${_id}`}>
            <Button className="btn btn-primary btn-sm">View Details</Button>
          </Link>
          <Button className="btn btn-primary btn-sm">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
