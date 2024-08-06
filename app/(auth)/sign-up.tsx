import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import Languages from "@/components/languages";
import UserSelection from "@/components/ui/user";
import useAuth from "@/hooks/useAuth";
import AuthWrapper from "@/layout/auth";
import Colors from "@/utils/colors";
import { capitalize } from "@/utils/helper";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

const SignUpScreen = () => {
  const { currentStep, setCurrentStep } = useAuth();
  const stepOneValidationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
  });

  const stepTwoValidationSchema = Yup.object({
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
        "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
      )
      .required("Password is required."),
  });

  const stepThreeValidationSchema = Yup.object({
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const stepThreeSubmit = async () => setCurrentStep(4);
  const stepOneSubmit = async () => setCurrentStep(2);
  const stepTwoSubmit = async () => setCurrentStep(3);

  if (currentStep === 1) {
    return (
      <AuthWrapper
        title="Enter your email address"
        description="Please input your email address to continue"
      >
        <View style={styles.container_spacing}>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={stepOneValidationSchema}
            onSubmit={stepOneSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <View>
                    <CustomInput
                      id="email"
                      name="email"
                      placeholder="Email address"
                      showLabel
                      keyboardType="email-address"
                      onChangeText={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                      arialLabelBy="Email"
                      arialLabel="Label for Email"
                      inputMode="text"
                    />
                  </View>
                  <View style={styles.button}>
                    <CustomButton
                      buttonType="authButton"
                      isLoading={formik.isSubmitting}
                      disabled={!formik.isValid}
                      onPress={formik.handleSubmit}
                      fontFamily="SansBold"
                      style={{
                        backgroundColor: formik.errors.email
                          ? Colors.transparent
                          : Colors.black,
                      }}
                      textStyles={{
                        color: formik.errors.email
                          ? Colors.black
                          : Colors.white,
                      }}
                      isError={!!formik.errors.email}
                    >
                      {capitalize("Continue")}
                    </CustomButton>
                  </View>
                </>
              );
            }}
          </Formik>
        </View>
      </AuthWrapper>
    );
  }

  if (currentStep === 2) {
    return (
      <AuthWrapper
        title="Set your password"
        description="Type in your password"
      >
        <View style={styles.container_spacing}>
          <Formik
            initialValues={{
              password: "",
            }}
            validationSchema={stepTwoValidationSchema}
            onSubmit={stepTwoSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <CustomInput
                    id="password"
                    placeholder="Password"
                    name="password"
                    keyboardType="visible-password"
                    onChangeText={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    value={formik.values.password}
                    arialLabelBy="Password"
                    arialLabel="Label for Password"
                    showLabel
                    isPassword
                    autoComplete="off"
                    inputMode="text"
                  />

                  <View style={styles.button}>
                    <CustomButton
                      buttonType="authButton"
                      isLoading={formik.isSubmitting}
                      disabled={!formik.isValid}
                      onPress={formik.handleSubmit}
                      fontFamily="SansBold"
                      style={{
                        backgroundColor: formik.errors.password
                          ? Colors.transparent
                          : Colors.black,
                      }}
                      textStyles={{
                        color: formik.errors.password
                          ? Colors.black
                          : Colors.white,
                      }}
                      isError={!!formik.errors.password}
                    >
                      {capitalize("Continue")}
                    </CustomButton>
                  </View>
                </>
              );
            }}
          </Formik>
        </View>
      </AuthWrapper>
    );
  }
  if (currentStep === 3) {
    return (
      <AuthWrapper
        title="Confirm your password"
        description="Retype your password again for confirmation"
      >
        <View style={styles.container_spacing}>
          <Formik
            initialValues={{
              confirmPassword: "",
            }}
            validationSchema={stepThreeValidationSchema}
            onSubmit={stepThreeSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <CustomInput
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    keyboardType="visible-password"
                    onChangeText={formik.handleChange("confirmPassword")}
                    onBlur={formik.handleBlur("confirmPassword")}
                    value={formik.values.confirmPassword}
                    arialLabelBy="Password"
                    arialLabel="Label for Confirm Password"
                    isPassword
                    autoComplete="off"
                    inputMode="text"
                    secureTextEntry
                    showLabel
                    selectTextOnFocus={false}
                    contextMenuHidden={false}
                  />

                  <View style={styles.button}>
                    <CustomButton
                      buttonType="authButton"
                      isLoading={formik.isSubmitting}
                      disabled={!formik.isValid}
                      onPress={formik.handleSubmit}
                      fontFamily="SansBold"
                      style={{
                        backgroundColor: formik.errors.confirmPassword
                          ? Colors.transparent
                          : Colors.black,
                      }}
                      textStyles={{
                        color: formik.errors.confirmPassword
                          ? Colors.black
                          : Colors.white,
                      }}
                      isError={!!formik.errors.confirmPassword}
                    >
                      {capitalize("Continue")}
                    </CustomButton>
                  </View>
                </>
              );
            }}
          </Formik>
        </View>
      </AuthWrapper>
    );
  }

  if (currentStep === 4) {
    return <Languages />;
  }

  return <UserSelection />;
};

const styles = StyleSheet.create({
  button: { paddingTop: 60 },
  container_spacing: { paddingTop: 120 },
});
export default SignUpScreen;
