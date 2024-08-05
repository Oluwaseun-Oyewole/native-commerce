import { PropsWithChildren } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

export type TextProps = Text["props"];
export type ViewProps = View["props"];

type ICustomPressableProps = PressableProps &
  PropsWithChildren & {
    style?: ViewProps["style"];
    disabled?: boolean;
    activeOpacity?: number;
  };

const CustomPressable = ({
  children,
  // style,
  // activeOpacity,
  ...rest
}: ICustomPressableProps) => {
  // const _style = useCallback(
  //   ({ pressed }: { pressed: boolean }) => [
  //     { opacity: pressed ? activeOpacity : 1 },
  //     style && style,
  //   ],
  //   [style],
  // );

  return <Pressable {...rest}>{children}</Pressable>;
};

export default CustomPressable;
