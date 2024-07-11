import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { Label } from "@/components/ui/label";
import { useGetProductByIdQuery } from "@/redux/features/Product/productApi";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetProductByIdQuery(id);
  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>An error has occurred!</div>;
  return (
    <Container>
      <div className="card card-side bg-base-100 shadow-xl">
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
            <Link to={`/singleProduct/${data._id}`}>
              <Button className="btn btn-primary btn-sm">View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
