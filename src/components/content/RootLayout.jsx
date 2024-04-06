import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import NavBar from './NavBar';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

export default function RootLayout() {
  return (
    <>
      <Flex>
        <NavBar />
        <Grid templateColumns="repeat(4, 300px)" p="4.5rem 0">
          <GridItem colSpan="1">
            <SideBar />
          </GridItem>
          <GridItem colSpan="3">
            <Outlet />
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
