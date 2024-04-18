import { Box, Card, CardBody, CardHeader, Image, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../eventHandler/Loading';
import Error from '../eventHandler/Error';
import { VirtuosoGrid } from 'react-virtuoso';
import { fetchData } from '../fetch/fetchData';
import { gridComponents } from '../customComponents/gridComponent';

export default function Subscription() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchData,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box height="100vh" p="5.5rem 0 0 20rem">
      <VirtuosoGrid
        style={{ height: '100%', overflowY: 'auto' }}
        components={gridComponents}
        totalCount={data?.length || 0}
        data={data || []}
        itemContent={(index, item) => (
          <Card
            key={index}
            as="section"
            bgColor="gray.300"
            borderRadius="md"
            boxShadow="md"
            maxW="400px"
            textAlign="center"
            borderWidth="1px"
            borderColor="gray.200"
            overflow="hidden"
          >
            <CardHeader>{item.title}</CardHeader>
            <CardBody>
              <Image src={item.thumbnail} alt={item.title} />
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, repudiandae!
              </Text>
            </CardBody>
          </Card>
        )}
      />
    </Box>
  );
}
