import { View, Text,Modal } from 'react-native'
import React from 'react'

const SuccessPopupScreen = (visible) => {
   return (
    <Modal transparent visible={visible}>
      <View
        style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'rgba(0,0,0,.4)'
        }}
      >
        <View
          style={{
            width:280,
            backgroundColor:'#fff',
            borderRadius:20,
            padding:30
          }}
        >
          <Text
            style={{
              fontSize:22,
              fontWeight:'700',
              textAlign:'center'
            }}
          >
            Success!
          </Text>
        </View>
      </View>
    </Modal>
  );
}

export default SuccessPopupScreen
