import { useState } from "react";

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);
  return (
    <div className="absolute top-8 right-0 bg-white min-w-40 shadow z-50  border rounded-md p-4 flex flex-col items-center gap-4">
      <h2 className="font-semibold">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="self-start flex flex-col items-start justify-start">
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      ) : (
        <span className="text-grey-700 text-xs">No Notifications</span>
      )}
    </div>
  );
};

export default NotificationComponent;
