import { Input } from '@/components/ui/input';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Input> = {
	title: 'Atom/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

// Custom 타입 선언
// type CustomArgs = {
// 	title: string;
// 	description: string;
// 	variant?: 'default' | 'destructive';
// 	backgroundColor: string;
// 	icon: boolean;
// };

export const Default: StoryObj<typeof Input> = {
	args: {
		placeholder: 'PlaceHolder',
	},
};

export const NumberInput: StoryObj<typeof Input> = {
	args: {
		placeholder: 'Number',
		type: 'number',
	},
};

export const PasswordInput: StoryObj<typeof Input> = {
	args: {
		placeholder: 'Password',
		type: 'password',
	},
};

export const SearchInput: StoryObj<typeof Input> = {
	args: {
		placeholder: 'Search',
		type: 'search',
	},
};

export const DisabledInput: StoryObj<typeof Input> = {
	args: {
		placeholder: 'Disabled',
		disabled: true,
	},
};

export const ErrorInput: StoryObj<typeof Input> = {
	args: {
		className: 'border-destructive',
	},
};
