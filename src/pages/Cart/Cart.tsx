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
        <>
          {products?.length > 0 &&
            products.map((product) => (
              <div className="px-1 mb-5 grid grid-cols-3 items-center">
                <h1 className="text-[13px] font-semibold">{product.title}</h1>
                <div className="flex justify-center items-center gap-3 border-2 w-[60%] mx-auto">
                  <button onClick={() => dispatch(decrease(product))}>
                    <span>
                      <AiOutlineMinus size={10} />
                    </span>
                  </button>

                  <span className="text-sm font-semibold">
                    {product.quantity}
                  </span>

                  <button onClick={() => dispatch(increase(product))}>
                    <span>
                      <AiOutlinePlus size={15} />
                    </span>
                  </button>
                </div>
                <div className="text-sm text-end">
                  <span className="font-bold">Price: </span>
                  {product.price}
                </div>
              </div>
            ))}
          {products?.length > 0 ? (
            <div className="mt-10">
              <div className="flex justify-between">
                <p className="text-sm font-semibold text-green-600">
                  Total Amount:
                </p>
                <span className="text-slate-600 text-sm font-semibold text-end px-1">
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
        </>
      </Container>
    </div>
  );
};

export default Cart;
