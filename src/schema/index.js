const { gql } = require("apollo-server");

// creating schema for model
// name, description, date, category

const schema = gql`
  type Query {
    name: String
    description: String
    day: String
    category: String
  }
`;

module.exports = schema;
