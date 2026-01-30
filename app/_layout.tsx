import { Stack } from "expo-router";
import './globals.css';
import React from "react";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="movies/[id]"
      options={{
        headerShown: false,
      }}
    />
  </Stack>;
}
