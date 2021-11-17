import '../../styles/global.css'

import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const APP_CONTAINER_TEST_ID = 'AppContainer'

const FOO = 'bar'

const Container = styled.div.attrs(() => ({
  'data-testid': APP_CONTAINER_TEST_ID
}))`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.div`
  flex: 1;
`

export function App() {
  return (
    <Container>
      <div>APP HEADER</div>
      <MainContent>
        <Outlet />
      </MainContent>
      <div>APP FOOTER</div>
    </Container>
  )
}
