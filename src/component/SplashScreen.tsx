import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <LinearGradient
        colors={["#1B1238", "#0D0C1D"]}
        style={styles.container}
      >
        <View style={styles.logoGlow}>
          <View style={styles.logoCircle}>
            <Text style={styles.logo}>C</Text>
          </View>
        </View>

        <Text style={styles.title}>Chatbox</Text>

        <Text style={styles.subtitle}>
          Connect friends easily & quickly
        </Text>

        <View style={styles.bottomContainer}>
          <View style={styles.loader}>
            <View style={styles.loaderDot} />
          </View>

          <Text style={styles.loadingText}>
            Loading...
          </Text>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logoGlow: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(36,120,109,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#24786D",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#24786D",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 20,
  },

  logo: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "900",
  },

  title: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "800",
    marginTop: 30,
    letterSpacing: 1,
  },

  subtitle: {
    color: "#A7A7B5",
    fontSize: 16,
    marginTop: 10,
  },

  bottomContainer: {
    position: "absolute",
    bottom: 80,
    alignItems: "center",
  },

  loader: {
    width: 120,
    height: 5,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.15)",
    overflow: "hidden",
  },

  loaderDot: {
    width: 50,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#24786D",
  },

  loadingText: {
    marginTop: 15,
    color: "#A7A7B5",
    fontSize: 14,
  },
});




