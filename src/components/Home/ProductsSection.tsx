import ProductCard, { TProductdata } from "@/components/ui/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
const ProductsSection = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined);

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>An error has occurred!</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products?.data?.map((product: TProductdata) => (
        <ProductCard {...product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsSection;
