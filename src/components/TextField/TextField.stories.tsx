import type { Meta, StoryObj } from "@storybook/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Textfield from "./TextField"



const meta: Meta<typeof Textfield> = {
  component: Textfield,
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta

type Story = StoryObj<typeof Textfield>;

export const DefaultPillTextField: Story = {
  args:{
    name:"email",
    placeholder: "Email",



  }
}

export const RoundTextField: Story = {
  args: {
     ...DefaultPillTextField.args,
      label:"Email",
      roundness:"round"

  }
}

export const SquareTextField: Story = {
  args: {
    ...DefaultPillTextField.args,
    label: "Email",
    roundness: "square",
  },
};

export const TextFieldWithLabel: Story = {

  args:{
      ...DefaultPillTextField.args,
      label:"Email"
  }

}

export const PasswordField: Story = {
  args:{
    name: "password",
    label: "Password",
    placeholder: "Password",
    type:"password"
  }
}

export const Disabled: Story = {
  args:{
    name:"Name",
    placeholder:"Name",
    disabled:true
  }
}

export const ReadOnly: Story = {
  args: {
    ...DefaultPillTextField.args,
    label: "Email",
    value: "family@ikoafrica.com",
    readOnly:true
  },
};

export const ErrorState: Story = {
  args: {
   name: "password",
    label: "Password",
    placeholder: "Password",
    type:"password",
    error: true,
    message: "This is an error",
  
  },
};
