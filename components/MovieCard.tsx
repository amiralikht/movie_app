import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity activeOpacity={0.8} className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg mr-4"
          resizeMode="cover"
        />
        <Text className="text-white font-semibold mt-2" numberOfLines={1}>
          {title}
        </Text>
        <Text className="text-gray-400 text-sm">
          ⭐ {Math.round(vote_average * 10) / 10}
        </Text>
        <View className="flex-row items-center justify-between w-full">
          <Text className="text-gray-400 text-sm">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </Text>
          {/* <Text className="text-gray-400 text-sm font-medium uppercase">
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
