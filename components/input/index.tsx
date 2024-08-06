import { Ionicons } from "@expo/vector-icons";
import { ErrorMessage } from "formik";
import { useState } from "react";
import {
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
        <CustomText aria-label={arialLabel} nativeID={name}>
          {arialLabelBy}
        </CustomText>
      )}
      <View>
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
          <View style={{ position: "absolute", top: 25, right: 5 }}>
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

      <ErrorMessage name={name}>
        {(msg) => <FormError error={msg} />}
      </ErrorMessage>
    </View>
  );
};

const styles = StyleSheet.create({
  form_input: {
    fontFamily: "SansMedium",
    paddingTop: 20,
    paddingVertical: 10,
    paddingBottom: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});

export default CustomInput;
