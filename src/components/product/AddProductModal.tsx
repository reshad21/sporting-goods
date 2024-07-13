import { useAddProductsMutation } from "@/redux/features/Product/productApi";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AddProductModal = () => {
  const [title, setTitle] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [description, setdescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState<number | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  const [addProduct, { isLoading, isError }] = useAddProductsMutation();

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>An error has occurred!</div>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const productData = {
      title,
      imgurl,
      description,
      category,
      brand,
      quantity,
      rating,
      price,
    };
    addProduct(productData);
    toast.success("Product added successfully...!");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add your desire product here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="">
                Title
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="title"
                placeholder="Pedro Duarte"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imgurl" className="">
                Image Url
              </Label>
              <Input
                onBlur={(e) => setImgurl(e.target.value)}
                id="imgurl"
                placeholder="short imgurl"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="">
                Description
              </Label>
              <Input
                onBlur={(e) => setdescription(e.target.value)}
                id="description"
                placeholder="short description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="">
                Category
              </Label>
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Set Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="soccer">Soccer</SelectItem>
                    <SelectItem value="cycling">Cricket</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                    <SelectItem value="baseball">Baseball</SelectItem>
                    <SelectItem value="golf">Golf</SelectItem>
                    <SelectItem value="running">Running</SelectItem>
                    <SelectItem value="swimming">Swimming</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="">
                Brand
              </Label>
              <Input
                onBlur={(e) => setBrand(e.target.value)}
                id="brand"
                placeholder="Nike"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="">
                Quantity
              </Label>
              <Input
                onBlur={(e) =>
                  setQuantity(
                    e.target.value ? parseFloat(e.target.value) : null
                  )
                }
                id="quantity"
                placeholder=""
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="">
                Rating
              </Label>
              <Input
                onBlur={(e) =>
                  setRating(e.target.value ? parseFloat(e.target.value) : null)
                }
                id="rating"
                placeholder=""
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="">
                Price
              </Label>
              <Input
                onBlur={(e) =>
                  setPrice(e.target.value ? parseFloat(e.target.value) : null)
                }
                id="price"
                placeholder="Enter price"
                required
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
