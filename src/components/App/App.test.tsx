import { render, screen } from '@testing-library/react'
import React from 'react'

import { App, APP_CONTAINER_TEST_ID } from './App'

describe('App', () => {
  it('loads', () => {
    render(<App />)

    const AppContainer = screen.getByTestId(APP_CONTAINER_TEST_ID)
    expect(AppContainer).toBeDefined()
  })
})
