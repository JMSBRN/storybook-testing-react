import Stack, {StackProps} from './Stack';
import {StoryFn, Meta} from '@storybook/react';

export default {
    title: 'Components/Stack',
    component: Stack,
    argTypes: {
        numberOfChildren: {type: 'number', defaultValue: 5},
    }
} as Meta<typeof Stack>;

const Template: StoryFn<StackProps & {numberOfChildren: number}> = ({numberOfChildren, ...args}) => 


<Stack {...args} >
    {[...Array(numberOfChildren).keys()].map((_, index) => <div>Children{index + 1}</div>)}
</Stack>;

export const Horizontal = Template.bind({});
Horizontal.args = {
    numberOfChildren: 5,
    direction: 'row',
    spacing: 1,
    wrap: true,
}

export const Vertical = Template.bind({});
Vertical.args = {
    numberOfChildren: 5,
    direction: 'column',
    spacing: 5,
    wrap: false,
}
