import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const Sort = ({ sort, setSort }) => {
  const handleSortChange = (e) => {
    setSort({ ...sort, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <TextField name="sortBy" label="Sort By" value={sort.sortBy || ''} onChange={handleSortChange}>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="discount">Discount</MenuItem>
      </TextField>
    </Box>
  );
};

export default Sort;
