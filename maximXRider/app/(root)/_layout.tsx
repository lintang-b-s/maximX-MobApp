import { Stack } from "expo-router";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="choose-pickup-location"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="choose-destination-location"
        options={{ headerShown: false }}
      />

      <Stack.Screen name="ride" options={{ headerShown: false }} />

      <Stack.Screen
        name="order-summary"
        options={{
          headerTitle: () => <Header title="Order summary" />,
        }}
      />
      <Stack.Screen
        name="order-detail"
        options={{
          headerTitle: () => <Header title="Order details" />,
        }}
      />
    </Stack>
  );
}
