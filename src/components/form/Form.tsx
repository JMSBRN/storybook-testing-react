import React, { useState } from "react";
import { formStyles } from "./formStyles";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: string | number;
}
export interface FormProps {
  onSubmit: (data: FormData) => void;
}

const fields = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "password", label: "Password", type: "password" },
  { id: "confirmPassword", label: "Confirm", type: "password" },
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
        <div style={formStyles.inputWrapper as React.CSSProperties} key={field.id}>
          <label style={formStyles.label} htmlFor={field.id}>{field.label}:</label>
          <input
            style={formStyles.input}
            id={field.id}
            type={field.type}
            value={formData[field.id]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button style={formStyles.submitButton} type="submit">Submit</button>
    </form>
  );
};

export default Form;
