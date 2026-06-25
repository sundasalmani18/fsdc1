import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function OnboardingScreen() {
  return (
    <LinearGradient
      colors={["#1B1238", "#0F0F1B"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.logo}>Chatbox</Text>

        <View style={styles.content}>
          <Text style={styles.heading}>
            Connect{"\n"}
            friends{"\n"}
            <Text style={styles.bold}>easily &{"\n"}quickly</Text>
          </Text>

          <Text style={styles.subtitle}>
            Our chat app is the perfect way to stay
            connected with friends and family.
          </Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialBtn}>
              <FontAwesome
                name="facebook"
                size={22}
                color="#1877F2"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <AntDesign
                name="google"
                size={20}
                color="#EA4335"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <FontAwesome
                name="apple"
                size={22}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.mailBtn}>
            <Text style={styles.mailText}>
              Sign up with mail
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.loginText}>
              Existing account?{" "}
              <Text style={styles.loginBold}>
                Log in
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
  },

  logo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 50,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  heading: {
    fontSize: 52,
    color: "#fff",
    lineHeight: 60,
    fontWeight: "300",
  },

  bold: {
    fontWeight: "800",
  },

  subtitle: {
    color: "#B7B7C5",
    fontSize: 15,
    marginTop: 24,
    lineHeight: 24,
    width: "90%",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    gap: 18,
  },

  socialBtn: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "#3B3B4D",
    justifyContent: "center",
    alignItems: "center",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#303040",
  },

  or: {
    color: "#8C8CA1",
    marginHorizontal: 12,
    fontSize: 12,
  },

  mailBtn: {
    height: 58,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },

  mailText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  loginText: {
    color: "#A5A5B5",
    textAlign: "center",
    marginTop: 28,
    fontSize: 14,
  },

  loginBold: {
    color: "#fff",
    fontWeight: "700",
  },
});