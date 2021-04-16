import { Box } from "@chakra-ui/layout";

const Card = ({ children, width }) => {
  return (
    <Box
      background="gray.100"
      borderRadius="md"
      padding="4"
      marginBottom="2"
      width={width}
    >
      {children}
    </Box>
  );
};

export default Card;
