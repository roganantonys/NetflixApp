import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

const RegisterScreen = () => {
  const [input, setInput] = useState("");
  const [password, setpassword] = useState("");
  const navigation = useNavigation();
  const signUpFn = () => {
    createUserWithEmailAndPassword(auth, input, password)
      .then(() => {
        Alert.alert("Message","Registered Successfully");
        navigation.navigate("Plans");
      })
      .catch((err) => {
        console.error(err); // Log the entire error object for detailed information

        let errorMessage = "Registration failed. Please try again.";

        if (err.code === "auth/email-already-in-use") {
          errorMessage = "Email address is already in use.";
        } else if (err.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (err.code === "auth/missing-password") {
          errorMessage = "password field is empty";
        } else if (err.code === "auth/weak-password") {
          errorMessage = "Password is too weak.required atleast 4 characters";
        } else if (err.code === "auth/invalid-email") {
          errorMessage = "enter the email";
        }

        Alert.alert("Registration Failed", errorMessage);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
      }}>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Image
            style={{ height: 50, width: 120, marginTop: 20 }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
        </View>
        <View style={{ width: 320, marginTop: 40 }}>
          <Input
            value={input}
            onChangeText={(text) => setInput(text)}
            type="email"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Email"
            placeholderTextColor={"white"}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "grey",
            }}
          />
          <Input
            value={password}
            onChangeText={(text) => setpassword(text)}
            type="password"
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Password"
            placeholderTextColor={"white"}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "grey",
            }}
          />
        </View>
        <Pressable
          onPress={signUpFn}
          style={
            password.length > 4
              ? {
                  backgroundColor: "red",
                  width: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  borderRadius: 10,
                }
              : {
                  width: 300,

                  marginLeft: "auto",
                  marginRight: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "white",
                  borderWidth: 2,
                  height: 50,

                  borderRadius: 10,
                }
          }>
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "700",
              color: "white",
            }}>
            Register
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
