import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";

// import BottomTab from "../components/BottomTab";

const contacts = [
  {
    id: "1",
    name: "Arlie Sadie",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Adi Adrian",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Brilly Hiegel",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contacts</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Image
                source={{ uri: item.image }}
                style={styles.avatar}
              />

              <Text style={styles.name}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>

      {/* <BottomTab active="Contacts" /> */}
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

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27,
  },

  name: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "600",
  },
});