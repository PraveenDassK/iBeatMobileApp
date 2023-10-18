import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Calendar from "./Calender";
import DiaryCard from "./DiaryCard";
const DiaryEvent = () => {
  const diaryData = [
    {
      id: 1,
      time: "11:27 AM",
      problems: [
        { issue: "Chest discomfort" },
        { issue: "Arm, neck, throat or jaw discomfort" },
      ],
      activity: "Undefined",
    },
    {
      id: 2,
      time: "10:10 AM -10:12 AM",
      problems: [
        { issue: "Chest discomfort" },
        { issue: "Arm, neck, throat or jaw discomfort" },
        { issue: "Shortness of breath" },
      ],
      activity: "Quiet activity",
    },
    {
      id: 3,
      time: "11:27 AM",
      problems: [{ issue: "Chest discomfort" }],
      activity: "None physical work(paperwork...",
    },
    {
      id: 4,
      time: "11:27 AM",
      problems: [{ issue: "Chest discomfort" }],
      activity: "None physical work(paperwork...",
    },
  ];
  return (
    <ScrollView>
      <Calendar />
      <View style={{ width: "100%",backgroundColor:"white" }}>
        {diaryData?.map((eachValue, i) => {
          return (
            <View key={i} style={styles.eachContainer}>
              <View style={{ width: "20%" }}>
                <Text style={{ textAlign: "center" }}>{eachValue?.time}</Text>
              </View>
              <View style={{ width: "70%" }}>
                <DiaryCard />
              </View>
            </View>
          );
        })}
      </View>
      <View style={{ height: 400 }} />
    </ScrollView>
  );
};

export default DiaryEvent;

const styles = StyleSheet.create({
  eachContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
  },
});
