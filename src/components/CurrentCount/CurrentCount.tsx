import React, { useState } from 'react'
import styled from 'styled-components'

export const CURRENT_COUNT_TEST_ID = 'currentCount'
export const CURRENT_COUNT_DEFAULT = 0
const Container = styled.div`
  height: 20px;
  background-color: green;
`

export const CurrentCount: React.FC = () => {
    const [count, setCount] = useState(CURRENT_COUNT_DEFAULT)
    return (
        <Container data-testid={CURRENT_COUNT_TEST_ID}>Count: {count} <button onClick={() => setCount(count + 1)}>Add</button></Container>
    )
}
