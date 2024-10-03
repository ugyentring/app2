import { View, Text, Button, StyleSheet } from "react-native";

export default function Info({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Next"
        onPress={() => navigation.replace("SecondaryNavigator")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
