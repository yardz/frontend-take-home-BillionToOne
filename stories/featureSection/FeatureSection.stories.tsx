import type { Meta, StoryObj } from "@storybook/react";

import { FeatureSection } from "./FeatureSection";
import { Image } from "../Image/Image";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { TextWithImage } from "../SectionWithBullets";

import { Ray } from "../icon/ray";

const meta = {
  title: "Sections/FeatureSection",
  component: FeatureSection,
  parameters: {
    // layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Content: Story = {
  args: {
    left: (
      <>
        <Ray />
        <TextWithImage
          body="I love making merengue with aquafaba. It's more sustainable than eggs and it's a great way to use the liquid from canned chickpeas. However, it can be more difficult to work with."
          header="Aquafaba is a great eggwhite substitute"
          items={[
            "Sustainable, made from plants",
            "Cheap, usually waste from cans",
            "Healthy, well, kind of?",
            "Yummy, uhhh tastes like beans",
          ]}
        />
      </>
    ),
    right: (
      <Image
        width="100%"
        height="500"
        src="https://s3-alpha-sig.figma.com/img/7cf0/1191/269452740edaef9db3fec06c0db3d43d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BFfAJ-2LTKNKKohkUOcmU7Aqx4GlUvhw3iYQDHeZdDyZzumProJQakD1gNz3uqC2AC7yW-EBe5sXz-E08zPiKc6cpPjGyxIjq1BdB1rD0IR-6ymo5O-YkBNFD2K9zawz2ZtMTbQaiI-X-2rClZ95jN8FpU26lPQfUUBHyW0ZrCGnbCzyQtGvpKQ-rUXQV~G~ASINZJ8vLu-S1wLR34W~ijFBfJ3b6lVjmFoLlY~gehxJdwndz~qH6JSg09PesxQuKnzDwuu-E65vYCmSc9KBSiS4pNUIczZH7PxyrYmv-Oe47kpNeSm6no2B6Bkls9728fvXIGFKlpITufqil0hIoA__"
      />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};
