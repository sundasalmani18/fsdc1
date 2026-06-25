import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const participants = [
  {
    id: "1",
    name: "Lora Adom",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Jacob Jones",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Albert Flores",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "Darrell Steward",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

export default function GroupCallScreen() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a",
      }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        {/* Top */}
        <View style={styles.topSection}>
          <Text style={styles.heading}>
            Meeting with{"\n"}Lora Adom
          </Text>

          <View style={styles.memberBox}>
            <Ionicons
              name="people"
              size={22}
              color="#fff"
            />
            <Text style={styles.memberText}>
              6 Members
            </Text>
            <Text style={styles.time}>
              12:24
            </Text>
          </View>
        </View>

        {/* Participant List */}
        <View style={styles.listContainer}>
          {participants.map((item) => (
            <View
              key={item.id}
              style={styles.participant}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.avatar}
              />

              <Text style={styles.name}>
                {item.name}
              </Text>

              <View style={styles.onlineDot} />
            </View>
          ))}

          <Text style={styles.you}>
            You
          </Text>

          <Text style={styles.speaking}>
            Speaking
          </Text>
        </View>

        {/* Controls */}
        <View style={styles.controlBar}>
          <TouchableOpacity
            style={styles.controlBtn}
          >
            <Ionicons
              name="volume-high"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlBtn}
          >
            <Ionicons
              name="mic"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlBtn}
          >
            <Ionicons
              name="videocam"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlBtn}
          >
            <Ionicons
              name="chatbubble"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlBtn}
          >
            <Ionicons
              name="ellipsis-horizontal"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.endCall}
          >
            <Ionicons
              name="call"
              size={24}
              color="#fff"
              style={{
                transform: [
                  { rotate: "135deg" },
                ],
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Bottom Members */}
        <View style={styles.bottomSheet}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={
              false
            }
            data={participants}
            keyExtractor={(item) =>
              item.id
            }
            renderItem={({ item }) => (
              <Image
                source={{
                  uri: item.image,
                }}
                style={
                  styles.bottomAvatar
                }
              />
            )}
          />

          <TouchableOpacity
            style={styles.addBtn}
          >
            <Ionicons
              name="add"
              size={30}
              color="#666"
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
    backgroundColor:
      "rgba(0,0,0,0.45)",
  },

  topSection: {
    paddingTop: 70,
    paddingHorizontal: 25,
  },

  heading: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "700",
  },

  memberBox: {
    marginTop: 25,
  },

  memberText: {
    color: "#fff",
    fontSize: 18,
    marginTop: 5,
  },

  time: {
    color: "#ddd",
    fontSize: 16,
    marginTop: 5,
  },

  listContainer: {
    marginTop: 80,
    paddingHorizontal: 20,
  },

  participant: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  name: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 15,
  },

  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#00E676",
    marginLeft: "auto",
  },

  you: {
    color: "#fff",
    fontSize: 22,
    marginTop: 10,
  },

  speaking: {
    color: "#00E676",
    fontSize: 18,
  },

  controlBar: {
    position: "absolute",
    bottom: 150,
    left: 15,
    right: 15,
    backgroundColor:
      "rgba(255,255,255,0.15)",
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    alignItems: "center",
  },

  controlBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor:
      "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  endCall: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  bottomAvatar: {
    width: 65,
    height: 65,
    borderRadius: 33,
    marginRight: 15,
  },

  addBtn: {
    width: 65,
    height: 65,
    borderRadius: 33,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});