/* eslint-disable react/prop-types */
import {
  IconThumbUpFilled,
  IconThumbDownFilled,
  IconTrash,
} from "@tabler/icons-react";
import { useContext } from "react";
import { blogsContext } from "../../App";

const BlogCards = ({ blog }) => {
  const { setTask, handleLike, handleDislike, handleDelete } =
    useContext(blogsContext);

  const openBlog = () => {
    setTask({ value: "open", id: blog.id });
  };

  return (
    <div
      className="h-32  bg-gray-300 rounded-lg w-full hover:tranform hover:scale-[1.01] transition-all duration-300 ease-in-out flex justify-between items-center p-3 cursor-pointer"
      onClick={openBlog}
    >
      <div className="w-3/4 flex flex-col justify-around">
        <span className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Title:</h1>
          <h1>{blog.title}</h1>
        </span>
        <span className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Categories:</h1>
          <h1>{blog.categories}</h1>
        </span>
        
      </div>
      <div className="w-1/4 flex justify-around">
      </div>
    </div>
  );
};

export default BlogCards;
