import { useContext } from "react";
import { blogsContext } from "../../App";
import {
  IconThumbUpFilled,
  IconThumbDownFilled,
  IconTrash,
  IconEdit,
} from "@tabler/icons-react";

const Blog = () => {
  const { blogs, task, setTask, handleLike, handleDislike, handleDelete } =
    useContext(blogsContext);

  const handleEdit = (id) => {
    setTask({ value: "edit", id: id });
  };

  const blog = blogs.find((blog) => blog.id === task.id);

  return (
    <div className="p-5 h-full bg-gray-300 flex flex-col items-center min-h-screen gap-3">
      <div className="h-16 flex justify-end gap-8 w-full p-3">
        <button
          className={`hover:tranform hover:scale-125 transition-all duration-300 ease-in-out text-red-500`}
          onClick={() => {
            handleEdit(blog.id);
          }}
        >
          <IconEdit size={35} />
        </button>
        <button
          className={`hover:tranform hover:scale-125 transition-all duration-300 ease-in-out ${
            blog.liked ? "text-green-500" : "text-gray-400"
          } `}
          onClick={() => {
            handleLike(blog.id);
          }}
        >
          <IconThumbUpFilled size={35} />
        </button>
        <button
          className={`hover:tranform hover:scale-125 transition-all duration-300 ease-in-out ${
            blog.disliked ? "text-red-500" : "text-gray-400"
          }`}
          onClick={() => {
            handleDislike(blog.id);
          }}
        >
          <IconThumbDownFilled size={35} />
        </button>
        <button
          className={`hover:tranform hover:scale-125 transition-all duration-300 ease-in-out text-red-500`}
          onClick={(event) => {
            event.stopPropagation();

            handleDelete(blog.id);
          }}
        >
          <IconTrash size={35} />
        </button>
      </div>
      
      <span className="flex gap-3 w-full">
        <label htmlFor="title" className="w-32 text-xl font-bold mb-4">
          Title:
        </label>
        <div className="bg-gray-500 w-full p-5 rounded-lg text-white">
          {blog.title}
        </div>
      </span>

      <span className="flex gap-3 w-full">
        <label htmlFor="categories" className="w-32 text-xl font-bold mb-4">
          Categories:
        </label>
        <div className="bg-gray-500 w-full p-5 rounded-lg text-white">
          {blog.categories}
        </div>
      </span>
      <span className="flex gap-3 w-full mt-5">
        <label htmlFor="content" className="w-32 text-xl font-bold mb-4">
          Content:
        </label>
        <div className="bg-gray-500 w-full p-5 rounded-lg text-white">
          {blog.content}
        </div>
      </span>
    </div>
    
  );
};

export default Blog;
