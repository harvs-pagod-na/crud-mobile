import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: darkMode ? "#fff" : "#4F46E5" }]}>
        📝 My Tasks
      </Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default Header;
