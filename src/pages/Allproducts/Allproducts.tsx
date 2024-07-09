import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";

const Allproducts = () => {
  return (
    <Container>
      <div className="grid grid-cols-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
};

export default Allproducts;
