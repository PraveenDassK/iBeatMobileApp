import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ViewMDN = ({navigation,route}) => {
  console.log("ViewMDN",route.params)
  return (
    <View>
      <Text>ViewMDN</Text>
    </View>
  );
};

export default ViewMDN;

const styles = StyleSheet.create({});
