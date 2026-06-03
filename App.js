import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "./global.css"
import Login from './src/component/Login';
import Table from './src/component/table';
import Paperexample from './src/component/paperexample';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Async_Storage from './src/component/async_storage';
import Aboutus from './src/component/Aboutus';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LocationScreen from './src/component/LocationScreen';
import CameraScreen from './src/component/CameraScreen';
import Imagepicker from './src/component/Imagepicker';
import NotificationScreen from './src/component/NotificationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    //  <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="login"
    //       component={Login}
    //     />

    //     <Stack.Screen
    //       name="Aboutus"
    //       component={Aboutus}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
    <SafeAreaProvider>
      <Imagepicker/>
      {/* <NotificationScreen/> */}
      {/* your app */}
 {/* <LocationScreen/>  
 <CameraScreen/> */}
{/* <Login/> */}
{/* <Table/> */}
{/* <Paperexample/> */}
{/* <Async_Storage/> */}
    
    </SafeAreaProvider>
  );
}


