import { Field, FormData } from "../form/Form";
import { formStyles } from "../form/formStyles";

export interface InputProps {field:Field,formData:FormData,handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void}

function Input({field, formData, handleChange}: InputProps) {
  return (
    <div style={formStyles.inputWrapper as React.CSSProperties} key={field.id}>
    <label style={formStyles.label} htmlFor={field.id}>{field.label}:</label>
    <input
      style={formStyles.input}
      id={field.id}
      type={field.type}
      value={formData[field.id]}
      onChange={handleChange}
      required={field.required}   
    />
  </div>
  )
}

export default Input;
