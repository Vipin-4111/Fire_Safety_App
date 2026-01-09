import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Alerts() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚨 Alerts</Text>
      <Text style={styles.subtitle}>Recent fire & smoke detections</Text>

      {/* Fire Alert – Resolved */}
      <View style={[styles.card, styles.resolved]}>
        <View style={styles.row}>
          <Text style={styles.icon}>🔥</Text>
          <View style={styles.info}>
            <Text style={styles.type}>Fire Detected</Text>
            <Text style={styles.time}>14:32 · Sector A · Camera 1</Text>
          </View>
          <Text style={styles.badgeResolved}>RESOLVED</Text>
        </View>
      </View>

      {/* Smoke Alert – Pending */}
      <View style={[styles.card, styles.pending]}>
        <View style={styles.row}>
          <Text style={styles.icon}>💨</Text>
          <View style={styles.info}>
            <Text style={styles.type}>Smoke Detected</Text>
            <Text style={styles.time}>10:10 · Sector B · Camera 2</Text>
          </View>
          <Text style={styles.badgePending}>PENDING</Text>
        </View>
      </View>

      {/* Fire Alert – Critical */}
      <View style={[styles.card, styles.critical]}>
        <View style={styles.row}>
          <Text style={styles.icon}>🔥</Text>
          <View style={styles.info}>
            <Text style={styles.type}>Fire Detected</Text>
            <Text style={styles.time}>08:45 · Warehouse · Camera 3</Text>
          </View>
          <Text style={styles.badgeCritical}>CRITICAL</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f1a',
    padding: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#9aa4bf',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#161b2e',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 28,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  type: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    color: '#9aa4bf',
    fontSize: 13,
    marginTop: 2,
  },

  /* Status Styles */
  resolved: {
    borderLeftWidth: 5,
    borderLeftColor: '#00ff7f',
  },
  pending: {
    borderLeftWidth: 5,
    borderLeftColor: '#ffb703',
  },
  critical: {
    borderLeftWidth: 5,
    borderLeftColor: '#ff3b3b',
  },

  badgeResolved: {
    color: '#00ff7f',
    fontWeight: 'bold',
    fontSize: 12,
  },
  badgePending: {
    color: '#ffb703',
    fontWeight: 'bold',
    fontSize: 12,
  },
  badgeCritical: {
    color: '#ff3b3b',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
