import { CustomText } from "@/components/text";
import useAuth from "@/hooks/useAuth";
import Routes from "@/routes/routes";
import { Link } from "expo-router";
import { View } from "react-native";

const LoginScreen = () => {
  const { setCurrentStep } = useAuth();
  return (
    <View
      style={{
        paddingTop: 100,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomText>Login Screen</CustomText>
      <Link href={`${Routes.signUp}`} onPress={() => setCurrentStep(1)}>
        <CustomText>Register Screen</CustomText>
      </Link>
    </View>
  );
};

export default LoginScreen;
