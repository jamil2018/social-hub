import { Text } from "@chakra-ui/layout";

const PostCardContent = ({ title, body }) => {
  return (
    <>
      <Text fontSize="xl" fontWeight="bold" marginBottom="4" color="teal.500">
        {title}
      </Text>
      <Text lineHeight="tall" color="gray.500">
        {body}
      </Text>
    </>
  );
};

export default PostCardContent;
