import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const onLogin = () => {
    axios
      .post("/login", { username, secret })
      .then((response) => {
        const userData = { ...response.data, secret }; // Override 'secret'
        props.onAuth(userData);
      })
      .catch((error) => console.log("Error:", error));
  };

  const onSignup = () => {
    axios
      .post("/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((response) => {
        const userData = { ...response.data, secret }; // Override 'secret'
        props.onAuth(userData);
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setSecret(text)}
        />
        <Button title="LOG IN" onPress={onLogin} />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>or Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setSecret(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="First name"
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last name"
          onChangeText={(text) => setLastName(text)}
        />
        <Button title="SIGN UP" onPress={onSignup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: "black",
    fontWeight: "700",
    paddingTop: 32,
  },
  input: {
    width: "100%",
    marginTop: 12,
    padding: 8,
    backgroundColor: "#E6F7FF",
    borderWidth: 1,
    borderColor: "#E6F7FF",
    borderRadius: 5,
  },
});

export default AuthPage;
