import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  function handleNext() {
    navigation.navigate("BlockchainCourse", { college: "GCIT" });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the Course Hub</Text>
        <Text>Courses Offered</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Discover our comprehensive courses.</Text>
      </View>
      <Button
        title="Go to Blockchain Course"
        onPress={handleNext}
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  body: {
    marginBottom: 40,
  },
  bodyText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
  },
});
