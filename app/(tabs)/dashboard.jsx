import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live System Status</Text>

      <View style={styles.healthCard}>
        <Text style={styles.healthText}>System Health</Text>
        <Text style={styles.percent}>75%</Text>
      </View>

      <View style={styles.grid}>
        <Status label="Fire Status" value="Safe" color={COLORS.primary} />
        <Status label="Smoke Level" value="Low" color={COLORS.info} />
        <Status label="Spark Detection" value="No" color={COLORS.warning} />
        <Status label="Sprinkler" value="OFF" color={COLORS.muted} />
      </View>
    </View>
  );
}

const Status = ({ label, value, color }) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}</Text>
    <Text style={{ color, fontWeight: "700" }}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.bg },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 20 },
  healthCard: {
    backgroundColor: COLORS.card,
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  healthText: { color: COLORS.muted },
  percent: { fontSize: 32, fontWeight: "800" },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  card: {
    width: "48%",
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 14,
  },
  label: { color: COLORS.muted },
});
