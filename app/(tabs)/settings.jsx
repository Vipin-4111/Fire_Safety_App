import { View, Text, Switch, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>System Controls</Text>

      <View style={styles.row}>
        <Text>Auto Sprinkler</Text>
        <Switch />
      </View>

      <View style={styles.button}>
        <Text style={{ color: "#fff", fontWeight: "700" }}>ACTIVATE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 20 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#E53935",
    padding: 18,
    borderRadius: 100,
    alignItems: "center",
  },
});
