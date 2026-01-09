import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Fire & Smoke Monitor</Text>
      <Text style={styles.subtitle}>Real-time Safety Dashboard</Text>

      {/* Live Status */}
      <View style={[styles.card, styles.statusCard]}>
        <Text style={styles.cardTitle}>Live Detection Status</Text>
        <Text style={styles.safe}>● SAFE ZONE</Text>
        <Text style={styles.desc}>No fire or smoke detected</Text>
      </View>

      {/* Alerts */}
      <View style={styles.row}>
        <View style={[styles.card, styles.alertCard]}>
          <Text style={styles.cardTitle}>🚨 Alerts Today</Text>
          <Text style={styles.alertCount}>5</Text>
        </View>

        <View style={[styles.card, styles.cameraCard]}>
          <Text style={styles.cardTitle}>📷 Active Cameras</Text>
          <Text style={styles.cameraCount}>3</Text>
        </View>
      </View>

      {/* System Info */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>System Status</Text>
        <Text style={styles.system}>AI Model: Running</Text>
        <Text style={styles.system}>Response Time: 0.8s</Text>
        <Text style={styles.system}>Last Alert: 2 hrs ago</Text>
      </View>
    </View>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#161b2e',
    padding: 18,
    borderRadius: 16,
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  statusCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#00ff7f',
  },
  alertCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#ff3b3b',
  },
  cameraCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#3b82f6',
  },
  cardTitle: {
    color: '#c7d0ff',
    fontSize: 16,
    marginBottom: 8,
  },
  safe: {
    color: '#00ff7f',
    fontSize: 22,
    fontWeight: 'bold',
  },
  desc: {
    color: '#9aa4bf',
    marginTop: 4,
  },
  alertCount: {
    color: '#ff3b3b',
    fontSize: 26,
    fontWeight: 'bold',
  },
  cameraCount: {
    color: '#3b82f6',
    fontSize: 26,
    fontWeight: 'bold',
  },
  system: {
    color: '#9aa4bf',
    marginTop: 6,
  },
});
