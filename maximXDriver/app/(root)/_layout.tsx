import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="reproduce-bug" options={{ headerShown: false }} />
      <Stack.Screen
        name="cash-out"
        options={{
          headerStyle: {
            backgroundColor: "#ECF7EF",
          },
          headerShadowVisible: false,

          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="add-a-bank-account"
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,

          headerTitle: "Add a Bank Account",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="cash-out-complete"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="balance-details"
        options={{
          headerStyle: {
            backgroundColor: "#ECF7EF",
          },
          headerShadowVisible: false,

          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="ride-activity"
        options={{
          headerStyle: {
            backgroundColor: "#D4D3E3",
          },
          headerShadowVisible: false,

          headerTitle: "Ride Activity",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen name="ride-request" options={{ headerShown: false }} />
    </Stack>
  );
}
