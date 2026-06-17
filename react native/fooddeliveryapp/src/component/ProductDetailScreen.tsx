import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default function ProductDetailsScreen() {
  return (
    <View style={{
      flex:1,
      backgroundColor:'#fff'
    }}>
      <Image
        source={require('../../assets/images/burger.png')}
        style={{
          width:280,
          height:280,
          alignSelf:'center',
          marginTop:40
        }}
      />

      <View style={{
        padding:20
      }}>
        <Text style={{
          fontSize:28,
          fontWeight:'700'
        }}>
          Hamburger Veggie Burger
        </Text>

        <Text style={{
          marginTop:10,
          color:'#777'
        }}>
          Fresh ingredients and delicious taste.
        </Text>

        <Text style={{
          marginTop:20,
          fontSize:30,
          color:'#FF3B5C',
          fontWeight:'700'
        }}>
         Rs:300
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor:'#222',
          padding:18,
          margin:20,
          borderRadius:16
        }}
      >
        <Text style={{
          color:'#fff',
          textAlign:'center'
        }}>
          Add To Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}