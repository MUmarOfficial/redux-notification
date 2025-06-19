import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { NotificationItem } from "@/types";

// Define a type for the slice state
interface NotificationsState {
  notificationsList: NotificationItem[];
}

// Define the initial state using that type
const initialState: NotificationsState = {
  notificationsList: [
    {
      id: "a1",
      text: "First Notification",
      read: false,
    },
    {
      id: "b2",
      text: "Second Notification",
      read: false,
    },
    {
      id: "c3",
      text: "Third Notification",
      read: false,
    },
    {
      id: "d4",
      text: "Fourth Notification",
      read: false,
    },
    {
      id: "e5",
      text: "Fifth Notification",
      read: false,
    },
    {
      id: "f6",
      text: "Sixth Notification",
      read: false,
    },
    
  ],
};

export const NotificationSlice = createSlice({
  name: "notifications",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`

    markAsRead: (state, action: PayloadAction<string>) => {
      state.notificationsList.forEach((item) => {
        const targetId = action.payload;
        if (item.id === targetId) {
          if (item.read === false) {
            item.read = true;
          } else if (item.read === true) {
            item.read = false;
          }
        }
      });
    },
  },
});

export const { markAsRead } = NotificationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNotifications = (state: RootState) =>
  state.notifications.notificationsList;

export const selectUnreadNotifications = (state: RootState) => {
  const unreadItems = state.notifications.notificationsList.filter((item) => {
    return item.read === false;
  });
  return unreadItems.length;
};

export default NotificationSlice.reducer;
