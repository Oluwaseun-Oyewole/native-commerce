import CustomScrollView from "@/components/scrollview";
import { CustomText } from "@/components/text";
import Onboarding from "@/components/ui/onboarding";
import Colors from "@/utils/colors";
import onboardingData from "@/utils/data";
import globalStyles from "@/utils/globalStyles";
import { useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const OnboardingScreen = () => {
  // const { width, height } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<FlatList>(null);

  return (
    <CustomScrollView>
      <View style={[globalStyles.flex_grow, styles.container]}>
        <View style={styles.screen_header}>
          <CustomText fontFamily="Prata" type="heading">
            Bag More
          </CustomText>
          <CustomText
            fontFamily="SansMedium"
            type="default"
            style={{
              position: "absolute",
              paddingLeft: 60,
              color: Colors.orange,
              textDecorationLine: "underline",
              bottom: 15,
              right: 25,
            }}
          >
            Skip
          </CustomText>
        </View>

        <FlatList
          data={onboardingData}
          // ref={scrollRef}
          // onMomentumScrollEnd={handleScroll}
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
  container: {
    // paddingLeft: 60,
    // paddingRight: 10,
  },
  screen_header: {
    position: "relative",
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
