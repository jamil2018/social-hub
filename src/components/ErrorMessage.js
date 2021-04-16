import {
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Alert,
} from "@chakra-ui/alert";
import { Flex } from "@chakra-ui/layout";

const ErrorMessage = ({ text }) => {
  return (
    <Flex justify="center" minHeight="xl" alignItems="center">
      <Alert status="error" maxWidth="max-content" padding="8">
        <AlertIcon />
        <AlertTitle mr={2}>Error fetching data!!!</AlertTitle>
        <AlertDescription>{text}</AlertDescription>
      </Alert>
    </Flex>
  );
};

export default ErrorMessage;
