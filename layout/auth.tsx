import AuthHeader from "@/components/header";
import CustomScrollView from "@/components/scrollview";
import useAuth from "@/hooks/useAuth";
import Routes from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { PropsWithChildren } from "react";
import { View } from "react-native";

const AuthWrapper = ({
  children,
  title,
  description,
}: PropsWithChildren & { title: string; description: string }) => {
  const { back, push } = useRouter();
  const { currentStep, setCurrentStep } = useAuth();
  return (
    <CustomScrollView>
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Ionicons
          name="arrow-back-outline"
          size={25}
          onPress={() => {
            if (currentStep === 2) {
              setCurrentStep(1);
              push(Routes.signUp);
            }
            back();
          }}
        />
        <View>
          <AuthHeader title={title} description={description} />
          {children}
        </View>
      </View>
    </CustomScrollView>
  );
};

export default AuthWrapper;