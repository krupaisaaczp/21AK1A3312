// src/pages/ProductListPage.js
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; // Import Axios instance with configured baseURL
import ProductCard from '../components/ProductCard';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minRating: 0,
    maxPrice: Infinity,
    availableOnly: false,
    sortBy: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Number of products per page
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
        applyFilters(); // Apply initial filters after fetching products
      } catch (error) {
        setError(error.message || 'An error occurred while fetching products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    applyFilters(); // Apply filters whenever products or filters change
  }, [products, filters]);

  const applyFilters = () => {
    let filtered = products.filter((product) => {
      // Apply filters based on selected criteria
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      if (filters.company && product.company !== filters.company) {
        return false;
      }
      if (product.rating < filters.minRating) {
        return false;
      }
      if (product.price > filters.maxPrice) {
        return false;
      }
      if (filters.availableOnly && !product.availability) {
        return false;
      }
      return true;
    });
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSortChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: event.target.value,
    }));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Product List</h1>
      {loading && <p>Loading products...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div>
          {/* Filtering UI */}
          <label>
            Category:
            <input type="text" name="category" value={filters.category} onChange={handleFilterChange} />
          </label>
          <label>
            Company:
            <input type="text" name="company" value={filters.company} onChange={handleFilterChange} />
          </label>
          <label>
            Min Rating:
            <input type="number" name="minRating" value={filters.minRating} onChange={handleFilterChange} />
          </label>
          <label>
            Max Price:
            <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} />
          </label>
          <label>
            Available Only:
            <input type="checkbox" name="availableOnly" checked={filters.availableOnly} onChange={handleFilterChange} />
          </label>
          {/* Sorting UI */}
          <select name="sortBy" onChange={handleSortChange} value={filters.sortBy}>
            <option value="">Sort By</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="rating-asc">Rating (Low to High)</option>
            <option value="rating-desc">Rating (High to Low)</option>
          </select>
          {/* Product Cards */}
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Pagination Controls */}
          <ul>
            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
              <li key={index}>
                <button onClick={() => paginate(index + 1)}>{index + 1}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
