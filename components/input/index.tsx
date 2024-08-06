import { Ionicons } from "@expo/vector-icons";
import { ErrorMessage } from "formik";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomText } from "../text";
import FormError from "./form-error";

type ICustomProps = TextInputProps & {
  name: string;
  isPassword?: boolean;
  arialLabel?: string;
  arialLabelBy?: string;
  showLabel?: boolean;
  editable?: boolean;
};
const { width } = Dimensions.get("window");
const CustomInput = ({
  name,
  isPassword,
  arialLabel,
  arialLabelBy,
  showLabel,
  editable = true,
  ...rest
}: ICustomProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      {showLabel && (
        <CustomText
          aria-label={arialLabel}
          nativeID={name}
          fontFamily="NexaBold"
          style={{ opacity: 0.5 }}
        >
          {arialLabelBy}
        </CustomText>
      )}
      <View style={styles.input_container}>
        <View style={styles.form_container}>
          <TextInput
            aria-label={name}
            aria-labelledby={arialLabelBy ?? ""}
            {...rest}
            style={styles.form_input}
            secureTextEntry={isPassword && !showPassword}
            placeholderTextColor="#CACACA"
            cursorColor="#000"
            editable={editable}
          />

          {isPassword && (
            <View style={styles.password}>
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <CustomText>
                  {!showPassword ? (
                    <Ionicons name="lock-closed" size={20} color="#000" />
                  ) : (
                    <Ionicons name="lock-open" size={20} color="#000" />
                  )}
                </CustomText>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <ErrorMessage name={name}>
        {(msg) => <FormError error={msg} />}
      </ErrorMessage>
    </View>
  );
};

const styles = StyleSheet.create({
  input_container: { borderBottomColor: "gray", borderBottomWidth: 1 },
  form_input: {
    fontFamily: "SansMedium",
    paddingTop: 20,
    paddingBottom: 10,
    paddingVertical: 10,
    width: width * 0.83,
  },
  password: { position: "absolute", top: 30, right: 5 },
  form_container: { paddingTop: 5 },
});

export default CustomInput;
