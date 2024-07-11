import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/sportsgoodslogo.jpg";
import Topbar from "../layout/Topbar";
import Container from "./Container";
import { Badge } from "./badge";

const Navber = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.cart);
  const [search, setSearch] = useState("");

  const { data: searchData } = useGetAllProductsQuery(search);
  console.log(searchData?.data);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
    navigate("/allProducts");
  };

  return (
    <Container>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <Link to="/cart" className="relative">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </>
            {cart.length > 0 && (
              <Badge
                variant="destructive"
                className="absolute rounded-full size-6 bottom-3 left-3"
              >
                {cart.length}
              </Badge>
            )}
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Navber;
