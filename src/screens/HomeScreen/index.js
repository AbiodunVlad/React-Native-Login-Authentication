import React from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import flo from "../../../assets/images/flo.png";

function HomeScreen() {
  const { height } = useWindowDimensions();

  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <Image
        source={flo}
        style={{
          width: "70%",
          maxWidth: 300,
          maxHeight: 100,
          height: height * 0.3,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          alignSelf: "center",
          // marginTop: 10,
        }}
      >
        This is the Home Screen{" "}
      </Text>

      <Text style={{ fontSize: 16, alignSelf: "flex-start", lineHeight: 50 }}>
        Every other thing should ideally flow from here...
      </Text>
    </View>
  );
}

export default HomeScreen;
