import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import ballImage from "../../assets/Images/ball1.png";
const ProductCard = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cricket Bat</CardTitle>
        <img src={ballImage} alt="batball" />
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          tempora eius corporis assumenda illo harum ullam at incidunt quisquam
          esse!.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="name">Price:</Label>
        <Label htmlFor="name">10$</Label>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">AddToCard</Button>
        <Button>BuyNow</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
