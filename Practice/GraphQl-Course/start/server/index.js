const { ApolloServer, gql } = require('apollo-server');
const {mainCards, animals, categories} = require('./db')
// type definations

const typeDefs = gql`
  type MainCard{
  	title: String!
  	image: String!
  }
  type Animal {
  	id: ID!
  	image: String!
  	title: String!
  	rating:Float
  	price: String!
  	discription: [String]!
  	slug:String!
  	stock: Int!
  	onSale: Boolean 
  }
  

  type Query {
      mainCards: [MainCard]
      animals: [Animal!]!
      animal(slug: String!): Animal!
  }`;

const resolvers = {
  Query: {
    mainCards:() => mainCards,
    animals:()=> animals,
    
    animal: (parent, args, ctx)=> {
	    console.log('args =>', args.slug);
	    let animalSearch = animals.find((animal)=>{
	    	return animal.slug === args.slug
	     })
	     
    	 return animalSearch
    }
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
