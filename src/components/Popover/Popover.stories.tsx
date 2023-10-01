import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from ".";


const meta: Meta<typeof Popover> = {
  component: Popover,
  decorators: [
    (Story) => (
      <div className="w-[600px] h-[50px] relative bg-teal-primary mt-16">
        <div>This is placeholder content</div>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Popover>;

// export const Default: Story = {
//   args: {
//     children: (
//       <p>
//         Hello worldHello worldHello worldHello worldHello worldHello worldHello
//         world Hello world Hello world Hello world Hello world Hello world Hello
//         world Hello world Hello world Hello world Hello world Hello world
//       </p>
//     ),
//     className: "ml-[-4em] max-w-[100px] flex flex-wrap",
//   },
// };



export const Top: Story = {
  args: {
    children: <p>Hello world</p>,
    placement: "top",
    arrow: "bottom",
    className: "ml-[-4em]",
  },
};

export const Bottom: Story = {
  args: {
    children: <p>Hello world</p>,
    placement: "bottom",
    arrow: "top",
    className: "ml-[-4em]",
  },
};


export const Right: Story = {
  args: {
    children: <p>Hello world</p>,
    placement: "right",
    // arrow: "top",
    // className: "ml-[-4em]",
  },
};

