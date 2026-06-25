import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Messages"
        component={HomeScreen}
      />
      {/* <Tab.Screen
        name="Calls"
        component={CallsScreen}
      /> */}
      {/* <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
      /> */}
      {/* <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      /> */}
    </Tab.Navigator>
  );
}