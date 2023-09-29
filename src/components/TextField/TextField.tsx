import "../../index.css";
import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { InputHide, InputShow } from "../../icons";
import { AnimatePresence, motion } from "framer-motion";

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
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  autoFocus?: boolean;
  autoComplete?: "on" | "off";
  className?: string;
  pattern?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  step?: string | number;
}

const TextFieldVariants = cva(" transition-colors ease-linear delay-100 text-base py-[14px] px-[24px] bg-system-field", {
  variants: {
    style: {
      default: "",
      password: "",
    },
    roundness: {
      square: "rounded-none",
      round: "rounded-md",
      pill: "rounded-full",
    },
  },
  defaultVariants: {
    roundness: "pill",
    
  },
});

export default function TextField({
  name,
  type,
  label,
  placeholder,
  value,
  error,
  message,
  disabled,
  readOnly,
  alertElement,
  onChange,
  onEnterPress,
  onFocus,
  onBlur,
  autoComplete,
  className,
  style,
  roundness,
  onKeyUp,
  minLength,
  maxLength,
  pattern,
  step,
  ariaDescribedBy,
  ariaLabel,
  autoFocus,
  required,
}: TextFieldProps) {
  const [show, setShow] = useState<boolean>(false);

  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnterPress && onEnterPress(e);
    }
  };


  const strokeColour = error && message ? "#F86B6B" : null;

  message = message as string;

  return (
    <div className="w-[100%] h-fit flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className={`${error && message? "text-system-alert": "text-black"} font-medium`}>
          {label}
        </label>
      )}

      <div className="w-[100%] h-[100%] flex flex-col justify-center relative">
        <AnimatePresence>
          {alertElement && (
            <motion.div
              initial={{ y: -20, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0.2 }}
              className={""}
            >
              {alertElement}
            </motion.div>
          )}
        </AnimatePresence>
        <input
          className={`${twMerge(
            TextFieldVariants({ className, style, roundness }),
            `${disabled || readOnly ? "cursor-not-allowed" : ""} border-2 ${
              error && message ? " border-system-alert" : "border-system-field"
            } focus:bg-background-light focus:border-teal-primary w-[100%] h-[100%] outline-none`
          )}`}
          title={label}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
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
          autoFocus={autoFocus}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          step={step}
          onKeyUp={onKeyUp}
        />
        {type === "password" && (
          <button
            type="button"
            title={show ? "Hide" : "Reveal"}
            onClick={() => setShow(!show)}
            className=" absolute top-[30%]  right-0 px-[30px]"
          >
            {show ? (
              <InputHide stroke={strokeColour} />
            ) : (
              <InputShow stroke={strokeColour} />
            )}
          </button>
        )}
      </div>
      <AnimatePresence>
        {error && message && (
          <motion.div
            initial={{ y: -20, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0.2 }}
            className=" text-system-alert text-end font-medium mt-[-10px]"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
