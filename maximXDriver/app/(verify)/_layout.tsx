import { Stack } from "expo-router";
import "../../global.css";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="[email]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
