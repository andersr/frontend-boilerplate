import { render, screen } from '@testing-library/react'
import React from 'react'

import {
  CURRENT_COUNT_DEFAULT,
  CURRENT_COUNT_TEST_ID,
  CurrentCount
} from './CurrentCount'

describe('CurrentCount', () => {
  it('defaults to 0', () => {
    render(<CurrentCount />)

    const el = screen.getByTestId(CURRENT_COUNT_TEST_ID)
    expect(el).toHaveTextContent(CURRENT_COUNT_DEFAULT.toString())
  })
})
