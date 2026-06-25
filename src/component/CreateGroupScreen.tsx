import React,{useState} from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet
} from "react-native";

export default function CreateGroupScreen(){

 const [name,setName]=useState("");

 return(
  <View style={styles.container}>
   <Text style={styles.heading}>
    Create Group
   </Text>

   <TextInput
    placeholder="Group Name"
    value={name}
    onChangeText={setName}
    style={styles.input}
   />

   <TouchableOpacity style={styles.btn}>
    <Text style={styles.btnText}>
      Create
    </Text>
   </TouchableOpacity>
  </View>
 )
}

const styles=StyleSheet.create({
 container:{flex:1,padding:20},
 heading:{
  fontSize:28,
  fontWeight:"700"
 },
 input:{
  borderWidth:1,
  borderColor:"#ddd",
  borderRadius:12,
  marginTop:20,
  padding:15
 },
 btn:{
  marginTop:30,
  backgroundColor:"#24786D",
  padding:16,
  borderRadius:14
 },
 btnText:{
  color:"#fff",
  textAlign:"center"
 }
});