import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from ".";

const meta: Meta<typeof Toast> = {
  component: Toast,
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story/>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    children: <p>Hello Shallipopi!</p>,
  },
};

export const Success: Story = {
  args: {
    children: <p>Hello Shallipopi!</p>,
    intent: "success",
  },
};


export const Danger: Story = {
  args: {
    children: <p>Hello Shallipopi!</p>,
    intent: "danger",
  },
};


export const Warning: Story = {
  args: {
    children: <p>Hello Shallipopi!</p>,
    intent: "warning",
  },
};


export const Neutral: Story = {
  args: {
    children: <p>Hello Shallipopi!</p>,
    intent: "neutral",
  },
};


// add more stories if necessary