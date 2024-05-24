import Stack, { StackProps } from "./Stack";
import { StoryFn, Meta } from "@storybook/react";
import { within, expect } from "@storybook/test";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 5 },
  },
} as Meta<typeof Stack>;

const Template: StoryFn<StackProps & { numberOfChildren: number }> = ({
  numberOfChildren,
  ...args
}) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((_, index) => (
      <div>Children{index + 1}</div>
    ))}
  </Stack>
);
type StackArgs = Partial<StackProps & { numberOfChildren: number }>;
const playTest = async ({
  args,
  canvasElement,
}: {
  args: StackArgs;
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const childrenRegex = /Children\s*\d+/;
  const children = await canvas.findAllByText(childrenRegex);
  expect(children).toHaveLength(args.numberOfChildren || 5);
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  numberOfChildren: 15,
  direction: "row",
  spacing: 1,
  wrap: true,
};
Horizontal.play = async ({ canvasElement }: { canvasElement: HTMLElement }) =>
  playTest({ args: Horizontal.args!, canvasElement });

export const Vertical = Template.bind({});
Vertical.args = {
  numberOfChildren: 5,
  direction: "column",
  spacing: 5,
  wrap: false,
};

Vertical.play = async ({ canvasElement }: { canvasElement: HTMLElement }) =>
  playTest({ args: Vertical.args!, canvasElement });
