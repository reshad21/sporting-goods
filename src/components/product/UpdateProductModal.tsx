import { useUpdateProductMutation } from "@/redux/features/Product/productApi";
import { FormEvent, useState } from "react";
import { CiEdit } from "react-icons/ci";
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
import { TProduct } from "../ui/SingleProductRow";

const UpdateProductModal = ({ product }: { product: TProduct }) => {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [imgurl, setImgurl] = useState(product.imgurl);
  const [category, setCategory] = useState(product.category);
  const [brand, setBrand] = useState(product.brand);
  const [quantity, setQuantity] = useState(product.quantity || 0);
  const [rating, setRating] = useState(product.rating || 0);
  const [price, setPrice] = useState(product.price || 0);

  const [updateProduct, { isLoading, isError }] = useUpdateProductMutation();

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedProductData = {
      title,
      imgurl,
      description,
      category,
      brand,
      quantity,
      rating,
      price,
    };
    updateProduct({ id: product._id, data: updatedProductData });
    toast.success("Product Update successfully...!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white ">
          <CiEdit
            size={20}
            className="font-bold text-slate-900 hover:text-white"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Update your desired product here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="">
                Title
              </Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                placeholder="Product Title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imgurl" className="">
                Image Url
              </Label>
              <Input
                value={imgurl}
                onChange={(e) => setImgurl(e.target.value)}
                id="imgurl"
                placeholder="Image URL"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="">
                Description
              </Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="Product Description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="">
                Category
              </Label>
              <Select
                value={category}
                onValueChange={(value) => setCategory(value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Set Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="cricket">Cricket</SelectItem>
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="soccer">Soccer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="">
                Brand
              </Label>
              <Input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                id="brand"
                placeholder="Brand"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="">
                Quantity
              </Label>
              <Input
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                id="quantity"
                placeholder="Quantity"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="">
                Rating
              </Label>
              <Input
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                id="rating"
                placeholder="Rating"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="">
                Price
              </Label>
              <Input
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                id="price"
                placeholder="Price"
                className="col-span-3"
                type="number"
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

export default UpdateProductModal;
