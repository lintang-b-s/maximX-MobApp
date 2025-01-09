import { View, Image, ImageSourcePropType, Text } from "react-native";
import { icons } from "@/constants";
import { Tabs } from "expo-router";

const TabIcon = ({
  source,
  focused,
  label,
}: {
  source: ImageSourcePropType;
  focused: boolean;
  label: string;
}) => (
  <View className={`w-20 h-20 items-center justify-center `}>
    <Image
      source={source}
      tintColor={` ${focused ? "bg-general-300" : "#c7c5c5"} `}
      resizeMode="contain"
      className={`w-7 h-7   `}
    />
    <Text className="">{label}</Text>
  </View>
);

const Layout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "bg-general-300",
        tabBarInactiveTintColor: "#3F4B4E",
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          paddingTop: 0,
          marginBottom: 0,
          paddingBottom: 25,
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon label="home" focused={focused} source={icons.home} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon label="orders" focused={focused} source={icons.orders} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="favorites"
              focused={focused}
              source={icons.favorites}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon label="menu" focused={focused} source={icons.menu} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
