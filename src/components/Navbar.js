import { Text } from "@chakra-ui/react";
import { Container, Flex, Link } from "@chakra-ui/layout";
import { NavLink as ReachLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
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
            color={location.pathname === "/" ? "gray.500" : "teal.500"}
            marginLeft="4"
            _hover={{
              textDecoration: "none",
              color: "gray.500",
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
            color={location.pathname === "/friends" ? "gray.500" : "teal.500"}
            marginLeft="4"
            _hover={{
              textDecoration: "none",
              color: "gray.500",
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
            color={location.pathname === "/photos" ? "gray.500" : "teal.500"}
            marginLeft="4"
            _hover={{
              textDecoration: "none",
              color: "gray.500",
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
