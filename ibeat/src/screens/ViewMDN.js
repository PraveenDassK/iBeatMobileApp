import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import MyChart from "../components/MyChart";

const ViewMDN = ({ navigation, route }) => {
  console.log("ViewMDN", route.params);
  const apiData = route.params;
  const findingData = [
    "Predominant rhythm was sinus.",
    "Min HR of 56 bpm HR of 133 bpm and Avg HR of 86 bpm.",
    "Predominant rhythm was sinus.",
    "Ventricular ectopics were noted",
  ];

  return (
    <View style={styles.main}>
      <View style={{ backgroundColor: "#FFFFFF", padding: "5%", zIndex: 10 }}>
        <Text style={styles.title}>{apiData?.userData?.[0]?.Name}</Text>
        <View style={styles.tabSelector}>
          <Text style={styles.timeAndDate}>03-Aug-2023 at 1:46 PM</Text>
        </View>
      </View>
      <ScrollView
        style={{ backgroundColor: "#FFFFFF", paddingHorizontal: "5%" }}>
        <MyChart />
        <UserCard userData={apiData?.userData?.[0]} additionalInfo={apiData} />

        <Text style={styles.bottomHeader}>Preliminary findings</Text>
        <View style={{ paddingHorizontal: "7%", paddingVertical: "3%" }}>
          {findingData.map((eachFind, i) => {
            return (
              <View style={styles.footerPointer} key={i}>
                <Image source={require("../assets/RightArrow.png")} />
                <Text style={styles.pointerText}>{eachFind}</Text>
              </View>
            );
          })}
        </View>
        <View style={{ height: 150 }} />
      </ScrollView>
    </View>
  );
};

export default ViewMDN;

const UserCard = ({ userData, additionalInfo }) => {
  console.log(userData);
  return (
    <View style={styles.userCard}>
      <View style={styles.heartRate}>
        <Image source={require("../assets/Heart.png")} />

        <Text style={styles.headerText}>{additionalInfo?.heartRate}</Text>
      </View>
      <View
        style={{
          padding: "3%",
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}>
        <View style={{ width: "90%" }}>
          <View style={styles.topcardRow}>
            <View>
              <Text style={styles.topCardTitle}>Name</Text>
              <Text style={styles.topCardSubtitle}>{userData?.Name}</Text>
            </View>
            <View>
              <Text style={styles.topCardTitle}>Gender</Text>
              <Text style={styles.topCardSubtitle}>{userData?.gender}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.clockButton}>
                <Text style={styles.buttonText}>{additionalInfo?.date}</Text>
                <Image source={require("../assets/Calender.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topcardRow}>
            <View style={styles.topcardBelowRow}>
              <View>
                <Text style={styles.topCardTitle}>Age</Text>
                <Text style={styles.topCardSubtitle}>{userData?.age}</Text>
              </View>
              <View>
                <Text style={styles.topCardTitle}>Weight</Text>
                <Text style={styles.topCardSubtitle}> {userData?.weight}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.topCardTitle}>Activity</Text>
              <Image source={require("../assets/Sleep.png")} />
            </View>
            <View>
              <TouchableOpacity style={styles.clockButton}>
                <Text style={styles.buttonText}>12:19 PM</Text>
                <Image source={require("../assets/Timer.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.alertButton}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: "#FFD05C",
                borderRadius: 5,
              }}
            />
            <Text style={styles.buttonText}>Alert</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "white",
    paddingBottom: "5%",
  },
  title: {
    fontFamily: "poppins-bold",
    color: "#3A3A3C",
    fontSize: 24,
  },
  timeAndDate: {
    color: "#3A3A3C",
    fontFamily: "poppins-Medium",
    fontSize: 18,
  },
  userCard: {
    borderColor: "#D5ECFF",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 20,
    padding: "5%",
  },
  topcardRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  topcardBelowRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  topCardTitle: {
    color: "#6B7588",
    fontFamily: "poppins-Medium",
    fontSize: 10,
  },
  topCardSubtitle: {
    color: "#3A3A3C",
    fontFamily: "poppins-bold",
    fontSize: 12,
  },
  clockButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#D5ECFF",
    padding: "5%",
    height: 40,
    width: 100,
    borderRadius: 10,
    marginVertical: "3%",
  },
  alertButton: {
    backgroundColor: "#D5ECFF",
    padding: "5%",
    height: 90,
    width: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  buttonText: {
    color: "#0B1A5B",
    fontFamily: "poppins-Medium",
    fontSize: 10,
  },
  heartRate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: "3%",
    borderBottomColor: "#D5ECFF",
    borderBottomWidth: 1,
  },
  headerText: {
    color: "#3A3A3C",
    fontFamily: "poppins-Regular",
    fontSize: 14,
  },
  bottomHeader: {
    color: "#3A3A3C",
    fontFamily: "poppins-semibold",
    fontSize: 18,
  },
  pointerText: {
    color: "#3A3A3C",
    fontFamily: "poppins-Regular",
    fontSize: 16,
  },
  footerPointer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginVertical: "2%",
  },
});
