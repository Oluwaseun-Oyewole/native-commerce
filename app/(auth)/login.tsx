import { CustomText } from "@/components/text";
import { Dimensions, StyleSheet, View } from "react-native";

const { height } = Dimensions.get("window");
const LoginScreen = () => {
  return (
    <View style={[styles.container]}>
      <CustomText fontFamily="SansRegular" type="default">
        Login Screen
      </CustomText>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { height, alignItems: "center", justifyContent: "center" },
});
