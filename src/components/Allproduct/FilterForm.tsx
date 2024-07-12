import { FormEvent, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
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

type TFilters = {
  category: string;
  brand: string;
  rating: number | null;
  price: number | null;
};

type FilterFormProps = {
  onChange: (filters: TFilters) => void;
};

const FilterForm = ({ onChange }: FilterFormProps) => {
  const [category, setCategory] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const filterOption: TFilters = {
      category,
      brand,
      rating,
      price,
    };
    onChange(filterOption);
    console.log("QUERY =>", filterOption);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500">
          <span className="mr-2">FILTER</span>
          <GiSettingsKnobs size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
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
                    <SelectItem value="cricket">Cricket</SelectItem>
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
                placeholder=""
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
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">ENTER</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FilterForm;
