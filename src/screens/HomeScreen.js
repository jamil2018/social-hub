import { Text } from "@chakra-ui/layout";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import ContentContainer from "../components/ContentContainer";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
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
        const {
          data: { results: users },
        } = await axios.get(
          `https://randomuser.me/api/?results=${posts.length + 1}`
        );
        const modifiedPosts = posts.map((post) => ({
          id: post.id,
          user: users[post.id],
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
        Posts by your friends
      </Text>
      {error ? (
        <ErrorMessage
          text="Please make sure you are connected to the internet or try again
        later."
        />
      ) : loading ? (
        <Loader />
      ) : (
        <ContentContainer>
          {posts.map((post) => (
            <Card key={post.id}>
              <PostCardContent
                title={post.title}
                body={post.body}
                user={post.user}
              />
            </Card>
          ))}
        </ContentContainer>
      )}
    </>
  );
};

export default HomeScreen;
