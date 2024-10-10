import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { setItemAsync, deleteItemAsync } from "expo-secure-store";

export default function Info({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    setUsernameAndPassword().then(() => {
      Alert.alert("Success", "Login Successful", [
        {
          text: "OK",
          onPress: () => navigation.replace("SecondaryNavigator"),
        },
        {
          text: "Cancel",
          onPress: () => {
            setPassword("");
            setUsername("");
          },
        },
      ]);
    });
  }

  async function setUsernameAndPassword() {
    try {
      await setItemAsync("username", username);
      await setItemAsync("password", password);
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
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        style={styles.inputText}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
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
