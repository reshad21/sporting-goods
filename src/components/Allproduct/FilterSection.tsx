import { useGetAllFilterProductsQuery } from "@/redux/features/Filter/filterApi";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Button } from "../ui/button";
import ProductCard, { TProductdata } from "../ui/ProductCard";
import FilterForm from "./FilterForm";

const FilterSection = () => {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    rating: null,
    price: null,
  });

  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllFilterProductsQuery(filters);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleClearFilters = () => {
    setFilters({ category: "", brand: "", rating: null, price: null });
  };

  return (
    <div className="my-10">
      <div className="flex justify-end items-center gap-2">
        <div className="">
          <form className="relative">
            <input
              type="text"
              className="grow p-0 border-2 border-slate-300 pl-2 py-2 rounded-md"
              placeholder="Search"

              //   value={}
              //   onChange={handleSearchChange}
            />
            <button
              className="bg-orange-400 text-white border rounded-md p-3 absolute right-0 top-0 bottom-0"
              type="submit"
            >
              <IoSearch />
            </button>
          </form>
        </div>
        <Button onClick={handleClearFilters} className="bg-blue-500">
          CLEAR All FILTERS
        </Button>
        <FilterForm onChange={handleFiltersChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        {products?.data?.map((product: TProductdata) => (
          <ProductCard {...product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
