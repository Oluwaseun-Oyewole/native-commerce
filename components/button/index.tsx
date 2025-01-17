import { FontFamilyType } from "@/types";
import Colors from "@/utils/colors";
import { capitalize } from "@/utils/helper";
import { Ionicons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Flow } from "react-native-animated-spinkit";
import CustomPressable from "../pressable";
import { CustomText } from "../text";

type ButtonType = "primary" | "secondary" | "default" | "authButton";

type ICustomButtonProps = {
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  fontFamily?: FontFamilyType;
  buttonType?: ButtonType;
  isCapitalize?: boolean;
  isError?: boolean;
};
const CustomButton = ({
  children,
  isLoading = false,
  disabled,
  onPress,
  style,
  textStyles,
  fontFamily = "SansMedium",
  buttonType = "default",
  isCapitalize = false,
  isError = false,
  ...rest
}: ICustomButtonProps & PropsWithChildren) => {
  const buttonTypeMap = {
    default: styles.default,
    primary: styles.primary,
    secondary: styles.secondary,
    authButton: styles.auth,
  };
  return (
    <CustomPressable
      disabled={disabled}
      {...rest}
      onPress={onPress}
      style={[style, buttonTypeMap[buttonType]]}
      activeOpacity={0.2}
    >
      {isLoading ? (
        <Flow color={Colors.white} size={50} />
      ) : (
        <View>
          {buttonType === "authButton" ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <View />

              <CustomText
                style={[textStyles]}
                type="sm"
                fontFamily={fontFamily}
              >
                {isCapitalize ? capitalize(children as string) : children}
              </CustomText>

              <View>
                <Ionicons
                  name="arrow-forward-outline"
                  color={isError ? "#000" : "#fff"}
                  size={20}
                />
              </View>
            </View>
          ) : (
            <CustomText style={[textStyles]} type="sm" fontFamily={fontFamily}>
              {isCapitalize ? capitalize(children as string) : children}
            </CustomText>
          )}
        </View>
      )}
    </CustomPressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  default: {},
  primary: {
    backgroundColor: Colors.primary,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  secondary: {
    backgroundColor: Colors.secondary,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  auth: {
    height: 65,
    borderWidth: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
});
