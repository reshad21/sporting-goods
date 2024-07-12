import AboutCompany from "@/components/About/AboutCompany";
import GoogleMap from "@/components/About/GoogleMap";
import OurTeamSection from "@/components/About/OurTeamSection";
import Contactus from "@/components/Home/Contactus";
import Container from "@/components/ui/Container";

const About = () => {
  return (
    <div>
      <Container>
        <AboutCompany />
        <Contactus />
        <OurTeamSection />
        <GoogleMap />
      </Container>
    </div>
  );
};

export default About;
