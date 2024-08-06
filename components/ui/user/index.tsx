import { CustomText } from "@/components/text";
import AuthWrapper from "@/layout/auth";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const UserSelection = () => {
  return (
    <AuthWrapper title="" description="" hideHeader>
      <View style={styles.container}>
        <View style={{ height: 100 }}>
          <Image
            style={{ width: 100, height: 100 }}
            // eslint-disable-next-line global-require, import/extensions
            source={require("@/assets/images/svg/user.svg")}
          />
          <CustomText style={{ paddingTop: 10 }} fontFamily="NexaBold">
            Seun Samuel
          </CustomText>
        </View>
      </View>
    </AuthWrapper>
  );
};

export default UserSelection;

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
});
