import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";


const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};
