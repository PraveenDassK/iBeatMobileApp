import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Calendar from "./Calender";
const DiaryEvent = () => {
  return (
    <ScrollView>
      <Calendar />
      <View style={{ height: 800, backgroundColor: "red" }}></View>
      <View style={{ height: 800, backgroundColor: "green" }}></View>
    </ScrollView>
  );
};

export default DiaryEvent;

const styles = StyleSheet.create({});
