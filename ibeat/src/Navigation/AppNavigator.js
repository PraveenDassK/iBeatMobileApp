import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notifications from "../screens/Notifications";
import ViewMDN from "../screens/ViewMDN";
import { NavigationContainer } from "@react-navigation/native";
import Logo from "../assets/Logo.png";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Notification'
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}>
        <Stack.Screen
          name='Notification'
          component={Notifications}
          options={({ navigation }) => ({
            headerTitle: () => <Image source={require("../assets/Logo.png")} />,
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: "10%" }}>
                <Image source={require("../assets/LeftArrow.png")} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ paddingRight: "10%" }}>
                <Image source={require("../assets/HomeIcon.png")} />
              </View>
            ),
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name='ViewMDN'
          component={ViewMDN}
          options={({ navigation }) => ({
            headerTitle: () => <Image source={require("../assets/Logo.png")} />,
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: "10%" }}
                onPress={() => navigation.goBack()}>
                <Image source={require("../assets/LeftArrow.png")} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ paddingRight: "10%" }}>
                <Image source={require("../assets/HomeIcon.png")} />
              </View>
            ),
            headerTitleAlign: "center",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
