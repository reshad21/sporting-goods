import { Button } from "./button";
import { Label } from "./label";

// import ballImage from "../../assets/Images/ball1.png";
const ProductCard = () => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="flex items-center gap-2">
          <Label>CATEGORY:</Label>
          <span>Cricket</span>
        </div>
        <div className="flex items-center gap-2">
          <Label>STOCK QUENTITY:</Label>
          <span>22</span>
        </div>
        <div className="flex items-center gap-2">
          <Label>BRAND:</Label>
          <span>NIKE</span>
        </div>
        <div className="flex items-center gap-2">
          <Label>PRICE:</Label>
          <span>44$</span>
        </div>
        <div className="card-actions justify-between">
          <Button className="btn btn-primary">View Details</Button>
          <Button className="btn btn-primary">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
