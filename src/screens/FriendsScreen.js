import { SimpleGrid } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import ContentContainer from "../components/ContentContainer";
import ErrorMessage from "../components/ErrorMessage";
import FriendCardContent from "../components/FriendCardContent";
import Loader from "../components/Loader";

const FriendsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const {
          data: { results: users },
        } = await axios.get("https://randomuser.me/api/?results=20");
        setUsers(users);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <Text
        fontSize="xl"
        fontWeight="thin"
        letterSpacing="tight"
        marginBottom="4"
      >
        Search for a new connection
      </Text>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage
          text="Please make sure you are connected to the internet or try again
        later."
        />
      ) : (
        <ContentContainer>
          <SimpleGrid columns={2} spacing={5}>
            {users.map((user) => (
              <Card width="xl">
                <FriendCardContent
                  name={`${user.name.first} ${user.name.last}`}
                  imageURL={user.picture.large}
                  location={`${user.location.city}, ${user.location.country}`}
                />
              </Card>
            ))}
          </SimpleGrid>
        </ContentContainer>
      )}
    </>
  );
};

export default FriendsScreen;
