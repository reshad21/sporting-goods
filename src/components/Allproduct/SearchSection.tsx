import { useSearchProductsQuery } from "@/redux/features/Product/productApi";
import { FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useSearchProductsQuery(searchTerm);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchTerm);
    console.log(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update searchTerm as the user types
  };

  return (
    <div>
      <form className="relative" onSubmit={handleSearch}>
        <input
          type="text"
          className="grow p-0 border-2 border-slate-300 pl-2 py-2 rounded-md outline-0"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange} // Call handleChange on input change
        />
        <button
          className="bg-orange-400 text-white border rounded-md p-3 absolute right-0 top-0 bottom-0"
          type="submit"
        >
          <IoSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
