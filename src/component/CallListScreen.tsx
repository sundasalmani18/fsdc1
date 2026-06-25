import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const calls = [
  {
    id: "1",
    name: "Team Align",
    type: "Missed call",
    icon: "call-outline",
    color: "#FF4D4F",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Jhon Abraham",
    type: "Outgoing call",
    icon: "arrow-up",
    color: "#22C55E",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Sabila Sayma",
    type: "Missed call",
    icon: "call-outline",
    color: "#FF4D4F",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "Alex Linderson",
    type: "Outgoing call",
    icon: "arrow-up",
    color: "#22C55E",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "5",
    name: "Jhon Abraham",
    type: "Incoming call",
    icon: "arrow-down",
    color: "#22C55E",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export default function CallListScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: item.avatar }}
        style={styles.avatar}
      />

      <View style={styles.info}>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <View style={styles.callInfo}>
          <Ionicons
            name={item.icon}
            size={14}
            color={item.color}
          />

          <Text
            style={[
              styles.type,
              { color: item.color },
            ]}
          >
            {item.type}
          </Text>
        </View>
      </View>

      <TouchableOpacity>
        <Ionicons
          name="videocam-outline"
          size={22}
          color="#666"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity style={styles.iconCircle}>
          <Ionicons
            name="search"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Calls
        </Text>

        <TouchableOpacity style={styles.iconCircle}>
          <Ionicons
            name="call-outline"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* List */}

      <View style={styles.whiteContainer}>
        <Text style={styles.recent}>
          Recent
        </Text>

        <FlatList
          data={calls}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001A13",
  },

  header: {
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#1F4B40",
    justifyContent: "center",
    alignItems: "center",
  },

  whiteContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 20,
  },

  recent: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 20,
    marginBottom: 10,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  callInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  type: {
    marginLeft: 5,
    fontSize: 13,
  },
});