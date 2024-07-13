import { useDeleteProductMutation } from "@/redux/features/Product/productApi";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import UpdateProductModal from "../product/UpdateProductModal";
import { Button } from "./button";

export type TProduct = {
  _id: string;
  title?: string;
  price?: number;
  imgurl?: string;
  rating?: number; // Optional properties
  quantity?: number; // Optional properties
  brand?: string; // Optional properties
  category?: string; // Optional properties
  description?: string; // Optional properties
};
const SingleProductRow = (product: TProduct) => {
  const { _id, title, price, imgurl } = product;

  const [deleteProduct, { isLoading, isError }] = useDeleteProductMutation();

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete product.");
    }
  };

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>An error has occurred!</div>;
  return (
    <tr>
      <td className="border-2 border-slate-300 px-3">
        <div className="flex items-center gap-2">
          <img src={imgurl} alt="" className="size-4" />
          <h1 className="font-semibold">{title}</h1>
        </div>
      </td>
      <td className="border-2 border-slate-300 px-3 font-semibold">{price}$</td>
      <td className="border-2 border-slate-300 text-center">
        <UpdateProductModal product={product} />
      </td>
      <td className="border-2 border-slate-300 text-center">
        <Button
          className="bg-white hover:text-slate-900"
          onClick={() => handleDeleteProduct(_id)}
        >
          <MdDelete
            size={20}
            className="font-bold text-slate-900 hover:text-white"
          />
        </Button>
      </td>
      <td className="border-2 border-slate-300 text-center">
        <Link to={`/singleProduct/${_id}`} className="">
          <Button className="bg-white hover:text-slate-900">
            <GrView
              size={20}
              className="font-bold text-slate-900 hover:text-white"
            />
          </Button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleProductRow;
