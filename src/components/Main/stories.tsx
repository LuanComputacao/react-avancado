import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    name: 'Anonymous'
  }
} as Meta

export const Default: StoryObj = {}

export const Secondary: StoryObj = {
  args: {
    name: 'Anonymous'
  }
}
