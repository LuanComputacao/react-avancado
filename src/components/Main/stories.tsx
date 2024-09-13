import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    name: 'Luan Roger'
  }
} as Meta

export const Default: StoryObj = {}

export const Secondary: StoryObj = {
  args: {
    name: 'Luan Roger Santos Santana'
  }
}
