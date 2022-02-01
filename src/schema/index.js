const { gql } = require("apollo-server");

// creating schema for model
// name, description, date, category

const schema = gql`
  type Task {
    _id: ID!
    name: String
    description: String
    day: String
    category: String
  }

  input TaskInput {
    name: String!
    description: String!
    day: String!
    category: String
  }

  type Query {
    getTask(taskID: ID!): Task
    getTasks: [Task]
  }

  type Mutation {
    createTask(taskInput: TaskInput): Task
    updateTask(taskId: ID!, taskInput: TaskInput): Task
    deleteTask(taskId: ID!): Task
    deleteTasks: [Task!]!
  }
`;

module.exports = schema;
