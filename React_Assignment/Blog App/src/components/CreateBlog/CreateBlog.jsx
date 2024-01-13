import { useContext, useEffect, useState } from "react";
import { blogsContext } from "../../App";

const CreateBlog = () => {
  const { blogs, dispatch, task, setTask } = useContext(blogsContext);
  const [blog, setBlog] = useState({ title: "", categories: "", content: "" });

  useEffect(() => {
    if (task?.value === "edit") {
      let blog = blogs.find((blog) => blog.id === task.id);
      setBlog(blog);
    }
  }, [task]);

  const handleSubmit = () => {
    if (task?.value === "edit") {
      dispatch({
        type: "update",
        value: { updatedBlog: blog, id: task.id },
      });
      setTask(undefined);
      return;
    }

    if (blog.title === "" || blog.categories === "" || blog.content === "") {
      alert("Please fill all the fields");
      return;
    }
    let newBlog = {
      id: Math.random().toString(),
      title: blog.title,
      categories: blog.categories,
      content: blog.content,
      liked: false,
      disliked: false,
    };

    dispatch({ type: "create", value: newBlog });
    setTask(undefined);
  };

  return (
    <div className="p-5 h-full bg-gray-300 flex flex-col items-center min-h-screen">
      <div className="mt-5 flex lg:flex-row flex-col w-full gap-10">
        <span className="flex gap-3 lg:w-1/2 md:w-full">
          <label htmlFor="title" className="w-32 text-xl font-bold mb-4">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={blog.title}
            className="w-full h-8 p-5 rounded-md border border-gray-300 mb-5 font-semibold text-lg"
            onChange={(e) => {
              setBlog({ ...blog, title: e.target.value });
            }}
          />
        </span>

        <span className="flex gap-3 lg:w-1/2 md:w-full">
          <label htmlFor="categories" className="w-32 text-xl font-bold mb-4">
            Categories
          </label>
          <input
            value={blog.categories}
            type="text"
            id="categories"
            className="w-full h-8 p-5 rounded-md border border-gray-300 mb-5 font-semibold text-lg"
            onChange={(e) => {
              setBlog({ ...blog, categories: e.target.value });
            }}
          />
        </span>
      </div>
      <div className="w-full flex items-center">
        <label htmlFor="content" className="w-32 text-xl font-bold mb-4">
          Content
        </label>
        <textarea
          id="content"
          value={blog.content}
          className="w-4/5 h-[50vh] p-5 font-semibold text-lg w-full"
          onChange={(e) => {
            setBlog({ ...blog, content: e.target.value });
          }}
        />
      </div>
      <div className="w-full flex justify-center mt-5">
        <button
          className="border border-gray-300 bg-yellow-600 px-4 py-2 rounded-lg hover:tranform hover:scale-105 transition-all duration-300 ease-in-out text-white font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
