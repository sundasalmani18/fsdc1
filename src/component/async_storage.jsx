import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Async_Storage= () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  // Load saved data
  useEffect(() => {
    getData();
  }, []);

  // Save data
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userCity', city);

      alert('Data Saved');
    //   setName("");
    //   setCity("");
    } 
    
    
    catch (error) {
      console.log(error);
    }
  
  
  };
  // Get data
  const getData = async () => {
    try {
      const savedName = await AsyncStorage.getItem('userName');
      const savedCity = await AsyncStorage.getItem('userCity');

      if (savedName !== null) {
        setName(savedName);
      }

      if (savedCity !== null) {
        setCity(savedCity);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete data
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('userCity');

      setName('');
      setCity('');

      alert('Data Deleted');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.buttonText}>Store Value</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={deleteData}
      >
        <Text style={styles.buttonText}>Delete Value</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 30 }}>
        <Text>Saved Name: {name}</Text>
        <Text>Saved City: {city}</Text>
      </View>
    </View>
  );
};

export default Async_Storage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});