import Colors from "@/utils/colors";
import { strCapitalize } from "@/utils/helper";
import { CustomText } from "../text";

type FormType = {
  error: string;
};

const FormError = ({ error }: FormType) => {
  return (
    <CustomText
      style={{ paddingTop: 8, color: Colors.red, fontSize: 12 }}
      fontFamily="SansMedium"
    >
      {strCapitalize(error)}
    </CustomText>
  );
};

export default FormError;
