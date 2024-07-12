import { useGetAllFilterProductsQuery } from "@/redux/features/Product/productApi";
import { removeSearch } from "@/redux/features/Product/ProductSlice";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import ProductCard, { TProductdata } from "../ui/ProductCard";
import FilterForm from "./FilterForm";
import SearchSection from "./SearchSection";

export type TFilters = {
  category: string;
  brand: string;
  rating: number | null;
  price: number | null;
};

const FilterSection = () => {
  const searchData = useAppSelector((state) => state.product.products);
  const dispatch = useDispatch(); // Corrected typo: useDispatch

  const [filters, setFilters] = useState<TFilters>({
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

  const handleFiltersChange = (newFilters: TFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({ category: "", brand: "", rating: null, price: null });
    dispatch(removeSearch()); // Dispatching removeSearch action
  };

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="my-10">
      <div className="flex justify-end items-center gap-2">
        <SearchSection />
        <Button onClick={handleClearFilters} className="bg-blue-500">
          CLEAR All FILTERS
        </Button>
        <FilterForm onChange={handleFiltersChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        {searchData && searchData.length > 0
          ? searchData.map((product: TProductdata) => (
              <ProductCard {...product} key={product._id} />
            ))
          : products?.data?.map((product: TProductdata) => (
              <ProductCard {...product} key={product._id} />
            ))}
      </div>
    </div>
  );
};

export default FilterSection;
