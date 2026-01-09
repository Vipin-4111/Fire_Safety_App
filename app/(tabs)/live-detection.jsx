import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LiveDetection() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>📡 Live Detection</Text>
      <Text style={styles.subtitle}>Real-time fire & smoke monitoring</Text>

      {/* Camera Preview */}
      <View style={styles.cameraBox}>
        <Text style={styles.cameraText}>Live Camera Feed</Text>

        {/* Status Overlay */}
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>AI MONITORING ACTIVE</Text>
        </View>
      </View>

      {/* Detection Status */}
      <View style={styles.statusCard}>
        <Text style={styles.statusLabel}>Current Status</Text>
        <Text style={styles.safe}>● SAFE</Text>
        <Text style={styles.confidence}>AI Confidence: 94%</Text>
      </View>

      {/* Actions */}
      <TouchableOpacity style={styles.alertBtn}>
        <Text style={styles.alertText}>🚨 Manual Emergency Alert</Text>
      </TouchableOpacity>

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
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#9aa4bf',
    marginBottom: 15,
  },
  cameraBox: {
    width: '100%',
    height: 280,
    backgroundColor: '#161b2e',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    overflow: 'hidden',
  },
  cameraText: {
    color: '#9aa4bf',
    fontSize: 16,
  },
  overlay: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  overlayText: {
    color: '#00ff7f',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusCard: {
    backgroundColor: '#161b2e',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#00ff7f',
  },
  statusLabel: {
    color: '#c7d0ff',
    fontSize: 14,
    marginBottom: 6,
  },
  safe: {
    color: '#00ff7f',
    fontSize: 22,
    fontWeight: 'bold',
  },
  confidence: {
    color: '#9aa4bf',
    marginTop: 4,
  },
  alertBtn: {
    backgroundColor: '#ff3b3b',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
  },
  alertText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backBtn: {
    backgroundColor: '#374151',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  backText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
