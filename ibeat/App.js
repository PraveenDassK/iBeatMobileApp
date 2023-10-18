import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/Navigation/AppNavigator";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { useState, useEffect, useCallback } from "react";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
//splashscreen untill font loading
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  //getting custom fonts
  const fetchFonts = async () => {
    await Font.loadAsync({
      "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    });
    setFontLoaded(true);
  };
  useEffect(() => {
    fetchFonts();
  }, []);

  // we hide the splash screen once we know the root view has already
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
});
