import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 gap-0">
          <div className="">
            <h1>Footer left section</h1>
          </div>
          <div className="">
            <h1>Footer middle section</h1>
          </div>
          <div className="">
            <h1>Footer right section</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
