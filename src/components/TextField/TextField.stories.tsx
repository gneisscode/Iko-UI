import type { Meta, StoryObj } from "@storybook/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Textfield from "./TextField"



const meta: Meta<typeof Textfield> = {
  component: Textfield,
  decorators: [
    (Story) => (
      <div className="w-fit">
        <Story />
      </div>
    ),
  ],
};

export default meta

type Story = StoryObj<typeof Textfield>;

