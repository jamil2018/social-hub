import { Box } from "@chakra-ui/layout";

const ContentContainer = ({ children }) => {
  return (
    <Box
      paddingY="4"
      overflowY="scroll"
      maxHeight="xl"
      paddingRight="8"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
          background: "#F2F2F2",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "teal",
          borderRadius: "24px",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ContentContainer;
