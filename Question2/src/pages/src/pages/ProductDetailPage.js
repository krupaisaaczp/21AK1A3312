// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you use React Router for routing
import axios from '../axiosConfig'; // Import Axios instance with configured baseURL

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product ID from URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${id}`); // Example endpoint: `/products/${id}`
        setProduct(response.data); // Assuming response.data is the product object
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
      }
    };

    fetchProduct();
  }, [id]); // Trigger useEffect whenever `id` changes

  if (!product) {
    return <div>Loading...</div>; // Optional: Placeholder while loading
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <h2>{product.name}</h2>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}%</p>
        <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
