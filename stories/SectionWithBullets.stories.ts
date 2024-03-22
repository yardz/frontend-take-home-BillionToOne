import type { Meta, StoryObj } from "@storybook/react";

import { TextWithImage } from "./SectionWithBullets";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const meta = {
  title: "Sections/FeatureSet",
  component: TextWithImage,
  parameters: {
    layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    header: { control: "text" },
    body: { control: "text" },
    items: { control: "array" },
  },
} satisfies Meta<typeof TextWithImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    header: "Aquafaba is a great eggwhite substitute",
    body: "I love making merengue with aquafaba. It's more sustainable than eggs and it's a great way to use the liquid from canned chickpeas. However, it can be more difficult to work with.",
    items: [
      "Sustainable, made from plants",
      "Cheap, usually waste from cans",
      "Healthy, well, kind of?",
      "Yummy, uhhh tastes like beans",
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};
