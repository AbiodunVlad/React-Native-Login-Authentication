import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../CustomButton";

const SocialSigninButtons = () => {
  const onSignInFacebook = () => {
    console.warn("facebook");
  };

  const onSignInGoogle = () => {
    console.warn("google");
  };

  const onSignInApple = () => {
    console.warn("apple");
  };

  return (
    <>
      <CustomButton
        text="Sign in with Facebook"
        onPress={onSignInFacebook}
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
      <CustomButton
        text="Sign in with Google"
        onPress={onSignInGoogle}
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        text="Sign in with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSigninButtons;
