import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import DiaryEvent from "../components/DiaryEvent";
import PatientMDN from "../components/PatientMDN";
const Notifications = ({ navigation }) => {
  const [isActive, setIsActive] = useState(0);

  const handlePress = () => {
    isActive === 0 ? setIsActive(1) : setIsActive(0);
  };
  return (
    <View style={styles.main}>
      <View style={{ backgroundColor: "#FFFFFF", padding: "5%", zIndex: 10 }}>
        <Text onPress={() => navigation.push("ViewMDN")} style={styles.title}>
          Diary
        </Text>
        <View style={styles.tabSelector}>
          <View style={{ width: "50%" }}>
            <TouchableOpacity
              style={isActive === 0 ? styles.activeTabButton : styles.tabButton}
              onPress={handlePress}
            >
              <Text
                style={isActive === 0 ? styles.activetabText : styles.tabText}
              >
                Patient MDN
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "50%" }}>
            <TouchableOpacity
              style={isActive === 1 ? styles.activeTabButton : styles.tabButton}
              onPress={handlePress}
            >
              <Text
                style={isActive === 1 ? styles.activetabText : styles.tabText}
              >
                Diary events
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>{isActive === 0 ? <PatientMDN navigation={navigation}/> : <DiaryEvent />}</View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor:"#f5faf6",
  },
  title: {
    fontFamily: "poppins-bold",
    color: "#3A3A3C",
    fontSize: 24,
  },
  tabSelector: {
    width: "100%",
    backgroundColor: "#E8F5FF",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 0,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    marginTop: "5%",
  },
  tabButton: {
    width: "100%",
    backgroundColor: "transparent",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  activeTabButton: {
    width: "100%",
    backgroundColor: "#336CFF",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    color: "#FFFFFF",
  },
  tabText: {
    fontFamily: "poppins-Medium",
    fontSize: 16,
    color: "#3A3A3C",
    letterSpacing: 1,
  },
  activetabText: {
    fontFamily: "poppins-Medium",
    fontSize: 16,
    color: "#ffffff",
    letterSpacing: 1,
  },
});
