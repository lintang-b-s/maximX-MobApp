import { icons } from "@/constants";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 250);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View
      className="flex flex-row absolute z-10 top-6 py-4 justify-between
           items-center px-6 bg-white rounded-3xl left-2 right-2 mx-2 "
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={icons.arrowBack}
          resizeMode="contain"
          className="w-6 h-6"
        />
      </TouchableOpacity>
      <TextInput
        className="font-RobotoLight text-lg flex-1"
        value={search}
        onChangeText={handleSearch}
        placeholder="Enter an Adresss to search"
      ></TextInput>
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={icons.mic} resizeMode="contain" className="w-6 h-6" />
      </TouchableOpacity>
    </View>
  );
};


export default Search;