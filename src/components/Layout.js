import { Container } from "@chakra-ui/layout";

const Layout = ({ children }) => {
  return (
    <Container maxW="container.xl" marginY="4" color="gray.600">
      {children}
    </Container>
  );
};

export default Layout;
