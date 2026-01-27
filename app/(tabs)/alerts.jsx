import { View, Text, StyleSheet } from "react-native";

export default function Alerts() {
  return (
    <View style={styles.container}>
      <AlertCard title="Fire Detected" level="High" />
      <AlertCard title="Smoke Rising" level="Medium" />
    </View>
  );
}

const AlertCard = ({ title, level }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.level}>{level}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  title: { fontWeight: "700" },
  level: { color: "red" },
});
