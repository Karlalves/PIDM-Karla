import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard></Dashboard>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6842C2",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60
  },
});
