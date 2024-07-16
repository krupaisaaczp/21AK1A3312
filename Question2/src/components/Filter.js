import React from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';

const Filter = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <TextField name="category" label="Category" value={filters.category || ''} onChange={handleFilterChange} />
      <TextField name="company" label="Company" value={filters.company || ''} onChange={handleFilterChange} />
      <TextField name="rating" label="Rating" value={filters.rating || ''} onChange={handleFilterChange} />
      <TextField name="priceRange" label="Price Range" value={filters.priceRange || ''} onChange={handleFilterChange} />
      <TextField name="availability" label="Availability" value={filters.availability || ''} onChange={handleFilterChange} />
      <Button onClick={() => setFilters({})}>Clear Filters</Button>
    </Box>
  );
};

export default Filter;
