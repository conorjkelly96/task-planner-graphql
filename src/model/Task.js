const { Schema, model } = require("mongoose");

const task = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
};

const schema = new Schema(task);

const Task = model("Task", schema);

module.exports = Task;
