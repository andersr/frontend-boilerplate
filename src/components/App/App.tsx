import React from 'react'

export const APP_CONTAINER_TEST_ID = 'AppContainer'

export function App () {
  console.log('test with failure')
  return (
    <div data-testid={APP_CONTAINER_TEST_ID}>App component</div>
  )
}
