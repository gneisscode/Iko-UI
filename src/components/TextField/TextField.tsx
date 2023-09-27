import "../../index.css";
import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export type TextFieldVariantProps = VariantProps<typeof TextFieldVariants>;

export interface TextFieldProps extends TextFieldVariantProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
  message?: Promise<string> | string;
  disabled?: boolean;
  readOnly?: boolean;
  alertElement?: JSX.Element;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  autoComplete?: "on" | "off";
  className?: string
}

const TextFieldVariants = cva({


})

export default function TextField({name, type, label, placeholder, value, error, message, disabled, readOnly, alertElement, onChange, onEnterPress, onFocus, onBlur, autoComplete, className}:TextFieldProps) {
  const [show, setShow] = useState<boolean>(false);

  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnterPress && onEnterPress(e);
    }
  };

  const errorClass = message ? "error" : "regular";

  const strokeColour = error && message ? "#F86B6B" : null;

  message = message as string;

  
    return (
      <div>
        <input
          className={`${twMerge(
           TextFieldVariants({ })
          )} ${className}`}
          title={label}
          value={value}
          type={show ? "text" : type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={enterHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
        />
      </div>
    );
}
