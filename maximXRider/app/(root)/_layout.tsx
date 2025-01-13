import { Stack } from "expo-router";
import Header from "@/components/Header";
import { Image, TouchableOpacity } from "react-native";
import { icons } from "@/constants";

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

      <Stack.Screen
        name="add-favorite-address"
        options={{
          headerTitle: () => <Header title="Add address" />,
        }}
      />

      <Stack.Screen
        name="edit-favorite-address"
        options={{
          headerTitle: () => <Header title="Edit address" />,
          headerRight: () => (
            <TouchableOpacity>
              <Image source={icons.trash} className="size-8" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="edit-profile"
        options={{
          headerTitle: () => <Header title="Profile" />,
        }}
      />

      <Stack.Screen
        name="choose-favorite-address"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="choose-favorite-route-source"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="choose-favorite-route-destination"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
