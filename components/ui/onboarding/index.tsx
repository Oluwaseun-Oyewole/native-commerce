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

type OnboardingType = {
  index: number;
  currentIndex: number;
  item: { id: number; path: string; title: string; description: string };
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};
const { width, height } = Dimensions.get("window");
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
          paddingTop: 60,
        }}
      >
        <Image source={item.path} style={styles.image} />

        {currentIndex === onboardingData.length - 1 && (
          <Image
            // eslint-disable-next-line global-require
            source={require("../../../assets/images/svg/spiral1.svg")}
            style={styles.spiral}
          />
        )}
        <View style={{ width: width * 0.75 }}>
          <CustomText
            type="lg"
            textAlign="center"
            fontFamily="Prata"
            style={styles.text_title}
          >
            {capitalize(item.title)}
          </CustomText>
          <CustomText
            type="sm"
            textAlign="center"
            style={styles.text_description}
          >
            {item.description}
          </CustomText>
        </View>
      </View>
      <View style={styles.button_container}>
        <View>
          <CustomButton
            isCapitalize
            onPress={onPress}
            textStyles={{ color: Colors.white }}
          >
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
    justifyContent: "space-between",
  },
  image: { width, resizeMode: "contain", height: 210 },
  active_indicator: { backgroundColor: Colors.primary, width: 15 },
  button_container: {
    backgroundColor: "#000",
    width,
    height: height * 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  text_title: {
    paddingTop: 50,
    paddingBottom: 10,
  },
  spiral: { position: "absolute", bottom: -270, left: 10, width, height: 300 },
  text_description: { paddingHorizontal: 10, color: "#595959" },
});
