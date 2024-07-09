import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";

const Allproducts = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
};

export default Allproducts;
