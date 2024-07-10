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
];

const Topbar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full">
      {items.map((item) => (
        <Link to={item.link} key={item.pathName}>
          <Button className="w-full">{item.pathName}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Topbar;
