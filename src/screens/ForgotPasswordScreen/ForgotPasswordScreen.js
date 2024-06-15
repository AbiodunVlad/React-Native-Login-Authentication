import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSigninButtons from "../../components/SocialSigninButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ForgotPasswordScreen = () => {
  // const [username, setUsername] = useState("");

  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSendPressed = () => {
    // console.warn("onConfirmPressed");

    navigation.navigate("NewPassword");
  };

  const onSigninPress = () => {
    // console.warn("SignUp");

    navigation.navigate("Signin");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
          placeholder="Username"
          // value={username}
          // setValue={setUsername}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSigninPress}
          type="tertiary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },

  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "#fdb075",
  },
});

export default ForgotPasswordScreen;
