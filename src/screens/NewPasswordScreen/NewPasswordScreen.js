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

const NewPasswordScreen = () => {
  // const [code, setCode] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    // console.warn("onSubmitPressed");

    navigation.navigate("Home");
  };

  const onSigninPress = () => {
    // console.warn("Signin ");

    navigation.navigate("Signin");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
        />

        <CustomInput
          name="code"
          control={control}
          rules={{ required: "Code is required" }}
          placeholder="Code"
          // value={code}
          // setValue={setCode}
        />

        <CustomInput
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters",
            },
          }}
          placeholder="Enter your new password"
          // value={newPassword}
          // setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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

export default NewPasswordScreen;
