import React from 'react'
import { render, screen } from '@testing-library/react'
import Page from '../app/signUpPage/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}))

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByText(/Happening Now/i)

    expect(heading).toBeInTheDocument()
  })
})
