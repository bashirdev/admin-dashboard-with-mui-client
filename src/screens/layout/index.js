import { Box , useMediaQuery} from '@mui/material';
import Navbar from 'components/Navbar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux'
import Sidebar from 'components/Sidebar'
const Layout = () => {
  const isNonMobile=useMediaQuery("(min-width:600px)")
  const [isSideBarOpen, setSideBarOpen] =useState(true)
    return (
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Sidebar
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSideBarOpen={isSideBarOpen}
          setSideBarOpen={setSideBarOpen}
         />
          <Box>
            <Navbar
               isSideBarOpen={isSideBarOpen}
               setSideBarOpen={setSideBarOpen}
             />
            <Outlet />
          </Box>
        </Box>
    );
};

export default Layout;