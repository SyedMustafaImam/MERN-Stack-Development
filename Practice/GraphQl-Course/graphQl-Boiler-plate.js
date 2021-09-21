const { ApolloServer, gql } = require('apollo-server');

// type definations

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type MainCard{
  	title: String!
  	image: String!
  }
  

  type Query {
      books: [Book]
      mainCards: [MainCard]
  }
`
;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const maincard = [
	{
		title:'New Item',
		image:'Tiger'
	},
	{
		title:'Next Item',
		image:'Pussy Cat'
		},
	{
		title:'Last viwed Item',
		image:'Donkey'
			}
]

const resolvers = {
  Query: {
    books: () => books,
    mainCards:() => maincard
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
