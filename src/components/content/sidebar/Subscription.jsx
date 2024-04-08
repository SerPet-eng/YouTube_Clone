import { DragHandleIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../../handlers/Loading';
import Error from '../../handlers/Error';

const fetchLatestVideo = async () => {
  try {
    const fetchLatestURL = await axios.get('http://localhost:3002/');
    const getLatestVideo = await fetchLatestURL.data;
    return getLatestVideo;
  } catch (error) {
    throw new Error(`There has been an error while fetching data: ${error}`);
  }
};

export default function Subscription() {
  const [isGridView, setIsGridView] = useState(false);
  const [isListView, setIsListView] = useState(false);
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: fetchLatestVideo,
      getNextPageParam: (latestPage, allPages) => {
        return latestPage.length > 0 ? allPages.length + 1 : null;
      },
    });

  const toggleGridButton = () => {
    setIsGridView(true);
    setIsListView(false);
  };

  const toggleListButton = () => {
    setIsListView(true);
    setIsGridView(false);
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  console.log(`Is Grid Toggled: ${isGridView}`);
  console.log(`Is List Toggled: ${isListView}`);

  return (
    <>
      <HStack m="2rem auto">
        <Heading as="h3" size="md">
          Latest
        </Heading>
        <Spacer />
        <ButtonGroup>
          <Button onClick={toggleGridButton}>
            <DragHandleIcon />
          </Button>
          <Button onClick={toggleListButton}>
            <HamburgerIcon />
          </Button>
        </ButtonGroup>
      </HStack>
      <SimpleGrid minChildWidth="250px">
        {data &&
          data.pages.flat().map((items) => {
            return (
              <Card key={items.id}>
                <CardBody>
                  <Image
                    w="20rem"
                    h="10.5rem"
                    borderRadius="1rem"
                    src={items.thumbnail}
                  />
                  <HStack>
                    <Avatar name="user" size="sm" />
                    <Heading as="h4" size="sm">
                      {items.title}
                    </Heading>
                  </HStack>
                  <Text>{items.author}</Text>
                  <HStack>
                    <Text>{items.views}</Text>
                    <Text>2 months ago</Text>
                  </HStack>
                </CardBody>
              </Card>
            );
          })}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage} disabled={isLoading}>
          {isLoading ? 'Loading more...' : 'Load more'}
        </Button>
      )}
    </>
  );
}
