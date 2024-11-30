import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,NativeStackScreenProps } from '@react-navigation/native-stack'; // {{ edit_1 }}
import { RootStackParamList } from './src/util/types';
import HomeScreen from './src/util/components/HomeScreen/homescreen.component';
import Settings from './src/util/components/settingsScreen/settings.component';
import Profile from './src/util/components/ProfileScreen/profile.component';
import CameraScreen from './src/util/components/CameraScreen/camera.component';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
