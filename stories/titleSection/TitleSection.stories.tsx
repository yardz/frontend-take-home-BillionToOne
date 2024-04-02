import type { Meta, StoryObj } from "@storybook/react";

import { TitleSection } from "./TitleSection";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { Button } from "../Button";
import { Arrow } from "../icon/arrow";
import { Title } from "../title/Title";

const meta = {
  title: "Sections/TitleSection",
  component: TitleSection,
  parameters: {
    // layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TitleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Content: Story = {
  args: {
    left: (
      <Title
        end={
          <Button
            label={
              <>
                Get started <Arrow />
              </>
            }
            primary
            size="large"
          />
        }
        subtitle="Description Text placeholder. Use it to explain your business offer better."
        title="Headline About Product Features & Service"
      />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};
