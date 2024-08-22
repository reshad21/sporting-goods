import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";
import logo from "../../assets/sportsgoodslogo.jpg";
import Topbar from "../layout/Topbar";
import { Badge } from "./badge";

const Navber = () => {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <>
      <div className="navbar fixed top-0 left-0 right-0 bg-slate-900 px-16 py-4 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Topbar />
            </ul>
          </div>
          <Link to="/" className="">
            <img src={logo} className="size-14 rounded-full" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Topbar />
          </ul>
        </div>
        <div className="navbar-end items-center gap-2">
          <Link to="/cart" className="relative">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </>
            {cart.length > 0 && (
              <Badge
                variant="destructive"
                className="absolute rounded-full size-6 bottom-3 left-3 flex justify-center items-center"
              >
                {cart.length}
              </Badge>
            )}
          </Link>
        </div>
      </div>
      {/* Placeholder to prevent content from being hidden behind the fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navber;
