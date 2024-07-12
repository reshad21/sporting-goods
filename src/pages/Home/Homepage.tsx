import Filter from "@/components/Allproduct/Filter";
import ContactSection from "@/components/Home/ContactSection";
import Contactus from "@/components/Home/Contactus";
import HeroSlider from "@/components/Home/HeroSlider";
import Container from "@/components/ui/Container";

const Homepage = () => {
  return (
    <Container>
      <HeroSlider />
      <Filter />
      {/* <ProductsSection /> */}
      <Contactus />
      <ContactSection />
    </Container>
  );
};

export default Homepage;
