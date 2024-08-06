import Colors from "@/utils/colors";
import { Dimensions, StyleSheet, View } from "react-native";
import { CustomText } from "../text";

type HeaderType = {
  title: string;
  description: string;
  hideHeader?: boolean;
};
const { width } = Dimensions.get("window");
const AuthHeader = ({ title, description, hideHeader = false }: HeaderType) => {
  return (
    <View style={[styles.container, { paddingTop: hideHeader ? 0 : 30 }]}>
      <View style={styles.auth_container}>
        <CustomText fontFamily="Prata" type="xl" textAlign="center">
          {title}
        </CustomText>
      </View>
      <CustomText style={styles.description} fontFamily="NexaBold" type="xs">
        {description}
      </CustomText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
  description: { paddingTop: 40, color: Colors.black, opacity: 0.5 },
  auth_container: { width: width * 0.7 },
});
export default AuthHeader;
