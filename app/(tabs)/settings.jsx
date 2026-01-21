import {
  View,
  Text,
  Switch,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Slider from '@react-native-community/slider';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>System Settings</Text>
      <Text style={styles.subtitle}>Configure alerts, location & AI sensitivity</Text>

      {/* Alerts */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🚨 Alerts</Text>

        <View style={styles.row}>
          <Text style={styles.label}>SMS Alerts</Text>
          <Switch trackColor={{ true: '#ff3b3b' }} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Push Notifications</Text>
          <Switch trackColor={{ true: '#ff3b3b' }} />
        </View>
      </View>

      {/* Location Based Alerts */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📍 Location-Based Alerts</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Enable Location Tracking</Text>
          <Switch trackColor={{ true: '#3b82f6' }} />
        </View>

        <Text style={styles.helper}>
          Alerts will be sent based on your current location.
        </Text>
      </View>

      {/* Alert Frequency */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>⏱ Alert Frequency</Text>
        <Text style={styles.value}>Every 5 Minutes</Text>

        <Slider
          minimumValue={1}
          maximumValue={10}
          step={1}
          minimumTrackTintColor="#ff3b3b"
          maximumTrackTintColor="#374151"
          thumbTintColor="#ff3b3b"
        />

        <Text style={styles.helper}>
          Controls how often alerts are repeated during danger.
        </Text>
      </View>

      {/* AI Sensitivity */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🧠 AI Sensitivity</Text>
        <Text style={styles.value}>Medium</Text>

        <Slider
          minimumValue={1}
          maximumValue={3}
          step={1}
          minimumTrackTintColor="#00ff7f"
          maximumTrackTintColor="#374151"
          thumbTintColor="#00ff7f"
        />

        <Text style={styles.helper}>
          Higher sensitivity detects smoke/fire faster but may increase false alerts.
        </Text>
      </View>

      {/* Emergency Contact */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📞 Emergency Contact</Text>

        <TextInput
          placeholder="Emergency Phone Number"
          placeholderTextColor="#8b8b8b"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      {/* Save */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Settings</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>AI Fire & Smoke Detection System</Text>
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
  card: {
    backgroundColor: '#161b2e',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
  },
  cardTitle: {
    color: '#c7d0ff',
    fontSize: 18,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
  },
  value: {
    color: '#ffb703',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#0f1425',
    borderRadius: 12,
    padding: 15,
    color: '#ffffff',
    marginTop: 10,
  },
  helper: {
    color: '#9aa4bf',
    fontSize: 12,
    marginTop: 6,
  },
  button: {
    backgroundColor: '#ff3b3b',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
  },
});
