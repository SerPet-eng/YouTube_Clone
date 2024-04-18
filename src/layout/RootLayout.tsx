import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Box as="header" position="relative">
        <Header />
      </Box>
      <Box as="main" position="relative">
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
}
