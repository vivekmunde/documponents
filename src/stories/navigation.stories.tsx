import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import * as NavigationComponents from '../components/navigation';

const Test: React.FC = () => {
  return (
    <NavigationComponents.Panel>
      <NavigationComponents.Nav>
        <NavigationComponents.Link href="#">A</NavigationComponents.Link>
        <NavigationComponents.Link href="#">Blockquote</NavigationComponents.Link>
        <NavigationComponents.Link href="#">Code Block</NavigationComponents.Link>
        <NavigationComponents.Link href="#">Code Inline</NavigationComponents.Link>
        <NavigationComponents.Link href="#">Paragraph</NavigationComponents.Link>
        <NavigationComponents.Link className="mb-4" href="#">
          Typography
        </NavigationComponents.Link>
        <NavigationComponents.Section>
          <NavigationComponents.Title>Section</NavigationComponents.Title>
          <NavigationComponents.Link href="#">A</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Blockquote</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Code Block</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Code Inline</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Paragraph</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Typography</NavigationComponents.Link>
        </NavigationComponents.Section>
        <NavigationComponents.Section>
          <NavigationComponents.Title>Section</NavigationComponents.Title>
          <NavigationComponents.Link href="#">A</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Blockquote</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Code Block</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Code Inline</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Paragraph</NavigationComponents.Link>
          <NavigationComponents.Link href="#">Typography</NavigationComponents.Link>
        </NavigationComponents.Section>
      </NavigationComponents.Nav>
    </NavigationComponents.Panel>
  );
};

const meta = {
  title: 'Navigation',
  component: Test,
  tags: ['autodocs'],
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
