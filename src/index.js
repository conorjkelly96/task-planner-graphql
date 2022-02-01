const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

// Importing Schmea and Resolvers
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

// initialize server
const start = async () => {
  await mongoose.connect("mongodb://localhost:27017/taskDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("[INFO]: Database connection successful");

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
};

start();
