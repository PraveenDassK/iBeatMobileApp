import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Notifications = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text onPress={() => navigation.push("ViewMDN")}>Notifications</Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "red",
    width: "100%",
    padding: "5%",
    height: "500",
  },
});
