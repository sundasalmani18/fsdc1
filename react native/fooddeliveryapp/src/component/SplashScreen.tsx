import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen() {
  return (
    <LinearGradient
      colors={['#FF5E7D','#FF3B5C']}
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Text
        style={{
          color:'#fff',
          fontSize:34,
          fontWeight:'700'
        }}
      >
        Foodgo
      </Text>

      <Image
        source={require('../../assets/images/burger.png')}
        style={{
          width:180,
          height:180,
          position:'absolute',
          bottom:40
        }}
      />
       {/* <Image
        source={require('../../assets/images/burger1.png')}
        style={{
          width:180,
          height:180,
          position:'absolute',
          bottom:40,
          marginRight:180
        }}
      /> */}
    </LinearGradient>
  );
}