import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const Search = (props) => {
  return (
    <Box>
      <TextField
        fullWidth
        id='search'
        variant='standard'
        size='small'
        margin='normal'
        onChange={props.inputFn}
        value={props.val}
        InputProps={{
          startAdornment: (
            <IconButton onClick={props.searchFn}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
