import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

const width = Dimensions.get("screen").width;
const MyChart = () => {
  const pulseRateData = [30, 30, 45, 40, 80, 42, 55, 78, 90, 57, 84, 42, 80, 0];

  const chartData = {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        data: pulseRateData,
      },
    ],
  };
  return (
    <View style={{ width: "100%", padding: "2%" }}>
      <LineChart
        data={chartData}
        width={width - 55}
        height={220}
        // withVerticalLabels={true}
        // withHorizontalLabels={false}
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 3,
          color: (opacity = 1) => `rgba(51, 108, 255, ${opacity})`,
          style: {
            borderRadius: 16,
            margin: 0,
            padding: 0,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "0",
            stroke: "#336CFF",
          },
        }}
        style={{
          marginVertical: 8,
          //   width: width,
          borderRadius: 16,
          borderColor: "#336CFF",
          borderWidth: 1,
        }}
      />
      <View style={styles.bottomBar}>
        <View style={styles.indicator}></View>
      </View>
    </View>
  );
};

export default MyChart;

const styles = StyleSheet.create({
  bottomBar: {
    borderWidth: 2,
    borderColor: "#336CFF",
    borderRadius: 16,
    width: width - 55,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  indicator: {
    width: 100,
    height: "100%",
    backgroundColor: "#356CFC",
    opacity: 0.1,
  },
});
