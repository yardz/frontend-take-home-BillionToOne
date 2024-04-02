import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./Title";
import { Button } from "../Button";
import { Arrow } from "../icon/arrow";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Component/Title",
  component: Title,
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
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Headline About Product Features & Service",
    subtitle:
      "Description Text placeholder. Use it to explain your business offer better.",
    end: (
      <Button
        label={
          <>
            Get started <Arrow />
          </>
        }
        size="large"
        primary
      />
    ),
  },
};
