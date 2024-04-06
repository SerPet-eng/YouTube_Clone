import {
  Avatar,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../components/handlers/Loading';
import ErrorHandle from '../components/handlers/Error';
import { HamburgerIcon } from '@chakra-ui/icons';

const fetchData = async () => {
  try {
    const getUrl = await axios.get('http://localhost:3002/');
    const getData = await getUrl.data;
    return getData;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
};

export default function Home() {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: fetchData,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : null;
      },
    });
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['post'],
  //   queryFn: fetchData,
  // });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorHandle />;

  return (
    <>
      <SimpleGrid gap={4} minChildWidth="250px">
        {data &&
          data.pages.flat().map((item) => {
            return (
              <Card key={item.id} p="0" cursor="pointer">
                <CardBody>
                  <Image
                    w="20rem"
                    h="10.5rem"
                    borderRadius="1rem"
                    src={item.thumbnail}
                  />
                  <HStack>
                    <Avatar name="user" size="sm" />
                    <Heading as="h4" size="sm">
                      {item.title}
                    </Heading>
                    <Button display="none" _hover={{ display: 'inline' }}>
                      <HamburgerIcon />
                    </Button>
                  </HStack>
                  <Text>{item.author}</Text>
                  <HStack>
                    <Text>{item.views}</Text>
                    <Text>2 months ago</Text>
                  </HStack>
                </CardBody>
              </Card>
            );
          })}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} disabled={isLoading}>
          {isLoading ? 'Loading more...' : 'Load more'}
        </Button>
      )}
    </>
  );
}
