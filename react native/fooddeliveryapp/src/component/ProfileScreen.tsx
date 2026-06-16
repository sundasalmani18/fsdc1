import { View, Text ,Image} from 'react-native'
import React from 'react'

const ProfileScreen = () => {
   return (
    <View style={{
      flex:1,
      alignItems:'center',
      paddingTop:50
    }}>
      <Image
        source={require('../../assets/images/user.png')}
        style={{
          width:100,
          height:100,
          borderRadius:50
        }}
      />

      <Text style={{
        marginTop:20,
        fontSize:24,
        fontWeight:'700'
      }}>
        UserName
      </Text>
    </View>
  );
}

export default ProfileScreen