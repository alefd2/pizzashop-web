import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import { NavLink } from './navlink'

describe('navlink', () => {
  it('should higthlight the nav when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('About').dataset.current).toEqual('true')
  })
})
