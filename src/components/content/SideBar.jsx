import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  LinkIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <>
      <Box>
        <List
          bg="black"
          position="fixed"
          overflowX="hidden"
          overflowY="scroll"
          h="89vh"
          w="20%"
          p="2rem 1rem"
        >
          <Flex gap="0" flexDirection="column">
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <LinkIcon as={ArrowRightIcon}></LinkIcon>
                <Link to="/">Home</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowLeftIcon} />
                <Link to="/shorts">Shorts</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowUpIcon} />
                <Link to="/subscription">Subscription</Link>
              </Button>
            </ListItem>

            <Divider m="1em auto" />

            <Text mb="1em" as="h2" color="white">
              You <ArrowRightIcon />
            </Text>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/channel">Channel</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/history">History</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/videos">Videos</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/watch_later">Watch Later</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/like_video">Like Videos</Link>
              </Button>
            </ListItem>

            <Divider m="1em auto" />

            <Text mb="1em" color="white">
              Explore
            </Text>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/trending">Trending</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/music">Music</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/movies">Movies</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/gaming">Gaming</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/news">News</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/sports">Sports</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/fashion">Fashion</Link>
              </Button>
            </ListItem>

            <Divider m="1em auto" />

            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/settings">Settings</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/report_history">Report History</Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button p="0.5em 3em" colorScheme="gray" gap="1em" w="100%">
                <ListIcon as={ArrowRightIcon} />
                <Link to="/feedback">Feedback</Link>
              </Button>
            </ListItem>
          </Flex>
        </List>
      </Box>
    </>
  );
}
