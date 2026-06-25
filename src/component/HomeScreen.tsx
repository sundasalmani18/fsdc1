import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const users = [
  {
    id: "1",
    name: "Alex Linderson",
    msg: "How are you today?",
    time: "2 min ago",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Team Align",
    msg: "Don't miss to attend",
    time: "5 min ago",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "John Abraham",
    msg: "Hey! Can you join meeting?",
    time: "1 hr ago",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons
            name="search"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>

        <Text style={styles.title}>Home</Text>

        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=11",
          }}
          style={styles.profile}
        />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={users}
        keyExtractor={(item) => item.id}
        style={styles.storyList}
        renderItem={({ item }) => (
          <View style={styles.story}>
            <Image
              source={{ uri: item.avatar }}
              style={styles.storyImage}
            />
            <Text style={styles.storyName}>
              {item.name.split(" ")[0]}
            </Text>
          </View>
        )}
      />

      <View style={styles.chatContainer}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatItem}
            >
              <Image
                source={{ uri: item.avatar }}
                style={styles.avatar}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>
                  {item.name}
                </Text>

                <Text style={styles.message}>
                  {item.msg}
                </Text>
              </View>

              <Text style={styles.time}>
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00150F",
  },

  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  storyList: {
    marginTop: 25,
    paddingLeft: 15,
  },

  story: {
    alignItems: "center",
    marginRight: 15,
  },

  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#FFD54F",
  },

  storyName: {
    color: "#fff",
    marginTop: 5,
    fontSize: 12,
  },

  chatContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 20,
    paddingTop: 20,
  },

  chatItem: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 15,
  },

  name: {
    fontWeight: "700",
    fontSize: 16,
  },

  message: {
    color: "#888",
    marginTop: 5,
  },

  time: {
    color: "#999",
    fontSize: 12,
  },
});