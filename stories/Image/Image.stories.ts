import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "./Image";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Component/Image",
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: { control: "text" },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    width: 560,
    height: 500,
    src: "https://s3-alpha-sig.figma.com/img/7cf0/1191/269452740edaef9db3fec06c0db3d43d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BFfAJ-2LTKNKKohkUOcmU7Aqx4GlUvhw3iYQDHeZdDyZzumProJQakD1gNz3uqC2AC7yW-EBe5sXz-E08zPiKc6cpPjGyxIjq1BdB1rD0IR-6ymo5O-YkBNFD2K9zawz2ZtMTbQaiI-X-2rClZ95jN8FpU26lPQfUUBHyW0ZrCGnbCzyQtGvpKQ-rUXQV~G~ASINZJ8vLu-S1wLR34W~ijFBfJ3b6lVjmFoLlY~gehxJdwndz~qH6JSg09PesxQuKnzDwuu-E65vYCmSc9KBSiS4pNUIczZH7PxyrYmv-Oe47kpNeSm6no2B6Bkls9728fvXIGFKlpITufqil0hIoA__",
  },
};
