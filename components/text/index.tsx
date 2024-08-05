import { FontFamilyType } from "@/types";
import { StyleSheet, Text, type TextProps } from "react-native";

type FontType = "default" | "lg" | "xl" | "xxl" | "sm" | "xs" | "heading";

export type CustomTextProps = TextProps & {
  type?: FontType;
  fontFamily?: FontFamilyType;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  color?: string;
};

const renderStyles = (type: FontType) => {
  switch (type) {
    case "xs":
      return styles.xs;
    case "sm":
      return styles.sm;
    case "lg":
      return styles.lg;
    case "xl":
      return styles.xl;
    case "xxl":
      return styles.xxl;
    case "heading":
      return styles.heading;
    default:
      return styles.default;
  }
};

export function CustomText({
  style,
  type = "default",
  fontFamily = "SansMedium",
  textAlign = "auto",
  ...rest
}: CustomTextProps) {
  return (
    <Text
      style={[
        renderStyles(type),
        style,
        {
          fontFamily,
          textAlign,
        },
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
  },
  heading: {
    fontSize: 35,
  },
  xs: { fontSize: 15 },
  sm: { fontSize: 20 },
  lg: {
    fontSize: 16,
  },
  xl: {
    fontSize: 30,
  },
  xxl: {
    fontSize: 16,
  },
});
