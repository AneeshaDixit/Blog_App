import { useContext } from "react";
import BlogCards from "../BlogCards/BlogCards";
import { blogsContext } from "../../App";

const MainComponent = () => {
  const { blogs } = useContext(blogsContext);

  return (
    <div className="p-5 flex flex-col items-center h-screen gap-4">
      {blogs.map((blog) => {
        return <BlogCards key={blog.id} blog={blog} />;
      })}
      
    </div>
  );
};

export default MainComponent;
