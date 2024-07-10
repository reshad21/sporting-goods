import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "./button";
const SingleProductRow = () => {
  return (
    <tr>
      <td className="border border-slate-300 px-3">iPhone 12</td>
      <td className="border border-slate-300 px-3">100$</td>
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
        <Link to="#" className="">
          <Button className="bg-white hover:text-slate-900">
            <MdDelete
              size={20}
              className="font-bold text-slate-900 hover:text-white"
            />
          </Button>
        </Link>
      </td>
      <td className="border border-slate-300 text-center">
        <Link to="/singleProduct" className="">
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
