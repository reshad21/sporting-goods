import { useState } from "react";
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
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchSection;
