import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const Loader = () => {
  return (
    <Flex justify="center" minHeight="xl" alignItems="center">
      <Spinner color="teal.500" size="xl" />
    </Flex>
  );
};

export default Loader;
