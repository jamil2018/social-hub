import { Avatar } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { BiTrash, BiUserPlus } from "react-icons/bi";

const FriendCardContent = ({ name, imageURL, location }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex width={3 / 4} justifyContent="flex-start" alignItems="center">
        <Avatar size="xl" name={name} src={imageURL} marginRight="4" />
        <Box>
          <Text fontSize="md" color="teal.500" marginBottom="2">
            {name}
          </Text>
          <Text fontSize="sm" color="gray.400">
            Lives in {location}
          </Text>
        </Box>
      </Flex>
      <Flex width={1 / 4} justifyContent="center" alignItems="center">
        <Icon
          as={BiUserPlus}
          w={10}
          h={10}
          marginRight="4"
          color="gray.500"
          border="1px"
          borderColor="gray.300"
          padding="2"
          borderRadius="full"
          _hover={{
            background: "rgba(0, 128, 128, 0.05)",
            cursor: "pointer",
          }}
        />
        <Icon
          as={BiTrash}
          w={10}
          h={10}
          color="gray.500"
          border="1px"
          borderColor="gray.300"
          padding="2"
          borderRadius="full"
          _hover={{
            background: "rgba(0, 128, 128, 0.05)",
            cursor: "pointer",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default FriendCardContent;
