import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { OrderStatus } from './order-status'

describe('Order status', () => {
  it('should display the right text when order status pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)
    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)
    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text when order status delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)
    const statusText = wrapper.getByText('Em entrega')
    const badgeElement = wrapper.getByTestId('badge')
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)
    const statusText = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)
    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
