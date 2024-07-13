import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchSection = ({ onSearchChange }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearchChange(searchTerm);
  };

  return (
    <div className="flex gap-0">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <Button onClick={handleSearch}>
        <IoSearch />
      </Button>
    </div>
  );
};

export default SearchSection;
