import {
  Avatar,
  Badge,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Tooltip,
} from '@chakra-ui/react';
// import AccountMenu from './nav/AccountMenu';
import Logo from '../../../img/YouTubeLogo.png';
import {
  AddIcon,
  BellIcon,
  HamburgerIcon,
  PhoneIcon,
  Search2Icon,
} from '@chakra-ui/icons';

export default function NavBar() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        w="100%"
        p="1em"
        bg="gray.500"
        color="white"
        position="fixed"
        zIndex={99}
      >
        <HStack gap="1rem">
          <Button borderRadius="50%" p="0">
            <HamburgerIcon color="black" />
          </Button>
          <Image src={Logo} alt="YouTube Logo" height="20px" cursor="pointer" />
        </HStack>

        <HStack w="50%" gap="0">
          <Input
            type="name"
            placeholder="Search"
            borderRadius="1rem 0 0 1rem"
          />
          <Tooltip label="Search">
            <Button borderRadius="0 1rem 1rem 0">
              <Search2Icon />
            </Button>
          </Tooltip>
          <Tooltip label="Search with your voice">
            <Button borderRadius="50%" p="0" ml="0.5rem">
              <PhoneIcon />
            </Button>
          </Tooltip>
        </HStack>

        <HStack gap="1rem">
          <Tooltip label="Create">
            <Button borderRadius="50%" p="0">
              <AddIcon />
            </Button>
          </Tooltip>
          <div style={{ position: 'relative' }}>
            <Tooltip label="Notification">
              <Button borderRadius="50%" p="0">
                <BellIcon />
              </Button>
            </Tooltip>
            <Badge
              position="absolute"
              top="-2"
              right="-1"
              bg="red"
              color="white"
              borderRadius="50%"
            >
              3
            </Badge>
          </div>
          <Avatar name="Aira" size="sm" cursor="pointer"></Avatar>
        </HStack>
      </Flex>

      {/* <AccountMenu /> */}
    </>
  );
}
