import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="dashboard" options={{
        tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />
      }} />
      <Tabs.Screen name="live-detection" options={{
        tabBarIcon: ({ color }) => <Ionicons name="videocam" size={22} color={color} />
      }} />
      <Tabs.Screen name="alerts" options={{
        tabBarIcon: ({ color }) => <Ionicons name="alert" size={22} color={color} />
      }} />
      <Tabs.Screen name="settings" options={{
        tabBarIcon: ({ color }) => <Ionicons name="settings" size={22} color={color} />
      }} />
    </Tabs>
  );
}
