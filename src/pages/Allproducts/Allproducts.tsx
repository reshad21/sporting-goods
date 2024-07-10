import Container from "@/components/ui/Container";
import ProductCard, { TProductdata } from "@/components/ui/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";

const Allproducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined);

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>An error has occurred!</div>;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.data?.map((product: TProductdata) => (
          <ProductCard {...product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default Allproducts;
