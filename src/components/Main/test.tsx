import React from 'react' // <-- Add this line
import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render the component
    const { container } = render(<Main name="LuanComputacao" />)
    // find the heading element
    expect(
      screen.getByRole('heading', { name: /luancomputacao/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

it('should render the colors correctly', () => {
  // render the component
  const { container } = render(<Main name="Some name" />)
  // find the heading element
  expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
})
