import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function Login() {
  const scale = useSharedValue(1);

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <LinearGradient
      colors={['#0b0b0c', '#1a0f10', '#0b0b0c']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safe}>
        <Animated.View
          entering={FadeInUp.duration(700).springify()}
          style={styles.card}
        >
          {/* Header */}
          <Text style={styles.title}>System Access</Text>
          <View style={styles.divider} />
          <Text style={styles.subtitle}>
            Fire & Smoke Monitoring Login
          </Text>

          <Animated.View entering={FadeInUp.delay(150)}>
            <TextInput
              placeholder="Registered Email"
              placeholderTextColor="#8e8e93"
              style={styles.input}
            />
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(300)}>
            <TextInput
              placeholder="Secure Password"
              placeholderTextColor="#8e8e93"
              secureTextEntry
              style={styles.input}
            />
          </Animated.View>

          <Animated.View style={animatedButtonStyle}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPressIn={() => (scale.value = withSpring(0.95))}
              onPressOut={() => (scale.value = withSpring(1))}
              onPress={() => router.replace('/(tabs)/dashboard')}
              style={styles.button}
            >
              <Text style={styles.btnText}>Access System</Text>
            </TouchableOpacity>
          </Animated.View>

          <Text
            style={styles.link}
            onPress={() => router.push('/(auth)/signup')}
          >
            New operator?{' '}
            <Text style={styles.linkBold}>Create Account</Text>
          </Text>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  safe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: 'rgba(17,17,17,0.96)',
    padding: 32,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#2a1a1a',
    shadowColor: '#ff3b3b',
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },

  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.4,
  },

  divider: {
    height: 2,
    width: 40,
    backgroundColor: '#ff3b3b',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 2,
  },

  subtitle: {
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 13,
  },

  input: {
    backgroundColor: '#161616',
    color: '#fff',
    padding: 16,
    borderRadius: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#2c2c2e',
  },

  button: {
    backgroundColor: '#ff3b3b',
    paddingVertical: 16,
    borderRadius: 26,
    marginTop: 18,
    shadowColor: '#ff3b3b',
    shadowOpacity: 0.45,
    shadowRadius: 14,
    elevation: 8,
  },

  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: 0.6,
  },

  link: {
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 22,
    fontSize: 14,
  },

  linkBold: {
    color: '#ff3b3b',
    fontWeight: '600',
  },
});
