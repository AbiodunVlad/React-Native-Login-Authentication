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

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignupScreen = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");

  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    // console.warn("Sign in");

    navigation.navigate("ConfirmEmail");
  };

  const onSignUpPress = () => {
    // console.warn("SignUp");

    navigation.navigate("Signin");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPolicyPressed = () => {
    console.warn("onPrivacyPolicyPressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 4,
              message: "Username should be at least 4 characters",
            },
            maxLength: {
              value: 20,
              message: "Username should not be longer than 20 characters",
            },
          }}
          // value={username}
          // setValue={setUsername}
        />

        <CustomInput
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "This is not a valid email address",
            },
          }}
          placeholder="Email"
          // value={email}
          // setValue={setEmail}
        />

        <CustomInput
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password should be at least 5 characters",
            },
          }}
          placeholder="Password"
          // value={password}
          // setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomInput
          name="repeatPassword"
          control={control}
          rules={{
            validate: (value) => value === pwd || "Password does not match",
          }}
          placeholder="Repeat Password"
          // value={passwordRepeat}
          // setValue={setPasswordRepeat}
          secureTextEntry={true}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            terms of use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            privacy policy
          </Text>
          .
        </Text>

        <SocialSigninButtons />

        <CustomButton
          text="No account yet? Signup here"
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

export default SignupScreen;
