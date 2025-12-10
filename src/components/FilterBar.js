import React from "react";
import { View, Button, StyleSheet } from "react-native";

const FilterBar = ({ filter, setFilter, darkMode }) => {
  const filters = ["All", "Completed", "Pending"];
  return (
    <View style={styles.container}>
      {filters.map((f) => (
        <Button
          key={f}
          title={f}
          onPress={() => setFilter(f)}
          color={filter === f ? "#4F46E5" : darkMode ? "#9CA3AF" : "#6B7280"}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
});

export default FilterBar;
