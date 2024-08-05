import CustomButton from "@/components/button";
import { CustomText } from "@/components/text";
import Routes from "@/routes/routes";
import Colors from "@/utils/colors";
import onboardingData from "@/utils/data";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

type OnboardingType = {
  index: number;
  currentIndex: number;
  item: { id: number; path: string; title: string; description: string };
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};
const Onboarding: ForwardRefRenderFunction<FlatList, OnboardingType> = (
  { index, currentIndex, item, setCurrentIndex }: OnboardingType,
  ref,
) => {
  const { replace } = useRouter();
  const onPress = async () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex !== onboardingData.length) {
      const offset = nextIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentIndex(nextIndex);
    }

    if (nextIndex === onboardingData.length - 1) {
      replace(Routes.Home);
    }
  };
  return (
    <View key={index} style={[styles.container]}>
      <Image source={item.path} style={styles.image} />

      <CustomText type="xl" textAlign="center" fontFamily="Prata">
        {item.title}
      </CustomText>
      <CustomText type="xl" textAlign="center" fontFamily="Prata">
        {item.description}
      </CustomText>
      <View>
        <CustomButton onPress={onPress}>Accept</CustomButton>
      </View>
    </View>
  );
};

export default forwardRef(Onboarding);

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width, resizeMode: "contain", height: 280 },
  indicator: {
    width: 30,
    height: 8,
    backgroundColor: Colors.secondary,
    borderRadius: 50,
  },
  indicator_container: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 60,
    paddingBottom: 20,
  },
  active_indicator: { backgroundColor: Colors.primary, width: 15 },
  button_container: {
    marginTop: 80,
  },
});
