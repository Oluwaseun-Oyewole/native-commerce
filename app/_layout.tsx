/* eslint-disable global-require */
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SansBold: require("../assets/fonts/static/DMSans-Bold.ttf"),
    SansMedium: require("../assets/fonts/static/DMSans-Medium.ttf"),
    SansRegular: require("../assets/fonts/static/DMSans-Regular.ttf"),
    SansLight: require("../assets/fonts/static/DMSans_18pt-Light.ttf"),
    SansExtraBold: require("../assets/fonts/static/DMSans-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
