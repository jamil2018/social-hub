import { Box } from "@chakra-ui/layout";

const Card = ({ children }) => {
  return (
    <Box background="gray.100" borderRadius="md" padding="4" marginBottom="2">
      {children}
    </Box>
  );
};

export default Card;
