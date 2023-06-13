import { FormInputLabel, Input, Group } from "./form-input.styles";

type FormInputProps = {
  label: string;
  name: string;
  required: boolean;
  type: "text" | "email" | "password";
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({ label, value, ...otherProps }: FormInputProps) => {
  return (
    <Group>
      <Input value={value} {...otherProps} />
      {label && <FormInputLabel shrink={value}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
