// @ts-ignore
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { MeshProvider} from "@meshsdk/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  decorators: [
    (Story) => (
        <MeshProvider>
          <Story />
        </MeshProvider>
    )
  ],
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export default meta;
