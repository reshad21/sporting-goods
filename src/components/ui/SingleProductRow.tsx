import { useDeleteProductMutation } from "@/redux/features/Product/productApi";
import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "./button";

type TProduct = {
  _id: string;
  title: string;
  price: number;
  imgurl: string;
  rating?: number; // Optional properties
  quantity?: number; // Optional properties
  brand?: string; // Optional properties
  category?: string; // Optional properties
  description?: string; // Optional properties
};
const SingleProductRow = ({ title, price, _id, imgurl }: TProduct) => {
  const [deleteProduct, { isLoading, isError }] = useDeleteProductMutation();
  // const dispatch = useDispatch();

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>An error has occurred!</div>;
  return (
    <tr>
      <td className="border border-slate-300 px-3">
        <div className="flex items-center gap-2">
          <img src={imgurl} alt="" className="size-4" />
          <h1>{title}</h1>
        </div>
      </td>
      <td className="border border-slate-300 px-3">{price}$</td>
      <td className="border border-slate-300 text-center">
        <Link to="#" className="">
          <Button className="bg-white hover:text-slate-900">
            <CiEdit
              size={20}
              className="font-bold text-slate-900 hover:text-white"
            />
          </Button>
        </Link>
      </td>
      <td className="border border-slate-300 text-center">
        <Button
          className="bg-white hover:text-slate-900"
          onClick={() => deleteProduct(_id)}
        >
          <MdDelete
            size={20}
            className="font-bold text-slate-900 hover:text-white"
          />
        </Button>
      </td>
      <td className="border border-slate-300 text-center">
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
