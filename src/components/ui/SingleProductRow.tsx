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
  rating?: number;
  quantity?: number;
  brand?: string;
  category?: string;
  description?: string;
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

  if (isError)
    return <div className="text-red-500">An error has occurred!</div>;
  if (isLoading) return <div className="text-blue-500">Loading...</div>;

  return (
    <tr className=" hover:bg-gray-100 transition">
      <td className="px-4 py-3">
        <div className="flex items-center gap-4">
          <img
            src={imgurl}
            alt={title}
            className="size-8 object-cover rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 font-semibold text-gray-700 text-center">
        {price}$
      </td>
      <td className="px-3 py-3 text-center">
        <UpdateProductModal product={product} />
      </td>
      <td className="px-3 py-3 text-center">
        <Button
          className="bg-red-500 text-white hover:bg-red-600 transition rounded-full p-2"
          onClick={() => handleDeleteProduct(_id)}
        >
          <MdDelete size={20} className="text-white" />
        </Button>
      </td>
      <td className="px-3 py-3 text-center">
        <Link to={`/singleProduct/${_id}`}>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 transition rounded-full p-2">
            <GrView size={20} className="text-white" />
          </Button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleProductRow;
