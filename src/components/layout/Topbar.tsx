import { Button } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    link: "/",
    pathName: "Home",
  },
  {
    link: "/aboutus",
    pathName: "Aboutus",
  },
  {
    link: "/allProducts",
    pathName: "AllProducts",
  },
  {
    link: "/manageProducts",
    pathName: "ManageProducts",
  },
  {
    link: "/singleProduct",
    pathName: "SingleProducts",
  },
  // {
  //   link: "/cart",
  //   pathName: "Cart",
  // },
  // {
  //   link: "/checkout",
  //   pathName: "Checkout",
  // },
];

const Topbar = () => {
  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <Link to={item.link}>
          <Button>{item.pathName}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Topbar;
