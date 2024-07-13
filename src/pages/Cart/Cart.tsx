import Container from "@/components/ui/Container";
import { decrease, increase } from "@/redux/features/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  const products = useAppSelector((state) => state.cart.cart);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Container>
        <div className="my-5 h-screen">
          {products?.length > 0 &&
            products.map((product) => (
              <div className="mb-3 grid grid-cols-3 items-center border shadow-md rounded-md p-3">
                <h1 className="text-md font-semibold">{product.title}</h1>
                <div className="flex justify-center items-center gap-3 w-[60%] mx-auto">
                  <button
                    onClick={() => dispatch(decrease(product))}
                    className="border-2 rounded-sm px-1"
                  >
                    <span>
                      <AiOutlineMinus size={15} />
                    </span>
                  </button>

                  <span className="text-md font-semibold">
                    {product.amount}
                  </span>

                  <button
                    onClick={() => dispatch(increase(product))}
                    className="border-2 rounded-sm px-1"
                  >
                    <span>
                      <AiOutlinePlus size={15} />
                    </span>
                  </button>
                </div>
                <div className="text-md text-end">
                  <span className="font-bold">Price: </span>
                  {product.price}
                </div>
              </div>
            ))}
          {products?.length > 0 ? (
            <div className="mt-10">
              <div className="flex justify-between">
                <p className="text-md font-semibold text-orange-600">
                  Total Amount:
                </p>
                <span className="text-slate-600 text-md font-semibold text-end px-1">
                  ${totalPrice}
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
          ) : (
            <div className="flex flex-col items-center gap-1">
              <p className="text-center font-semibold">
                ADD TO CART YOUR PRODUCT
              </p>
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
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
