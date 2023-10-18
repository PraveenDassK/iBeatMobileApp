import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const DiaryCard = ({ cardData }) => {
  return (
    <View style={styles.diaryCardContainer}>
      <View style={styles.statusView}>
        {cardData?.status !== "System" ? (
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor:
                cardData?.status === "active" ? "#0FD881" : "#FFB520",
              borderRadius: 5,
            }}
          />
        ) : (
          <View
            style={{
              backgroundColor: "#FFB520",
              borderRadius: 10,
              paddingHorizontal: 4,
              paddingVertical: 1,
            }}>
            <Text style={styles.statusStyle}>System</Text>
          </View>
        )}
      </View>
      {cardData?.problems?.map((eachTreatment, i) => {
        return (
          <View style={styles.diaryCardItems} key={i}>
            <Image source={require("../assets/cardiology.png")} />
            <Text style={styles.title}>{eachTreatment?.issue}</Text>
          </View>
        );
      })}

      <View style={styles.diaryCardItems}>
        <Image source={require("../assets/ContactIcon.png")} />
        <Text style={styles.title}>{cardData?.activity}</Text>
      </View>
    </View>
  );
};

export default DiaryCard;

const styles = StyleSheet.create({
  diaryCardContainer: {
    width: "100%",
    backgroundColor: "white",
    gap: 10,
    borderLeftWidth: 15,
    borderLeftColor: "#336CFF",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightColor: "#336CFF",
    borderBottomColor: "#336CFF",
    borderTopColor: "#336CFF",
    borderStyle: "solid",
    borderRadius: 15,
    marginVertical: 10,
    padding: "5%",
  },
  diaryCardItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    width: "70%",
  },
  title: {
    color: "#3A3A3C",
    fontFamily: "poppins-Medium",
    fontSize: 14,
  },
  statusView: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  statusStyle: {
    color: "white",
    fontSize: 8,
    fontFamily: "poppins-Medium",
  },
});
