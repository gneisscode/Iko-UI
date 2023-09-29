import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
    decorators:[
      (Story) => (
        <div className="w-fit">
          <Story/>
        </div>
      )
    ]

}

export default meta

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "default btn",
    
  },
};

export const  Primary: Story = {
  args: {
    children:"default filled btn",
    style:"filled",
    intent: "primary",

  }
}

export const Secondary: Story = {
  args: {
    children: "default outlined btn",
    intent: "secondary",
    style: "outlined",
  },
};

export const SpringAnimated: Story = {
  args: {
    children: "default filled btn",
    style: "filled",
    intent: "primary",
    spring: true,
  },
};

export const RippleAnimated: Story = {
  args: {
    children: "custom filled btn",
    className: "bg-teal-primary hover:bg-teal-hover ",
    intent: "primary",
    ripple: true,
    spring: true,
  },
};


export const Pill: Story = {
  args: {
    children: "custom sm pill",
    intent: "primary",
    roundness: "pill",
    size: "small",
    className: "bg-white border border-[#abd1c6] hover:bg-[#abd1c6]",
  },
};

export const Square: Story = {
  args: {
    children: "custom md square btn",
    intent: "primary",
    roundness: "square",
    size: "medium",
    className: "bg-[#abd1c6] hover:bg-[#98d1c1] border-[#abd1c6] ",
  },
};

export const CustomRounded: Story = {
  args: {
    children: "custom lg round btn",
    intent: "tertiary",
    roundness: "round",
    size: "large",
    className: "bg-[#abd1c6] hover:bg-[#98d1c1] border-[#abd1c6]",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    ariaLabel:"logout button",
    children: (
      <div className="flex gap-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <p>Logout</p>
      </div>
    ),

    style: "filled",
  },
};

export const IconButton: Story = {
  args: {
    ariaLabel: "like button",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    className: "transition-all ease-linear delay-75",
    spring: true
  },
};

export const LoadingButton: Story = {
  args: {
    ...Primary.args,
    loading: true,
    disabled:true,
  }
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
     disabled:true
  }
}

export const Danger: Story = {
  args: {
    children: "custom md pill",
    intent: "tertiary",
    roundness: "pill",
    size:"medium",
    style:"danger"
  },
};

export const Success: Story = {
  args: {
    children: "custom md pill",
    intent: "tertiary",
    roundness: "pill",
    size:"medium",
    style: "success",
  },
};

export const ClickExample: Story = {
  args:{
    ...Primary.args,
    onClick:() => {console.log("clicked")}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
  },
};


