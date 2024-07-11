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
const Filter = () => {
  const [category, setCategory] = useState("all");

  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(category === "all" ? "" : category);

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleClearFilters = () => {
    setCategory("all");
  };
  return (
    <div>
      <div className="flex justify-end items-end gap-2">
        <div>
          <Button onClick={handleClearFilters}>Clear all Filter</Button>
        </div>
        <Select value={category} onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-[150px] bg-slate-900 text-white outline-0">
            <SelectValue placeholder="Set Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="all">Set Category</SelectItem>
              <SelectItem value="basketball">Basketball</SelectItem>
              <SelectItem value="soccer">Soccer</SelectItem>
              <SelectItem value="cycling">Cricket</SelectItem>
              <SelectItem value="tennis">Tennis</SelectItem>
              <SelectItem value="baseball">Baseball</SelectItem>
              <SelectItem value="golf">Golf</SelectItem>
              <SelectItem value="running">Running</SelectItem>
              <SelectItem value="swimming">Swimming</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-4 gap-3 my-5">
        {products?.data?.map((product: TProductdata) => (
          <ProductCard {...product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
