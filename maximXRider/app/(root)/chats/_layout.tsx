import ChatHeader from "@/components/ChatHeader";
import { Stack } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

export default function Layout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="[id]"
        options={{
          headerRight: () => (
            <View className="flex flex-row items-center ">
              <TouchableOpacity>
                <FontAwesome6 name="phone" color="#DEDEE8" size={20} iconStyle="solid" />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => <ChatHeader />,
        }}
      />
    </Stack>
  );
}
