import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import A from '../components/a';
import H1 from '../components/h1';
import H2 from '../components/h2';
import H3 from '../components/h3';
import H4 from '../components/h4';
import H5 from '../components/h5';
import Paragraph from '../components/paragraph';

const Test: React.FC = () => {
  return (
    <div>
      <H1>Header H1</H1>
      <H2>Header H2</H2>
      <H3>Header H3</H3>
      <H4>Header H4</H4>
      <H5>Header H5</H5>
      <Paragraph>
        <strong>Paragraph</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </Paragraph>
      <div>
        <A href="https://react.dev/">React JS</A>
      </div>
      <div>
        <A href="https://react.dev/" target="_blank">
          React JS (External)
        </A>
      </div>
    </div>
  );
};

const meta = {
  title: 'Typography',
  component: Test,
  tags: ['autodocs'],
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
