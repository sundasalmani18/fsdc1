import * as Notifications from 'expo-notifications';
import { View, Text ,Button } from 'react-native'
import React from 'react'

const NotificationScreen = () => {

    // Permission maango
  const permissionLo = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission nahi mili!');
    }
  };

  // Abhi notification bhejo
  const notificationBhejo = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '👋 Hello Bhai!',
        body: 'Yeh ek test notification hai',
      },
      trigger: null, // null = abhi bhejo
    });
  };

  // 5 second baad notification
  const baadMeinBhejo = async () => {
   await Notifications.scheduleNotificationAsync({
  content: {
    title: '👋 Hello Bhai!',
    body: 'Yeh ek test notification hai',
  },
  trigger: null,
});
  };
  return (
    <View>
      <Text>NotificationScreen</Text>
       <Button title="Permission Lo" onPress={permissionLo} />
      <Button title="Abhi Bhejo" onPress={notificationBhejo} />
      <Button title="5 Sec Baad Bhejo" onPress={baadMeinBhejo} />
    </View>
  )
}

export default NotificationScreen

