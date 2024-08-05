import { CustomText } from "@/components/text";
import { Dimensions, StyleSheet, View } from "react-native";

const { height } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <View style={[styles.container]}>
      <CustomText>Main App screen</CustomText>
      <CustomText>Main App screen</CustomText>
      <CustomText>Main App screen</CustomText>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { height, alignItems: "center", justifyContent: "center" },
});
