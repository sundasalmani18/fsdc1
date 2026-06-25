import React from "react";
import {
 View,
 Text,
 FlatList,
 Image,
 StyleSheet
} from "react-native";

const chats=[
 {
  id:1,
  name:"Alex Linderson",
  msg:"How are you today?"
 },
 {
  id:2,
  name:"Team Align",
  msg:"Don't miss meeting"
 }
];

export default function ChatListScreen(){

 return(
  <FlatList
   data={chats}
   renderItem={({item})=>(
    <View style={styles.chat}>
      <Image
       source={{
        uri:`https://i.pravatar.cc/100?img=${item.id}`
       }}
       style={styles.avatar}
      />

      <View>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text>
          {item.msg}
        </Text>
      </View>
    </View>
   )}
  />
 )
}

const styles=StyleSheet.create({
 chat:{
  flexDirection:"row",
  padding:15,
  alignItems:"center"
 },
 avatar:{
  width:55,
  height:55,
  borderRadius:30,
  marginRight:15
 },
 name:{
  fontWeight:"700"
 }
});