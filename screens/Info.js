import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";

export default function Info({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    navigation.replace("SecondaryNavigator", {
      screen: "Home",
      params: { username: username, password: password },
    });
  }

  return (
    <View style={styles.container}>
      <Text>Username:</Text>
      <TextInput
        placeholder="Enter your username"
        style={styles.inputText}
        onChangeText={(username) => setUsername}
      />

      <Text>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        style={styles.inputText}
        onChangeText={(password) => setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },

  inputText: {
    paddingVertical: 10,
    marginBottom: 2,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    fontSize: 20,
  },
});
