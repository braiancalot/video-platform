import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://api-sa-east-1.hygraph.com/v2/cl6h7ax6n45ac01ukf1qj37re/master",
	cache: new InMemoryCache()
})