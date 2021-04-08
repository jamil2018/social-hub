import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import FriendsScreen from "./screens/FriendsScreen";
import HomeScreen from "./screens/HomeScreen";
import PhotosScreen from "./screens/PhotosScreen";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Switch>
          <Route path="/friends" component={FriendsScreen} />
          <Route path="/photos" component={PhotosScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
