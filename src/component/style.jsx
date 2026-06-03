import { View, Text } from 'react-native'
import React from 'react'

const style = () => {
  return (
    <View style={styles.container}>
   
   
         <Text className="text-xl font-bold text-blue-500">
           Welcome to Nativewind!
         </Text>
         <Text>Hello </Text>
         <StatusBar style="auto" />
         <TouchableOpacity
         style={styles.button}
         onPress={() => alert('Button Pressed')}
         activeOpacity={0.7}
       >
         <Text style={styles.text}>Press Me</Text>
       </TouchableOpacity>
       </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default style