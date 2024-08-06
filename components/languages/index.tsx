import useAuth from "@/hooks/useAuth";
import AuthWrapper from "@/layout/auth";
import { LanguageType } from "@/types";
import Colors from "@/utils/colors";
import { languagesArray } from "@/utils/data";
import { capitalize } from "@/utils/helper";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import CustomButton from "../button";
import { CustomText } from "../text";

const SubLanguages = ({
  currentIndex,
  setCurrentIndex,
  setSelected,
  item,
}: {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  item: LanguageType;
}) => {
  return (
    <TouchableOpacity
      key={item?.id}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 1,
        paddingTop: 25,
      }}
      onPress={() => {
        setCurrentIndex(item.id);
        setSelected(true);
      }}
    >
      <View style={{ height: 50 }}>
        <Image
          placeholder="illustration icon"
          contentFit="cover"
          transition={1000}
          source={item?.path}
          style={{ height: 30, width: 30, borderRadius: 50 }}
        />
      </View>
      <CustomText fontFamily="NexaBold" style={{ opacity: 0.7 }}>
        {item?.countryName}
      </CustomText>

      {currentIndex !== item.id ? (
        <Ionicons name="arrow-forward-outline" size={20} color="#000" />
      ) : (
        <Ionicons name="checkmark" size={20} color="#000" />
      )}
    </TouchableOpacity>
  );
};
const Languages = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [selected, setSelected] = useState(false);
  const { setCurrentStep } = useAuth();
  return (
    <AuthWrapper title="Country & Language">
      <View style={{ marginTop: -20, paddingHorizontal: 20 }}>
        <FlatList
          data={languagesArray}
          keyExtractor={(item) => item.countryName}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          pagingEnabled={false}
          renderItem={({ item }) => {
            return (
              <SubLanguages
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                setSelected={setSelected}
                item={item}
              />
            );
          }}
        />

        <View style={{ paddingTop: 20 }}>
          <CustomButton
            buttonType="authButton"
            disabled={!selected}
            onPress={() => setCurrentStep(5)}
            fontFamily="SansBold"
            style={{
              backgroundColor: !selected ? Colors.transparent : Colors.black,
            }}
            textStyles={{
              color: !selected ? Colors.black : Colors.white,
            }}
            isError={!selected}
          >
            {capitalize("Continue")}
          </CustomButton>
        </View>
      </View>
    </AuthWrapper>
  );
};

export default Languages;
