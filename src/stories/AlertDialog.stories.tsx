import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof AlertDialog> = {
	title: 'Example/AlertDialog',
	component: AlertDialog,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

// Custom 타입 선언
type CustomArgs = {
	title: string;
	description: string;
	variant?: 'default' | 'destructive';
	backgroundColor: string;
	icon: boolean;
};

export const CustomAlert: StoryObj<CustomArgs> = {
	args: {
		title: 'Alert Title',
		description: 'Alert description',
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
	},
	render: ({ title, description, backgroundColor }) => (
		<AlertDialog>
			<AlertDialogTrigger>
				<Button>Show Dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className={cn(backgroundColor)}>
				<AlertDialogHeader>
					{title && <AlertDialogTitle>{title}</AlertDialogTitle>}
					{description && (
						<AlertDialogDescription>{description}</AlertDialogDescription>
					)}
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Action</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
};
