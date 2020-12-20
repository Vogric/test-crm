import { ApolloClient, HttpLink, inMemoryCache } from "@apollo/client";
import fetch from "node-fetch";

const client = new ApolloClient({
  cache: new inMemoryCache(),
  link: new HttpLink({
    uri: "https://localhost:4000",
    fetch,
  }),
});

export default client;
