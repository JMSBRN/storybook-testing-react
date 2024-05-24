import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Form, { FormProps } from "./Form";
import { within, userEvent, expect } from '@storybook/test';

export default {
  title: "Components/Form",
  component: Form,
  argTypes: { onSubmit: { action: "submitted" } },
} as Meta;

const Template: StoryFn<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByLabelText(/name/i), 'Jane Doe', { delay: 100 });
  await userEvent.tab();
  await userEvent.type(canvas.getByLabelText(/email/i), 'jane.doe@example.com', { delay: 100 });
  await userEvent.tab();
  await userEvent.type(canvas.getByLabelText(/password/i), 'securepassword', { delay: 100 });
  await userEvent.tab();
  await userEvent.type(canvas.getByLabelText(/confirm/i), 'securepassword', { delay: 100 });
  await userEvent.tab();
  await userEvent.click(canvas.getByRole('button', { name: /submit/i }));
  await expect(args.onSubmit).toHaveBeenCalled();
  await expect(args.onSubmit).toHaveBeenCalledWith({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    password: 'securepassword',
    confirmPassword: 'securepassword',
  });
};


Default.args = {
  onSubmit: action("Form Submission"),
};
