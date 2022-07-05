import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl57hhkde4m9001uifxoybx6u/master",
  cache: new InMemoryCache()
})