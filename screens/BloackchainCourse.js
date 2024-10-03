import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function BlockchainCourse({ route }) {
  const { college } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Blockchain Course</Text>
      <Text style={styles.description}>Welcome to the Blockchain Course!</Text>

      <View style={styles.modules}>
        <Text style={styles.moduleTitle}>Modules:</Text>
        <Text style={styles.module}>1. Introduction to Blockchain</Text>
        <Text style={styles.module}>2. Smart Contracts</Text>
        <Text style={styles.module}>3. Decentralized Applications (DApps)</Text>
        <Text style={styles.module}>4. Blockchain Use Cases</Text>
        <Text style={styles.module}>5. Future of Blockchain Technology</Text>
      </View>

      {college && (
        <Text style={styles.footerNote}>
          This is the {college} Blockchain Course.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  modules: {
    marginBottom: 30,
  },
  moduleTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  module: {
    fontSize: 18,
    color: "#333",
    marginVertical: 5,
  },
  footerNote: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
});
