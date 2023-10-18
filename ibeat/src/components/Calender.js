import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
const Calendar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const dates = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  const onMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    // This example assumes that the calendar starts on Sunday.
    const date = new Date(
      selectedYear,
      months.indexOf(selectedMonth),
      selectedDate
    );
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = days[date.getDay()];
    console.log(`Selected date: ${selectedDate} (${dayOfWeek})`);
  }, [selectedDate, selectedMonth, selectedYear]);

  return (
    <View style={{paddingHorizontal:"5%"}}>
      <View style={{width:"50%"}}>
        <Picker selectedValue={selectedMonth} onValueChange={onMonthChange}>
          {months.map((month, index) => (
            <Picker.Item key={index} label={month} value={month} />
          ))}
        </Picker>
      </View>
      <View>
        <FlatList
          horizontal
          data={dates}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.dayText}>
                {(() => {
                  const date = new Date(
                    selectedYear,
                    months.indexOf(selectedMonth),
                    item
                  );
                  const days = [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                  ];
                  const dayOfWeek = days[date.getDay()];
                  return dayOfWeek;
                })()}
              </Text>
              <Text
                style={
                  selectedDate === item
                    ? styles.selectedDateStyle
                    : styles.notSelectedDate
                }
                onPress={() => onDateChange(item)}
              >
                {item}
              </Text>
            </View>
          )}
          windowSize={5}
        />
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  item: {
    width: 40,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  selectedDateStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#336CFF",
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 3,
    fontFamily: "poppins-bold",
    marginTop: "30%",
    fontSize: 16,
  },
  notSelectedDate: {
    height: 30,
    width: 30,
    marginTop: "30%",
    textAlign: "center",
    color: "#3A3A3C",
    fontFamily: "poppins-Regular",
    paddingTop: 3,
    fontSize: 16,
  },
  dayText: {
    color: "#3A3A3C",
    fontFamily: "poppins-Regular",
    fontSize: 16,
  },
});
