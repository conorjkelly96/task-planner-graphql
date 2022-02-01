const { Task } = require("../model");

const resolvers = {
  Query: {
    getTask: async (_, args) => {
      try {
        const { taskID } = args;
        return await Task.findById(taskID);
      } catch (error) {
        throw new Error(error);
      }
    },
    getTasks: async (_, args) => {
      try {
        return await Task.find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    createTask: async (_, args) => {
      try {
        const { taskInput } = args;
        console.log(taskInput);

        return await Task.create(taskInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateTask: async (_, args) => {
      try {
        const { taskId, taskInput } = args;
        return await Task.findOneAndUpdate(taskId, taskInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteTask: async (_, args) => {
      try {
        const { taskId } = args;
        return await Task.findByIdAndDelete(taskId);
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteTasks: async (_, args) => {
      try {
        return await Task.remove();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
