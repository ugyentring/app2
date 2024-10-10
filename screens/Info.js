import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function Info({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    setUsernameAndPassword().then(() => {
      Alert.alert("Success", "Login Successful", [
        {
          text: "OK",
          onPress: () => navigation.replace("SecondaryNavigator"),
          style: "default",
        },
        {
          text: "Cancel",
          onPress: () => {
            setPassword("");
            setUsername("");
          },
          style: "cancel",
        },
      ]);
    });
  }

  async function setUsernameAndPassword() {
    try {
      await SecureStore.setItemAsync("username", username);
      await SecureStore.setItemAsync("password", password);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Username:</Text>
      <TextInput
        placeholder="Enter your username"
        style={styles.inputText}
        onChangeText={(text) => setUsername(text)}
      />

      <Text>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        style={styles.inputText}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
