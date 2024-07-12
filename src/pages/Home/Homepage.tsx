import Filter from "@/components/Allproduct/Filter";
import ContactSection from "@/components/Home/ContactSection";
import Contactus from "@/components/Home/Contactus";
import HeroSlider from "@/components/Home/HeroSlider";
import ProductsSection from "@/components/Home/ProductsSection";
import Container from "@/components/ui/Container";

const Homepage = () => {
  return (
    <Container>
      <HeroSlider />
      <ProductsSection />
      <Contactus />
      <ContactSection />
      <Filter />
    </Container>
  );
};

export default Homepage;
