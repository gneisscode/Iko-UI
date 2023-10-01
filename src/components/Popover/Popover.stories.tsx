import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from ".";


const meta: Meta<typeof Popover> = {
  component: Popover,
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
   
  },
};
