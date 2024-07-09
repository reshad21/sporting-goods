import { Button } from "antd";
import { Link } from "react-router-dom";
import Topbar from "../layout/Topbar";
import Container from "./Container";

const Header = () => {
  return (
    <div className="">
      <Container>
        <div className="flex justify-between items-center p-4">
          <div className="">logo</div>
          <div className="">
            <Topbar />
          </div>
          <div className="flex gap-1">
            <Link to="/cart">
              <Button>Cart</Button>
            </Link>
            <Link to="/checkout">
              <Button>CheckOut</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
