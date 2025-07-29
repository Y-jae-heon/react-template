import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckCircle2Icon } from 'lucide-react';

const meta: Meta<typeof Alert> = {
	title: 'Example/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'destructive'],
		},
	},
};

export default meta;

// ✅ Custom 타입 선언
type CustomArgs = {
	title: string;
	description: string;
	variant?: 'default' | 'destructive';
	backgroundColor: string;
	icon: boolean;
};

// ✅ CustomArgs를 쓰는 StoryObj
export const CustomAlert: StoryObj<CustomArgs> = {
	args: {
		title: 'Alert Title',
		description: 'Alert description',
		variant: 'default',
		backgroundColor: 'bg-white',
	},
	argTypes: {
		backgroundColor: {
			control: 'select',
			options: [
				'bg-white',
				'bg-red-500',
				'bg-blue-500',
				'bg-green-500',
				'bg-yellow-500',
				'bg-purple-500',
				'bg-pink-500',
				'bg-orange-500',
				'bg-gray-500',
				'bg-black',
			],
		},
		icon: {
			control: 'boolean',
		},
	},
	render: ({ title, description, variant, backgroundColor, icon }) => (
		<Alert variant={variant} className={cn(backgroundColor)}>
			{icon && <CheckCircle2Icon />}
			{title && <AlertTitle>{title}</AlertTitle>}
			{description && <AlertDescription>{description}</AlertDescription>}
		</Alert>
	),
};
