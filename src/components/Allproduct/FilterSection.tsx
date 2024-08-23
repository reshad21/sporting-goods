import { useGetAllFilterProductsQuery } from "@/redux/features/Product/productApi";
import { removeSearch } from "@/redux/features/Product/ProductSlice";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import ProductCard, { TProductdata } from "../ui/ProductCard";
import Spinner from "../ui/Spinner";
import FilterForm from "./FilterForm";
import SearchSection from "./SearchSection";

export type TFilters = {
  category: string;
  brand: string;
  rating: number | null;
  price: number | null;
  searchTerm?: string;
  sort?: string; // Added sort field
};

const FilterSection = () => {
  const searchData = useAppSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState<TFilters>({
    category: "",
    brand: "",
    rating: null,
    price: null,
    searchTerm: "",
    sort: "", // Initialize sort state
  });

  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllFilterProductsQuery(filters);

  const handleFiltersChange = (newFilters: TFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const handleSearchChange = (searchTerm: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, searchTerm }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: "",
      brand: "",
      rating: null,
      price: null,
      searchTerm: "",
      sort: "", // Clear sort filter
    });
    dispatch(removeSearch());
  };

  if (isError) return <Spinner />;
  if (isLoading) return <Spinner />;

  const noProductsFound =
    (!searchData || searchData.length === 0) &&
    (!products?.data || products.data.length === 0);

  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row lg:flex-row justify-end items-center gap-2">
        <SearchSection onSearchChange={handleSearchChange} />
        <FilterForm onChange={handleFiltersChange} />
        <Button onClick={handleClearFilters} className="bg-slate-900">
          CLEAR FILTER
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        {searchData && searchData.length > 0
          ? searchData.map((product: TProductdata) => (
              <ProductCard {...product} key={product?._id} />
            ))
          : products?.data?.map((product: TProductdata) => (
              <ProductCard {...product} key={product._id} />
            ))}
      </div>
      {noProductsFound && (
        <div className="text-center text-xl text-gray-500 mt-5 h-screen">
          No products found. Please try adjusting your filters.
        </div>
      )}
    </div>
  );
};

export default FilterSection;
