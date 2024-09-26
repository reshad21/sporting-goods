import Container from "@/components/ui/Container";
import { clearCart } from "@/redux/features/Cart/CartSlice";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const checkProduct = useAppSelector((state) => state.cart.cart);
  const { totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    toast.success("Order Place Successfully");
    navigate("/");
    dispatch(clearCart());
  };

  return (
    <div>
      <Container>
        <div className="py-5 my-5">
          <div className="max-w-container mx-auto ">
            <div className="px-5">
              <div className="mb-2">
                <Link
                  to="/cart"
                  className="focus:outline-none hover:underline text-gray-500 text-sm"
                >
                  <i className="mdi mdi-arrow-left text-gray-400"></i>Back
                </Link>
              </div>
              <div className="mb-2">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-600">
                  Checkout.
                </h1>
              </div>
            </div>
            <div className="w-full px-5 py-10 text-gray-800">
              <div className="w-full">
                <div className="-mx-3 md:flex items-start">
                  <div className="px-3 md:w-7/12 mb-3 lg:mb-0 lg:pr-10 border border-gray-200 rounded-lg shadow-md">
                    {checkProduct.length > 0 &&
                      checkProduct.map((product) => {
                        return (
                          <div className="w-full mx-auto text-gray-800 font-light border-b border-gray-200 p-3">
                            <div className="w-full grid grid-cols-4 items-center">
                              <div className="flex items-center">
                                <img
                                  className="size-9"
                                  src={product.imgurl}
                                  alt=""
                                />
                              </div>
                              <div className=" pl-3">
                                <h6 className="font-semibold uppercase text-gray-500 text-[13px]">
                                  {product.title}
                                </h6>
                              </div>
                              <div className="text-end px-3">
                                <h6 className="text-gray-500 font-semibold">
                                  x {product.amount}
                                </h6>
                              </div>
                              <div className="text-end px-3">
                                <span className="font-semibold text-gray-600">
                                  ${product.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    <div className="border-b border-gray-200 md:border-none text-gray-800 text-[16px]">
                      <div className="w-full flex justify-between items-center pr-6 my-6">
                        <div className="">
                          <span className="text-gray-600 font-semibold">
                            Total
                          </span>
                        </div>
                        <div className="pl-3">
                          <span className="font-semibold text-gray-400 text-sm">
                            USD
                          </span>{" "}
                          <span className="font-semibold">${totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 md:w-5/12">
                    <div className="w-full mx-auto rounded-lg border border-gray-200 text-gray-800 font-light mb-6 shadow-md">
                      <div className="w-full p-3 border-b border-gray-200">
                        <div>
                          <div className="mb-3">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                              Name
                            </label>
                            <div>
                              <input
                                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="John Smith"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                              Email
                            </label>
                            <div>
                              <input
                                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="johnsmith@gmail.com"
                                type="email"
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                              Phone Number
                            </label>
                            <div>
                              <input
                                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="+880"
                                type="number"
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                              Delivery Address
                            </label>
                            <div>
                              <input
                                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder=""
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3 flex gap-4">
                        <label
                          htmlFor="type2"
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            className="form-radio h-5 w-5 text-[#2FB390]"
                            name="type"
                            id="type2"
                          />
                          <span className="ml-2 text-gray-600">CashOn</span>
                        </label>
                        <label
                          htmlFor="type2"
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            className="form-radio h-5 w-5 text-[#2FB390]"
                            name="type"
                            id="type2"
                          />
                          <span className="ml-2 text-gray-600">Stripe</span>
                        </label>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={handlePlaceOrder}
                        className="block w-full max-w-xs mx-auto border border-transparent bg-[#e21b70] hover:bg-[#e21b70] focus:bg-[#e21b70] text-white rounded-md px-5 py-2 font-semibold"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
