import { Platform } from "react-native";
import { io } from "socket.io-client";

// Define the base URL based on the platform (Android or iOS)
export const BaseUrl =
  Platform.OS === "android" ? "http://10.0.2.2:3000/" : "http://localhost:3000";

// Define the socket connection URL based on the platform
export const socket = io.connect(
  Platform.OS === "android" ? "http://10.0.2.2:4000/" : "http://localhost:4000"
);
