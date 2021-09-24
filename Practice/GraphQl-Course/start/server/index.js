const { ApolloServer} = require('apollo-server');
const typeDefs = require('./schema.js')
const Query = require('./resolvers/Query')
const Animal = require('./resolvers/Animals')
const Category = require('./resolvers/Category')
const Mutation = require('./resolvers/Mutation')

const {mainCards, animals, categories} = require('./db');



// type definations
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers:{
	Query, Animal, Category, Mutation
}, 
	context: {
	mainCards, 
	animals,
	categories		
	}
	
  });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
