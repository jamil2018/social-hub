import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/alert";
import { Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import ContentContainer from "../components/ContentContainer";
import PostCardContent from "../components/PostCardContent";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data: posts } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const { data: users } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const modifiedPosts = posts.map((post) => ({
          id: post.id,
          username: users.find((user) => user.id === post.userId).name,
          title: post.title,
          body: post.body,
        }));
        setPosts(modifiedPosts);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Text
        fontSize="xl"
        fontWeight="thin"
        letterSpacing="tight"
        marginBottom="4"
      >
        Activities among your friends
      </Text>
      {error ? (
        <Flex justify="center" minHeight="xl" alignItems="center">
          <Alert status="error" maxWidth="max-content" padding="8">
            <AlertIcon />
            <AlertTitle mr={2}>Error fetching data!!!</AlertTitle>
            <AlertDescription>
              Please make sure you are connected to the internet or try again
              later.
            </AlertDescription>
          </Alert>
        </Flex>
      ) : loading ? (
        <Flex justify="center" minHeight="xl" alignItems="center">
          <Spinner color="teal.500" size="xl" />
        </Flex>
      ) : (
        <ContentContainer>
          {posts.map((post) => (
            <Card key={post.id}>
              <PostCardContent
                title={post.title}
                body={post.body}
                author={post.username}
              />
            </Card>
          ))}
        </ContentContainer>
      )}
    </>
  );
};

export default HomeScreen;
