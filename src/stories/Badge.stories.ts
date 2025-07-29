import { Badge } from '@/components/ui/badge';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example/Badge',
	component: Badge,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		children: { control: 'text' },
		variant: {
			control: 'select',
			options: ['default', 'destructive', 'outline', 'secondary'],
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		children: 'Primary',
		variant: 'default',
	},
};

export const Destructive: Story = {
	args: {
		children: 'Destructive',
		variant: 'destructive',
	},
};

export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Secondary',
		variant: 'secondary',
	},
};
