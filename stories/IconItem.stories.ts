import type { Meta, StoryObj } from "@storybook/react";

import { IconItem } from "./IconItem";

const meta = {
  title: "Component/IconItem",
  component: IconItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
} satisfies Meta<typeof IconItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Button",
  },
};
