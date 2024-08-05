import CustomButton from "@/components/button";
import { CustomText } from "@/components/text";
import Routes from "@/routes/routes";
import Colors from "@/utils/colors";
import onboardingData from "@/utils/data";
import { capitalize } from "@/utils/helper";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ref?.current?.scrollToOffset({ offset });
      setCurrentIndex(nextIndex);
    }

    if (nextIndex === onboardingData.length - 1) {
      replace(Routes.Home);
    }
  };
  return (
    <View key={index} style={[styles.container]}>
      <View
        style={{
          alignItems: "center",
          paddingTop: 70,
        }}
      >
        <Image source={item.path} style={styles.image} />
        <View style={{ width: width * 0.75 }}>
          <CustomText
            type="lg"
            textAlign="center"
            fontFamily="Prata"
            style={{ paddingTop: 50, paddingBottom: 10 }}
          >
            {capitalize(item.title)}
          </CustomText>
          <CustomText
            type="sm"
            textAlign="center"
            style={{ paddingHorizontal: 10, color: "#595959" }}
          >
            {item.description}
          </CustomText>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#000",
          width,
          height: height * 0.1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <CustomButton isCapitalize onPress={onPress}>
            Accept
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default forwardRef(Onboarding);

const styles = StyleSheet.create({
  container: {
    width,
    // alignItems: "center",
    justifyContent: "space-between",
  },
  image: { width, resizeMode: "contain", height: 220 },
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
