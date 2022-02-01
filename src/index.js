const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

// Importing Schmea and Resolvers
const schema = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ schema, resolvers });

// initialize server
const init = async () => {
  await mongoose.connect("mongodb://localhost:27017/todoDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("DB Connection Successful.");

  const { url } = await server.listen();

  console.log(`🚀 Server ready at ${url}`);
};

init();
