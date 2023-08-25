import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { MdDarkMode, MdSunny } from "react-icons/md";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, title) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const getRemainingTasks = () => tasks.filter((task) => !task.completed);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`hero h-screen md:min-h-[700px] w-full m-auto flex flex-col items-center pt-8 ${
        darkTheme ? "bg-gray-700" : "bg-gray-100"
      }`}
    >
      <div
        className={`flex flex-col space-y-6 w-[600px] md:w[100%] z-10 p-4 ${
          darkTheme ? "text-white" : "text-black"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <h1 className=" uppercase text-4xl font-bold text-white tracking-widest mb-4 md:text-3xl">
            Tasks
          </h1>

          {darkTheme ? (
            <MdSunny
              onClick={toggleTheme}
              className={`bg-gray-800 cursor-pointer dark:bg-gray-600 p-2 rounded-lg bottom-5 right-5 ${
                darkTheme ? "text-white" : "text-black"
              }`}
              size={32}
            />
          ) : (
            <MdDarkMode
              size={32}
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-600 p-2 rounded-lg bottom-5 right-5 ${
                darkTheme ? "text-white" : "text-gray-300"
              }`}
            />
          )}
        </div>

        <div className=" shadow-md">
          {/* Add Task */}
          <AddTask onAddTask={addTask} darkTheme={darkTheme} />
        </div>

        <div
          className={`scroll bg-white w-full h-[500px] md:h-[500px] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all duration-500 overflow-hidden ${
            darkTheme ? "bg-gray-700" : "bg-white"
          }`}
        >
          <div
            className={`w-full overflow-hidden sticky top-0 flex items-center justify-between bg-white z-10 border-b ${
              darkTheme
                ? "bg-gray-700 text-white border-white"
                : "bg-white border-black"
            }`}
          >
            <p className={` px-2 py-3`}>
              Total tasks: {tasks.length} <br />
              Tasks left: {getRemainingTasks().length}
            </p>

            <button onClick={clearTasks}>Clear All</button>
          </div>

          {tasks.length ? (
            <TaskList
              tasks={tasks}
              darkTheme={darkTheme}
              onEditTask={editTask}
              onDeleteTask={deleteTask}
              onToggleCompleted={toggleCompleted}
            />
          ) : (
            <div className=" w-full h-[80%] flex items-center justify-center overflow-hidden">
              <p className=" text-black text-center z-10">Empty task</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
