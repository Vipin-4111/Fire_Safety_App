import { View, Text, StyleSheet } from "react-native";

export default function LiveDetection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitchen Camera</Text>

      <View style={styles.cameraMock}>
        <Text style={styles.alert}>🔥 FIRE</Text>
        <Text style={styles.alert}>💨 SMOKE</Text>
        <Text style={styles.alert}>⚡ SPARK</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
  cameraMock: {
    height: 250,
    backgroundColor: "#000",
    borderRadius: 14,
    padding: 12,
  },
  alert: { color: "#fff", fontWeight: "700", marginBottom: 6 },
});
