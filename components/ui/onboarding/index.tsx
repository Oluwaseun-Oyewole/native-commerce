import { CustomText } from "@/components/text";
import { forwardRef } from "react";
import { View } from "react-native";

const Onboarding = () => {
  return (
    <View>
      <CustomText>Onboarding</CustomText>
    </View>
  );
};

export default forwardRef(Onboarding);
