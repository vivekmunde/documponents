import type { Meta, StoryObj } from '@storybook/react';
import CodeBlock from '../components/code-block';

const meta = {
  title: 'CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `<p
  className="mb-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded"
  style={{ overflow: 'auto', maxHeight: '90vh' }}
>
    <code className="whitespace-pre font-mono">
      {children}
    </code>
</p>`,
  },
};
