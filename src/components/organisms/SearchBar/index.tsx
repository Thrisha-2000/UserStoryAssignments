import { TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <TextField
      placeholder="search for title or author"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
