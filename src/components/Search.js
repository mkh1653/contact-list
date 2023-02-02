import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const Search = () => {
  const [search, setSearch] = useState("");
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchHandler = () => {
  
  };

  return (
    <Box>
      <TextField
        fullWidth
        id='search'
        variant='standard'
        size='small'
        margin='normal'
        onChange={inputHandler}
        value={search}
        InputProps={{
          startAdornment: (
            <IconButton onClick={searchHandler}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
