import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#F1F8E9", "#E8F5E9"]}
      style={styles.container}
    >
      <Image
        source={require("../assets/icon.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>FireGuard AI</Text>
      <Text style={styles.tagline}>
        Smart Detection, Simple Protection
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  tagline: {
    marginTop: 8,
    color: "#555",
  },
});
