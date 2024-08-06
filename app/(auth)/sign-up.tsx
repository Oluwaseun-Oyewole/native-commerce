import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import useAuth from "@/hooks/useAuth";
import AuthWrapper from "@/layout/auth";
import Routes from "@/routes/routes";
import Colors from "@/utils/colors";
import { capitalize } from "@/utils/helper";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { View } from "react-native";
import * as Yup from "yup";

const LoginScreen = () => {
  const { push } = useRouter();
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

  const stepTwoSubmit = async (
    values: { password: string },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { resetForm }: any,
  ) => {
    resetForm({});
    push(Routes.Home);
  };

  const stepOneSubmit = (
    values: { email: string },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { resetForm }: any,
  ) => {
    resetForm({});
    setCurrentStep(2);
  };

  if (currentStep === 1) {
    return (
      <AuthWrapper
        title="Enter your email address"
        description="Please input your email address to continue"
      >
        <View style={{ paddingTop: 100 }}>
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
                  <View style={{ paddingTop: 30 }}>
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
  return (
    <AuthWrapper
      title="Set your password"
      description="Use 8 or more characters with a mix of letters, numbers and symbols"
    >
      <View style={{ paddingTop: 100 }}>
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
                <View>
                  <CustomInput
                    id="password"
                    placeholder="*****"
                    name="password"
                    keyboardType="visible-password"
                    onChangeText={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    value={formik.values.password}
                    arialLabelBy="Password"
                    arialLabel="Label for Password"
                    isPassword
                    autoComplete="off"
                    inputMode="text"
                  />
                </View>
                <View style={{ paddingTop: 30 }}>
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
};

export default LoginScreen;
