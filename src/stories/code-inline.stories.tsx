import type { Meta, StoryObj } from '@storybook/react';
import CodeInline from '../components/code-inline';

const meta = {
  title: 'CodeInline',
  component: CodeInline,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeInline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `<code>{children}</code>`,
  },
};
