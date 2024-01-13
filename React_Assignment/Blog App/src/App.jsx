import { useState, createContext, useReducer, useEffect, useMemo } from "react";
import MainComponent from "./components/MainComponent/MainComponent";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import { reducer } from "./utils/functions";
import Blog from "./components/Blog/Blog";


export const blogsContext = createContext();

const getSavedValue = () => {
  const savedValue = JSON.parse(localStorage.getItem("blogs"));
  if (savedValue) return savedValue;

  return [];
};

function App() {
  const savedValue = useMemo(getSavedValue, []);   //dependency array variable
  const [blogs, dispatch] = useReducer(reducer, savedValue);
  const [task, setTask] = useState(null);

  const handleLike = (id) => {
    dispatch({ type: "like", value: id });
  };
  const handleDislike = (id) => {
    dispatch({ type: "dislike", value: id });
  };
  const handleDelete = (id) => {
    dispatch({ type: "delete", value: id });
    setTask(null);
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <blogsContext.Provider
      value={{
        blogs,
        dispatch,
        task,
        setTask,
        handleLike,
        handleDislike,
        handleDelete,
      }}
    >
      <div className="h-full">
        <NavigationBar />
        {task ? (
          task.value == "open" ? (
            <Blog />
          ) : (
            <CreateBlog />
          )
        ) : (
          <MainComponent />
        )}
      </div>
    </blogsContext.Provider>
  );
}

export default App;
