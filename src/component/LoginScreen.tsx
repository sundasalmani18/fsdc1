import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email && password;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <AntDesign
          name="arrowleft"
          size={24}
          color="#000"
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        Log in to Chatbox
      </Text>

      <Text style={styles.subtitle}>
        Welcome back! Sign in using your social
        account or email to continue us
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
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.label}>Your email</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>

      <TextInput
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={[
          styles.loginBtn,
          {
            backgroundColor: isValid
              ? "#24786D"
              : "#E8E8E8",
          },
        ]}
      >
        <Text
          style={{
            color: isValid ? "#fff" : "#9A9A9A",
            fontWeight: "600",
          }}
        >
          Log in
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>
          Forgot password?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 30,
  },

  subtitle: {
    textAlign: "center",
    color: "#888",
    marginTop: 12,
    lineHeight: 22,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    marginTop: 35,
  },

  socialBtn: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E5E5",
  },

  or: {
    marginHorizontal: 12,
    color: "#888",
  },

  label: {
    color: "#24786D",
    marginBottom: 10,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingBottom: 10,
    marginBottom: 25,
  },

  loginBtn: {
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  forgot: {
    textAlign: "center",
    marginTop: 24,
    color: "#24786D",
    fontWeight: "500",
  },
});