import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
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

const Homepage = () => {
  const [category, setCategory] = useState("");

  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(category);

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>An error has occurred!</div>;

  const handleClearFilters = () => {
    setCategory("");
  };

  return (
    <Container>
      <div className="flex justify-end items-end gap-2">
        <div>
          <Button onClick={handleClearFilters}>Clear all Filter</Button>
        </div>
        <Select onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-[200px] bg-slate-900 text-white outline-0">
            <SelectValue placeholder="Set Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
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

      <div className="grid grid-cols-4 gap-3 my-5">
        {products?.data?.map((product: TProductdata) => (
          <ProductCard {...product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default Homepage;
