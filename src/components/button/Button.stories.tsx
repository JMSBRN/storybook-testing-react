import Button, {ButtonProps} from './Button';
import {StoryFn, Meta} from '@storybook/react';
import {within, userEvent} from '@storybook/test';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        handleClick: {action: 'clicked'},
    }
} as Meta <typeof Button>;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

const TestPlayClickButton = async ({canvasElement}:{ canvasElement: HTMLElement}) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
};

export const Base = Template.bind({});
Base.args = {
    text: 'Button',
    size: 'medium',
    backgroundColor: 'blue',
}
Base.play = TestPlayClickButton;

export const Small = Template.bind({});
Small.args = {
    text: 'Button Small',
    size: 'medium',
    backgroundColor: 'red',
}

Small.play = TestPlayClickButton;
