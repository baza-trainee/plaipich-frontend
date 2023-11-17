import { model, models,Schema } from "mongoose";

const BlogSchema = new Schema({
  title: {
    type: String,
    require: [true, "Title must exists!"],
    min: 3,
  },
  description: {
    type: String,
    require: [true, "Description must exists!"],
    min: 3,
  },
  date: {
    type: String,
    require: [true, "Date must exists!"],
  },
  bigImage: {
    type: String,
  },
  images:  [{
    type: String
}],
  category: {
    type: String,
    require: [true, "Category must exists!"],
  },
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
