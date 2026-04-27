import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  title: string;
  completed: boolean;
  createdAt: Date;
}

const todoSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a todo title"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ITodo>("Todo", todoSchema);
