import { Text } from "@chakra-ui/react";
import { Container, Flex, Link } from "@chakra-ui/layout";
import { Link as ReachLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxW="container.xl">
      <Flex justify="space-between" paddingY="2">
        <Text fontSize="2xl" color="teal.500">
          <Link
            as={ReachLink}
            to="/"
            _hover={{
              textDecoration: "none",
            }}
            _focus={{
              outline: "none",
            }}
          >
            Social Hub
          </Link>
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Link
            as={ReachLink}
            to="/"
            color="teal.500"
            marginLeft="4"
            _hover={{
              textDecoration: "none",
              color: "teal.700",
            }}
            _focus={{
              outline: "none",
            }}
          >
            Home
          </Link>
          <Link
            as={ReachLink}
            to="/friends"
            color="teal.500"
            marginLeft="4"
            _hover={{
              textDecoration: "none",
              color: "teal.700",
            }}
            _focus={{
              outline: "none",
            }}
          >
            Find Friends
          </Link>
          <Link
            as={ReachLink}
            to="/photos"
            color="teal.500"
            marginLeft="4"
            _hover={{
              textDecoration: "none",
              color: "teal.700",
            }}
            _focus={{
              outline: "none",
            }}
          >
            Photo Gallery
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
