import Container from "@/components/ui/Container";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div>
      <Container>
        <div className="mb-5 grid grid-cols-3 items-center border-2 p-2 rounded-md">
          <h1 className="font-semibold text-lg">Running Shows</h1>
          <div className="flex justify-center items-center gap-3  w-[60%] mx-auto">
            <button className="border-2 rounded-md">
              <span>
                <AiOutlineMinus size={20} />
              </span>
            </button>

            <span className="font-semibold">2</span>

            <button className="border-2 rounded-md">
              <span>
                <AiOutlinePlus size={20} />
              </span>
            </button>
          </div>
          <div className="text-xl text-end">
            <span className="font-bold">Price: </span>20
          </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-green-600">
              Total Amount:
            </p>
            <span className="text-slate-600 text-xl font-semibold text-end px-1">
              $1000
            </span>
          </div>
          <div className="w-full bg-blue-700 mt-4 rounded-md">
            <Link
              to="/checkout"
              className="w-full block p-2 text-white font-semibold text-center"
            >
              Checkout
            </Link>
          </div>
        </div>
        :
        <div className="flex flex-col items-center gap-1">
          <p className="text-center font-semibold">ADD TO CART YOUR PRODUCT</p>
          {/* <span className="text-2xl">😊</span> */}
          <span className="text-2xl">
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif"
              alt="😀"
              width="32"
              height="32"
            />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
