import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CodeBlock from '../components/code-block';
import CodeInline from '../components/code-inline';
import * as LayoutComponents from '../components/layout';
import * as NavigationComponents from '../components/navigation';
import * as PageComponents from '../components/page';
import Paragraph from '../components/paragraph';

const Test: React.FC = () => {
  return (
    <LayoutComponents.Layout className="lg:pl-[10vw]">
      <LayoutComponents.Left.Panel>
        <LayoutComponents.Left.Header>
          <LayoutComponents.Left.Title>Documponents</LayoutComponents.Left.Title>
        </LayoutComponents.Left.Header>
        <NavigationComponents.Panel>
          <NavigationComponents.Nav>
            <NavigationComponents.Section>
              <NavigationComponents.Title>Section</NavigationComponents.Title>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                A
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Blockquote
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Block
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Inline
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Paragraph
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Typography
              </NavigationComponents.Link>
            </NavigationComponents.Section>
            <NavigationComponents.Section>
              <NavigationComponents.Title>Section</NavigationComponents.Title>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                A
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Blockquote
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Block
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Inline
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Paragraph
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Typography
              </NavigationComponents.Link>
            </NavigationComponents.Section>
            <NavigationComponents.Section>
              <NavigationComponents.Title>Section</NavigationComponents.Title>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                A
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Blockquote
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Block
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Inline
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Paragraph
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Typography
              </NavigationComponents.Link>
            </NavigationComponents.Section>
            <NavigationComponents.Section>
              <NavigationComponents.Title>Section</NavigationComponents.Title>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                A
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Blockquote
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Block
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Inline
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Paragraph
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Typography
              </NavigationComponents.Link>
            </NavigationComponents.Section>
            <NavigationComponents.Section>
              <NavigationComponents.Title>Section</NavigationComponents.Title>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                A
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Blockquote
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Block
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Code Inline
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Paragraph
              </NavigationComponents.Link>
              <NavigationComponents.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Typography
              </NavigationComponents.Link>
            </NavigationComponents.Section>
          </NavigationComponents.Nav>
        </NavigationComponents.Panel>
      </LayoutComponents.Left.Panel>
      <LayoutComponents.Content className="lg:pr-[10vw]">
        <PageComponents.Page>
          <PageComponents.Header>
            <PageComponents.Title>Article Title</PageComponents.Title>
          </PageComponents.Header>
          <PageComponents.Content>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?
            </Paragraph>
            <CodeBlock>
              {`<p
  className="mb-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded"
  style={{ overflow: 'auto', maxHeight: '90vh' }}
>
    <code className="whitespace-pre font-mono">
      {children}
    </code>
</p>`}
            </CodeBlock>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
            <Paragraph>
              <CodeInline>{`<code className="whitespace-pre font-mono">{children}</code>`}</CodeInline>
            </Paragraph>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?
            </Paragraph>
            <CodeBlock>{`<blockquote
  className={\`p-4 bg-primary-50 rounded mt-4 mb-4 \${className ?? ''}\`}
  {...props}
>
  <strong className="font-medium">
    {children}
  </strong>
</blockquote>`}</CodeBlock>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?
            </Paragraph>
            <CodeBlock>{`<A
  onClick={(e) => {
    publish(toggleLeft, false);
    if (onClick) {
      onClick(e);
    }
  }}
  {...props}
/>`}</CodeBlock>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?
            </Paragraph>
          </PageComponents.Content>
        </PageComponents.Page>
      </LayoutComponents.Content>
    </LayoutComponents.Layout>
  );
};

const meta = {
  title: 'Layout',
  component: Test,
  tags: ['autodocs'],
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
