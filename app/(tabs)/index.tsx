import React from "react";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { useRouter } from 'expo-router'


export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="w-full absolute z-0"/>
        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10, minHeight: '100%'}}>
          <Image
            source={icons.logo}
            className="w-12 h-10 mx-auto mt-20 mb-5"/>

            <View className="mt-5 flex-1">
              {/* <Text className="text-white text-center font-semibold text-lg">
                Welcome to MovieApp
              </Text>
              <Text className="text-white/80 text-center mt-2">
                Discover and explore a world of movies at your fingertips. Browse, search, and find your next favorite film with ease.
              </Text> */}
              <SearchBar 
                onPress={() => router.push('/search')}
                placeholder="Search for a movie"
              />
            </View>
        </ScrollView>
    </View>
  );
}
