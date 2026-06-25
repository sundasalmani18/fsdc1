import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const messages = [
  {
    id: 1,
    text: "Hello! How are you?",
    sender: false,
  },
  {
    id: 2,
    text: "I'm fine and you?",
    sender: true,
  },
  {
    id: 3,
    text: "Doing great 😊",
    sender: false,
  },
];

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.name}>
          John Abraham
        </Text>
      </View> */}


<View style={styles.header}>
  <TouchableOpacity>
    <Ionicons
      name="arrow-back"
      size={24}
      color="#000"
    />
  </TouchableOpacity>

  <View style={styles.userInfo}>
    <Image
      source={{
        uri: "https://i.pravatar.cc/150?img=3",
      }}
      style={styles.avatar}
    />

    <View>
      <Text style={styles.name}>
        John Abraham
      </Text>

      <Text style={styles.status}>
        Active now
      </Text>
    </View>
  </View>

  <View style={styles.actions}>
    <TouchableOpacity>
      <Ionicons
        name="call-outline"
        size={24}
        color="#000"
      />
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginLeft: 15 }}
    >
      <Ionicons
        name="videocam-outline"
        size={26}
        color="#000"
      />
    </TouchableOpacity>
  </View>
</View>
      <FlatList
        data={messages}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View
            style={[
              styles.bubble,
              item.sender
                ? styles.sender
                : styles.receiver,
            ]}
          >
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <Ionicons
          name="attach"
          size={22}
          color="#888"
        />

        <TextInput
          placeholder="Write message"
          style={styles.input}
        />

        <Ionicons
          name="send"
          size={24}
          color="#1EB980"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },


header: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  paddingTop: 55,
  paddingBottom: 15,
  borderBottomWidth: 1,
  borderBottomColor: "#F1F1F1",
},

userInfo: {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  marginLeft: 15,
},

avatar: {
  width: 45,
  height: 45,
  borderRadius: 22.5,
  marginRight: 10,
},

name: {
  fontSize: 16,
  fontWeight: "700",
},

status: {
  color: "#1EB980",
  fontSize: 12,
  marginTop: 2,
},

actions: {
  flexDirection: "row",
  alignItems: "center",
},
  bubble: {
    padding: 12,
    margin: 10,
    borderRadius: 16,
    maxWidth: "75%",
  },

  sender: {
    backgroundColor: "#1EB980",
    alignSelf: "flex-end",
  },

  receiver: {
    backgroundColor: "#F1F1F1",
    alignSelf: "flex-start",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  input: {
    flex: 1,
    marginHorizontal: 10,
  },
});