import { addToCart } from "@/redux/features/Cart/CartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "./badge";
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

const ProductCard = (product: TProductdata) => {
  const {
    _id,
    title,
    price,
    imgurl,
    description,
    brand,
    category,
    quantity,
    rating,
  } = product;

  const dispatch = useDispatch();

  const [volume, setVolume] = useState(quantity);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const updatedProduct = { ...product, quantity: quantity - 1 };
      setVolume((previousData) => previousData - 1);
      dispatch(addToCart(updatedProduct));
    } else {
      alert("Product is out of stock");
    }
  };

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img
          src={imgurl}
          alt="Product Image"
          className="size-40 object-cover"
        />
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
          <span>
            {volume > 0 ? (
              volume
            ) : (
              <Badge variant="destructive">Stock Out</Badge>
            )}
          </span>
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
            <Button className="btn bg-blue-500 btn-sm">View Details</Button>
          </Link>
          <Button
            onClick={handleAddToCart}
            disabled={volume <= 0}
            className="btn bg-orange-500 btn-sm"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
