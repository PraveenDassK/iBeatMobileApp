import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DiaryCard = () => {
  return (
    <View style={styles.diaryCardContainer}>
      <View style={styles.leftSideView} />
      <Text>DiaryCard</Text>
    </View>
  );
};

export default DiaryCard;

const styles = StyleSheet.create({
  diaryCardContainer: {
    width: "100%",
    backgroundColor: "white",
    height:150,
    gap: 15,
    borderLeftWidth: 15,
    borderLeftColor: "#336CFF",
    borderLeftStyle: "solid",
    borderRightWidth: 3,
    borderLeftStyle: "solid",
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderRightColor: "#D5ECFF",
    borderBottomColor: "#D5ECFF",
    borderTopColor: "#D5ECFF",
    borderStyle: "solid",
    borderRadius: 15,
    marginVertical: 10,
    padding: "5%",
  },
  //   leftSideView: {
  //     backgroundColor: "#336CFF",
  //     height: "100%",
  //     width: 20,
  //   },
});
