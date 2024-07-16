// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme'; // Import the custom theme
import GlobalStyles from './components/GlobalStyles'; // Import GlobalStyles component
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles /> {/* Apply global styles */}
      <Router>
        <Switch>
          <Route exact path="/" component={ProductListPage} />
          <Route path="/product/:id" component={ProductDetailPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
