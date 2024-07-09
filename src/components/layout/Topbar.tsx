import { Link } from "react-router-dom";
import { Button } from "../ui/button";

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
];

const Topbar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      {items.map((item) => (
        <Link to={item.link}>
          <Button className="w-full">{item.pathName}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Topbar;
