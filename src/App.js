import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from 'theme';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "screens/dashboard";
import Layout from "screens/layout";
import Product from 'screens/products/Product';
import Customers from 'screens/customer/Customers';

function App() {
  const mode =useSelector(state=> state.globalState.mode)
  console.log(mode);
  const theme=useMemo(()=> createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
    <BrowserRouter>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
               <Route element={<Layout/>} >
                  <Route path="/" element={<Navigate to='/dashboard' replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/products" element={<Product />} />
                  <Route path="/customers" element={<Customers />} />
               </Route>
            </Routes>
         </ThemeProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;
