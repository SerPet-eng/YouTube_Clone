import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiFillFlag } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { CgPlayList } from 'react-icons/cg';
import { GoHistory, GoHomeFill } from 'react-icons/go';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { RiFeedbackLine } from 'react-icons/ri';
import { SiYoutubeshorts } from 'react-icons/si';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <VStack
        as="nav"
        position="fixed"
        h="100%"
        p="6rem 0.5rem 1rem 1rem"
        bgColor="green.500"
      >
        <List overflowY="scroll">
          <ListItem>
            <Link to={'/'}>
              <Button w="100%" leftIcon={<GoHomeFill />}>
                Home
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={'/shorts'}>
              <Button w="100%" leftIcon={<SiYoutubeshorts />}>
                Shorts
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={'/subscription'}>
              <Button w="100%" leftIcon={<MdOutlineSubscriptions />}>
                Subscription
              </Button>
            </Link>
          </ListItem>
          <Divider m="1rem auto" />
          <Text mb="1rem">You</Text>
          <ListItem>
            <Link to={'/channel'}>
              <Button w="100%" leftIcon={<VscAccount />}>
                Your Channel
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={'/history'}>
              <Button w="100%" leftIcon={<GoHistory />}>
                History
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={'/playlist'}>
              <Button w="100%" leftIcon={<CgPlayList />}>
                Playlists
              </Button>
            </Link>
          </ListItem>
          <Divider m="1rem auto" />
          <ListItem>
            <Link to={'/settings'}>
              <Button w="100%" leftIcon={<GoHomeFill />}>
                Settings
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={'/report'}>
              <Button w="100%" leftIcon={<AiFillFlag />}>
                Report History
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={'/help'}>
              <Button w="100%" leftIcon={<BiHelpCircle />}>
                Help
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={'/feedback'}>
              <Button w="100%" leftIcon={<RiFeedbackLine />}>
                Send Feedback
              </Button>
            </Link>
          </ListItem>
          <Divider m="1rem auto" />
          <Box as="footer" w="250px">
            <ButtonGroup
              display="flex"
              alignItems="center"
              spacing={2}
              gap="0.3rem"
              flexWrap="wrap"
              mb="1rem"
            >
              <Button size="sm">About</Button>
              <Button size="sm">Press</Button>
              <Button size="sm">Copyright</Button>
              <Button size="sm">Contact Us</Button>
              <Button size="sm">Creators</Button>
              <Button size="sm">Advertise</Button>
              <Button size="sm">Developers</Button>
            </ButtonGroup>
            <ButtonGroup
              display="flex"
              justifyContent="start"
              alignItems="center"
              spacing={2}
              gap="0.3rem"
              flexWrap="wrap"
              mb="1rem"
            >
              <Button size="sm">Terms</Button>
              <Button size="sm">Privacy</Button>
              <Button size="sm">Policy & Safety</Button>
              <Button size="sm">How YouTube works</Button>
              <Button size="sm">Test new features</Button>
            </ButtonGroup>
          </Box>

          <Text>©️ 2024 Google LLC</Text>
        </List>
      </VStack>
    </>
  );
}
