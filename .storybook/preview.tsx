import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import Root from '../src/components/root';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'Light', value: '#fff' },
        { name: 'Dark', value: '#000' },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const backgroundColor = context.globals?.backgrounds?.value;
      useEffect(() => {
        if (document.documentElement) {
          const classNames = (document.documentElement.className ?? '')
            .split(' ')
            .filter((it) => it !== 'dark' && it !== 'light');
          classNames.push(backgroundColor === '#000' ? 'dark' : 'light');
          document.documentElement.className = classNames.filter(Boolean).join(' ');
        }
      }, [backgroundColor]);

      return (
        <Root>
          <Story />
        </Root>
      );
    },
  ],
};

export default preview;
