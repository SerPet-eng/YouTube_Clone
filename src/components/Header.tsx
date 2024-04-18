import {
  Avatar,
  Badge,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Tooltip,
} from '@chakra-ui/react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { BiSearch, BiVideoPlus } from 'react-icons/bi';
import { BsBell, BsFillMicFill } from 'react-icons/bs';
import YTLogo from '../../img/YouTube-Logo-PNG7.png';
import React, { useState } from 'react';

export default function Header() {
  const [query, setQuery] = useState('');

  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchBarClear = () => {
    setQuery('');
  };

  return (
    <>
      <Flex
        position="fixed"
        bgColor="red.500"
        p="1rem"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        zIndex="2"
      >
        <HStack spacing={3}>
          <Button p="0" borderRadius="50%">
            <Icon as={RxHamburgerMenu} />
          </Button>
          <Image src={YTLogo} w="100px" cursor="pointer" />
        </HStack>
        <InputGroup w="auto" position="relative">
          <Input
            htmlSize={70}
            w="auto"
            placeholder="Search"
            borderRadius="1rem 0 0 1rem"
            value={query}
            onChange={handleSearchBar}
          />

          <InputRightAddon
            position="absolute"
            right="6rem"
            border="none"
            bgColor="transparent"
          >
            <IconButton
              borderRadius="50%"
              aria-label="Clear"
              icon={<RxCross1 />}
              onClick={handleSearchBarClear}
              size="sm"
            />
          </InputRightAddon>

          <Tooltip label="Search">
            <InputRightAddon borderRadius="0 1rem 1rem 0">
              <BiSearch cursor="pointer" />
            </InputRightAddon>
          </Tooltip>

          <Tooltip label="Search with your voice">
            <Button p="0" ml="1rem" borderRadius="50%">
              <Icon as={BsFillMicFill} />
            </Button>
          </Tooltip>
        </InputGroup>

        <HStack>
          <Tooltip label="Create">
            <Button p="0" borderRadius="50%">
              <Icon as={BiVideoPlus} />
            </Button>
          </Tooltip>
          <div style={{ position: 'relative' }}>
            <Tooltip label="Notification">
              <Button p="0" borderRadius="50%">
                <Icon as={BsBell} />
              </Button>
            </Tooltip>
            <Badge
              colorScheme="red"
              position="absolute"
              top="0"
              right="0"
              borderRadius="50%"
              p="0 0.3rem"
            >
              3
            </Badge>
          </div>
          <Avatar name="user" cursor="pointer" />
        </HStack>
      </Flex>
    </>
  );
}
