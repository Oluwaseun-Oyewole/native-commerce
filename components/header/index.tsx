import Colors from "@/utils/colors";
import { Dimensions, StyleSheet, View } from "react-native";
import { CustomText } from "../text";

type HeaderType = {
  title: string;
  description: string;
};
const { width } = Dimensions.get("window");
const AuthHeader = ({ title, description }: HeaderType) => {
  return (
    <View style={styles.container}>
      <View style={styles.auth_container}>
        <CustomText fontFamily="Prata" type="xl" textAlign="center">
          {title}
        </CustomText>
      </View>
      <CustomText style={styles.description} fontFamily="SansMedium" type="xs">
        {description}
      </CustomText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", paddingTop: 80 },
  description: { paddingTop: 50, color: Colors.black, opacity: 0.6 },
  auth_container: { width: width * 0.7 },
});
export default AuthHeader;
