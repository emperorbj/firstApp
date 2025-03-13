
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: "Home" }} />
    <Stack.Screen name="Profile" options={{ title: "Profile" }} />
    <Stack.Screen name="Notify" options={{ title: "Notification" }} />
  </Stack>;
}
