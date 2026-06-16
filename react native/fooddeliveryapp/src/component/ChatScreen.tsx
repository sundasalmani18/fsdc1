import { View, TextInput,FlatList} from 'react-native'
import React from 'react'

const ChatScreen = () => {
   return (
    <View style={{
      flex:1,
      backgroundColor:'#fff'
    }}>
      <FlatList
        data={[]}
        renderItem={null}
      />

      <TextInput
        placeholder="Write your message"
        style={{
          borderWidth:1,
          borderColor:'#ddd',
          margin:20,
          borderRadius:20,
          paddingHorizontal:15
        }}
      />
    </View>
  );
}

export default ChatScreen