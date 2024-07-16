import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Adjust the path according to your project structure
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Filter from './Filter';
import Sort from './Sort';
import Pagination from './Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});
  const [pagination, setPagination] = useState({ page: 1, size: 10 });

  useEffect(() => {
    fetchProducts();
  }, [filters, sort, pagination]);

  const fetchProducts = async () => {
    const response = await axios.get('/api/products', {
      params: { ...filters, ...sort, ...pagination }
    });
    setProducts(response.data);
  };

  return (
    <Container>
      <Filter filters={filters} setFilters={setFilters} />
      <Sort sort={sort} setSort={setSort} />
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="subtitle1">{product.company}</Typography>
                <Typography variant="body2">${product.price}</Typography>
                <Button component={Link} to={`/product/${product.id}`}>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination pagination={pagination} setPagination={setPagination} />
    </Container>
  );
};

export default ProductList;
