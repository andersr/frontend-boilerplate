import React from 'react'
import { Outlet } from 'react-router-dom'

export const APP_CONTAINER_TEST_ID = 'AppContainer'

export function App() {
  return (
    <div data-testid={APP_CONTAINER_TEST_ID}>
      <div>APP HEADER</div>
      <Outlet />
      <div>APP FOOTER</div>
    </div>
  )
}
