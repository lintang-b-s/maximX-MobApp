import { Stack } from "expo-router";
import "../../global.css";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="phone" options={{ headerShown: false }} />
      <Stack.Screen
        name="sign-up"
        options={{
          headerTitle: "Create an account",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="driver-registration-one"
        options={{
          headerTitle: "Driver Registration",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="driver-registration-two"
        options={{
          headerTitle: "Driver Registration",
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="driver-registration-three"
        options={{
          headerTitle: "Driver Registration",
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="driver-registration-complete"
        options={{
          headerTitle: "Driver Registration",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
