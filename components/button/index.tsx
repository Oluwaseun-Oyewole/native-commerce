/* eslint-disable import/order */
import Colors from "@/utils/colors";
import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Flow } from "react-native-animated-spinkit";
import CustomPressable from "../pressable";
import { CustomText } from "../text";

type ButtonType = "primary" | "secondary";

type ICustomButtonProps = {
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<ViewStyle>;
  fontFamily?: string;
  buttonType?: ButtonType;
};
const CustomButton = ({
  children,
  isLoading = false,
  disabled,
  onPress,
  style,
  textStyles,
  buttonType = "primary",
  ...rest
}: ICustomButtonProps & PropsWithChildren) => {
  const buttonTypeMap = {
    primary: styles.primary,
    secondary: styles.secondary,
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
        <CustomText style={[textStyles, { color: Colors.white }]} type="lg">
          {children}
        </CustomText>
      )}
    </CustomPressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
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
});
