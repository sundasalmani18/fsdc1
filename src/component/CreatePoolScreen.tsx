import React from "react";
import {
 View,
 Text,
 TextInput,
 StyleSheet
} from "react-native";

export default function CreatePollScreen(){
 return(
  <View style={styles.container}>
   <Text style={styles.title}>
    Create Poll
   </Text>

   <TextInput
    placeholder="Poll Question"
    style={styles.input}
   />

   <TextInput
    placeholder="Option 1"
    style={styles.input}
   />

   <TextInput
    placeholder="Option 2"
    style={styles.input}
   />
  </View>
 );
}

const styles=StyleSheet.create({
 container:{flex:1,padding:20},
 title:{
  fontSize:24,
  fontWeight:"700"
 },
 input:{
  borderWidth:1,
  borderColor:"#ddd",
  marginTop:15,
  borderRadius:12,
  padding:14
 }
});