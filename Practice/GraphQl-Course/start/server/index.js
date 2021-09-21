const { ApolloServer, gql } = require('apollo-server');
const {mainCards, animals, categories} = require('./db')
// type definations

const typeDefs = gql`
  type MainCard{
  	title: String!
  	image: String!
  }
  type Animal {
  	image: String!
  	title: String!
  	rating:Float
  	price: String!
  	discription: [String]!
  	stock: Int!
  	onSale: Boolean 
  }
  

  type Query {
      mainCards: [MainCard]
      animals: [Animal!]!
      animal: Animal
  }
`
;

const resolvers = {
  Query: {
    mainCards:() => mainCards,
    animals:()=> animals
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
