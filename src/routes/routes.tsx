import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Allproducts from "../pages/Allproducts/Allproducts";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Homepage from "../pages/Home/Homepage";
import ManageProduct from "../pages/ManageProduct/ManageProduct";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/allProducts",
        element: <Allproducts />,
      },
      {
        path: "/manageProducts",
        element: <ManageProduct />,
      },
      {
        path: "/singleProduct",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
