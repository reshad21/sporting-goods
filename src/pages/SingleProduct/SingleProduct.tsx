import Container from "@/components/ui/Container";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Container>
      <h1>This is single product page</h1>
    </Container>
  );
};

export default SingleProduct;
