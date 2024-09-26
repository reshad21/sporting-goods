import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/Spinner";
import { addToCart } from "@/redux/features/Cart/CartSlice";
import { useGetProductByIdQuery } from "@/redux/features/Product/productApi";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isError, isLoading } = useGetProductByIdQuery(id);
  if (isError) return <Spinner />;
  if (isLoading) return <Spinner />;
  return (
    <Container>
      <div className="min-h-screen">
        <div className="card card-side bg-base-100 shadow-md border my-10 p-6">
          <figure>
            <img
              src={data.imgurl}
              alt="Movie"
              className="w-[400px] h-[400px] object-fill"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <p className="flex-grow-0">{data.description}</p>
            <div className="flex items-center gap-2">
              <Label>CATEGORY:</Label>
              <span>{data.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <Label>BRAND:</Label>
              <span>{data.brand}</span>
            </div>
            <div className="flex items-center gap-2">
              <Label>Quantity:</Label>
              <span>
                {data.quantity > 0 ? (
                  data.quantity
                ) : (
                  <Badge variant="destructive">Stock Out</Badge>
                )}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Label>Rating:</Label>
              <span>{data.rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <Label>PRICE:</Label>
              <span>{data.price}$</span>
            </div>
            <div className="card-actions justify-between">
              <Button
                onClick={() => dispatch(addToCart(data))}
                className="btn btn-primary btn-sm"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
