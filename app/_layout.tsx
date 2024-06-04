import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="HomePage" options={{ title: "Home" }} />
      <Stack.Screen name="AboutPage" options={{ title: "About Page" }} />
      <Stack.Screen name="[UserProfilePage]" options={{ title: "User Page" }} />
    </Stack>
  );
}
