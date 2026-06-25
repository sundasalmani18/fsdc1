import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import BottomTab from "../component/Bottomtab";

const menus = [
  "Account",
  "Chat",
  "Notifications",
  "Privacy",
  "Storage and Data",
  "Invite a Friend",
];

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Settings
        </Text>
      </View>

      <View style={styles.content}>
        {menus.map((item) => (
          <View style={styles.menu} key={item}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>

      {/* <BottomTab active="Settings" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    height: 110,
    backgroundColor: "#063B33",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  content: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    padding: 20,
  },

  menu: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});