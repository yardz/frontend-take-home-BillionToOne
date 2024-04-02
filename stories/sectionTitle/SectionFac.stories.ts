import type { Meta, StoryObj } from "@storybook/react";

import { SectionTitle } from "./SectionTitle";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Component/SectionTitle",
  component: SectionTitle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Frequently Asked Questions",
    subtitle: "Here you can find solutions to all your queries.",
  },
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};
