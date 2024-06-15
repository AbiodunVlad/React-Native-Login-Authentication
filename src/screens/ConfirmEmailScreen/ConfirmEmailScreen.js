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
import { useForm, Controller } from "react-hook-form";

const ConfirmEmailScreen = () => {
  const { control, handleSubmit } = useForm();

  // const [code, setCode] = useState("");

  const navigation = useNavigation();

  const onConfirmPressed = (data) => {
    // console.warn("onConfirmPressed");

    navigation.navigate("Home");
  };

  const onSignUpPress = () => {
    // console.warn("SignUp");

    navigation.navigate("Signin");
  };

  const onResendPress = () => {
    console.warn("onResendPress");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{ required: "Username code is required" }}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{ required: "Confirmation code is required" }}
          // value={code}
          // setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="secondary"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignUpPress}
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

export default ConfirmEmailScreen;
