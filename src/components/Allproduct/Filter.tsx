import { Button } from "@/components/ui/button";
import ProductCard, { TProductdata } from "@/components/ui/ProductCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import { useState } from "react";
import Spinner from "../ui/Spinner";

const Filter = () => {
  const [category, setCategory] = useState("all");

  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(category === "all" ? "" : category);

  if (isError) return <Spinner />;
  if (isLoading) return <Spinner />;

  const handleClearFilters = () => {
    setCategory("all");
  };
  return (
    <div className="my-10">
      <div className="flex justify-end items-end gap-2">
        <div>
          <Button onClick={handleClearFilters} className="">
            Clear all Filter
          </Button>
        </div>
        <Select value={category} onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-[150px] bg-[#e21b70] text-white outline-0">
            <SelectValue placeholder="Set Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="all">Set Category</SelectItem>
              <SelectItem value="cricket">Cricket</SelectItem>
              <SelectItem value="basketball">Basketball</SelectItem>
              <SelectItem value="soccer">Soccer</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {products?.data?.map((product: TProductdata) => (
          <ProductCard {...product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
