import type { Meta, StoryObj } from "@storybook/react";

import { FaqSection } from "./FaqSection";
import { Image } from "../Image/Image";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { TextWithImage } from "../SectionWithBullets";

import { Ray } from "../icon/ray";

const meta = {
  title: "Sections/FaqSection",
  component: FaqSection,
  parameters: {
    // layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FaqSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Content: Story = {
  args: {
    questions: [
      {
        title: "What is UI Snap?",
        body: "Lorem ipsum dolor sit amet, suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Velit dignissim sodales ut eu sem.",
      },
      {
        title: "What is UI Snap used for?",
        body: "Lorem ipsum dolor sit amet, suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Velit dignissim sodales ut eu sem.",
      },
      {
        title: "Will I get Lifetime Updates?",
        body: "Lorem ipsum dolor sit amet, suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Velit dignissim sodales ut eu sem.",
      },
      {
        title: "Do you have free trial of UI Snap?",
        body: "Lorem ipsum dolor sit amet, suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Velit dignissim sodales ut eu sem.",
      },
      {
        title: "I love the product. How can I show my appreciation?",
        body: "Lorem ipsum dolor sit amet, suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Velit dignissim sodales ut eu sem.",
      },
      {
        title: "I have a question. How do I contact you?",
        body: "Lorem ipsum dolor sit amet, suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Velit dignissim sodales ut eu sem.",
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};
