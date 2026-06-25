import React from "react";
import {
 View,
 Image,
 TouchableOpacity,
 StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VideoCallScreen() {
 return (
  <View style={styles.container}>
   <Image
    source={{ uri: "https://i.pravatar.cc/500" }}
    style={styles.video}
   />

   <Image
    source={{ uri: "https://i.pravatar.cc/100?img=5" }}
    style={styles.smallVideo}
   />

   <View style={styles.controls}>
    <TouchableOpacity>
     <Ionicons name="mic" size={24} color="#fff" />
    </TouchableOpacity>

    <TouchableOpacity>
     <Ionicons name="videocam" size={24} color="#fff" />
    </TouchableOpacity>

    <TouchableOpacity style={styles.end}>
     <Ionicons name="call" size={24} color="#fff" />
    </TouchableOpacity>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 container:{flex:1,backgroundColor:"#000"},
 video:{flex:1},
 smallVideo:{
  width:100,
  height:150,
  borderRadius:20,
  position:"absolute",
  top:60,
  right:20
 },
 controls:{
  position:"absolute",
  bottom:40,
  width:"100%",
  flexDirection:"row",
  justifyContent:"space-evenly"
 },
 end:{
  backgroundColor:"red",
  padding:15,
  borderRadius:50
 }
});