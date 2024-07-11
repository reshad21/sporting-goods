import ProductCard, { TProductdata } from "@/components/ui/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";

const ProductsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined);

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>Loading...</div>;

  const displayedProducts = showAll
    ? products?.data
    : products?.data?.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {displayedProducts?.map((product: TProductdata, index: number) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>
    </>
  );
};

export default ProductsSection;
