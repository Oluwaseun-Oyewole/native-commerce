/* eslint-disable global-require */
import CustomButton from "@/components/button";
import CustomScrollView from "@/components/scrollview";
import { CustomText } from "@/components/text";
import Onboarding from "@/components/ui/onboarding";
import Colors from "@/utils/colors";
import onboardingData from "@/utils/data";
import globalStyles from "@/utils/globalStyles";
import { Image } from "expo-image";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";

const { height, width } = Dimensions.get("window");
const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<FlatList>(null);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(scrollIndex);
  };
  const onPress = () => {
    const lastIndex = onboardingData.length - 1;
    const offset = lastIndex * width;
    scrollRef?.current?.scrollToOffset({ offset });
    setCurrentIndex(lastIndex);
  };
  return (
    <CustomScrollView>
      <View style={[globalStyles.flex_grow, styles.container]}>
        <View style={styles.screen_header}>
          <View>
            <Image
              source={require("../assets/images/svg/logo1.svg")}
              style={styles.image}
            />
          </View>
          <CustomText fontFamily="Prata" type="lg">
            Bag More
          </CustomText>

          <View style={styles.button}>
            <CustomButton
              fontFamily="Prata"
              textStyles={{
                color: Colors.orange,
                textDecorationLine: "underline",
              }}
              onPress={onPress}
            >
              Skip
            </CustomButton>
          </View>
        </View>

        <FlatList
          data={onboardingData}
          ref={scrollRef}
          onMomentumScrollEnd={handleScroll}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          renderItem={({ item, index }) => {
            return (
              <Onboarding
                index={index}
                currentIndex={currentIndex}
                item={item}
                setCurrentIndex={setCurrentIndex}
                ref={scrollRef}
              />
            );
          }}
        />
      </View>
    </CustomScrollView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {},
  image: { height: 20, width: 15 },
  screen_header: {
    position: "relative",
    height: height * 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: { position: "absolute", paddingLeft: 60, bottom: 48, right: 28 },
});
