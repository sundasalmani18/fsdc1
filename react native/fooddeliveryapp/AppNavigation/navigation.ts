import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from "../src/component/SplashScreen";
import HomeScreen from "../src/component/HomeScreen";
import ProductDetailsScreen from "../src/component/ProductDetailScreen";
import CartScreen from "../src/component/CartScreen";
import PaymentScreen from "../src/component/PaymentScreen";
import SuccessPopupScreen from "../src/component/SuccessPopupScreen";
import ProfileScreen from "../src/component/ProfileScreen";
import ChatScreen from "../src/component/ChatScreen";
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={SplashScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Details" component={ProductDetailsScreen}/>
      <Stack.Screen name="Cart" component={CartScreen}/>
      <Stack.Screen name="Payment" component={PaymentScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="Chat" component={ChatScreen}/>
    </Stack.Navigator>
  )
}

export default Navigation