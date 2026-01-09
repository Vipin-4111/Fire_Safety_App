import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Signup() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <LinearGradient
      colors={['#1a1a1a', '#ff3b3b']}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.card,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Text style={styles.title}>🔥 FireGuard AI</Text>
        <Text style={styles.subtitle}>Create your safety account</Text>

        <TextInput placeholder="Email or Phone" placeholderTextColor="#aaa" style={styles.input} />
        <TextInput placeholder="Full Name" placeholderTextColor="#aaa" style={styles.input} />
        <TextInput placeholder="Username" placeholderTextColor="#aaa" style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor="#aaa" secureTextEntry style={styles.input} />
        <TextInput placeholder="Confirm Password" placeholderTextColor="#aaa" secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.link} onPress={() => router.back()}>
          Already registered? Login
        </Text>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#111',
    borderRadius: 20,
    padding: 25,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff3b3b',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#ccc',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1f1f1f',
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    color: '#fff',
  },
  button: {
    backgroundColor: '#ff3b3b',
    padding: 16,
    borderRadius: 30,
    marginTop: 15,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#ffb3b3',
    textAlign: 'center',
    marginTop: 15,
  },
});
