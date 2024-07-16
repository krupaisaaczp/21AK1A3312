import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Adjust the path according to your project structure
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const response = await axios.get(`/api/products/${id}`);
    setProduct(response.data);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="h6">{product.company}</Typography>
      <Typography variant="body1">${product.price}</Typography>
      <Typography variant="body2">Category: {product.category}</Typography>
      <Typography variant="body2">Rating: {product.rating}</Typography>
      <Typography variant="body2">Discount: {product.discount}%</Typography>
      <Typography variant="body2">Availability: {product.availability}</Typography>
      <img src={product.imageUrl} alt={product.name} />
    </Container>
  );
};

export default ProductDetail;
