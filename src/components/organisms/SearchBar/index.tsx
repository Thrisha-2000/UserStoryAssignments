import { TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  return <TextField placeholder="search for title or author" value={value} />;
};

export default SearchBar;
