import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#25292e',
      },
    }}>
      <Tabs.Screen name="index" options={{
        headerTitle: "Sticker Smash",
        tabBarIcon: ({focused,color}) => (
          <Ionicons 
            name={focused ? "home-sharp" : "home-outline"} 
            color={color}
            size={24} />
        ),
      }} />
      <Tabs.Screen name="about" options={{
        headerTitle:"About",
        tabBarIcon: ({focused,color}) => (
          <Ionicons 
            name={focused ? "information-sharp": "information-outline"} 
            color={color}
            size={24} />
        ),
        }} />
    </Tabs>
  );
}
