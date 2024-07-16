import React from 'react';
import { Box, Button } from '@mui/material';

const Pagination = ({ pagination, setPagination }) => {
  const handlePageChange = (newPage) => {
    setPagination({ ...pagination, page: newPage });
  };

  return (
    <Box>
      <Button onClick={() => handlePageChange(pagination.page - 1)} disabled={pagination.page === 1}>
        Previous
      </Button>
      <Button onClick={() => handlePageChange(pagination.page + 1)}>
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
