import { useGetAllFilterProductsQuery } from "@/redux/features/Filter/filterApi";
import { useState } from "react";
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

  return (
    <div className="my-10">
      <div className="flex justify-end items-end gap-2">
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
