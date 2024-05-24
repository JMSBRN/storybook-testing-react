import React, { useState } from "react";
import { formStyles } from "./formStyles";
import Input from "../input/Input";

 export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: string | number;
}
export interface FormProps {
  onSubmit: (data: FormData) => void;
}

export interface Field {
    id: string;
    label: string;
    type: string;
    required: boolean;
}

const fields: Field[] = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "password", label: "Password", type: "password", required: true },
  { id: "confirmPassword", label: "Confirm", type: "password", required: true },
];

const Form = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      onSubmit(formData);
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <form style={formStyles.form as React.CSSProperties} onSubmit={handleSubmit}>
      {fields.map((field) => (
       <Input key={field.id} field={field} formData={formData} handleChange={handleChange} />
      ))}
      <button style={formStyles.submitButton} type="submit">Submit</button>
    </form>
  );
};

export default Form;
