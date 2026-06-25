
import "./global.css"
import Paperexample from './src/component/paperexample';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from "./src/component/OnboardingScreen";
import LoginScreen from "./src/component/LoginScreen";
import SplashScreen from "./src/component/SplashScreen";
import HomeScreen from "./src/component/HomeScreen";
import ChatScreen from "./src/component/ChatScreen";
import BottomTabs from "./src/component/Bottomtab";
import CallListScreen from "./src/component/CallListScreen";
import IncomingCallScreen from "./src/component/IncomingCallScreen";
import VideoCallScreen from "./src/component/VideoCallScreen";
import GroupCallScreen from "./src/component/GroupCallScreen";
import CreateGroupScreen from "./src/component/CreateGroupScreen";
import CreatePollScreen from "./src/component/CreatePoolScreen";
import ChatListScreen from "./src/component/ChatListScreen";
import ProfileScreen from "./src/component/ProfileScreen";
import SettingsScreen from "./src/component/SettingScreen";
import SearchScreen from "./src/component/SearchScreen";
import ContactsScreen from "./src/component/ContactScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
//  <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown:false}}>
//         {/* <Stack.Screen
//           name="Main"
//           component={BottomTabs}
//         /> */}
//         <Stack.Screen name="ChatScreen" component={ChatScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
 <SafeAreaProvider>
  <HomeScreen/>
  {/* <CreatePollScreen/> */}
  {/* <CreateGroupScreen/> */}
 {/* <GroupCallScreen/>  */}
{/* <ChatListScreen/> */}
{/* <CallListScreen/> */}
{/* <ProfileScreen/> */}
{/* <SettingsScreen/> */}
{/* <SearchScreen/> */}
{/* <ContactsScreen/> */}
 </SafeAreaProvider> 
  )
}
    


