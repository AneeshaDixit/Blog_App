import { useContext } from "react";
import { blogsContext } from "../../App";

const NavigationBar = () => {
  const { task, setTask } = useContext(blogsContext);

  return (
    <>
      <div className="bg-green-600 border-b-5 border-red-600 h-16 sticky top-0 z-50 flex justify-center items-center px-6">
        <h1  className="text-white text-2xl font-semibold leading-8">
          <b ><i>Blog Application</i></b>
        </h1>
        <div className="absolute left-0 ml-4">

      {task ? (
          <button
            className="text-white bg-blue-500 border-none rounded-lg px-4 py-2 hover:tranform hover:scale-105 transition-all duration-300 ease-in-out text-white font-semibol"
            onClick={() => setTask(undefined)}
          >
            {task.value === "open" ? "Close Blog" : "Cancel"}
          </button>
        ) : (
          <button
            className="text-white bg-blue-500 border-none  rounded-lg px-5 py-2 hover:tranform hover:scale-105 transition-all duration-300 ease-in-out text-white font-semibol"
            onClick={() => setTask({ value: "create", id: null })}
          >
            Create Blog
          </button>
        )}
      </div>
        
      </div>
    </>
  );
};

export default NavigationBar;
