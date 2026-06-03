import * as Location from 'expo-location';
import { useState } from 'react';
import { View, Text, Button,  StyleSheet, TouchableOpacity } from 'react-native';





const LocationScreen = () => {
 const [location, setLocation] = useState('');


   const getLocation = async () => {
        // Permission maango
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert('Permission nahi mili!');
            return;
        }

        // Location lo
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(`Lat: ${loc.coords.latitude}, Long: ${loc.coords.longitude}`);
    };


  return (
     <View>
            <TouchableOpacity  style={styles.button} onPress={getLocation}>
                <Text>Get Location</Text>
            </TouchableOpacity>
            {/* <Button title="Get Location"  /> */}
            <Text>{location}</Text>
        </View>
  )
}


const styles = StyleSheet.create({
 button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 150,
  }

  });
export default LocationScreen

