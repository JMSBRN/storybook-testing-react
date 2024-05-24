import Button, {ButtonProps} from './Button';
import {StoryFn, Meta} from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        handleClick: {action: 'clicked'},
    }
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
    text: 'Button',
    size: 'medium',
    backgroundColor: 'blue',
}

export const Small = Template.bind({});
Small.args = {
    text: 'Button Small',
    size: 'medium',
    backgroundColor: 'red',
}