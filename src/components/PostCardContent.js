import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

const PostCardContent = ({ title, body, user }) => {
  return (
    <Flex justifyContent="space-between" alignItems="flex-start">
      <Flex
        justifyContent="center"
        direction="column"
        alignItems="center"
        width={1 / 6}
      >
        <Avatar
          size="lg"
          name={`${user.name.first} ${user.name.last}`}
          src={user.picture.large}
          marginBottom="2"
        />
        <Text
          fontSize="md"
          color="teal.500"
        >{`${user.name.first} ${user.name.last}`}</Text>
      </Flex>
      <Box width={5 / 6}>
        <Text fontSize="xl" fontWeight="bold" marginBottom="4" color="teal.500">
          {title}
        </Text>
        <Text lineHeight="tall" color="gray.500">
          {body}
        </Text>
      </Box>
    </Flex>
  );
};

export default PostCardContent;
