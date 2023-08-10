import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { IoNotificationsOutline } from "react-icons/io5";

import { useAuth } from "./AuthContext";
import Login from "./AuthLogin";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import NotificationComponent from "./components/NotificationComponent";

const App = () => {
  const { user, group, logout } = useAuth();
  const [noti, setNoti] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const taskManagementVisible = !!user;
  // const taskManagementVisible = !!userData;

  return (
    <div className="w-screen flex md:p-10 p-4 h-screen overflow-hidden">
      {!taskManagementVisible && <Login />}

      <div
        className={` ${
          taskManagementVisible ? "opacity-100 visible" : "opacity-0 hidden"
        } w-full transition-opacity duration-500 ease-in-out`}
      >
        <header className="absolute flex top-2 right-10 gap-10 items-center ">
          <span className="bg-blue-600 p-[1px] rounded-md px-2 text-white font-semibold md:text-base text-sm ">
            {group == "group1" ? "Group A" : "Group B"}
          </span>
          <button onClick={() => logout()} className="underline">
            Log out
          </button>
          <div
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative cursor-pointer"
          >
            <IoNotificationsOutline />
            {noti.length > 0 && (
              <div className="bg-blue-600 p-1 absolute rounded-full top-0 right-0"></div>
            )}
            <div className="bg-blue-600 p-1 absolute rounded-full top-0 right-0"></div>
          </div>
          {showNotifications && <NotificationComponent />}
        </header>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 w-full`}
        >
          <div className="col-span-1 w-full justify-start items-start overflow-y-auto">
            <h1 className="text-lg md:font-bold font-semibold md:text-3xl">
              Task Management System
            </h1>
            <TaskForm />
          </div>
          <TaskList />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
