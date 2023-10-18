import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView, FlatList } from "react-native-gesture-handler";

const PatientMDN = ({ navigation }) => {
  const data = [
    {
      key: 1,
      findings: "Atrial fibrillation",
      heartRate: "87 BPM ",
      date: "14/12/2021",
      time: "12:19 PM",
      isActive: true,
      userData: [
        {
          Name: "Stuart, Gilbert",
          age: "22",
          gender: "female",
          weight: 100,
        },
      ],
    },
    {
      key: 2,
      findings: "Atrial fibrillation",
      heartRate: "87 BPM ",
      date: "14/12/2021",
      time: "12:19 PM",
      isActive: false,

      userData: [
        {
          Name: "Dass, Leo",
          age: "22",
          gender: "female",
          weight: 100,
        },
      ],
    },
    {
      key: 3,
      findings: "Atrial fibrillation",
      heartRate: "87 BPM ",
      date: "14/12/2021",
      time: "12:19 PM",
      isActive: true,

      userData: [
        {
          Name: "Das, Antony",
          age: "22",
          gender: "female",
          weight: 100,
        },
      ],
    },
    {
      key: 4,
      findings: "Atrial fibrillation",
      heartRate: "87 BPM ",
      date: "14/12/2021",
      time: "12:19 PM",
      isActive: true,

      userData: [
        {
          Name: "Stuart, Last",
          age: "22",
          gender: "female",
          weight: 100,
        },
      ],
    },
    {
      key: 5,
      findings: "Atrial fibrillation",
      heartRate: "87 BPM ",
      date: "14/12/2021",
      time: "12:19 PM",
      isActive: false,

      userData: [
        {
          Name: "Stuart, Last",
          age: "22",
          gender: "female",
          weight: 100,
        },
      ],
    },
  ];
  return (
    <View style={{ width: "100%", marginBottom: "75%" }}>
      <FlatList
        ListHeaderComponent={
          <View style={[styles.Container, styles.shadowProp]}>
            <Image source={require("../assets/UpArrow.png")} />
            <View style={styles.notificationContainer}>
              <Text style={styles.notificationText}>
                MD Notification Critical
              </Text>
              <Text style={styles.notificationCount}>289 </Text>
            </View>
          </View>
        }
        data={data}
        keyExtractor={(data) => data.key.toString()}
        renderItem={({ item, index }) => (
          <RenderItem data={item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PatientMDN;

const RenderItem = ({ data, navigation }) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          padding: "5%",
          backgroundColor: "white",
        }}>
        <View style={styles.eachCardContainer}>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardTitle}>FINDINGS</Text>
              <Text style={styles.cardSubtitle}>{data?.findings}</Text>
            </View>
            <View style={styles.cardHeartRate}>
              <View>
                <Text style={styles.cardTitle}>Avg Heart Rate</Text>
                <View style={styles.cardSubtitle}>
                  <Image source={require("../assets/Heart.png")} />
                  <Text style={[styles.cardSubtitle, { marginLeft: 5 }]}>
                    {data?.heartRate}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 16,
                  width: 16,
                  backgroundColor: data?.isActive ? "#CC3366" : "#FFD05C",
                  borderRadius: 8,
                  marginTop: "5%",
                }}></View>
            </View>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.cardHeartRate}>
              <View>
                <Text style={styles.cardTitle}>Date</Text>
                <Text style={styles.cardSubtitle}>{data?.date}</Text>
              </View>
              <View>
                <Text style={styles.cardTitle}>Time</Text>
                <Text style={styles.cardSubtitle}>{data?.time}</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
              }}>
              <TouchableOpacity
                style={styles.viewMdnButton}
                onPress={() => navigation.push("ViewMDN", data)}>
                <Image source={require("../assets/MDNIcon.png")} />
                <Text style={styles.buttonText}>View MDN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "5%",
  },
  shadowProp: {
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 10,
    shadowRadius: 24,
  },
  notificationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
  notificationText: {
    fontFamily: "poppins-semibold",
    fontSize: 16,
  },
  notificationCount: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#D5ECFF",
    width: 80,
    textAlign: "center",
    color: "#0B1A5B",
    fontFamily: "poppins-bold",
    fontSize: 14,
  },
  cardRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardHeartRate: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 20,
    width: "43%",
  },
  cardTitle: {
    color: "#6B7588",
    fontFamily: "poppins-Medium",
    fontSize: 12,
  },
  cardSubtitle: {
    color: "#3A3A3C",
    fontFamily: "poppins-bold",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  eachCardContainer: {
    width: "100%",
    padding: "5%",
    backgroundColor: "white",
    gap: 15,
    borderWidth: 2,
    borderColor: "#D5ECFF",
    borderStyle: "solid",
    borderRadius: 10,
  },
  viewMdnButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#336CFF",
    paddingVertical: 6,
    // width: "73%",
    borderRadius: 10,
    justifyContent: "center",
    marginLeft: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "poppins-bold",
    fontSize: 14,
  },
});
