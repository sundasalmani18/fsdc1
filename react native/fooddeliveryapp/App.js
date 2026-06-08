
import "./global.css"
import Paperexample from './src/component/paperexample';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from "./src/component/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    
    <SafeAreaProvider>
    <WelcomeScreen/>
{/* <Paperexample/> */}

    
    </SafeAreaProvider>
  );
}


