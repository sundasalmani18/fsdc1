import "./global.css"
import Paperexample from './src/component/paperexample';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./AppNavigation/navigation";



export default function App() {
  return (

    
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}


