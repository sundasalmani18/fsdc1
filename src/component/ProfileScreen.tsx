import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/200",
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Jhon Abraham
        </Text>

        <Text style={styles.online}>
          Online
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>
          Phone Number
        </Text>

        <Text style={styles.value}>
          +880 123 456 789
        </Text>

        <Text style={styles.label}>
          Email
        </Text>

        <Text style={styles.value}>
          jhon@gmail.com
        </Text>

        <Text style={styles.label}>
          Address
        </Text>

        <Text style={styles.value}>
          New York, USA
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 320,
    backgroundColor: "#063B33",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 15,
  },

  online: {
    color: "#7EE7B8",
    marginTop: 5,
  },

  content: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    padding: 20,
  },

  label: {
    color: "#999",
    marginTop: 15,
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
});