import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import { selectUnreadNotifications } from "@/store/notificationsSlice";
const NotificationsButton = () => {
  const count = useAppSelector(selectUnreadNotifications);
  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-10 cursor-pointer rounded relative"
    >
      <div className="size-4 cursor-pointer rounded-full text-[10px] flex items-center absolute top-0 right-0.5 justify-center ">
        <div className="self-center">{count}</div>
      </div>
      <Bell className="size-4" />
    </Button>
  );
};

export default NotificationsButton;
