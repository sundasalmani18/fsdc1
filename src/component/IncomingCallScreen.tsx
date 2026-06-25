import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IncomingCallScreen() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
      }}
      blurRadius={20}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.callType}>
          Incoming Call
        </Text>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Barsha Akther
        </Text>

        <Text style={styles.status}>
          Calling...
        </Text>

        <View style={styles.options}>
          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons
              name="alarm-outline"
              size={24}
              color="#fff"
            />
            <Text style={styles.optionText}>
              Remind Me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="#fff"
            />
            <Text style={styles.optionText}>
              Message
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.declineBtn}>
            <Ionicons
              name="call"
              size={28}
              color="#fff"
              style={{
                transform: [{ rotate: "135deg" }],
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.acceptBtn}>
            <Ionicons
              name="call"
              size={28}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    alignItems: "center",
    justifyContent: "center",
  },

  callType: {
    color: "#E5E5E5",
    fontSize: 18,
    marginBottom: 40,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#fff",
  },

  name: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    marginTop: 25,
  },

  status: {
    color: "#D9D9D9",
    fontSize: 16,
    marginTop: 10,
  },

  options: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    marginTop: 100,
  },

  optionBtn: {
    alignItems: "center",
  },

  optionText: {
    color: "#fff",
    marginTop: 10,
    fontSize: 14,
  },

  bottomContainer: {
    position: "absolute",
    bottom: 70,
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },

  declineBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
  },

  acceptBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#22C55E",
    justifyContent: "center",
    alignItems: "center",
  },
});