import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Search..."
          style={styles.search}
        />
      </View>

      <View style={styles.content}>
        <Text>Search Results</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "#063B33",
    padding: 20,
    paddingTop: 70,
  },

  search: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
  },

  content: {
    flex: 1,
    padding: 20,
  },
});