import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View className='flex-row items-center bg-blue-950/50 rounded-full px-5 py-4'>
      <Image
        source={icons.search}
        className="size-5"
        resizeMode='contain'
        tintColor="#ab8bff"
      />
      <TextInput
      onPress={onPress}
      value=''
      onChangeText={() => {}}
        placeholder={placeholder}
        placeholderTextColor="#a8b5db"
        className="flex-1 text-white ml-3"
      />
    </View>
  )
}

export default SearchBar