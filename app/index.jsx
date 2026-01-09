import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Base black */}
      <View style={styles.base}>

        {/* 🔥 Vertical red gradient */}
        <LinearGradient
          colors={['#000000', '#5a0f0f', '#b91c1c', '#5a0f0f', '#000000']}
          locations={[0, 0.35, 0.5, 0.65, 1]}
          style={styles.verticalGradient}
        />

        {/* 🔴 Horizontal fade (creates radial feel) */}
        <LinearGradient
          colors={['#000000', 'transparent', '#000000']}
          locations={[0, 0.5, 1]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.horizontalFade}
        />

        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require('../assets/icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>FireGuard AI</Text>
          <Text style={styles.tagline}>
            Smart Fire Detections for safer spaces
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#000',
  },

  verticalGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  horizontalFade: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: width * 0.32,
    height: width * 0.32,
    marginBottom: 14,
  },

  title: {
    color: '#ffffff',
    fontSize: width * 0.075,
    fontWeight: 'bold',
  },

  tagline: {
    color: '#9ca3af',
    fontSize: width * 0.038,
    marginTop: 6,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});
