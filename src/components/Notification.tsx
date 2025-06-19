import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { markAsRead, selectNotifications } from "@/store/notificationsSlice";
import type { NotificationItem } from "@/types";
import { Circle, CircleCheckBig } from "lucide-react";

const Notifications = () => {
  const notifications: NotificationItem[] = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();

  return (
    <div className="max-w-xl mx-auto ">
      <ul className="flex flex-col gap-4 my-8">
        {notifications.map((notificationItem) => (
          <li
            key={notificationItem.id}
            className="p-4 flex items-center justify-between bg-transparent backdrop-blur-3xl shadow-lg rounded-xl border border-gray-900"
          >
            <div className="flex flex-col gap-2">
              <h3>{notificationItem.text}</h3>
            </div>
            <div
              onClick={() => {
                dispatch(markAsRead(notificationItem.id));
              }}
              className="size-10 cursor-pointer rounded relative flex items-center justify-center "
            >
              {notificationItem.read ? (
                <CircleCheckBig color="#00800f" />
              ) : (
                <Circle />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Notifications;
