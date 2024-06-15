import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from "react-native";
import flo from "../../../assets/images/flo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSigninButtons from "../../components/SocialSigninButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const SigninScreen = () => {
  // Commenting the states out to implement react-hook-form

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.warn(errors);

  const onSignInPressed = (data) => {
    // console.warn("Sign in");

    //validate user
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    // console.warn("You forgot your password");

    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    // console.warn("SignUp");

    navigation.navigate("Signup");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* <Text>Sign In Screen</Text> */}
        <Image source={flo} style={[styles.logo, { height: height * 0.3 }]} />

        {/* Also commenting out the customInput for the react-hook-form */}

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password should be at least 5 characters long",
            },
          }}
        />

        {/* <TextInput placeholder="Password" /> */}

        <CustomButton text="Sign in" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="tertiary"
        />

        <SocialSigninButtons />

        <CustomButton
          text="You have no account? Sign up."
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
    padding: 20,
  },

  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SigninScreen;
