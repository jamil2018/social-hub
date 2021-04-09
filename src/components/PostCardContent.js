import { Text } from "@chakra-ui/layout";

const PostCardContent = ({ title, body, author }) => {
  return (
    <>
      <Text fontSize="xl" fontWeight="bold" marginBottom="4" color="teal.500">
        {title}
      </Text>
      <Text lineHeight="tall" color="gray.500">
        {body}
      </Text>
      <Text fontSize="md" color="teal.500" marginTop="8">
        Author:{" "}
        <Text color="gray.500" display="inline" as="span">
          {author}
        </Text>
      </Text>
    </>
  );
};

export default PostCardContent;
