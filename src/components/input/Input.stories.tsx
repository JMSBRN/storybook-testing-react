import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";
import { action } from "@storybook/addon-actions";
import { within, userEvent, expect } from "@storybook/test";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  field: {
    id: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  formData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  handleChange: action("changed"),
};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const nameInput = canvas.getByLabelText(`${args.field.label}:`);
  await userEvent.type(nameInput, "Jane Doe", { delay: 100 });
  await userEvent.tab();
  await expect(nameInput).toHaveValue("Jane Doe");
};
