import { Button } from '@/components/ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import type { Meta } from '@storybook/react-vite';

import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example/Card',
	component: Card,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		children: { control: 'text' },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CardExample = () => (
	<Card className="w-sm">
		<CardHeader>
			<CardTitle>Card Title</CardTitle>
			<CardDescription>Card Description</CardDescription>
			<CardAction>Card Action</CardAction>
		</CardHeader>
		<CardContent>
			<p>Card Content</p>
		</CardContent>
		<CardFooter>
			<p>Card Footer</p>
		</CardFooter>
	</Card>
);
export const HeaderOnly = () => (
	<Card className="w-[360px]">
		<CardHeader>
			<CardTitle>카드 제목</CardTitle>
			<CardDescription>이건 설명 텍스트입니다</CardDescription>
		</CardHeader>
	</Card>
);

export const WithContent = () => (
	<Card className="w-[360px]">
		<CardContent>
			<p>카드 내용입니다. 이 영역은 주요 정보를 담습니다.</p>
		</CardContent>
	</Card>
);

export const WithFooter = () => (
	<Card className="w-[360px]">
		<CardContent>Card Content</CardContent>
		<CardFooter>
			<Button>확인</Button>
		</CardFooter>
	</Card>
);
