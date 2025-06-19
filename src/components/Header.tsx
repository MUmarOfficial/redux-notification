import NotificationsButton from "./NotificationsButton";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-4 py-3.5 h-18 flex justify-between items-center">
      <div className="text-2xl cursor-pointer">
        <a href="#">Redux Notifications</a>
      </div>
      <NotificationsButton />
    </header>
  );
};

export default Header;
